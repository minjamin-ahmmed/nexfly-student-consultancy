import adviceImg from "../assets/Filing system-bro 1.png"

const Advice = () => {
    return (
        <div className="bg-[#E0E7FF]">

            <div className="flex flex-col-reverse md:flex-row lg:flex-row items-center justify-between py-6 mb-10">
                <div className="px-5 md:px-10 lg:px-20 py-10">
                    <h1 className=" font-Poppins font-medium text-[#0F172A] text-2xl md:text-3xl lg:text-4xl mb-4">Get exclusive advice delivered straight to your inbox</h1>
                    <p className="font-Manrope text-md lg:text-lg text-[#64748B] mb-5">We provide exceptional support and resources to make your study abroad journey smooth and successful.</p>

                    <button className="bg-indigo-500 rounded-[100px] text-white font-normal px-12 py-4">
                        Sign In
                    </button>

                </div>

                <div>
                    <img className="w-full" src={adviceImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Advice;
