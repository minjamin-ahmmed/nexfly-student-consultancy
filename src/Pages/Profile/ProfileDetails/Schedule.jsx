import { Calendar03Icon, Time02Icon } from "hugeicons-react";
import Modal from "react-modal";
import { motion } from "framer-motion";
import { useState } from "react";
import cross from "../../../assets/clear.svg";
import Swal from "sweetalert2";

const Schedule = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSchedule, setSelectedSchedule] = useState("");
  const [isSelected, setIsSelected] = useState("");
  const [mainTopic, setMainTopic] = useState("");
  const [question, setQuestion] = useState("");
  const [bookingHistory, setBookingHistory] = useState([]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const confirmBooking = (e) => {
    e.preventDefault();

    // Ensure all required fields are filled
    if (!isSelected || !selectedSchedule || !mainTopic) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill all the required fields!",
      });

      return;
    }

    // Append the booking to the history
    const newBooking = {
      date: isSelected,
      schedule: selectedSchedule,
      mainTopic: mainTopic,
      question: question,
    };

    setBookingHistory([...bookingHistory, newBooking]);

    // Clear inputs and close modal
    setIsSelected("");
    setSelectedSchedule("");
    setMainTopic("");
    setQuestion("");
    closeModal();
  };

  const schedules = ["10.00 AM", "12.00 AM", "2.00 PM", "4.00 PM", "5.00 PM"];
  const dates = [
    { day: "Monday", date: 10, month: "JAN" },
    { day: "Wednesday", date: 12, month: "JAN" },
    { day: "Sunday", date: 16, month: "JAN" },
    { day: "Tuesday", date: 18, month: "JAN" },
    { day: "Thursday", date: 11, month: "SEP" },
  ];

  const getOptionStyle = (option, selected) => {
    return `px-4 py-2 text rounded-[100px] cursor-pointer text-sm ${
      option === selected
        ? "bg-indigo-500 text-white"
        : "bg-indigo-50 text-slate-900"
    }`;
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row items-start lg:items-center">
        <div className="lg:w-full">
          <h1 className="text-3xl font-medium text-slate-900 mb-4">Schedule</h1>
          <p className="text-slate-700 font-medium lg:w-3/4 mb-8">
            Provide your details, and our expert counselors will reach out to
            connect you with the ideal course, country, university, and
            scholarship opportunities!
          </p>
        </div>

        <div className="lg:w-1/2">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-indigo-500 px-12 py-4 rounded-[100px] font-semibold text-white"
          >
            Book Schedule
          </button>
          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="Booking Modal"
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
              <img src={cross} alt="close" />
            </button>

            <div>
              <h1 className="font-medium text-2xl text-slate-900 mb-2">
                Make Your <span className="text-indigo-500">Schedule!</span>
              </h1>

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
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-medium mb-4">
                  Make Your Schedule!
                </h3>
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

              <form onSubmit={confirmBooking} className="w-full font-Manrope">
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <input
                    type="text"
                    value={mainTopic}
                    onChange={(e) => setMainTopic(e.target.value)}
                    placeholder="Type Your Main Topic"
                    className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-700 font-medium"
                    required
                  />
                </div>

                <div className="mt-4">
                  <textarea
                    name="description"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    className="block w-full px-4 py-2 rounded-lg border border-[#CBD5E1] placeholder-slate-600"
                    placeholder="Add your question to this booking."
                    rows="3"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="btn bg-indigo-500 hover:bg-indigo-700 font-bold rounded-full text-white px-6 py-3 mt-4 w-full"
                  >
                    Confirm Booking
                  </button>
                </div>
              </form>
            </div>
          </Modal>
        </div>
      </div>

      <div>
        <h1 className="text-2xl font-medium my-6">Upcoming Schedule</h1>
        {bookingHistory.map((booking, index) => (
          <div
            key={index}
            className="lg:w-1/2 mt-2 bg-indigo-50 rounded-xl p-4"
          >
            <p className="text-slate-900 font-medium mb-4 text-xl">
              {booking.mainTopic}
            </p>
            {booking.question && (
              <p className="text-slate-700 mb-4">{booking.question}</p>
            )}

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-2 bg-indigo-100 px-4 py-2 rounded-lg">
                <h3 className="text-indigo-500">
                  {" "}
                  <Calendar03Icon />{" "}
                </h3>
                <p className="text-indigo-500 font-medium">
                  {booking.date} Jan 2024
                </p>
              </div>
              <div className="flex items-center gap-2 bg-indigo-100 px-4 py-2 rounded-lg">
                <h3 className="text-indigo-500">
                  {" "}
                  <Time02Icon />{" "}
                </h3>
                <p className="text-indigo-500 font-medium">
                  {booking.schedule}
                </p>
              </div>
            </div>

            <div className="mt-6">
              <button className="text-indigo-500 font-semibold border border-indigo-500 rounded-[100px] px-12 py-4 w-full">
                Join Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
