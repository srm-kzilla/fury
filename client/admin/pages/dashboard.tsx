import DisplayCard from "@/components/DisplayCard";
import Head from "next/head";
import { Applicant } from "@/services/api";
import nookies from "nookies";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
interface ApplicantProps {
  data: Applicant[];
}

export function Dashboard({ data }: ApplicantProps) {
  const router = useRouter();
  const handleLogout = () => {
    nookies.destroy(null, "token");
    router.push("/");
  };
  return (
    <div className="w-full bg-kz-grey p-5">
      <Head>
        <title>Admin Dashboard</title>
      </Head>
      <div>
        <div className=" flex justify-between items-center">
          <h1 className="text-kz-orange font-body font-bold text-3xl md:text-5xl">
            Dashboard
          </h1>
          <button className="bg-kz-orange text-white text-lg px-4 py-2 my-2 rounded-2xl md:text-xl" onClick={()=>{handleLogout()}}>
            Logout
          </button>
        </div>
        <hr className="text-kz-orange" />
      </div>
      <div className="flex flex-col">
        {data.map((person: Applicant, index) => (
          <div key={person._id} className=" w-full flex justify-center">
            <DisplayCard {...person} index={index} />
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
