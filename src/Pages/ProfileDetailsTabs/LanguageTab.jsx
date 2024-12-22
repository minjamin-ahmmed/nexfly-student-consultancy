import { useState } from "react";
import { motion } from "framer-motion";

const LanguageTab = ({ handleNext, handlePrev }) => {
  const [selectFluent, setSelectedFluent] = useState("");
  const [selectedTest, setSelectedTest] = useState("");

  const fluentOrNot = ["Yes", "No"];
  const tests = ["IELTS", "TOEFL", "Duolingo", "GRE", "GMAT", "PTE", "None"];

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
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-center mb-4">
        Language skills and testing
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
          {fluentOrNot.map((fluent, index) => (
            <motion.div
              key={index}
              className={getOptionStyle(fluent, selectFluent)}
              onClick={() => setSelectedFluent(fluent)}
              animate={
                fluent === selectFluent
                  ? {
                      scale: 1.1,
                      boxShadow: "0px 0px 10px rgba(99, 102, 241, 0.6)",
                    }
                  : { scale: 1, boxShadow: "none" }
              }
              transition={{ type: "tween", stiffness: 300 }}
            >
              {fluent}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-slate-900 text-lg font-medium mb-4">
          Have you taken any language proficiency tests?
        </h2>

        <div className="flex flex-wrap gap-4">
          {tests.map((test, index) => (
            <motion.div
              key={index}
              className={getOptionStyle(test, selectedTest)}
              onClick={() => setSelectedTest(test)}
              animate={
                test === selectedTest
                  ? {
                      scale: 1.1,
                      boxShadow: "0px 0px 10px rgba(99, 102, 241, 0.6)",
                    }
                  : { scale: 1, boxShadow: "none" }
              }
              transition={{ type: "tween", stiffness: 300 }}
            >
              {test}
            </motion.div>
          ))}
        </div>
      </div>

      <form className="mt-10">
        {/* <div className="flex flex-col">
              <label className="font-medium text-lg mb-3">Are You Fluent in English?</label>
              <div className="ml-1">
                  <input type="checkbox" className="" /> <label className="mr-8">Yes</label>
                  <input type="checkbox" /> <label>No</label>
              </div>
          </div>


          <input
              type="text"
              placeholder="Have you taken any language proficiency tests?"
              className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-600 font-medium my-8"
              list="funding-options"
              required
          />
          <datalist id="funding-options">
              <option>IELTS</option>
              <option>TOEFL</option>
              <option>Duolingo</option>
              <option>IT and Computer Science</option>
          </datalist> */}

        <input
          type="number"
          placeholder="Your IELTS Score"
          className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-700 font-medium mb-8"
          required
        />

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

export default LanguageTab;
