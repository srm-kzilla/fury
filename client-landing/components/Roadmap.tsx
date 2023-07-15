import { Montserrat } from "next/font/google";
import ImageComponent from "./ImageComponent";
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ["latin"],
});

const Roadmap = () => {
  return (
    <div
      className={` flex flex-col items-center py-10 ${montserrat.className}`}
    >
      <div className=" font-semibold text-3xl">Become a SRMKZILLian</div>
      <div className="hidden sm:block">
        <div className=" w-full px-1 lg:px-24 pt-10 flex justify-center">
          <div className=" translate-y-32">
            <ImageComponent
              title="APPLY"
              image="/Apply.svg"
              description="Fly over to the dashboard, give us your deets, and your journey to be a part of an Avengers-esque team begins."
            />
          </div>
          <div className=" relative w-28 h-20 translate-y-56">
            <Image src="/Path.svg" alt="path" fill />
          </div>
          <div>
            <ImageComponent
              title="ANSWER"
              image="/Answer.svg"
              description="Answer the questions curated with Louvre-level care. You'll have a week to answer the questions which will be sent to you by email."
            />
          </div>
          <div className=" relative w-36 h-14 translate-y-48">
            <Image src="/Pathdown.svg" alt="path" fill />
          </div>
          <div className=" translate-y-24">
            <ImageComponent
              title="INTERVIEW"
              image="/Interview.svg"
              description="Consider us your therapists, and pour your heart out. We won't mind. Plus, we’re very fun to talk to!"
            />
          </div>
          <div className=" relative w-28 h-20 translate-y-40">
            <Image src="/Path.svg" alt="path" fill />
          </div>
          <div>
            <ImageComponent
              title="WELCOME"
              image="/Welcome.svg"
              description="So the pep talk in the mirror worked, huh? Give yourself a high-five and welcome to the Beyoncé of campus clubs!          "
            />
          </div>
        </div>
      </div>
      <div className="block sm:hidden">
        <div className=" flex flex-col items-center mt-6">
          <div className="">
            <ImageComponent
              title="APPLY"
              image="/Apply.svg"
              description="Fly over to the dashboard, give us your deets, and your journey to be a part of an Avengers-esque team begins."
            />
          </div>
          <div className=" relative w-28 h-20 -scale-x-100 ">
            <Image src="/Path.svg" alt="path" fill />
          </div>
          <div>
            <ImageComponent
              title="ANSWER"
              image="/Answer.svg"
              description="Answer the questions curated with Louvre-level care. You'll have a week to answer the questions which will be sent to you by email."
              reverse={true}
            />
          </div>
          <div className=" relative w-28 h-20 ">
            <Image src="/Path.svg" alt="path" fill />
          </div>
          <div className="">
            <ImageComponent
              title="INTERVIEW"
              image="/Interview.svg"
              description="Consider us your therapists, and pour your heart out. We won't mind. Plus, we’re very fun to talk to!"
            />
          </div>
          <div className=" relative w-28 h-20 -scale-x-100 ">
            <Image src="/Path.svg" alt="path" fill />
          </div>
          <div>
            <ImageComponent
              title="WELCOME"
              image="/Welcome.svg"
              description="So the pep talk in the mirror worked, huh? Give yourself a high-five and welcome to the Beyoncé of campus clubs!"
              reverse={true}
            />
          </div>
        </div>
      </div>
      <div className=" mt-16 sm:mt-48 font-semibold rounded-3xl border-2 px-8 py-1 w-fit">
        Get Started
      </div>
    </div>
  );
};

export default Roadmap;
