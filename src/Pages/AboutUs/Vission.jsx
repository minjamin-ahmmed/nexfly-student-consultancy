import missionImg from "../../assets/mission-vission.png";
import { motion } from "framer-motion";

const Vission = () => {
  return (
    <div className="mb-20 mt-10 lg:mt-20">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 px-5 md:px-10 lg:px-40 mb-32 lg:mb-96">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="font-bold text-2xl lg:text-4xl"
        >
          {" "}
          We build bridges between compaines and customers
        </motion.h1>
        <motion.p
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="font-normal text-[#334155] text-[16px] mt-2"
        >
          Provide your details, and our expert counselors will reach out to
          connect you with the ideal course, country, university, and
          scholarship opportunities!
        </motion.p>
      </div>

      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full px-5 md:px-10 lg:px-40 absolute top-80 md:top-40 lg:top-72 z-10"
      >
        <img
          className="w-full"
          src={missionImg}
          alt="Mission and Vission Image"
        />
      </motion.div>

      <div className="bg-[#6366F1] grid grid-cols-1 lg:grid-cols-2 gap-10 pt-24 lg:pt-28 pb-10 px-5 md:px-10 lg:px-40 relative">
        <div>
          <h3 className="text-2xl font-medium text-white mb-4">Mission</h3>
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-slate-300 text-lg text-justify"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam esse
            et earum repellendus praesentium neque, autem sequi, possimus sit
            temporibus totam quia soluta molestias odit itaque. Doloribus,
            similique voluptas! Vitae sint nam eum maiores saepe? Cupiditate
            sequi beatae modi esse, ullam harum rerum officiis repudiandae qui
            reiciendis fugit, laborum placeat.
          </motion.p>
        </div>

        <div>
          <h3 className="text-2xl font-medium text-white mb-4">Vission</h3>
          <motion.p
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-slate-300 text-lg text-justify"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam esse
            et earum repellendus praesentium neque, autem sequi, possimus sit
            temporibus totam quia soluta molestias odit itaque. Doloribus,
            similique voluptas! Vitae sint nam eum maiores saepe? Cupiditate
            sequi beatae modi esse, ullam harum rerum officiis repudiandae qui
            reiciendis fugit, laborum placeat.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Vission;
