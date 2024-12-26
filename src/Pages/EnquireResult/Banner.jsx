import Modal from "react-modal";
import bgImg from "../../assets/background-gradiant.png";
import "../banner.css";
import cross from "../../assets/clear.svg";
import { useEffect, useState } from "react";
import "../banner.css";
import { motion } from "framer-motion";

const Banner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSchedule, setSelectedSchedule] = useState("");
  const [isSelected, setIsSelected] = useState("");
  const [dates, setDates] = useState([]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const generateDates = () => {
      const dateList = [];
      const today = new Date();
      const dayNames = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const monthNames = [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC",
      ];

      for (let i = 0; i < 5; i++) {
        const futureDate = new Date(today);
        futureDate.setDate(today.getDate() + i);

        dateList.push({
          day: dayNames[futureDate.getDay()],
          month: monthNames[futureDate.getMonth()],
          date: futureDate.getDate(),
        });
      }

      setDates(dateList);
    };

    generateDates();
  }, []);

  const schedules = ["10.00 AM", "12.00 AM", "2.00 PM", "4.00 PM", "5.00 PM"];
  // const dates = [
  //   { day: "Monday", date: 10, month: "JAN" },
  //   { day: "Wednesday", date: 12, month: "JAN" },
  //   { day: "Sunday", date: 16, month: "JAN" },
  //   { day: "Tuesday", date: 18, month: "JAN" },
  //   { day: "Thursday", date: 11, month: "SEP" },
  // ];

  //   const getCardStyle = (selected) => {
  //     return `rounded-2xl border px-2 py-2 ${
  //       selected
  //         ? "border-indigo-500 bg-indigo-500 text-white"
  //         : "border-slate-500 bg-white text-slate-500"
  //     }`;
  //   };

  const getOptionStyle = (option, selected) => {
    return `px-4 py-2 text rounded-[100px] cursor-pointer text-sm
    ${
      option === selected
        ? "bg-indigo-500 text-white"
        : "bg-indigo-50 text-slate-900"
    }`;
  };

  return (
    <div className="max-h-screen py-10 md:py-12 lg:py-20  px-5 md:px-10 lg:px-40 banner-style2">
      <div>
        <h1 className="font-Poppins text-2xl lg:text-5xl md:text-3xl font-normal text-[#18181B] mb-6">
          Your Enquire Result{" "}
        </h1>
        <p className="font-Manrope text-lg font-normal text-[#334155] mb-10 lg:w-1/2">
          {" "}
          Provide your details, and our expert counselors will reach out to
          connect you with the ideal course, country, university, and
          scholarship opportunities!
        </p>

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
              maxWidth: "700px",
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

          <div>
            <h1 className="font-medium text-2xl text-slate-900 mb-2">
              Make Your <span className="text-indigo-500">Schedule!</span>
            </h1>

            <p className="text-slate-900 text-[16px] mb-4">
              A well-planned schedule is your secret to staying focused and
              achieving more.
            </p>

            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Select a Date</h2>

              <div className="grid grid-cols-2 lg:grid-cols-5 gap-5">
                {dates.map((date, index) => (
                  <motion.div
                    key={index}
                    className={`rounded-[16px] border cursor-pointer ${
                      isSelected === date.date
                        ? "border-indigo-500"
                        : "border-slate-500"
                    }`}
                    onClick={() => setIsSelected(date.date)}
                    animate={
                      isSelected === date.date
                        ? {
                            scale: 1.1,
                            boxShadow: "0px 0px 10px rgba(99, 102, 241, 0.6)",
                          }
                        : { scale: 1, boxShadow: "none" }
                    }
                    transition={{ type: "tween", stiffness: 300 }}
                  >
                    <div>
                      <div
                        className={`p-1 rounded-t-[15px] border-b ${
                          isSelected === date.date
                            ? "bg-indigo-500"
                            : "bg-white"
                        }`}
                      >
                        <h2
                          className={`font-medium text-center ${
                            isSelected === date.date
                              ? "text-white"
                              : "text-slate-500"
                          }`}
                        >
                          {date.day}
                        </h2>
                      </div>
                      <div className="flex items-end justify-between mt-1 p-2">
                        <h3
                          className={`font-bold text-2xl ${
                            isSelected === date.date
                              ? "text-indigo-500 text-4xl"
                              : "text-slate-500 text-4xl"
                          }`}
                        >
                          {date.date}
                        </h3>
                        <p
                          className={`${
                            isSelected === date.date
                              ? "text-indigo-500 font-medium"
                              : "text-slate-500"
                          }`}
                        >
                          {date.month}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* <div className="rounded-2xl border border-indigo-500">
                  <div className="border-b border-indigo-500 bg-indigo-500 px-2 py-2 rounded-t-2xl">
                    <h2 className="text-white font-medium">Monday</h2>
                  </div>
                  <div className="p-2 flex items-end justify-between">
                    <h3 className="font-semibold text-2xl text-indigo-500">
                      10
                    </h3>
                    <p className="text-indigo-500">Jan</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-indigo-500">
                  <div className="border-b border-indigo-500 bg-indigo-500 px-2 py-2 rounded-t-2xl">
                    <h2 className="text-white font-medium">Monday</h2>
                  </div>
                  <div className="p-2 flex items-end justify-between">
                    <h3 className="font-semibold text-2xl text-indigo-500">
                      10
                    </h3>
                    <p className="text-indigo-500">Jan</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-indigo-500">
                  <div className="border-b border-indigo-500 bg-indigo-500 px-2 py-2 rounded-t-2xl">
                    <h2 className="text-white font-medium">Monday</h2>
                  </div>
                  <div className="p-2 flex items-end justify-between">
                    <h3 className="font-semibold text-2xl text-indigo-500">
                      10
                    </h3>
                    <p className="text-indigo-500">Jan</p>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-medium mb-4">Make Your Schedule!</h3>
              <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-2">
                {schedules.map((schedule, index) => (
                  <motion.div
                    animate={
                      schedule === selectedSchedule
                        ? {
                            scale: 1.1,
                            boxShadow: "0px 0px 10px rgba(99, 102, 241, 0.6)",
                          }
                        : { scale: 1, boxShadow: "none" }
                    }
                    transition={{ type: "tween", stiffness: 300 }}
                    className={getOptionStyle(schedule, selectedSchedule)}
                    onClick={() => setSelectedSchedule(schedule)}
                    key={index}
                  >
                    {schedule}
                  </motion.div>
                ))}
              </div>
            </div>

            <form className="w-full font-Manrope">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <input
                  type="text"
                  placeholder="Type Your Passport Expiry Date"
                  className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-700 font-medium"
                  required
                />
                <input
                  type="text"
                  placeholder="Type Your Main Topic"
                  className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-700 font-medium"
                  required
                />
              </div>

              <div className="mt-4">
                <textarea
                  name="description"
                  className="block w-full px-4 py-2 rounded-lg border border-[#CBD5E1] placeholder-slate-600"
                  placeholder="Add your question to this booking."
                  rows="3"
                ></textarea>
              </div>

              <div>
                <button
                  onClick={closeModal}
                  className="btn bg-indigo-500 hover:bg-indigo-700 font-bold rounded-full text-white px-6 py-2 mt-4 w-full"
                >
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        </Modal>

        <button
          onClick={() => setIsModalOpen(!isModalOpen)}
          className="bg-indigo-500 rounded-[100px] font-bold hover:bg-indigo-700 text-white px-12 py-4"
        >
          Book Schedule
        </button>
      </div>
    </div>
  );
};

export default Banner;
