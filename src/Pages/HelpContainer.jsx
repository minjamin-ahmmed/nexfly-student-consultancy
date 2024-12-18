import { motion } from "framer-motion";
import helpImg from "../assets/red-tshirt-women.png";

function HelpContainer() {
  return (
    <div className="px-5 md:px-10 lg:px-20 py-5 md:py-10 lg:py-20">
      {/* Header Section */}
      <div className="mb-10">
        <h1 className="font-Poppins font-medium text-2xl md:text-3xl lg:text-4xl mb-4">
          Nexfly can help you
        </h1>
        <p className="text-md lg:text-lg text-[#334155] lg:w-1/2">
          Provide your details, and our expert counselors will reach out to
          connect you with the ideal course, country, university, and
          scholarship opportunities!
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-stretch gap-4 mb-10">
        {/* Image Animation: Slide from Left on Scroll */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="lg:w-1/2 flex items-center"
        >
          <img
            className="bg-[#C7D2FE] rounded-2xl w-full lg:h-[450px] h-full object-contain"
            src={helpImg}
            alt="Help image"
          />
        </motion.div>

        {/* Form Animation: Slide from Right on Scroll */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="lg:w-1/2 flex items-center rounded-2xl"
        >
          <form className="w-full font-Manrope space-y-8">
            {/* Name Fields */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-700 font-medium"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-700 font-medium"
                required
              />
            </div>

            {/* Email Field */}
            <input
              type="email"
              placeholder="Email Address"
              className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-700 font-medium"
              required
            />

            {/* Mobile Fields */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <input
                type="text"
                placeholder="Your Mobile Number"
                className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-700 font-medium"
                required
              />
              <input
                type="text"
                placeholder="Parent Mobile Number"
                className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-700 font-medium"
                required
              />
            </div>

            {/* Dropdown Fields */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <input
                type="text"
                placeholder="When do you plan to study"
                className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-700 font-medium"
                list="study-plan"
                required
              />
              <datalist id="study-plan">
                <option>2024</option>
                <option>2025</option>
                <option>Later</option>
              </datalist>

              <input
                type="text"
                placeholder="How would you fund your education"
                className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-700 font-medium"
                list="funding-options"
                required
              />
              <datalist id="funding-options">
                <option>Self-funded</option>
                <option>Scholarship</option>
                <option>Loan</option>
              </datalist>
            </div>

            {/* Study Level and Location */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <input
                type="text"
                placeholder="Preferred Study Level"
                className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-700 font-medium"
                list="study-level"
                required
              />
              <datalist id="study-level">
                <option>Bachelor&apos;s</option>
                <option>Master&apos;s</option>
                <option>PhD</option>
              </datalist>

              <input
                type="text"
                placeholder="Your Location"
                className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-700 font-medium"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
              <button className="btn bg-indigo-500 hover:bg-indigo-700 font-bold rounded-full text-white px-6 py-2 lg:w-1/4">
                Enquire
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default HelpContainer;
