import discoverImg from "../assets/Image Container (1).png"

const DiscoverUniversities = () => {
    return (
        <div className="px-5 md:px-10 lg:px-20 my-10 py-10">
            <h1 className="font-Poppins text-2xl font-medium mt-3">United States of America</h1>
            <p className="font-Manrope text-md text-[#64748B]">We provide exceptional support and resources to make your study abroad journey smooth and successful.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-10">
                <div className="shadow-xl">
                    <div className="mb-4">
                        <img className="w-full" src={discoverImg} alt="" />
                    </div>
                    <div className="p-2">
                        <h3 className="text-[#0F172A] font-Poppins text-xl mb-3">United States of America</h3>

                        <p className="text-[#64748B] font-medium font-Manrope text-lg mb-3">We provide exceptional support and resources to make your study abroad journey smooth and successful.</p>
                        <a href="#" className="text-indigo-500 font-medium">Learn More <i className="fa-solid fa-greater-than text-sm font-normal ml-2"></i> </a>
                    </div>
                </div>

                <div className="shadow-xl">
                    <div className="mb-4">
                        <img className="w-full" src={discoverImg} alt="" />
                    </div>
                    <div className="p-2">
                        <h3 className="text-[#0F172A] font-Poppins text-xl mb-3">United States of America</h3>

                        <p className="text-[#64748B] font-medium font-Manrope text-lg mb-3">We provide exceptional support and resources to make your study abroad journey smooth and successful.</p>
                        <a href="#" className="text-indigo-500 font-medium">Learn More <i className="fa-solid fa-greater-than text-sm font-normal ml-2"></i> </a>
                    </div>
                </div>

                <div className="shadow-xl">
                    <div className="mb-4">
                        <img className="w-full" src={discoverImg} alt="" />
                    </div>
                    <div className="p-2">
                        <h3 className="text-[#0F172A] font-Poppins text-xl mb-3">United States of America</h3>

                        <p className="text-[#64748B] font-medium font-Manrope text-lg mb-3">We provide exceptional support and resources to make your study abroad journey smooth and successful.</p>
                        <a href="#" className="text-indigo-500 font-medium">Learn More <i className="fa-solid fa-greater-than text-sm font-normal ml-2"></i> </a>
                    </div>
                </div>

                <div className="shadow-xl">
                    <div className="mb-4">
                        <img className="w-full" src={discoverImg} alt="" />
                    </div>
                    <div className="p-2">
                        <h3 className="text-[#0F172A] font-Poppins text-xl mb-3">United States of America</h3>

                        <p className="text-[#64748B] font-medium font-Manrope text-lg mb-3">We provide exceptional support and resources to make your study abroad journey smooth and successful.</p>
                        <a href="#" className="text-indigo-500 font-medium">Learn More <i className="fa-solid fa-greater-than text-sm font-normal ml-2"></i> </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiscoverUniversities;