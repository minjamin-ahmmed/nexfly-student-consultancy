import { Link } from "react-router-dom";


const Step1 = ({ goNextStep }) => {
    return (
        <div className="lg:w-1/2 mx-auto my-12">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-center mb-4">Personal information</h1>
            <p className="text-center text-[#334155] font-medium">Provide your details, and our expert counselors will reach out to connect you with the ideal course, country, university, and scholarship opportunities!</p>

            <form className="w-full space-y-8 mt-10">
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

                <div className="flex items-center gap-4 mt-6">

                    <Link to="/"><button className="btn bg-transparent hover:bg-indigo-700 font-bold rounded-full border border-indigo-500 text-indigo-500 px-6 py-2 ">Close</button></Link>
                    <button onClick={goNextStep} className="btn bg-indigo-500 hover:bg-indigo-700 font-bold rounded-full text-white px-6 py-2">Next</button>


                </div>





            </form>







        </div>
    );
};

export default Step1;