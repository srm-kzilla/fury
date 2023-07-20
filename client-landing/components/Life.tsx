import Image from "next/image";

export default function Life() {
  return (
    <div className="flex flex-col gap-3 px-8">
      <h1 className="md:text-4xl text-3xl font-semibold">Life at SRMKZILLA</h1>
      <div className="flex flex-col-reverse lg:flex-row gap-y-4 justify-between items-center">
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
      </div>
    </div>
  );
}
