

const Step2 = ({ goPrevStep, goNextStep }) => {
    return (
        <div className="lg:w-1/2 mx-auto my-12">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-center mb-4">Academic and career goals</h1>
            <p className="text-center text-[#334155] font-medium">Provide your details, and our expert counselors will reach out to connect you with the ideal course, country, university, and scholarship opportunities!</p>

            <form className="w-full space-y-8 mt-10">

                <input
                    type="text"
                    placeholder="What interests you?"
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
                    placeholder="At what stage do you want to study abroad?"
                    className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-700 font-medium"
                    list="funding-options"
                    required
                />
                <datalist id="funding-options">
                    <option>Bachelor program</option>
                    <option>Master&apos;s program</option>
                    <option>Ph.D./Research</option>
                    <option>Certificate or Short Course</option>
                </datalist>


                <input
                    type="text"
                    placeholder="What are your future career goals?"
                    className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-700 font-medium"
                    list="funding-options"
                    required
                />
                <datalist id="funding-options">
                    <option>Employed (salary focus on higher ranges)</option>
                    <option>Being an entrepreneur</option>
                    <option>Research and Academic Field</option>
                </datalist>

                <div className="flex items-center gap-4 mt-6">

                    <button onClick={goPrevStep} className="btn bg-transparent hover:bg-indigo-700 hover:text-white font-bold rounded-full border border-indigo-500 text-indigo-500 px-6 py-2 ">Back</button>
                    <button onClick={goNextStep} className="btn bg-indigo-500 hover:bg-indigo-700 font-bold rounded-full text-white px-6 py-2">Next</button>


                </div>


            </form>
        </div>
    );
};

export default Step2;