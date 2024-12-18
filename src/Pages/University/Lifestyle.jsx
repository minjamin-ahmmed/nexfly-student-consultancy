import icon1 from "../../assets/english.png";
import icon2 from "../../assets/sydney.png";
import icon3 from "../../assets/australian-dollar.png";
import icon4 from "../../assets/home-rent.png";
import icon5 from "../../assets/education.png";

const Lifestyle = () => {
  return (
    <div className="bg-indigo-50 p-5 md:p-10 lg:p-20">
      <h1 className="text-2xl lg:text-4xl text-slate-900 font-medium mb-4">
        Student Life in Australia
      </h1>
      <p className="text-md lg:text-lg text-[#334155] lg:w-1/2">
        We provide exceptional support and resources to make your study abroad
        journey smooth and successful.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mt-10">
        <div className="space-y-3">
          <div>
            <img src={icon1} alt="" />
          </div>
          <h2 className="text-lg text-slate-900 font-medium">English</h2>
          <p className="text-sm text-slate-500">Language</p>
        </div>
        <div className="space-y-3">
          <div>
            <img src={icon2} alt="" />
          </div>
          <h2 className="text-lg text-slate-900 font-medium">
            Sydney & Melbourne
          </h2>
          <p className="text-sm text-slate-500">Sydney & Melbourne</p>
        </div>

        <div className="space-y-3">
          <div>
            <img src={icon3} alt="" />
          </div>
          <h2 className="text-lg text-slate-900 font-medium">
            Australian dollar (AUD)
          </h2>
          <p className="text-sm text-slate-500">Australia currency</p>
        </div>

        <div className="space-y-3">
          <div>
            <img src={icon4} alt="" />
          </div>
          <h2 className="text-lg text-slate-900 font-medium">
            AU$2,000 per month
          </h2>
          <p className="text-sm text-slate-500">Living Expenses</p>
        </div>

        <div className="space-y-3">
          <div>
            <img src={icon5} alt="" />
          </div>
          <h2 className="text-lg text-slate-900 font-medium">
            AU$45,00 per month
          </h2>
          <p className="text-sm text-slate-500">Tuition Fees</p>
        </div>
      </div>
    </div>
  );
};

export default Lifestyle;
