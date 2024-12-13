

const Step4 = ({ goPrevStep, goNextStep }) => {
    return (
        <div className="lg:w-1/2 mx-auto my-12">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-center mb-4">Financial Planning and Scholarships</h1>
            <p className="text-center text-[#334155] font-medium">Provide your details, and our expert counselors will reach out to connect you with the ideal course, country, university, and scholarship opportunities!</p>

            <form className="mt-10">
                <input
                    type="text"
                    placeholder="What is your budget for study abroad?"
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
                    <label className="font-medium text-lg mb-3">Are you interested in applying for a scholarship?</label>
                    <div className="ml-1">
                        <input type="checkbox" className="" /> <label className="mr-8">Yes</label>
                        <input type="checkbox" /> <label>No</label>
                    </div>
                </div>

                <div className="flex flex-col mt-8">
                    <label className="font-medium text-lg mb-3">Do you need funding support?</label>
                    <div className="ml-1">
                        <input type="checkbox" className="" /> <label className="mr-8">Yes</label>
                        <input type="checkbox" /> <label>No</label>
                    </div>
                </div>

                <div className="flex items-center gap-4 mt-8">

                    <button onClick={goPrevStep} className="btn bg-transparent hover:bg-indigo-700 font-bold rounded-full border border-indigo-500 text-indigo-500 px-6 py-2 ">Back</button>
                    <button onClick={goNextStep} className="btn bg-indigo-500 hover:bg-indigo-700 font-bold rounded-full text-white px-6 py-2">Next</button>


                </div>
            </form>
        </div>
    );
};

export default Step4;