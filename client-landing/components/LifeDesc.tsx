import Image from "next/image";
import { motion } from "framer-motion";
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
      <h1 className="md:w-3/4 text-center">{text}</h1>
      <motion.div whileHover={{ scale: 1.05 }}>
        <Image
          className="h-fit rounded-2xl"
          src={img}
          alt="life @ SRMKZILLA"
          width={700}
          height={700}
          loading="lazy"
          blurDataURL="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
        />
      </motion.div>
    </div>
  );
};

export default LifeDesc;
