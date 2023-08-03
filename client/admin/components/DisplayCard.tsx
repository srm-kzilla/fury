import { Drawer } from "vaul";
import ques from "@/mock-data/quesans";
interface PersonType {
  id: number;
  name: string;
  regno: string;
  year: number;
  email: string;
  gender: string;
  contact: number;
  socials: {
    github: string;
    linkedin: string;
    portfolio: string;
  };
}
const DisplayCard = ({ ...person }: PersonType) => {
  return (
    <div
      key={person.id}
      className="flex flex-col shadow-card-shadow font-body w-full bg-kz-lt-grey hover:scale-105 rounded-md mt-5"
    >
      <Drawer.Root shouldScaleBackground>
        <div className="flex flex-row items-end">
          <div>
            <h1 className="text-kz-white m-2 text-sm">
              <span className="font-bold">Name</span>: {person.name}
            </h1>
            <h1 className="text-kz-white m-2 text-sm">
              <span className="font-bold">Reg No</span>: {person.regno}
            </h1>
            <h1 className="text-kz-white m-2 text-sm">
              <span className="font-bold">Year</span>: {person.year}
            </h1>
          </div>

          <div className="relative left-1/4">
            <Drawer.Trigger asChild>
              <button className="text-kz-orange text-xs hover:text-sm">
                Read More...
              </button>
            </Drawer.Trigger>
          </div>
        </div>

        <Drawer.Portal>
          <Drawer.Overlay className="fixed bg-kz-lt-grey" />
          <Drawer.Content className="bg-kz-grey flex flex-col fixed max-h-[85vh] mt-24 bottom-0 left-0 right-0">
            <div className="w-full overflow-auto p-4 rounded-t-3xl bg-kz-lt-grey text-kz-white">
              <div className="mx-auto w-12 h-1.5 rounded-full bg-kz-orange mb-8" />
              <div className="max-w-md mx-auto">
                <Drawer.Title className="font-semibold text-xl mb-4">
                  {person.name}
                  <hr className="text-kz-orange mt-2" />
                </Drawer.Title>
                <p className="mb-2">
                  <span className="font-bold">GitHub</span> :{" "}
                  {person.socials.github}
                  <br />
                  <span className="font-bold">Linkedin</span> :{" "}
                  {person.socials.linkedin}
                  <br />
                  <span className="font-bold">Portfolio</span> :{" "}
                  {person.socials.portfolio}
                  <hr className="mt-2 text-kz-orange" />
                </p>
                <div>
                  <h1 className="my-2 font-bold">
                    The answers to questions you asked
                  </h1>
                  {ques.map((question, index) => (
                    <div key={index} className="my-5">
                      Q.{index + 1} {question.question}
                      <br />
                      A. {question.answer}
                    </div>
                  ))}
                </div>
                <div className="flex flex-row justify-between">
                  <button className="text-[#C51605] text-xs hover:text-sm hover:border hover:border-[#C51605] px-2 rounded-full">
                    Reject
                  </button>
                  <button className="text-[#7A9D54] text-xs hover:text-sm hover:border hover:border-[#7A9D54] px-2 rounded-full">
                    Call to Interview
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
