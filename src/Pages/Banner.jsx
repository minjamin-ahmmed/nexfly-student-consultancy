// import ReactRotatingText from "react-rotating-text";
import bannerImg from "../../src/assets/Home page-HeroImage section image.png";
import "./banner.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Facebook01Icon, Linkedin02Icon } from "hugeicons-react";

const Banner = () => {
  const items = [
    "Transform your dream to study abroad with nexFly",
    "Realize your study abroad dream now with nexFly",
    "Achieve your dream of studying abroad nexFly",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000);

    return () => clearInterval(timer); // Cleanup the timer
  }, [items.length]);

  const formatText = (text) => {
    const [before, after] = text.split("nexFly");
    return (
      <>
        {before}
        <span className="font-bold text-indigo-500">nexFly</span>
        {after}
      </>
    );
  };

  return (
    <div className="flex flex-col md:flex-row lg:flex-row items-center gap-5 lg:gap-64 max-h-screen  py-10 lg:py-0 lg:pb-20 px-5 md:px-10 lg:px-40 banner-style">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="lg:w-1/2"
      >
        {/* <h1 className="font-Poppins text-2xl lg:text-5xl md:text-3xl font-normal text-[#18181B] mb-6"> <ReactRotatingText items={["Turn your study abroad dreams into reality with Nexfly.", "Make your study abroad dreams come true with Nexfly.", "Bring your dream of studying abroad to life with Nexfly."]}></ReactRotatingText> </h1> */}

        <h1 className="font-Poppins text-2xl lg:text-5xl md:text-3xl font-normal text-[#18181B] mb-6">
          {/* Turn your study abroad dreams into reality with{" "}
          <span className="font-bold text-indigo-500">nexFly!</span> */}

          {formatText(items[currentIndex])}
        </h1>
        <p className="font-Manrope text-lg font-normal text-[#334155] mb-10">
          Start your journey here.
        </p>
        <Link to="/selfAssesment">
          <button className="bg-indigo-500 rounded-[100px] font-bold hover:bg-indigo-700 text-white px-12 py-4">
            Self Assesment
          </button>
        </Link>
        <div className="flex items-center gap-4 mt-8">
          <button className="bg-indigo-100 px-2 py-1 rounded-lg text-indigo-500">
            {" "}
            <Facebook01Icon />
          </button>
          <button className="text-indigo-500">
            <Linkedin02Icon />
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="lg:w-1/2"
      >
        <img src={bannerImg} alt="" />
      </motion.div>
    </div>
  );
};

export default Banner;
