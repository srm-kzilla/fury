import DisplayCard from "@/components/DisplayCard";
import Head from "next/head";
import { Applicant } from "@/types";
import nookies from "nookies";
import jwt_decode from "jwt-decode";
import { useRouter } from "next/router";
import type { GetServerSidePropsContext } from "next";

interface ApplicantProps {
  applications: Applicant[];
  email: string;
}

export function Index({ applications, email }: ApplicantProps) {
  const router = useRouter();

  const handleLogout = async () => {
    nookies.destroy(null, "token");
    await router.push("/");
  };

  return (
    <>
      <Head>
        <title>Admin | Dashboard</title>
        <link rel="icon" href="/SRMKZILLALogo.svg" />
      </Head>
      <div className="my-10">
        <div className="flex w-[70vw] mx-auto my-12 justify-between items-center">
          <h1 className="text-kz-orange font-body font-bold text-xl">Fury</h1>
          <div className="flex flex-col gap-3">
            <button
              className="btn text-white bg-kz-orange w-fit self-end"
              onClick={handleLogout}
            >
              Logout
            </button>
            <div className="text-lg">Logged in as <span className="text-kz-orange font-bold">{email}</span></div>
          </div>
        </div>
        <div className="flex flex-col w-[70vw] mx-auto">
          {applications.map((application: Applicant, index) => (
            <DisplayCard key={index} {...application} index={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { token } = nookies.get(context);

  if (!token) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }

  const { iss: email }: { iss: string } = jwt_decode(token);

  const response = await fetch(`${process.env.API_URL}/applications`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const applications: Applicant[] = await response.json();

  return {
    props: {
      applications,
      email
    },
  };
}

export default Index;
