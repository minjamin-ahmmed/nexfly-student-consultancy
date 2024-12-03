import event1 from "../assets/Image Container.png"

const Events = () => {
    return (
        <div className="px-5 md:px-10 lg:px-20 py-10 mb-10">
            <h1 className="font-Poppins font-medium text-[#0F172A] text-2xl md:text-3xl lg:text-4xl mb-4">Our Advantages</h1>
            <p className="font-Manrope text-md lg:text-lg text-[#64748B] mb-10">We provide exceptional support and resources to make your study abroad journey smooth and successful.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="shadow-xl">
                    <div className="mb-4">
                        <img className="w-full" src={event1} alt="" />
                    </div>
                    <div className="p-2">
                        <h3 className="text-[#0F172A] font-Poppins text-xl mb-3">Tech Innovators Summit 2023: Celebrating 200+ Graduates from Leading Institutes</h3>
                        <p className="text-[#64748B] font-Manrope text-sm mb-3"> <i className="fa-regular fa-clock text-sm"> 22 Oct, 2024; 8:00 PM</i> </p>
                        <p className="text-[#64748B] font-medium font-Manrope text-lg mb-3">We provide exceptional support and resources to make your study abroad journey smooth and successful.</p>
                        <a href="#" className="text-indigo-500 font-medium">Learn More <i className="fa-solid fa-greater-than text-sm font-normal ml-2"></i> </a>
                    </div>
                </div>

                <div className="shadow-xl">
                    <div className="mb-4">
                        <img className="w-full" src={event1} alt="" />
                    </div>
                    <div className="p-2">
                        <h3 className="text-[#0F172A] font-Poppins text-xl mb-3">Tech Innovators Summit 2023: Celebrating 200+ Graduates from Leading Institutes</h3>
                        <p className="text-[#64748B] font-Manrope text-sm mb-3"> <i className="fa-regular fa-clock text-sm"> 22 Oct, 2024; 8:00 PM</i> </p>
                        <p className="text-[#64748B] font-medium font-Manrope text-lg mb-3">We provide exceptional support and resources to make your study abroad journey smooth and successful.</p>
                        <a href="#" className="text-indigo-500 font-medium">Learn More <i className="fa-solid fa-greater-than text-sm font-normal ml-2"></i> </a>
                    </div>
                </div>

                <div className="shadow-xl">
                    <div className="mb-4">
                        <img className="w-full" src={event1} alt="" />
                    </div>
                    <div className="p-2">
                        <h3 className="text-[#0F172A] font-Poppins text-xl mb-3">Tech Innovators Summit 2023: Celebrating 200+ Graduates from Leading Institutes</h3>
                        <p className="text-[#64748B] font-Manrope text-sm mb-3"> <i className="fa-regular fa-clock text-sm"> 22 Oct, 2024; 8:00 PM</i> </p>
                        <p className="text-[#64748B] font-medium font-Manrope text-lg mb-3">We provide exceptional support and resources to make your study abroad journey smooth and successful.</p>
                        <a href="#" className="text-indigo-500 font-medium">Learn More <i className="fa-solid fa-greater-than text-sm font-normal ml-2"></i> </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;