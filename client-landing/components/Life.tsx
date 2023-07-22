import LifeDesc from "./LifeDesc";

export default function Life() {
  return (
    <div className="flex flex-col gap-3 px-8 py-24 xl:px-48">
      <h1 className="md:text-4xl text-3xl font-semibold">LIFE AT SRMKZILLA</h1>
      <div className=" flex flex-col gap-24 py-8">
        <LifeDesc
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque est ut euismod convallis. Pellentesque luctus ligula vel sodales pellentesque. Quisque sed ipsum bibendum ipsum ultrices maximus. Praesent tincidunt tincidunt ornare. Sed gravida porttitor varius. Maecenas aliquam lobortis odio, vel blandit erat auctor at. Sed elementum purus enim, iaculis semper."
          img="/Life1.png"
          reverse={false}
        />
        <LifeDesc
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque est ut euismod convallis. Pellentesque luctus ligula vel sodales pellentesque. Quisque sed ipsum bibendum ipsum ultrices maximus. Praesent tincidunt tincidunt ornare. Sed gravida porttitor varius. Maecenas aliquam lobortis odio, vel blandit erat auctor at. Sed elementum purus enim, iaculis semper."
          img="/Life2.png"
          reverse={true}
        />
        <LifeDesc
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque est ut euismod convallis. Pellentesque luctus ligula vel sodales pellentesque. Quisque sed ipsum bibendum ipsum ultrices maximus. Praesent tincidunt tincidunt ornare. Sed gravida porttitor varius. Maecenas aliquam lobortis odio, vel blandit erat auctor at. Sed elementum purus enim, iaculis semper."
          img="/Life3.png"
          reverse={false}
        />
        <LifeDesc
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque est ut euismod convallis. Pellentesque luctus ligula vel sodales pellentesque. Quisque sed ipsum bibendum ipsum ultrices maximus. Praesent tincidunt tincidunt ornare. Sed gravida porttitor varius. Maecenas aliquam lobortis odio, vel blandit erat auctor at. Sed elementum purus enim, iaculis semper."
          img="/Life4.png"
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
