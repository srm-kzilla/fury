import Image from "next/image";

type ImageComponentProps = {
  title: string;
  image: string;
  description: string;
  reverse?: boolean;
};

const ImageComponent = ({
  title,
  image,
  description,
  reverse,
}: ImageComponentProps) => {
  return (
    <div>
      <div className="hidden sm:flex flex-col items-center w-fit gap-2">
        <div className=" text-2xl text-recruitments-orange font-semibold">
          {title}
        </div>
        <div className=" relative md:w-28 md:h-28 lg:w-44 lg:h-44 xl:w-52 xl:h-64">
          <Image src={image} alt="RoadmapSvg" fill />
        </div>
        <div className=" text-xs lg:text-sm w-52 text-center mt-6">
          {description}
        </div>
      </div>
      <div
        className={`sm:hidden flex items-center ${
          reverse && `flex-row-reverse`
        } `}
      >
        <div className=" relative w-40 h-40 md:w-28 md:h-28 lg:w-44 lg:h-44 xl:w-52 xl:h-64">
          <Image src={image} alt="RoadmapSvg" fill />
        </div>
        <div className=" flex flex-col gap-2 items-center">
          <div className=" text-2xl text-recruitments-orange font-semibold">
            {title}
          </div>
          <div className=" text-xs lg:text-sm w-40 text-center">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageComponent;
