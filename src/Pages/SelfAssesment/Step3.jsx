const Step3 = ({ goPrevStep, goNextStep }) => {
    return (
        <div className="lg:w-1/2 mx-auto my-12">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-center mb-4">Language skills and testing</h1>
            <p className="text-center text-[#334155] font-medium">Provide your details, and our expert counselors will reach out to connect you with the ideal course, country, university, and scholarship opportunities!</p>

            <form className="mt-10">
                <div className="flex flex-col">
                    <label className="font-medium text-lg mb-3">Are You Fluent in English?</label>
                    <div className="ml-1">
                        <input type="checkbox" className="" /> <label className="mr-8">Yes</label>
                        <input type="checkbox" /> <label>No</label>
                    </div>
                </div>


                <input
                    type="text"
                    placeholder="Have you taken any language proficiency tests?"
                    className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-600 font-medium my-8"
                    list="funding-options"
                    required
                />
                <datalist id="funding-options">
                    <option>IELTS</option>
                    <option>TOEFL</option>
                    <option>Duolingo</option>
                    <option>IT and Computer Science</option>
                </datalist>

                <div className="flex items-center gap-4 mt-6">

                    <button onClick={goPrevStep} className="btn bg-transparent hover:bg-indigo-700 font-bold rounded-full border border-indigo-500 text-indigo-500 px-6 py-2 ">Back</button>
                    <button onClick={goNextStep} className="btn bg-indigo-500 hover:bg-indigo-700 font-bold rounded-full text-white px-6 py-2">Next</button>


                </div>

            </form>
        </div>
    );
};

export default Step3;