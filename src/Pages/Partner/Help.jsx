import helpImg from "../../assets/red-tshirt-women.png";

const Help = () => {
  return (
    <div className="px-5 md:px-10 lg:px-20 py-5 md:py-10 lg:py-20">
      <div className="mb-10">
        <h1 className="font-Poppins font-medium text-2xl md:text-3xl lg:text-4xl mb-4">
          Nexfly can help you
        </h1>
        <p className="font-Manrope text-md lg:text-lg text-[#334155] lg:w-1/2">
          Provide your details, and our expert counselors will reach out to
          connect you with the ideal course, country, university, and
          scholarship opportunities!
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-stretch gap-4 mb-10">
        <div className="lg:w-1/2 flex items-center">
          <img
            className="bg-[#C7D2FE] rounded-2xl w-full lg:h-[300px] h-full object-contain"
            src={helpImg}
            alt="Help image"
          />
        </div>

        <div className="lg:w-1/2 flex items-center rounded-2xl">
          <form className="w-full font-Manrope space-y-4">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <input
                type="text"
                placeholder="Business Name"
                className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-700 font-medium"
                required
              />
              <input
                type="text"
                placeholder="Your Role"
                className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-700 font-medium"
                list="role"
                required
              />
              <datalist id="role">
                <option>2024</option>
                <option>2025</option>
                <option>Later</option>
              </datalist>
            </div>

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

            <div className="flex flex-col md:flex-row items-center gap-4">
              <input
                type="email"
                placeholder="Business Email"
                className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-700 font-medium"
                required
              />
              <input
                type="number"
                placeholder="Contract Number"
                className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-700 font-medium"
                required
              />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4">
              <input
                type="text"
                placeholder="Country"
                className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-700 font-medium"
                required
              />
              <input
                type="text"
                placeholder="Residence"
                className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-700 font-medium"
                list="residence"
                required
              />

              <datalist id="role">
                <option>UK</option>
                <option>Australia</option>
                <option>Canada</option>
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

export default Help;
