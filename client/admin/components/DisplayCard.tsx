import { Applicant } from "@/services/api";
import { Drawer } from "vaul";
import questions from "../pages/api/questions.json";
import nookies from "nookies";
import { all } from "axios";

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
}: Applicant) => {
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
        console.log("Review updated successfully");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      key={_id}
      className="shadow-card-shadow font-body w-full py-6 bg-kz-lt-grey rounded-md mt-5"
    >
      <Drawer.Root>
        <div className="flex flex-row justify-evenly items-center text-xs text-kz-white md:text-lg">
          <div className="text-kz-white font-extrabold"># 1</div>
          <Drawer.Trigger>
            <div className="hover:text-kz-orange">{name}</div>
          </Drawer.Trigger>
          <div>{regNo}</div>
          <div>{branch}</div>
          <div className="hidden md:block">{email}</div>
          <div className="hidden md:block">{contact}</div>
          <button>
            <div
              className={`w-3 h-3 rounded-full border border-kz-grey ${
                application[0].status === "pending"
                  ? ` bg-green-400`
                  : ` bg-red-600`
              } `}
            />
          </button>
        </div>

        <Drawer.Portal>
          <Drawer.Overlay className="fixed bg-kz-lt-grey" />
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
                              if (application.domain === "technical") {
                                allquestions = questions.technical;
                              } else if (application.domain === "events") {
                                allquestions = questions.events;
                              } else if (application.domain === "photography") {
                                allquestions = questions.photography;
                              } else if (
                                application.domain === "content_writing"
                              ) {
                                allquestions = questions.content_writing;
                              } else if (application.domain === "gfx") {
                                allquestions = questions.gfx;
                              } else if (application.domain === "vfx") {
                                allquestions = questions.vfx;
                              } else if (application.domain === "corporate") {
                                allquestions = questions.corporate;
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
                      handleReview("pending");
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
