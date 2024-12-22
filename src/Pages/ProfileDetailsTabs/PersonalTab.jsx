const PersonalTab = ({ handleNext }) => {
  return (
    <div>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-center mb-4">
        Personal information
      </h1>
      <p className="text-center text-[#334155] font-medium">
        Provide your details, and our expert counselors will reach out to
        connect you with the ideal course, country, university, and scholarship
        opportunities!
      </p>

      <form className="w-full space-y-6 mt-10">
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
            type="number"
            placeholder="Your Age"
            className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-700 font-medium"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-700 font-medium"
            required
          />
        </div>

        <input
          type="text"
          placeholder="Current Educational Qualification"
          className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-700 font-medium"
          required
        />

        <input
          type="text"
          placeholder="Current Institute"
          className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-700 font-medium"
          required
        />

        <input
          type="text"
          placeholder="Last Education Information"
          className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-700 font-medium"
          required
        />

        <div className="flex flex-col md:flex-row items-center gap-4">
          <input
            type="number"
            placeholder="Result"
            className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-700 font-medium"
            required
          />
          <input
            type="number"
            placeholder="Passing Year"
            className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-700 font-medium"
            required
          />
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4 w-full max-w-2xl">
          <button className="px-12 py-4 bg-white rounded-[100px] text-indigo-500 border border-indigo-500 font-medium">
            Close
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

export default PersonalTab;
