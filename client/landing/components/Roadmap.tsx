import ImageComponent from "./ImageComponent";
import Image from "next/image";
import { motion } from "framer-motion";
const Roadmap = () => {
  return (
    <div className="flex flex-col gap-4 items-center py-10 px-8 font-info">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        }}
        className="font-semibold text-3xl"
      >
        Become a SRMKZILLian
      </motion.div>
      <div className="hidden lg:block lg:scale-75 xl:scale-100">
        <div className="w-full px-1 lg:px-24 pt-10 flex justify-center">
          <motion.div whileHover={{ scale: 1.1, y: 30 }}>
            <ImageComponent
              title="APPLY"
              image="/Apply.svg"
              description="Fly over to the dashboard, give us your deets, and your journey to be a part of an Avengers-esque team begins."
            />
          </motion.div>
          <div className="relative w-28 h-20 translate-y-56">
            <Image src="/Path.svg" alt="path" fill />
          </div>
          <motion.div whileHover={{ scale: 1.1, y: -30 }}>
            <ImageComponent
              title="ANSWER"
              image="/Answer.svg"
              description="Answer the questions curated with Louvre-level care. You'll have a week to answer the questions which will be sent to you by email."
            />
          </motion.div>
          <div className="relative w-36 h-14 translate-y-48">
            <Image src="/Pathdown.svg" alt="path" fill />
          </div>
          <motion.div
            whileHover={{ scale: 1.1, y: 30 }}
            className="translate-y-24"
          >
            <ImageComponent
              title="INTERVIEW"
              image="/Interview.svg"
              description="Consider us your therapists, and pour your heart out. We won't mind. Plus, we’re very fun to talk to!"
            />
          </motion.div>
          <div className="relative w-28 h-20 translate-y-40">
            <Image src="/Path.svg" alt="path" fill />
          </div>
          <motion.div whileHover={{ scale: 1.1, y: -30 }}>
            <ImageComponent
              title="WELCOME"
              image="/Welcome.svg"
              description="So the pep talk in the mirror worked, huh? Give yourself a high-five and welcome to the Beyoncé of campus clubs!          "
            />
          </motion.div>
        </div>
      </div>
      <div className="block lg:hidden">
        <div className="flex flex-col items-center mt-6">
          <motion.div whileHover={{ scale: 1.1, x: 20 }}>
            <ImageComponent
              title="APPLY"
              image="/Apply.svg"
              description="Fly over to the dashboard, give us your deets, and your journey to be a part of an Avengers-esque team begins."
            />
          </motion.div>
          <div className="relative w-28 h-20 md:w-40 md:h-40 -scale-x-100 ">
            <Image src="/Path.svg" alt="path" fill />
          </div>
          <motion.div whileHover={{ scale: 1.1, x: -20 }}>
            <ImageComponent
              title="ANSWER"
              image="/Answer.svg"
              description="Answer the questions curated with Louvre-level care. You'll have a week to answer the questions which will be sent to you by email."
              reverse={true}
            />
          </motion.div>
          <div className="relative w-28 h-20 md:w-40 md:h-40">
            <Image src="/Path.svg" alt="path" fill />
          </div>
          <motion.div whileHover={{ scale: 1.1, x: 20 }}>
            <ImageComponent
              title="INTERVIEW"
              image="/Interview.svg"
              description="Consider us your therapists, and pour your heart out. We won't mind. Plus, we’re very fun to talk to!"
            />
          </motion.div>
          <div className="relative w-28 h-20 md:w-40 md:h-40 -scale-x-100 ">
            <Image src="/Path.svg" alt="path" fill />
          </div>
          <motion.div whileHover={{ scale: 1.1, x: -20 }}>
            <ImageComponent
              title="WELCOME"
              image="/Welcome.svg"
              description="So the pep talk in the mirror worked, huh? Give yourself a high-five and welcome to the Beyoncé of campus clubs!"
              reverse={true}
            />
          </motion.div>
        </div>
      </div>
      <div className="mt-16 sm:mt-48 font-semibold">
          <a href="https://dash.kzilla.xyz" target="_blank">
          <button disabled={false} className="md:px-12 px-4 md:py-2 py-1 rounded-full border-2 hover:bg-highlight hover:border-black hover:text-black font-bold bg-primary border-highlight text-highlight hover:text-recruitments-bg duration-300">
          Get Started
            </button>
          </a>
      </div>
    </div>
  );
};

export default Roadmap;
