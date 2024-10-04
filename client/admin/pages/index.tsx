import DisplayCard from "@/components/DisplayCard";
import Head from "next/head";
import type { Applicant } from "@/types";
import nookies from "nookies";
import jwt_decode from "jwt-decode";
import { useRouter } from "next/router";
import type { GetServerSidePropsContext } from "next";
import { useState } from "react";

interface ApplicantProps {
  applications: Applicant[];
  email: string;
}

export function Index({ applications, email }: ApplicantProps) {
  const router = useRouter();
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const handleLogout = async () => {
    nookies.destroy(null, "token");
    await router.push("/");
  };

  const totalApplications = applications.length;
  const acceptedApplications = applications.filter((app) =>
    app.application.some((a) => a.status === "accepted"),
  ).length;
  const rejectedApplications = applications.filter((app) =>
    app.application.some((a) => a.status === "rejected"),
  ).length;

  const pendingApplications = applications.filter((app) =>
    app.application.some((a) => a.status === "pending"),
  ).length;

  const filteredApplications = applications.filter((app) => {
    if (filter !== "all" && !app.application.some((a) => a.status === filter)) {
      return false;
    }

    if (searchTerm) {
      const lowerSearchTerm = searchTerm.toLowerCase();
      return (
        app.name.toLowerCase().includes(lowerSearchTerm) ||
        app.email.toLowerCase().includes(lowerSearchTerm) ||
        app.regNo.toLowerCase().includes(lowerSearchTerm) ||
        app.application.some((a) =>
          a.questions.some((q) =>
            q.answer.toLowerCase().includes(lowerSearchTerm),
          ),
        )
      );
    }

    return true;
  });

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
              type="button"
            >
              Logout
            </button>
            <div className="text-lg">
              Logged in as{" "}
              <span className="text-kz-orange font-bold">{email}</span>
            </div>
          </div>
        </div>
        <div className="flex justify-around w-[70vw] mx-auto mb-8 items-center">
          <div className="text-center">
            <h2 className="font-bold">Total Applications</h2>
            <p>{totalApplications}</p>
          </div>
          <div className="text-center">
            <h2 className="font-bold">Accepted</h2>
            <p>{acceptedApplications}</p>
          </div>
          <div className="text-center">
            <h2 className="font-bold">Rejected</h2>
            <p>{rejectedApplications}</p>
          </div>
          <div className="text-center">
            <h2 className="font-bold">Pending</h2>
            <p>{pendingApplications}</p>
          </div>
        </div>
        <div className="flex justify-around w-[70vw] mx-auto mb-8 items-center">
          <select
            className="select select-bordered w-full max-w-xs bg-inherit border-2 border-white/50 rounded-md"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="accepted">Accepted</option>
            <option value="rejected">Rejected</option>
            <option value="pending">Pending</option>
          </select>
          <input
            type="text"
            placeholder="Search by names / email / answers..."
            className="input input-bordered w-full max-w-xs bg-inherit border-2 border-white/50 rounded-md pl-2 "
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-[70vw] mx-auto">
          {filteredApplications.map((application: Applicant, index) => (
            <DisplayCard
              key={application._id || index}
              {...application}
              index={index}
            />
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
      email,
    },
  };
}

export default Index;
