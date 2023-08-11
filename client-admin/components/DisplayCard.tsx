import { Drawer } from "vaul";
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
  application: Application[];
}
interface Application {
  question: string;
  answer: string;
}
const DisplayCard = ({
  id,
  name,
  regno,
  year,
  dept,
  email,
  gender,
  contact,
  socials,
  application,
}: PersonType) => {
  return (
    <div
      key={id}
      className="shadow-card-shadow font-body w-full py-6 bg-kz-lt-grey rounded-md mt-5"
    >
      <Drawer.Root>
        <div className="flex flex-row justify-evenly items-center text-xs text-kz-white md:text-lg">
          <div className="text-kz-white font-extrabold"># {id}</div>
          <Drawer.Trigger>
            <div className="hover:text-kz-orange">{name}</div>
          </Drawer.Trigger>
          <div>{regno}</div>
          <div>{dept}</div>
          <div className="hidden md:block">{email}</div>
          <div className="hidden md:block">{contact}</div>
          <button>
            <div className="w-3 h-3 rounded-full border border-kz-grey" />
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
                <p className="mb-2">
                  <span className="font-bold">GitHub</span> : {socials.github}
                  <br />
                  <span className="font-bold">Linkedin</span> :{" "}
                  {socials.linkedin}
                  <br />
                  <span className="font-bold">Portfolio</span> :{" "}
                  {socials.portfolio}
                  <hr className="mt-2 text-kz-orange" />
                </p>
                <div>
                  <h1 className="my-2 font-bold">
                    The answers to questions you asked
                  </h1>
                  {application.map((question, index) => (
                    <div key={index} className="my-5">
                      Q.{index + 1} {question.question}
                      <br />
                      A. {question.answer}
                    </div>
                  ))}
                </div>
                <div className="flex flex-row justify-evenly">
                  <button className="text-kz-red text-sm border border-kz-red px-3 hover:text-sm hover:text-white hover:bg-kz-red rounded-full">
                    Reject
                  </button>
                  <button className="text-kz-green text-sm border border-kz-green px-3 hover:text-sm hover:text-white hover:bg-kz-green  rounded-full">
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
