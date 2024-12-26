import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/Icon2.svg";
import icon3 from "../assets/icon3.svg";
import icon4 from "../assets/Icon4.svg";
import elementIcon from "../assets/elements.svg";

import { motion } from "framer-motion";
import { ArrowRight01Icon } from "hugeicons-react";
const Services = () => {
  return (
    <div className="px-5 md:px-10 lg:px-20 py-5 md:py-10 lg:pb-20">
      <h1 className="font-Poppins font-medium text-2xl md:text-3xl lg:text-4xl mb-4">
        Services
      </h1>
      <p className="font-Manrope text-md lg:text-lg text-[#334155] lg:w-1/2">
        We provide exceptional support and resources to make your study abroad
        journey smooth and successful.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 p-4">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="mb-3">
            <img src={icon1} alt="" />
          </div>
          <h3 className="font-Poppins text-2xl font-medium mb-3">
            Education Consaltant
          </h3>
          <p className="font-Manrope text-md text-[#64748B] mb-3">
            We provide exceptional support and resources to make your study
            abroad journey smooth and successful.
          </p>
          <div className="flex items-center gap-2">
            <a href="#" className="text-indigo-500 font-medium">
              Learn More
            </a>
            <ArrowRight01Icon className="text-indigo-500" />
          </div>
        </motion.div>

        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="mb-3">
            <img src={icon2} alt="" />
          </div>
          <h3 className="font-Poppins text-2xl font-medium mb-3">
            Travel Support
          </h3>
          <p className="font-Manrope text-md text-[#64748B] mb-3">
            We provide exceptional support and resources to make your study
            abroad journey smooth and successful.
          </p>
          <div className="flex items-center gap-2">
            <a href="#" className="text-indigo-500 font-medium">
              Learn More
            </a>
            <ArrowRight01Icon className="text-indigo-500" />
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="mb-3">
            <img src={icon3} alt="" />
          </div>
          <h3 className="font-Poppins text-2xl font-medium mb-3">
            Financial Support
          </h3>
          <p className="font-Manrope text-md text-[#64748B] mb-3">
            We provide exceptional support and resources to make your study
            abroad journey smooth and successful.
          </p>
          <div className="flex items-center gap-2">
            <a href="#" className="text-indigo-500 font-medium">
              Learn More
            </a>
            <ArrowRight01Icon className="text-indigo-500" />
          </div>
        </motion.div>

        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="mb-3">
            <img src={icon4} alt="" />
          </div>
          <h3 className="font-Poppins text-2xl font-medium mb-3">
            Language Training
          </h3>
          <p className="font-Manrope text-md text-[#64748B] mb-3">
            We provide exceptional support and resources to make your study
            abroad journey smooth and successful.
          </p>
          <div className="flex items-center gap-2">
            <a href="#" className="text-indigo-500 font-medium">
              Learn More
            </a>
            <ArrowRight01Icon className="text-indigo-500" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
