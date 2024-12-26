import { useState } from "react";
import { motion } from "framer-motion";

const AcademicTab = ({ handleNext, handlePrev }) => {
  const [selectInterest, setSelectInterest] = useState("");
  const [selectStage, setSelectedStage] = useState("");
  const [selectGoal, setSelectedGoal] = useState("");

  const interests = [
    "Engineering",
    "Business and Management",
    "IT and Computer Science",
  ];

  const stages = [
    "Bachelor program",
    "Master's program",
    "Ph.D./Research",
    "Certificate or Short Course",
    "Fundamental Course",
  ];

  const goals = [
    "Employed (salary focus on higher ranges)",
    "Being an entrepreneur",
    "Research and Academic Field",
  ];

  const getOptionStyle = (option, selected) => {
    return `px-4 py-2 text rounded-[100px] cursor-pointer text-sm
     ${
       option === selected
         ? "bg-indigo-500 text-white"
         : "bg-indigo-50 text-slate-900"
     }`;
  };

  return (
    <div className="overflow-y-scroll h-[550px]">
      {" "}
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-center mb-4">
        Academic and career goals
      </h1>
      <p className="text-center text-[#334155] font-medium">
        Provide your details, and our expert counselors will reach out to
        connect you with the ideal course, country, university, and scholarship
        opportunities!
      </p>
      <div className="mt-10 ">
        <h2 className="text-slate-900 text-lg font-medium mb-4">
          What interests you?
        </h2>

        <div className="flex flex-wrap gap-4">
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              className={getOptionStyle(interest, selectInterest)}
              onClick={() => setSelectInterest(interest)}
              animate={
                interest === selectInterest
                  ? {
                      scale: 1.1,
                      boxShadow: "0px 0px 10px rgba(99, 102, 241, 0.6)",
                    }
                  : { scale: 1, boxShadow: "none" }
              }
              transition={{ type: "tween", stiffness: 300 }}
            >
              {interest}
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-slate-900 text-lg font-medium mb-4">
          At what stage do you want to study abroad?
        </h2>

        <div className="flex flex-wrap gap-4">
          {stages.map((stage, index) => (
            <motion.div
              key={index}
              className={getOptionStyle(stage, selectStage)}
              onClick={() => setSelectedStage(stage)}
              animate={
                stage === selectStage
                  ? {
                      scale: 1.1,
                      boxShadow: "0px 0px 10px rgba(99, 102, 241, 0.6)",
                    }
                  : { scale: 1, boxShadow: "none" }
              }
              transition={{ type: "tween", stiffness: 300 }}
            >
              {stage}
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-slate-900 text-lg font-medium mb-4">
          What are your future career goals?
        </h2>

        <div className="flex flex-wrap gap-4">
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              className={getOptionStyle(goal, selectGoal)}
              onClick={() => setSelectedGoal(goal)}
              animate={
                goal === selectGoal
                  ? {
                      scale: 1.1,
                      boxShadow: "0px 0px 10px rgba(99, 102, 241, 0.6)",
                    }
                  : { scale: 1, boxShadow: "none" }
              }
              transition={{ type: "tween", stiffness: 300 }}
            >
              {goal}
            </motion.div>
          ))}
        </div>
      </div>
      <form className="w-full space-y-4 mt-10">
        <h3 className="text-lg font-medium text-slate-900">
          SSC or Equivalanet Degree
        </h3>
        <div className="flex flex-col lg:flex-row items-center gap-4">
          <input
            type="number"
            placeholder="Passing Year"
            className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-700 font-medium"
            list="funding-options"
            required
          />
          <input
            type="number"
            placeholder="Result"
            className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-700 font-medium"
            list="funding-options"
            required
          />

          <input
            type="text"
            placeholder="Institution Name"
            className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-700 font-medium"
            list="funding-options"
            required
          />
        </div>

        <h3 className="text-lg font-medium text-slate-900 mt-6">
          HSC or Equivalent Degree
        </h3>
        <div className="flex flex-col lg:flex-row items-center gap-4">
          <input
            type="number"
            placeholder="Passing Year"
            className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-700 font-medium"
            list="funding-options"
            required
          />
          <input
            type="number"
            placeholder="Result"
            className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-700 font-medium"
            list="funding-options"
            required
          />

          <input
            type="text"
            placeholder="Institution Name"
            className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-700 font-medium"
            list="funding-options"
            required
          />
        </div>

        <h3 className="text-lg font-medium text-slate-900 mt-6">
          BSC or Equivalent Degree
        </h3>
        <div className="flex flex-col lg:flex-row items-center gap-4">
          <input
            type="number"
            placeholder="Passing Year"
            className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-700 font-medium"
            list="funding-options"
            required
          />
          <input
            type="number"
            placeholder="Result"
            className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-700 font-medium"
            list="funding-options"
            required
          />

          <input
            type="text"
            placeholder="Institution Name"
            className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-700 font-medium"
            list="funding-options"
            required
          />
        </div>

        <h3 className="text-lg font-medium text-slate-900 mt-6">
          MSC or Equivalent Degree
        </h3>
        <div className="flex flex-col lg:flex-row items-center gap-4">
          <input
            type="number"
            placeholder="Passing Year"
            className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-700 font-medium"
            list="funding-options"
            required
          />
          <input
            type="number"
            placeholder="Result"
            className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-700 font-medium"
            list="funding-options"
            required
          />

          <input
            type="text"
            placeholder="Institution Name"
            className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-700 font-medium"
            list="funding-options"
            required
          />
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4 w-full max-w-2xl">
          <button
            className="px-12 py-4 bg-white rounded-[100px] text-indigo-500 border border-indigo-500 font-medium"
            onClick={handlePrev}
          >
            Back
          </button>
          <button
            className="px-12 py-4 bg-indigo-500 text-white font-bold rounded-[100px] hover:bg-indigo-700"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default AcademicTab;
