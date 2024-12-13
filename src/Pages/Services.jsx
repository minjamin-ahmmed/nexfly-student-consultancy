import icon1 from "../assets/Icon1.png"
import icon2 from "../assets/Icon2.png"
import icon3 from "../assets/Icon3.png"
import icon4 from "../assets/Icon4.png"
import elementIcon from "../assets/elements.svg"
const Services = () => {
    return (
        <div className="px-5 md:px-10 lg:px-20 py-5 md:py-10 lg:pb-20">
            <h1 className="font-Poppins font-medium text-2xl md:text-3xl lg:text-4xl mb-4">Services</h1>
            <p className="font-Manrope text-md lg:text-lg text-[#334155] lg:w-1/2">We provide exceptional support and resources to make your study abroad journey smooth and successful.</p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 p-4">
                <div>
                    <div className="mb-3">
                        <img src={icon1} alt="" />
                    </div>
                    <h3 className="font-Poppins text-2xl font-medium mb-3">Support with <br /> applications</h3>
                    <p className="font-Manrope text-md text-[#64748B] mb-3">We provide exceptional support and resources to make your study abroad journey smooth and successful.</p>
                    <div className="flex items-center gap-2">
                        <a href="#" className="text-indigo-500 font-medium">Learn More</a>
                        <img src={elementIcon} alt="Element Icon" />
                    </div>
                </div>

                <div>
                    <div className="mb-3" >
                        <img src={icon2} alt="" />
                    </div>
                    <h3 className="font-Poppins text-2xl font-medium mb-3">Student Admission Services</h3>
                    <p className="font-Manrope text-md text-[#64748B] mb-3">We provide exceptional support and resources to make your study abroad journey smooth and successful.</p>
                    <div className="flex items-center gap-2">
                        <a href="#" className="text-indigo-500 font-medium">Learn More</a>
                        <img src={elementIcon} alt="Element Icon" />
                    </div>
                </div>

                <div >
                    <div className="mb-3">
                        <img src={icon3} alt="" />
                    </div>
                    <h3 className="font-Poppins text-2xl font-medium mb-3">Compliance <br />
                        Assistance</h3>
                    <p className="font-Manrope text-md text-[#64748B] mb-3">We provide exceptional support and resources to make your study abroad journey smooth and successful.</p>
                    <div className="flex items-center gap-2">
                        <a href="#" className="text-indigo-500 font-medium">Learn More</a>
                        <img src={elementIcon} alt="Element Icon" />
                    </div>
                </div>

                <div>
                    <div className="mb-3">
                        <img src={icon4} alt="" />
                    </div>
                    <h3 className="font-Poppins text-2xl font-medium mb-3">Free Counselling for Student</h3>
                    <p className="font-Manrope text-md text-[#64748B] mb-3">We provide exceptional support and resources to make your study abroad journey smooth and successful.</p>
                    <div className="flex items-center gap-2">
                        <a href="#" className="text-indigo-500 font-medium">Learn More</a>
                        <img src={elementIcon} alt="Element Icon" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;