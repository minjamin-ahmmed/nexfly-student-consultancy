import { Link } from "react-router-dom";
import referImg from "../assets/refer.png";

const ReferAndEarn = () => {
  return (
    <div className="px-5 md:px-10 lg:px-40 py-10 mb-10">
      <div className="flex flex-col lg:flex-row items-center justify-between bg-indigo-100 p-5 lg:px-20 lg:py-10 rounded-2xl">
        <div className="space-y-6">
          <h1 className="text-3xl font-medium text-slate-900">Refer & Earn</h1>
          <p className=" text-slate-600 w-3/4">
            We provide exceptional support and resources to make your study
            abroad journey smooth and successful.
          </p>
          <div>
            <Link to="/refer">
              <button className="bg-indigo-500 text-white font-semibold rounded-[100px] px-12 py-4">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        <div>
          <img src={referImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ReferAndEarn;
