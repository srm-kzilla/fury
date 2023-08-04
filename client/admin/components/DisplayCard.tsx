import { Drawer } from "vaul";
import ques from "@/mock-data/quesans";
interface PersonType {
  id: number;
  name: string;
  regno: string;
  year: number;
  dept: string;
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
      className="shadow-card-shadow font-body w-full bg-kz-lt-grey hover:scale-105 rounded-md mt-5"
    >
      <Drawer.Root shouldScaleBackground>
        <div className="flex flex-col text-xs items-center md:justify-around md:flex-row  md:text-sm">
          <div className="text-kz-white m-2">{person.id}</div>
          <Drawer.Trigger>
            <div className="text-kz-white m-2">{person.name}</div>
          </Drawer.Trigger>
          <div className="text-kz-white m-2">{person.regno}</div>
          <div className="text-kz-white m-2">{person.dept}</div>
          <div className="text-kz-white m-2">{person.email}</div>
          <div className="text-kz-white m-2">{person.contact}</div>
          <button>
            <div className="w-3 h-3 mb-2 rounded-full border border-kz-grey md:mb-0" />
          </button>
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
