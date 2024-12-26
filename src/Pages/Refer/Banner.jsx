import bannerImg from "../../assets/Group 1.png";
import "../banner.css";

const Banner = () => {
  return (
    <div
      className="flex flex-col md:flex-row lg:flex-row items-center
     gap-5 max-h-screen py-10 md:py-12 lg:py-20  px-5 md:px-10 lg:px-40 banner-style-refer"
    >
      <div className="lg:w-1/2">
        <h1 className="font-Poppins text-2xl lg:text-5xl md:text-3xl font-normal text-white mb-8">
          Refer your friends and earn exciting rewards with every successful
          referral!
        </h1>

        <button className="text-zinc-900 bg-white px-6 py-2 rounded-3xl mb-10">
          Refer Friends and earn $100*
        </button>

        <p className="text-lg text-slate-200 mb-10">
          Account transfer post successful enrolment
        </p>
      </div>

      <div className="lg:w-1/2">
        <img src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
