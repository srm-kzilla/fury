import Image from "next/image";
import { motion } from "framer-motion";
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
    <>
      <div className="hidden lg:flex flex-col items-center w-fit gap-2">
        <div className="text-2xl text-highlight font-semibold">{title}</div>
        <div className=" relative md:w-28 md:h-28 lg:w-44 lg:h-44 xl:w-52 xl:h-64">
          <Image src={image} alt="RoadmapSvg" fill />
        </div>
        <div className=" text-xs lg:text-sm w-52 text-center mt-6">
          {description}
        </div>
      </div>
      <div
        className={`lg:hidden flex items-center ${
          reverse && `flex-row-reverse`
        } `}
      >
        <div className=" relative w-40 h-40 md:w-64 md:h-64">
          <Image src={image} alt="RoadmapSvg" fill />
        </div>
        <div className=" flex flex-col gap-2 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.1 }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            className=" text-2xl md:text-3xl text-highlight font-semibold"
          >
            {title}
          </motion.div>
          <div className=" text-xs md:text-xl w-40 md:w-60 text-center">
            {description}
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageComponent;
