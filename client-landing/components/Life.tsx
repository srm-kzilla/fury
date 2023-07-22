import LifeDesc from "./LifeDesc";

export default function Life() {
  return (
    <div className="flex flex-col gap-3 px-8 py-24">
      <h1 className="md:text-4xl text-3xl font-semibold">LIFE AT SRMKZILLA</h1>
      {/* <div className="flex flex-col-reverse lg:flex-row gap-y-4 justify-between items-center">
        <div className="flex flex-col gap-4 lg:w-1/2">
          <div className="font-handwriting text-lg md:text-3xl">
            <h1>
              Bustling with tech geniuses, Picassos, and philosophers, SRMKZILLA
              is a paradise for people with an unquenchable thirst to create.
              But sometimes, as humans do, we grow weary and tired. Fret not for
              SRMKZILLA boasts the unofficial title of being the most fun campus
              club around. We know the importance of taking a well-deserved
              break and having adventures.
            </h1>
            <br />
            <h1>
              We pride ourselves on the accepting and productive environment
              we&apos;ve established in our club. Here, you get to be
              unapologetically yourself and be loved all the more for it, while
              still being a part of something bigger than yourself. So, it is
              our pleasure to invite you into this artistic mosaic of
              technology, talent, and diversity.
            </h1>
          </div>
        </div>
        <Image
          className="h-fit"
          src="/LifeAtSRMKZILLA.png"
          alt="life at SRMKZILLA"
          width={700}
          height={700}
        />
      </div> */}
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
      <div className="w-full h-fit flex justify-center lg:static -bottom-36 left-0 p-8 mt-24">
        <iframe
          className="lg:w-1/2 w-full h-[50vw] lg:h-[550px] rounded-2xl"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/iJZiaoXtSnc"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
