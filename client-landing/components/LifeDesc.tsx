import Image from "next/image";

const LifeDesc = ({
  text,
  img,
  reverse,
}: {
  text: string;
  img: string;
  reverse: boolean;
}) => {
  return (
    <div
      className={`flex flex-col-reverse justify-between items-center font-handwriting text-2xl md:text-3xl gap-10 ${
        reverse ? `md:flex-row-reverse` : `md:flex-row`
      }`}
    >
      <h1 className=" md:w-3/4">{text}</h1>
      <div>
        <Image
          className="h-fit"
          src={img}
          alt="life at SRMKZILLA"
          width={700}
          height={700}
        />
      </div>
    </div>
  );
};

export default LifeDesc;
