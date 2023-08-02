import LifeDesc from "./LifeDesc";
import { motion } from "framer-motion";
export default function Life() {
  return (
    <div className="flex flex-col gap-3 px-8 py-24 xl:px-48">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        }}
      >

      <h1 className="md:text-4xl text-3xl font-semibold">LIFE @ SRMKZILLA</h1>
      <div className=" flex flex-col gap-24 py-8">
        <LifeDesc
          text="Bustling with tech geniuses, Picassos, and philosophers, SRMKZILLA is a paradise for people with an unquenchable thirst to create. Here, you get to be unapologetically you, while still being a part of something bigger than yourself. So, it is our pleasure to invite you into this artistic mosaic of technology, talent and diversity."
          img="/life-1.jpg"
          reverse={false}
        />
        <LifeDesc
          text="We are firm believers of the ancient practice of imparting our centuries old wisdom to the younglings. So, we organize workshops, seminars and other actually useful things practically every other day. From events as awaited as Christopher Nolan movies to fests as big as concerts, we do it all."
          img="/life-2-srm.jpg"
          reverse={true}
        />
        <LifeDesc
          text="Our alumni range from academic weapons to obsessed artists who excel at whatever they decide to pursue. We have a long history of churning out winners and go-getters who continue to amaze us and everyone else in the best way possible. What can I say? We got that Midas touch!"
          img="/life-3.jpg"
          reverse={false}
        />
        <LifeDesc
          text="But we do know how to let loose. In fact, we pride ourselves on the parties we throw and the adventures we go on together. There is just something so beautiful about seeing tired students letting loose and going crazy at our many events. And sshhhh! Let's not talk about our 'members only' parties."
          img="/life-4.jpg"
          reverse={true}
        />
      </div>
      <div className="w-full h-fit flex justify-center lg:static -bottom-36 left-0 md:p-12">
        <div className="w-full h-fit flex justify-center lg:static -bottom-36 left-0 md:p-8 mt-12">
          <iframe
            className="lg:w-4/5 w-full h-[50vw] lg:h-[550px] rounded-2xl"
            src="https://www.youtube.com/embed/iJZiaoXtSnc"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      </motion.div>
    </div>
  );
}
