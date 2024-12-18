import partnerImg from "../../assets/partner.png";
const Banner = () => {
  return (
    <div className="bg-indigo-100 p-5 md:p-10 lg:p-20">
      <div className="flex items-center justify-between">
        <div className="lg:w-1/2">
          <h1 className="text-2xl lg:text-5xl md:text-3xl font-normal text-slate-900 mb-6">
            Grow your business with Nexfly
          </h1>
          <p className="text-slate-700 mb-6">
            Lorem ipsum dolor sit amet consectetur. Ac nulla sed turpis nunc
            volutpat. Ultrices consequat potenti ut mattis ultricies in.
          </p>
          <button className="bg-indigo-500 text-white font-semibold px-12 py-4 rounded-[100px]">
            Become a Partner
          </button>
        </div>

        <div>
          <img src={partnerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
