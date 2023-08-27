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
  resume,
  socials,
  application,
  index,
}: Applicant & { index: number }) => {
  const [domainApplication] = application;
  const [status, setStatus] = useState(domainApplication.status);

  if (email === "mm5481@srmist.edu.in")
    console.log({ domainApplication, socials, resume });
  const handleReview = async (review: "accepted" | "rejected" | "pending") => {
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
          : review === "pending"
          ? toast.pending("Pending")
          : toast.error("Rejected");
      }
    } catch (err) {
      toast.error("Something went wrong");
      console.log(err);
    }
  };

  const handleCopy = (text: string, info: string, icon: string) => {
    navigator.clipboard.writeText(text);
    toast.show(`Copied ${info}: ${text}`, icon);
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
          <button
            className="hidden md:block w-[12vw] text-left hover:cursor-copy"
            onClick={() => {
              handleCopy(email, "email", "📧");
            }}
          >
            {email}
          </button>
          <button
            className="hidden md:block w-[10vw] text-left hover:cursor-copy"
            onClick={() => {
              handleCopy(contact, "phone number", "📞");
            }}
          >
            {contact}
          </button>
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
            <div className="w-screen overflow-auto px-10 p-5 rounded-t-3xl bg-kz-lt-grey text-kz-white">
              <div className="mx-auto w-12 h-1.5 rounded-full bg-kz-orange mb-8" />
              <div className="mx-32">
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
                    {socials.linkedIn && (
                      <a href={socials.linkedIn} target="_blank">
                        <LinkedinIcon color="#ff644e" size={30} />
                      </a>
                    )}
                    {socials.portfolio && (
                      <a href={socials.portfolio} target="_blank">
                        <Globe color="#ff644e" size={30} />
                      </a>
                    )}
                    {resume && (
                      <a href={resume} target="_blank">
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
                    <button
                      className="text-kz-black font-bold rounded-lg px-2 my-1 bg-kz-yellow"
                      onClick={async () => {
                        await handleReview("pending");
                      }}
                    >
                      Mark as Pending
                    </button>
                  </div>
                </div>
                <div className="my-10">
                  <div key={index}>
                    <h3 className="flex justify-between">
                      <div className=" font-bold">
                        Domain: {domainApplication.domain}
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
                      {domainApplication.questions &&
                        domainApplication.questions.map(({ answer }, index) => (
                          <li key={index} className="mt-2">
                            <div className="flex flex-row gap-2">
                              Q.{" "}
                              <span>
                                {selectedDomainQuestions?.questions[index]}
                              </span>
                            </div>
                            <div className="bg-kz-black mt-2 px-6 py-7 select-text rounded-2xl text-xl font-bold flex flex-row gap-2">
                              {answer}
                            </div>
                          </li>
                        ))}
                    </ul>
                  </div>
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
