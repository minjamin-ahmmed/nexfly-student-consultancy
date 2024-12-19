import australiaImg from "../../assets/Australia2.png";

const Banner = () => {
  return (
    <div className="p-5 md:p-10 lg:px-20 lg:py-4 bg-indigo-500">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
        <div className="space-y-4">
          <h1 className="font-medium text-2xl lg:text-4xl text-white">
            Study Australia
          </h1>
          <p className="text-slate-300 text-[16px] lg:w-3/4">
            Lorem ipsum dolor sit amet consectetur. Ac nulla sed turpis nunc
            volutpat. Ultrices consequat potenti ut mattis ultricies in.
          </p>
          <button className="px-12 py-4 rounded-[100px] bg-white text-indigo-500 font-bold">
            Apply
          </button>
        </div>

        <div>
          <img src={australiaImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
