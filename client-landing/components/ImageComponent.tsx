import Image from "next/image";

type ImageComponentProps = {
  title: string;
  image: string;
  description: string;
};

const ImageComponent = ({ title, image, description }: ImageComponentProps) => {
  return (
    <div className=" flex flex-col items-center w-fit gap-2">
      <div className=" text-2xl text-recruitments-orange font-semibold">
        {title}
      </div>
      <div className=" relative w-52 h-64">
        <Image src={image} alt="RoadmapSvg" fill />
      </div>
      <div className=" text-sm w-52 text-center mt-6">{description}</div>
    </div>
  );
};

export default ImageComponent;
