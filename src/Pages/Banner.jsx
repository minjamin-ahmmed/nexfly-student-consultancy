import ReactRotatingText from "react-rotating-text";
import bannerImg from "../../src/assets/Home page-HeroImage section image.png"
import "./banner.css"
import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between max-h-screen py-10 md:py-12 lg:py-20  px-5 md:px-10 lg:px-20 banner-style">

            <div>
                <h1 className="font-Poppins text-2xl lg:text-5xl md:text-3xl font-normal text-[#18181B] mb-6"> <ReactRotatingText items={["Turn your study abroad dreams into reality with Nexfly.", "Make your study abroad dreams come true with Nexfly.", "Bring your dream of studying abroad to life with Nexfly."]}></ReactRotatingText> </h1>
                <p className="font-Manrope text-lg font-normal text-[#334155] mb-10">Start your journey here.</p>
                <Link to="/selfAssesment"><button className="bg-indigo-500 rounded-[100px] font-bold hover:bg-indigo-700 text-white px-12 py-4">
                    Self Assesment
                </button></Link>
            </div>

            <div>
                <img src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;