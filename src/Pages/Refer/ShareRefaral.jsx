import helpImg from "../../assets/white-shirt.png";

const ShareRefaral = () => {
  return (
    <div className="px-5 md:px-10 lg:px-20 py-5 md:py-10 lg:py-20">
      <div className="mb-10">
        <h1 className="font-Poppins font-medium text-2xl md:text-3xl lg:text-4xl mb-4">
          Share Your Referral
        </h1>
        <p className="font-Manrope text-md lg:text-lg text-[#334155] lg:w-1/2">
          Help your loved ones elevate their careers by encouraging them to
          study abroad-now is the time! Imagine the transformative experiences
          they&apos;ll gain, from immersing in new cultures to accessing
          world-class education.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-stretch gap-4 mb-10">
        <div className="lg:w-1/2 flex items-center">
          <img
            className="bg-[#C7D2FE] rounded-2xl w-full lg:h-[380px] h-full object-contain"
            src={helpImg}
            alt="Help image"
          />
        </div>

        <div className="lg:w-1/2 flex items-center rounded-2xl">
          <form className="w-full font-Manrope space-y-8">
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

            <input
              type="email"
              placeholder="Email Address"
              className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-700 font-medium"
              required
            />

            <div className="flex flex-col md:flex-row items-center gap-4">
              <input
                type="text"
                placeholder="Your Mobile Number"
                className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-700 font-medium"
                required
              />
              <input
                type="text"
                placeholder="Preferred study level"
                className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-700 font-medium"
                list="study-level"
                required
              />

              <datalist id="study-level">
                <option>2024</option>
                <option>2025</option>
                <option>Later</option>
              </datalist>
            </div>

            {/* <div className="flex flex-col md:flex-row items-center gap-4">
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
               
                required
              />
              <datalist id="funding-options">
                <option>Self-funded</option>
                <option>Scholarship</option>
                <option>Loan</option>
              </datalist>
            </div> */}

            <div className="flex flex-col md:flex-row items-center gap-4">
              <input
                type="text"
                placeholder="Referral current Location"
                className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-700 font-medium"
                required
              />

              <input
                type="text"
                placeholder="Your Location"
                className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-700 font-medium"
                list="location"
                required
              />
              <datalist id="location">
                <option>Australia</option>
                <option>Canada</option>
                <option>UK</option>
              </datalist>
            </div>

            <div className="form-control mt-6">
              <button className="btn bg-indigo-500 hover:bg-indigo-700 font-bold rounded-full text-white px-6 py-2 lg:w-1/4">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ShareRefaral;
