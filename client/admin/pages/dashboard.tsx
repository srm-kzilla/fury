import DisplayCard from "@/components/DisplayCard";
import Head from "next/head";
import { Applicant } from "@/services/api";
import nookies from "nookies";
import { GetServerSidePropsContext } from "next";
interface ApplicantProps {
  data: Applicant[];
}

export function Dashboard({ data }: ApplicantProps) {
  return (
    <div className="min-h-screen w-screen bg-kz-grey p-5">
      <Head>
        <title>Admin Dashboard</title>
      </Head>
      <div>
        <h1 className="text-kz-orange font-body font-bold text-3xl md:text-5xl">
          Dashboard
        </h1>
        <hr className="text-kz-orange" />
      </div>
      <div className="flex flex-col m-1">
        {data.map((person: Applicant) => (
          <div key={person._id}>
            <DisplayCard {...person} />
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const token = nookies.get(context).token;
  const response = await fetch(`${process.env.API_URL}/applications`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data: Applicant[] = await response.json();
  return {
    props: {
      data,
    },
  };
}

export default Dashboard;
