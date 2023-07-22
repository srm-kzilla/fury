import LifeDesc from "./LifeDesc";

export default function Life() {
  return (
    <div className="flex flex-col gap-3 px-8 py-24 xl:px-48">
      <h1 className="md:text-4xl text-3xl font-semibold">LIFE AT SRMKZILLA</h1>
      <div className=" flex flex-col gap-24 py-8">
        <LifeDesc
          text="Bustling with tech geniuses, Picassos, and philosophers, SRMKZILLA
              is a paradise for people with an unquenchable thirst to create.
              But sometimes, as humans do, we grow weary and tired. Fret not for
              SRMKZILLA boasts the unofficial title of being the most fun campus
              club around. We know the importance of taking a well-deserved
              break and having adventures."
          img="/Life1.svg"
          reverse={false}
        />
        <LifeDesc
          text="We pride ourselves on the accepting and productive environment
          we've established in our club. Here, you get to be
          unapologetically yourself and be loved all the more for it, while
          still being a part of something bigger than yourself. So, it is
          our pleasure to invite you into this artistic mosaic of
          technology, talent, and diversity."
          img="/Life2.svg"
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
    </div>
  );
}
