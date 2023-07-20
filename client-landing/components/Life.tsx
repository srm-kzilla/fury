import Image from "next/image";

export default function Life() {
  return (
    <div className="w-full min-h-screen flex flex-col h-fit p-8 relative">
      <div className="lg:flex lg:flex-row w-full h-fit ">
        <div className="lg:hidden block">
          <h1 className="text-3xl">Life at SRMKZILLA</h1>
        </div>
        <div className="lg:w-1/3 w-full flex flex-col gap-5 absolute lg:static top-[280px] left-0 p-8">
          <div className="hidden lg:block">
            <h1 className="text-4xl">Life at SRMKZILLA</h1>
          </div>
          <div className="font-NanumPenScript text-lg md:text-2xl">
            <h1>
              Bustling with tech geniuses, Picassos, and philosophers, SRMKZILLA
              is a paradise for people with an unquenchable thirst to create.
              But sometimes, as humans do, we grow weary and tired. Fret not for
              SRMKZILLA boasts the unofficial title of being the most fun campus
              club around. We know the importance of taking a well-deserved
              break and having adventures.
            </h1>
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
        <div className="lg:w-2/3 w-full h-full flex p-4 static lg:relative">
          <div className="absolute z-40 top-28 lg:left-[200px]">
            <Image
              className="w-52 lg:w-[20vw]"
              src="/life-1.png"
              alt="Life-1"
              width={500}
              height={500}
            />
          </div>
          <div className="absolute z-30 top-28 left-[80px] lg:left-[300px] scale-[0.95]">
            <Image
              className="w-52 lg:w-[20vw]"
              src="/life-2.png"
              alt="Life-1"
              width={500}
              height={500}
            />
          </div>
          <div className="absolute z-20 top-28 left-[110px] lg:left-[400px] scale-[0.9]">
            <Image
              className="w-52 lg:w-[20vw]"
              src="/life-3.png"
              alt="Life-1"
              width={500}
              height={500}
            />
          </div>
          <div
            className={
              "absolute z-10 top-28 left-[140px] lg:left-[500px] scale-[0.85]"
            }
          >
            <Image
              className="w-52 lg:w-[20vw]"
              src="/life-4.png"
              alt="Life-1"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
      <div className="w-full h-fit flex justify-center absolute lg:static -bottom-36 left-0 p-8">
        <iframe
          className="lg:w-1/2 w-full h-[50vw] lg:h-[550px]"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/iJZiaoXtSnc"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}