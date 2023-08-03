import data from "@/mock-data/names.json";
import DisplayCard from "@/components/DisplayCard";
import Head from "next/head";

export function Dashboard() {
  return (
    <div className="min-h-screen w-screen bg-kz-grey p-5 ">
      <Head>
        <title>Admin Dashboard</title>
      </Head>
      <div>
        <h1 className="text-kz-orange font-body font-bold text-3xl">
          Dashboard
        </h1>
        <hr className="text-kz-orange" />
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-flow-row gap-4">
        {data.map((person) => (
          <div key={person.id}>
            <DisplayCard {...person} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;
