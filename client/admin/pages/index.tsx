import DisplayCard from "@/components/DisplayCard";
import Head from "next/head";
import { Applicant } from "@/types";
import nookies from "nookies";
import { useRouter } from "next/router";
import type { GetServerSidePropsContext } from "next";

interface ApplicantProps {
  applications: Applicant[];
}

export function Index({ applications }: ApplicantProps) {
  const router = useRouter();

  const handleLogout = async () => {
    nookies.destroy(null, "token");
    await router.push("/");
  };

  return (
    <>
      <Head>
        <title>Admin Dashboard</title>
      </Head>
      <div className="my-10">
        <div className="flex w-[70vw] mx-auto my-12 justify-between items-center">
          <h1 className="text-kz-orange font-body font-bold text-xl">
            Fury Admin Dashboard
          </h1>
          <button className="btn text-white bg-kz-orange" onClick={handleLogout}>
            Logout
          </button>
        </div>
        <div className="flex flex-col w-[70vw] mx-auto">
          {applications.map((application: Applicant, index) => (
            <DisplayCard key={application.email} {...application} index={index} />
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

  const response = await fetch(`${process.env.API_URL}/applications`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const applications: Applicant[] = await response.json();

  return {
    props: {
      applications,
    },
  };
}

export default Index;
