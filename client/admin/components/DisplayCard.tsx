import { useState } from "react";
import { Drawer } from "vaul";
import questions from "@/pages/api/questions.json";
import nookies from "nookies";
import toast from "react-hot-toast";
import type { Applicant } from "@/types";

const DisplayCard = ({
  _id,
  name,
  regNo,
  year,
  branch,
  email,
  gender,
  contact,
  socials,
  application,
  index,
}: Applicant & { index: number }) => {
  const [status, setStatus] = useState(application[0].status);

  const handleReview = async (review: string) => {
    const token = nookies.get().token;
    const data = {
      regNo: regNo,
      status: review,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/review";
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSONdata,
    };
    try {
      const response = await fetch(endpoint, options);
      const data = await response.json();
      if (response.status === 200) {
        setStatus(review);
        review === "accepted"
          ? toast.success("Accepted")
          : toast.error("Rejected");
      }
    } catch (err) {
      console.log(err);
    }
  };

  let color = "";
  switch (status) {
    case "accepted":
      color = "bg-kz-green";
      break;
    case "rejected":
      color = "bg-kz-red";
      break;
  }

  return (
    <div
      className="font-body w-full py-6 rounded-md mt-5 bg-kz-grey"
    >
      <Drawer.Root>
        <div className="flex flex-row bg-kz-grey justify-around items-center text-xs md:text-lg">
          <Drawer.Trigger>
            <div className="hover:text-kz-orange w-[25vw] truncate text-left font-bold"><span className="font-normal mr-3">#{index + 1}</span>{name}</div>
          </Drawer.Trigger>
          <div className="w-[10vw] text-left">{regNo}</div>
          <div className="hidden md:block w-[12vw] text-left">{email}</div>
          <div className="hidden md:block w-[10vw] text-left">{contact}</div>
          <button>
            <div
              className={`w-4 h-4 rounded-full border-2 border-kz-black ${color}`}
            />
          </button>
        </div>

        <Drawer.Portal>
          <Drawer.Overlay className="fixed bg-kz-black" />
          <Drawer.Content className="bg-kz-grey flex flex-col fixed max-h-[85vh] mt-24 bottom-0 left-0 right-0">
            <div className="w-screen overflow-auto px-10 p-5 rounded-t-3xl  bg-kz-lt-grey text-kz-white">
              <div className="mx-auto w-12 h-1.5 rounded-full bg-kz-orange mb-8" />
              <div className="mx-auto">
                <Drawer.Title className="font-semibold text-xl mb-4">
                  {name}
                  <hr className="text-kz-orange mt-2" />
                </Drawer.Title>
                <div className="mb-2">
                  <span className="font-bold">GitHub</span> : {socials.github}
                  <br />
                  <span className="font-bold">Linkedin</span> :{" "}
                  {socials.linkedin}
                  <br />
                  <span className="font-bold">Portfolio</span> :{" "}
                  {socials.portfolio}
                  <hr className="mt-2 text-kz-orange" />
                </div>
                <div>
                  <h1 className="my-2 font-bold">
                    The answers to questions you asked
                  </h1>
                  {application.map((application, index) => (
                    <div key={index}>
                      <h3 className="flex gap-1">
                        Application Domain:{" "}
                        <div className=" font-bold">{application.domain}</div>
                      </h3>
                      <ul className=" mt-6">
                        {application.questions
                          ? application.questions.map((question, index) => {
                              let allquestions;
                              switch (application.domain) {
                                case "technical":
                                  allquestions = questions.technical;
                                  break;
                                case "events":
                                  allquestions = questions.events;
                                  break;
                                case "photography":
                                  allquestions = questions.photography;
                                  break;
                                case "content_writing":
                                  allquestions = questions.content_writing;
                                  break;
                                case "gfx":
                                  allquestions = questions.gfx;
                                  break;
                                case "vfx":
                                  allquestions = questions.vfx;
                                  break;
                                case "corporate":
                                  allquestions = questions.corporate;
                                  break;
                              }
                              const onequestion = allquestions![index];
                              return (
                                <li
                                  key={question.questionNumber}
                                  className=" mt-2"
                                >
                                  {question.questionNumber}. {onequestion}:
                                  <br /> Ans: {question.answer}
                                </li>
                              );
                            })
                          : null}
                      </ul>
                      <p>Application Status: {application.status}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-row justify-evenly">
                  <button
                    className="text-white text-sm md:text-lg px-3 py-2 bg-kz-red rounded-2xl hover:scale-110 font-medium"
                    onClick={() => {
                      handleReview("rejected");
                    }}
                  >
                    Reject
                  </button>
                  <button
                    className="text-white text-sm md:text-lg px-3 py-2 bg-kz-green rounded-2xl hover:scale-110 font-medium"
                    onClick={() => {
                      handleReview("accepted");
                    }}
                  >
                    Call for Interview
                  </button>
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
