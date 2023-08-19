import DisplayCard from "@/components/DisplayCard";
import Head from "next/head";
import { Applicant } from "@/services/api";
import { env } from "process";
import names from "@/mock-data/names.json";
interface ApplicantProps {
  names: Applicant[];
}

export function Dashboard({ names }: ApplicantProps) {
  console.log(names);
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
        {names.map((person: Applicant) => (
          <div key={person._id}>
            <DisplayCard {...person} />
          </div>
        ))}
      </div>
    </div>
  );
}

export const API = {
  BASE_URL: env.NEXT_PUBLIC_API_URL,
  TOKEN: env.API_BEARER_TOKEN,
  USERS: () => "/applications",
  ENDPOINTS: {
    DOMAINS: {
      TECHNICAL: () => "/technical",
      EVENTS: () => "/events",
      CORPORATE: () => "/corporate",
      EDITORIAL: () => "/editorial",
    },
  },
};

export async function getServerSideProps() {
  console.log(API.TOKEN);
  const response = await fetch(
    API.BASE_URL + API.USERS() + API.ENDPOINTS.DOMAINS.TECHNICAL(),
    {
      headers: {
        Authorization: `Bearer ${API.TOKEN}`,
      },
    }
  );
  const data: Applicant[] = await response.json();
  return {
    props: {
      names,
    },
  };
}

export default Dashboard;
