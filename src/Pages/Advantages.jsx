import worldImg from "../assets/world.png";
import "./banner.css";
import { motion } from "framer-motion";

const Advantages = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${worldImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
      }}
      className="px-5 md:px-10 lg:px-40 my-14 bg-indigo-500 advantage-container"
    >
      <div className="pt-40 pb-16">
        <h1 className="font-Poppins font-medium text-white text-2xl md:text-3xl lg:text-4xl mb-4">
          Our Advantages
        </h1>
        <p className="font-Manrope text-md lg:text-lg text-[#CBD5E1] lg:w-1/2">
          We provide exceptional support and resources to make your study abroad
          journey smooth and successful.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h3 className="text-white font-Poppins text-2xl font-medium">
              200+Institutes <br /> Graduate
            </h3>
            <p className="text-[#E2E8F0]">
              We provide exceptional support and resources to make your study
              abroad journey smooth and successful.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h3 className="text-white font-Poppins text-2xl font-medium">
              16+ years of <br /> experience
            </h3>
            <p className="text-[#E2E8F0]">
              We provide exceptional support and resources to make your study
              abroad journey smooth and successful.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h3 className="text-white font-Poppins text-2xl font-medium">
              600+ <br /> institution partners
            </h3>
            <p className="text-[#E2E8F0]">
              We provide exceptional support and resources to make your study
              abroad journey smooth and successful.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h3 className="text-white font-Poppins text-2xl font-medium">
              85% Highest Visa <br /> Success rate
            </h3>
            <p className="text-[#E2E8F0]">
              We provide exceptional support and resources to make your study
              abroad journey smooth and successful.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
