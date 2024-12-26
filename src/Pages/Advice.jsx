import { Link } from "react-router-dom";
import adviceImg from "../assets/Filing system-bro 1.png";

const Advice = () => {
  return (
    <div className="bg-[#E0E7FF]">
      <div className="flex flex-col-reverse md:flex-row lg:flex-row items-center justify-between lg:gap-60 py-6 mb-10">
        <div className="px-5 md:px-10 lg:px-40 py-10">
          <div>
            <h1 className=" font-Poppins font-medium text-[#0F172A] text-2xl md:text-3xl lg:text-4xl mb-4">
              Get exclusive advice delivered straight to your inbox
            </h1>
            <p className="font-Manrope text-md lg:text-lg text-[#64748B] mb-5">
              We provide exceptional support and resources to make your study
              abroad journey smooth and successful.
            </p>

            <Link to="/auth/signin">
              <button className="bg-indigo-500 hover:bg-indigo-700 font-bold rounded-[100px] text-white  px-12 py-4">
                Sign In
              </button>
            </Link>
          </div>
        </div>

        <div className="">
          <img className="w-full h-auto mr-32" src={adviceImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Advice;
