import React from "react";
import RightArrow from "remixicon-react/ArrowRightLineIcon";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full p-8 flex flex-col gap-6 md:gap-12">
      <div className="flex flex-col gap-7">
        <div>
          <h1 className="text-3xl md:text-6xl font-bold">
            #Recruitment2023
          </h1>
        </div>
        <div>
          <h1 className="text-lg md:text-3xl">
            SRMKZILLA - the perfect home for your technical talents, and
            artistic acumen!
          </h1>
        </div>
        <div>
        <a href="https://dashboard.kzilla.xyz" target="_blank">
          <button className="font-bold flex gap-3 items-center">
            <div className="rounded-full p-1 bg-highlight text-primary">
              <RightArrow size={25} />
            </div>
            <div>
              <h1 className="text-2xl font-semibold">Get Started</h1>
            </div>
          </button>
          </a>
        </div>
      </div>
      <div className="w-full h-fit md:flex md:flex-row flex flex-col-reverse gap-20 md:gap-0">
        <div className="md:w-1/2 w-full h-full flex flex-col gap-5 justify-start">
          <h1 className="md:text-4xl text-3xl font-semibold">Dear Reader,</h1>
          <h1 className="font-handwriting text-lg md:text-3xl">
            SRMKZILLA is a beacon of opportunity and growth for aspiring
            developers. From your first &quot;Hello World&quot; to your first
            complex git branch pushes , through our collaborative learning
            environment, skill development programs and open-source
            contributions ,the club empowers developers to realize their full
            potential. On a quest to learn and evolve your skills , welcome home
            developers!
          </h1>
        </div>
        <div className="md:w-1/2 w-full h-fit flex items-start justify-end">
          <div className="lg:relative lg:bottom-12">
            <Image
              src="/HeroImage.png"
              alt="SRMKZILLA"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-handwriting text-lg md:text-3xl">
          Design and innovation go hand in hand. Design being the foundation of
          everything we do , from eye catching and visually engaging posts to
          flamboyant visual elements create a strong identity that attracts
          attention. With unique designs and an artistic vision , welcome home
          designers! At SRMKZILLA , with opportunities to create extraordinary
          products; products that redefine what campus clubs can do and sets us
          apart with our quirk for creativity!
        </h1>
      </div>
    </div>
  );
}
