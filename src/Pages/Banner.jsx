import bannerImg from "../../src/assets/Home page-HeroImage section image.png"
import "./banner.css"


const Banner = () => {
    return (
        <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between max-h-screen py-10 md:py-12 lg:py-20  px-5 md:px-10 lg:px-20 banner-style">

            <div>
                <h1 className="font-Poppins text-2xl lg:text-5xl md:text-3xl font-bold text-[#18181B] mb-6">Turn your study abroad dreams into reality with Nexfly.</h1>
                <p className="font-Manrope text-lg font-normal text-[#334155] mb-10">Start your journey here.</p>
                <button className="bg-indigo-500 rounded-[100px] text-white font-normal px-12 py-4">
                    Self Assesment
                </button>
            </div>

            <div>
                <img src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;