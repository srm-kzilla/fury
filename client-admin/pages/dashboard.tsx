import data from "@/mock-data/names.json";
import DisplayCard from "@/components/DisplayCard";
import Head from "next/head";
import { fetchData } from "@/services/api";
import { PersonType } from "@/services/api";
interface PersonProps {
  data: PersonType[];
}

export function Dashboard({ data }: PersonProps) {
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
        {data.map((person: PersonType) => (
          <div key={person.id}>
            <DisplayCard {...person} />
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const data = await fetchData();
  console.log(data);
  return {
    props: {
      data,
    },
  };
}
export default Dashboard;
