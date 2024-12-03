import icon1 from "../assets/Icon1.png"
import icon2 from "../assets/Icon2.png"
import icon3 from "../assets/Icon3.png"
import icon4 from "../assets/Icon4.png"
const Services = () => {
    return (
        <div className="px-5 md:px-10 lg:px-20 my-14">
            <h1 className="font-Poppins font-medium text-2xl md:text-3xl lg:text-4xl mb-4">Services</h1>
            <p className="font-Manrope text-md lg:text-lg text-[#334155]">We provide exceptional support and resources to make your study abroad journey smooth and successful.</p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
                <div>
                    <div>
                        <img src={icon1} alt="" />
                    </div>
                    <h3 className="font-Poppins text-2xl font-medium mt-3">Support with applications</h3>
                    <p className="font-Manrope text-md text-[#64748B]">We provide exceptional support and resources to make your study abroad journey smooth and successful.</p>
                    <a href="#" className="text-indigo-500 font-medium">Learn More <i className="fa-solid fa-greater-than text-sm font-normal ml-2"></i> </a>
                </div>

                <div>
                    <div>
                        <img src={icon2} alt="" />
                    </div>
                    <h3 className="font-Poppins text-2xl font-medium mt-3">Student Admission Services</h3>
                    <p className="font-Manrope text-md text-[#64748B]">We provide exceptional support and resources to make your study abroad journey smooth and successful.</p>
                    <a href="#" className="text-indigo-500 font-medium">Learn More <i className="fa-solid fa-greater-than text-sm font-normal ml-2"></i> </a>
                </div>

                <div >
                    <div>
                        <img src={icon3} alt="" />
                    </div>
                    <h3 className="font-Poppins text-2xl font-medium mt-3">Compliance
                        Assistance</h3>
                    <p className="font-Manrope text-md text-[#64748B]">We provide exceptional support and resources to make your study abroad journey smooth and successful.</p>
                    <a href="#" className="text-indigo-500 font-medium">Learn More <i className="fa-solid fa-greater-than text-sm font-normal ml-2"></i> </a>
                </div>

                <div>
                    <div>
                        <img src={icon4} alt="" />
                    </div>
                    <h3 className="font-Poppins text-2xl font-medium mt-3">Free Counselling for Student</h3>
                    <p className="font-Manrope text-md text-[#64748B]">We provide exceptional support and resources to make your study abroad journey smooth and successful.</p>
                    <a href="#" className="text-indigo-500 font-medium">Learn More <i className="fa-solid fa-greater-than text-sm font-normal ml-2"></i> </a>
                </div>
            </div>
        </div>
    );
};

export default Services;