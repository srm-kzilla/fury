import { useState } from "react";
import { Drawer } from "vaul";
import nookies from "nookies";
import toast from "@/utils/toast";
import { GithubIcon, Globe, LinkedinIcon, StickyNoteIcon } from "lucide-react";
import questions from "@/pages/api/questions.json";
import type { Applicant } from "@/types";

const DisplayCard = ({
  name,
  regNo,
  email,
  contact,
  socials,
  application,
  index,
}: Applicant & { index: number }) => {
  const [status, setStatus] = useState(application[0].status);

  const handleReview = async (review: "accepted" | "rejected") => {
    const { token } = nookies.get();

    const data = {
      regNo: regNo,
      status: review,
    };

    try {
      const response = await fetch("/api/review", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      if (response.status === 200) {
        setStatus(review);
        review === "accepted"
          ? toast.success("Accepted")
          : toast.error("Rejected");
      }
    } catch (err) {
      toast.error("Something went wrong");
      console.log(err);
    }
  };

  const selectedDomainQuestions = questions.find(
    (domain) => domain.domain === application[0].domain
  );

  if (!selectedDomainQuestions) {
    toast.error("Failed to load questions");
  }

  return (
    <div className="font-body w-full py-6 rounded-md mt-5 bg-kz-grey">
      <Drawer.Root>
        <div className="flex flex-row bg-kz-grey justify-around items-center text-xs md:text-lg">
          <Drawer.Trigger>
            <div className="hover:text-kz-orange w-[25vw] truncate text-left font-bold">
              <span className="font-normal mr-3">#{index + 1}</span>
              {name}
            </div>
          </Drawer.Trigger>
          <div className="w-[10vw] text-left">{regNo}</div>
          <div className="hidden md:block w-[12vw] text-left">{email}</div>
          <div className="hidden md:block w-[10vw] text-left">{contact}</div>
          <button>
            <div
              className={`w-4 h-4 rounded-full border-2 border-kz-black ${
                status === "accepted"
                  ? "bg-kz-green"
                  : status === "rejected"
                  ? "bg-kz-red"
                  : "bg-kz-yellow"
              }`}
            />
          </button>
        </div>

        <Drawer.Portal>
          <Drawer.Overlay className="fixed bg-kz-black" />
          <Drawer.Content className="bg-kz-grey rounded-t-3xl flex flex-col fixed max-h-[85vh] mt-24 bottom-0 left-0 right-0">
            <div className="w-screen overflow-auto md:px-10 p-5 rounded-t-3xl bg-kz-lt-grey text-kz-white">
              <div className="mx-auto w-12 h-1.5 rounded-full bg-kz-orange mb-8" />
              <div className=" mx-10 md:mx-32">
                <Drawer.Title className="font-semibold text-3xl mb-4">
                  {name}
                </Drawer.Title>
                <div className="flex flex-col md:flex-row justify-between">
                  <div className="my-2 flex flex-row gap-5">
                    {socials.github && (
                      <a href={socials.github} target="_blank">
                        <GithubIcon color="#ff644e" size={30} />
                      </a>
                    )}
                    {socials.linkedin && (
                      <a href={socials.linkedin} target="_blank">
                        <LinkedinIcon color="#ff644e" size={30} />
                      </a>
                    )}
                    {socials.portfolio && (
                      <a href={socials.portfolio} target="_blank">
                        <Globe color="#ff644e" size={30} />
                      </a>
                    )}
                    {socials.resume && (
                      <a href={socials.resume} target="_blank">
                        <StickyNoteIcon color="#ff644e" size={30} />
                      </a>
                    )}
                  </div>
                  <div className="flex flex-row gap-4">
                    <button
                      className="text-kz-black bg-kz-red font-bold rounded-lg px-3 py-1 md:px-2 my-1"
                      onClick={async () => {
                        await handleReview("rejected");
                      }}
                    >
                      Reject
                    </button>
                    <button
                      className="text-kz-black font-bold rounded-lg px-2 my-1 bg-kz-green"
                      onClick={async () => {
                        await handleReview("accepted");
                      }}
                    >
                      Call for Interview
                    </button>
                  </div>
                </div>
                <div className="my-10">
                  {application.map((application, index) => (
                    <div key={index}>
                      <h3 className="flex justify-between">
                        <div className=" font-bold">
                          Domain: {application.domain}
                        </div>
                        <div
                          className={`text-kz-black rounded-md px-2 py-0.5 font-bold ${
                            status === "accepted"
                              ? "bg-kz-green"
                              : status === "rejected"
                              ? "bg-kz-red"
                              : "bg-kz-yellow"
                          }`}
                        >
                          Application Status: {status}
                        </div>
                      </h3>
                      <ul className="flex flex-col gap-3 mt-6 text-lg">
                        {application.questions &&
                          application.questions.map(
                            ({ questionNumber, answer }, index) => (
                              <li key={index} className="mt-2">
                                <div>
                                  {selectedDomainQuestions?.questions[index]}
                                </div>
                                <div className="text-2xl font-bold">
                                  {answer}
                                </div>
                              </li>
                            )
                          )}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
};

export default DisplayCard;
