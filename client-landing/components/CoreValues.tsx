import { motion } from "framer-motion";
const CoreValues = () => {
  return (
    <div className="flex flex-col justify-center px-8 py-16 xl:px-48">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        }}
        className="text-3xl font-semibold"
      >
        Core Values
      </motion.h2>
      <p className="md:text-xl mt-4">
        Here at{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-highlight to-secondary_highlight ">
          SRMKZILLA
        </span>
        , our open-source projects define who we are because we believe in
        making knowledge and our products accessible to people from all walks of
        life. We believe{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-highlight to-secondary_highlight ">
          genuine innovation necessitates collaboration.
        </span>
        <br /> <br /> We motivate our members to participate in projects outside
        of their primary domain, expand their expertise and become the best
        possible versions of themselves and we are proud to call ourselves home
        to{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-highlight to-secondary_highlight ">
          brilliant programmers, artists, and designers.
        </span>
      </p>
    </div>
  );
};

export default CoreValues;
