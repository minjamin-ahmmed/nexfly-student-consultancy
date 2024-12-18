import Modal from "react-modal";
import { useState } from "react";
import cross from "../../assets/clear.svg";
import check from "../../assets/Featured icon.png";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Step5 = ({ goPrevStep }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedChoice, setSelectedChoice] = useState("");

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const countries = [
    "United States",
    "Canada",
    "UK",
    "Australia",
    "Germany",
    "Denmark",
    "Finland",
    "Poland",
    "Sweden",
    "Norway",
    "Others",
  ];

  const choices = ["Yes", "No"];

  const getOptionStyle = (option, selected) => {
    return `px-4 py-2 text rounded-[100px] cursor-pointer text-sm
        ${
          option === selected
            ? "bg-indigo-500 text-white"
            : "bg-indigo-50 text-slate-900"
        }`;
  };

  return (
    <div className="lg:w-1/2 mx-auto my-12">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-center mb-4">
        Preferred country and university
      </h1>
      <p className="text-center text-[#334155] font-medium">
        Provide your details, and our expert counselors will reach out to
        connect you with the ideal course, country, university, and scholarship
        opportunities!
      </p>

      <div className="mt-10 ">
        <h2 className="text-slate-900 text-lg font-medium mb-4">
          Which country are you interested in studying in?
        </h2>

        <div className="flex flex-wrap gap-4">
          {countries.map((country, index) => (
            <motion.div
              key={index}
              className={getOptionStyle(country, selectedCountry)}
              onClick={() => setSelectedCountry(country)}
              animate={
                country === selectedCountry
                  ? {
                      scale: 1.1,
                      boxShadow: "0px 0px 10px rgba(99, 102, 241, 0.6)",
                    }
                  : { scale: 1, boxShadow: "none" }
              }
              transition={{ type: "tween", stiffness: 300 }}
            >
              {country}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-slate-900 text-lg font-medium mb-4">
          Do you have a particular university of your choice?
        </h2>

        <div className="flex flex-wrap gap-4">
          {choices.map((choice, index) => (
            <motion.div
              key={index}
              className={getOptionStyle(choice, selectedChoice)}
              onClick={() => setSelectedChoice(choice)}
              animate={
                choice === selectedChoice
                  ? {
                      scale: 1.1,
                      boxShadow: "0px 0px 10px rgba(99, 102, 241, 0.6)",
                    }
                  : { scale: 1, boxShadow: "none" }
              }
              transition={{ type: "tween", stiffness: 300 }}
            >
              {choice}
            </motion.div>
          ))}
        </div>
      </div>

      <form className="mt-10">
        {/* <input
                    type="text"
                    placeholder="Which country are you interested in studying in?"
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
                    <label className="font-medium text-lg mb-3">Do you have a particular university of your choice?</label>
                    <div className="ml-1">
                        <input type="checkbox" className="" /> <label className="mr-8">Yes</label>
                        <input type="checkbox" /> <label>No</label>
                    </div>

                </div> */}
        <div className="mt-12">
          <textarea
            name="description"
            className="block w-full px-4 py-2 rounded-lg border border-[#CBD5E1] placeholder-slate-600"
            placeholder="If you have any special requests or questions, write them down."
            rows="3"
          ></textarea>
        </div>

        
      </form>
      <div className="flex items-center gap-4 mt-8">
          <button
            onClick={goPrevStep}
            className="btn bg-transparent hover:bg-indigo-700 font-bold rounded-full border border-indigo-500 text-indigo-500 px-6 py-2 "
          >
            Back
          </button>

          <button
            onClick={() => setIsModalOpen(!isModalOpen)}
            className="btn bg-indigo-500 hover:bg-indigo-700 font-bold rounded-full text-white px-6 py-2"
          >
            Next
          </button>
          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="Welcome Modal"
            style={{
              content: {
                top: "50%",
                left: "50%",
                right: "auto",
                bottom: "auto",
                marginRight: "-50%",
                transform: "translate(-50%, -50%)",
                padding: "30px",
                borderRadius: "16px",
                maxWidth: "500px",
                width: "90%",
                maxHeight: "90vh",
                position: "relative",
                overflowY: "auto",
              },
              overlay: {
                backgroundColor: "rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <button
              onClick={closeModal}
              className="absolute top-[4px] right-[4px] lg:top-[12px] lg:right-[12px] text-slate-950 hover:text-gray-800 focus:outline-none"
              style={{
                fontSize: "2rem",
                border: "none",
                background: "none",
                cursor: "pointer",
              }}
            >
              <img src={cross} alt="" />
            </button>

            <div className="space-y-5">
              <div>
                <img src={check} alt="" />
              </div>

              <h4 className="text-xl font-medium">
                Your self-assessment was successful.
              </h4>
              <p className="text-zinc-500 text-sm">
                Click on the Results button to view your Self-Assessment
                results.
              </p>

              <div className="flex items-center gap-4">
                <button
                  onClick={closeModal}
                  className="btn bg-transparent hover:bg-indigo-700 font-bold rounded-full border border-indigo-500 text-indigo-500 px-6 py-2 "
                >
                  Back
                </button>

                <NavLink to="/enquire-result">
                  <button className="btn bg-indigo-500 hover:bg-indigo-700 font-bold rounded-full text-white px-6 py-2">
                    Result
                  </button>
                </NavLink>
              </div>
            </div>
          </Modal>
        </div>
    </div>
  );
};

export default Step5;
