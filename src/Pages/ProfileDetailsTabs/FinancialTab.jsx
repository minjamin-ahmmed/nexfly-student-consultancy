import { useState } from "react";
import { motion } from "framer-motion";

const FinancialTab = ({ handleNext, handlePrev }) => {
  const [selectedSponsor, setSelctedSponsor] = useState("");
  const [selectedStatement, setSelectedStatement] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");
  const [selectedScholarship, setSelectedScholarship] = useState("");
  const [selectedFundingSupport, setSelectedFundingSupport] = useState("");

  const sponsors = [
    "Father",
    "Mother",
    "Brother",
    "Sister",
    "1st Blood Relative",
  ];

  const statements = ["$25k - $30k", "$35k - $45k", "Over $50k"];

  const budgets = ["$10k - $20k", "$20k - $30k", "Over $30k"];

  const scholarships = ["Yes", "No"];

  const fundingSupports = ["Yes", "No"];

  const getOptionStyle = (option, selected) => {
    return `px-4 py-2 text rounded-[100px] cursor-pointer text-sm
        ${
          option === selected
            ? "bg-indigo-500 text-white"
            : "bg-indigo-50 text-slate-900"
        }`;
  };

  return (
    <div>
      {" "}
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-center mb-4">
        Financial Planning and Scholarships
      </h1>
      <p className="text-center text-[#334155] font-medium">
        Provide your details, and our expert counselors will reach out to
        connect you with the ideal course, country, university, and scholarship
        opportunities!
      </p>
      <div className="mt-10 ">
        <h2 className="text-slate-900 text-lg font-medium mb-4">
          Are you fluent in English?
        </h2>

        <div className="flex flex-wrap gap-4">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              className={getOptionStyle(sponsor, selectedSponsor)}
              onClick={() => setSelctedSponsor(sponsor)}
              animate={
                sponsor === selectedSponsor
                  ? {
                      scale: 1.1,
                      boxShadow: "0px 0px 10px rgba(99, 102, 241, 0.6)",
                    }
                  : { scale: 1, boxShadow: "none" }
              }
              transition={{ type: "tween", stiffness: 300 }}
            >
              {sponsor}
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-slate-900 text-lg font-medium mb-4">
          Bank statement
        </h2>

        <div className="flex flex-wrap gap-4">
          {statements.map((statement, index) => (
            <motion.div
              key={index}
              className={getOptionStyle(statement, selectedStatement)}
              onClick={() => setSelectedStatement(statement)}
              animate={
                statement === selectedStatement
                  ? {
                      scale: 1.1,
                      boxShadow: "0px 0px 10px rgba(99, 102, 241, 0.6)",
                    }
                  : { scale: 1, boxShadow: "none" }
              }
              transition={{ type: "tween", stiffness: 300 }}
            >
              {statement}
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-slate-900 text-lg font-medium mb-4">
          What is your budget for study abroad?
        </h2>

        <div className="flex flex-wrap gap-4">
          {budgets.map((budget, index) => (
            <motion.div
              key={index}
              className={getOptionStyle(budget, selectedBudget)}
              onClick={() => setSelectedBudget(budget)}
              animate={
                budget === selectedBudget
                  ? {
                      scale: 1.1,
                      boxShadow: "0px 0px 10px rgba(99, 102, 241, 0.6)",
                    }
                  : { scale: 1, boxShadow: "none" }
              }
              transition={{ type: "tween", stiffness: 300 }}
            >
              {budget}
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-slate-900 text-lg font-medium mb-4">
          Are you interested in applying for a scholarship?
        </h2>

        <div className="flex flex-wrap gap-4">
          {scholarships.map((scholarship, index) => (
            <motion.div
              key={index}
              className={getOptionStyle(scholarship, selectedScholarship)}
              onClick={() => setSelectedScholarship(scholarship)}
              animate={
                scholarship === selectedScholarship
                  ? {
                      scale: 1.1,
                      boxShadow: "0px 0px 10px rgba(99, 102, 241, 0.6)",
                    }
                  : { scale: 1, boxShadow: "none" }
              }
              transition={{ type: "tween", stiffness: 300 }}
            >
              {scholarship}
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-slate-900 text-lg font-medium mb-4">
          Do you need funding support?
        </h2>

        <div className="flex flex-wrap gap-4">
          {fundingSupports.map((support, index) => (
            <motion.div
              key={index}
              className={getOptionStyle(support, selectedFundingSupport)}
              onClick={() => setSelectedFundingSupport(support)}
              animate={
                support === selectedFundingSupport
                  ? {
                      scale: 1.1,
                      boxShadow: "0px 0px 10px rgba(99, 102, 241, 0.6)",
                    }
                  : { scale: 1, boxShadow: "none" }
              }
              transition={{ type: "tween", stiffness: 300 }}
            >
              {support}
            </motion.div>
          ))}
        </div>
      </div>
      <form className="mt-10">
        {/* <input
              type="text"
              placeholder="What is your budget for study abroad?"
              className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-600 font-medium my-8"
              list="funding-options"
              required
          />
          <datalist id="funding-options">
              <option>$10,000 - $20,000</option>
              <option>$20,000 - $30,000</option>
              <option>Over $30,000</option>
          </datalist>

          <div className="flex flex-col">
              <label className="font-medium text-lg mb-3">Are you interested in applying for a scholarship?</label>
              <div className="ml-1">
                  <input type="checkbox" className="" /> <label className="mr-8">Yes</label>
                  <input type="checkbox" /> <label>No</label>
              </div>
          </div>

          <div className="flex flex-col mt-8">
              <label className="font-medium text-lg mb-3">Do you need funding support?</label>
              <div className="ml-1">
                  <input type="checkbox" className="" /> <label className="mr-8">Yes</label>
                  <input type="checkbox" /> <label>No</label>
              </div>
          </div> */}
        <div className="flex items-center gap-4 w-full max-w-2xl mt-8">
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

export default FinancialTab;
