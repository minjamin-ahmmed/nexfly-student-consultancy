import { motion } from "framer-motion";
import {
  CustomerServiceIcon,
  HeadsetIcon,
  Mail01Icon,
  UserLove02Icon,
} from "hugeicons-react";

const Contact = () => {
  return (
    <div className="p-5 md:p-10 lg:p-20 bg-indigo-50 flex flex-col lg:flex-row items-start justify-between gap-8">
      <motion.div
        initial={{ x: 80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="lg:w-1/2 mt-8"
      >
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-8">
          Contact Us
        </h1>
        <p className=" text-[#334155] font-medium mb-10">
          Accelerate your digital transformation.Improve your company's agility.
          Boost employee productivity and innovation. Equip employees to drive
          growth.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="flex items-center gap-2 bg-indigo-100 px-4 py-2 rounded-xl">
            <div>
              <Mail01Icon className="text-indigo-500" />
            </div>

            <p className="font-normal text-indigo-500 text-sm">
              nexfly.mail.com
            </p>
          </div>

          <div className="flex items-center gap-2 bg-indigo-100 px-4 py-2 rounded-xl">
            <div>
              <UserLove02Icon className="text-indigo-500" />
            </div>

            <p className="font-normal text-indigo-500 text-sm">
              Admin: 01234 56 789
            </p>
          </div>

          <div className="flex items-center gap-2 bg-indigo-100 px-4 py-2 rounded-xl">
            <div>
              <HeadsetIcon className="text-indigo-500" />
            </div>

            <p className="font-normal text-indigo-500 text-sm">
              Free Conslatent: 01234 56 789
            </p>
          </div>

          <div className="flex items-center gap-2 bg-indigo-100 px-4 py-2 rounded-xl">
            <div>
              <CustomerServiceIcon className="text-indigo-500" />
            </div>

            <p className="font-normal text-indigo-500 text-sm">
              Hotline: 01234 56 789
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="lg:w-1/2"
      >
        <form className="w-full space-y-6 mt-10">
          <input
            type="text"
            placeholder="Select"
            className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-700 font-medium"
            list="funding-options"
            required
          />
          <datalist id="funding-options">
            <option>Engineering</option>
            <option>Business and Management</option>
            <option>Medicine</option>
            <option>IT and Computer Science</option>
          </datalist>

          <input
            type="text"
            placeholder="Full Name"
            className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-700 font-medium"
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-700 font-medium"
            required
          />

          <input
            type="number"
            placeholder="Contact Number"
            className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-700 font-medium"
            required
          />

          <div className="flex flex-col md:flex-row items-center gap-4">
            <input
              type="text"
              placeholder="Country"
              className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-700 font-medium"
              list="countries"
              required
            />
            <datalist id="countries">
              <option>USA</option>
              <option>Australia</option>
              <option>Canada</option>
              <option>UK</option>
            </datalist>

            <input
              type="text"
              placeholder="Country Residence"
              className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-700"
              required
            />
          </div>

          <input
            type="text"
            placeholder="Type your questions here"
            className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-700 font-medium"
            required
          />

          <button className="btn bg-indigo-500 hover:bg-indigo-700 font-bold rounded-full text-white px-6 py-2">
            Submit
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
