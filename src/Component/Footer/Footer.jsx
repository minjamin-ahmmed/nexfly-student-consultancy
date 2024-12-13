import { BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaSkype } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";
import whiteLogo from "../../assets/Mask group.png"
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-[#1E293B] text-white">
            <div className="w-11/12 mx-auto footer mb-12  px-10 pt-10">
                <aside>
                    <div>
                        <Link to="/"><img src={whiteLogo} alt="" /></Link>
                    </div>
                    <div className="space-y-4">
                        <p>Hello@nexfly.com </p>
                        <p>+01 ( 1234 567 890 )</p>
                    </div>
                    <div className="space-y-4">
                        <p className="text-lg font-medium">Follow Us</p>
                        <div className="flex items-center gap-3 ">
                            <div className="bg-[#ffffff14] rounded-md px-3 py-2 "> <FaFacebook className="text-xl" /></div>
                            <div className="bg-[#ffffff14] rounded-md px-3 py-2 "> <ImTwitter className="text-xl" /></div>
                            <div className="bg-[#ffffff14] rounded-md px-3 py-2 "> <BsLinkedin className="text-xl" /></div>
                            <div className="bg-[#ffffff14] rounded-md px-3 py-2 "> <FaSkype className="text-xl" /></div>
                        </div>
                    </div>

                </aside>
                <nav>
                    <h6 className=" text-white text-xl font-medium">About Us</h6>
                    <a className="link link-hover font-light text-md text-[#CBD5E1]">Support Center</a>
                    <a className="link link-hover font-light text-md text-[#CBD5E1]">Customer Support</a>
                    <a className="link link-hover font-light text-md text-[#CBD5E1]">About Us</a>
                    <a className="link link-hover font-light text-md text-[#CBD5E1]">Copyright</a>
                    <a className="link link-hover font-light text-md text-[#CBD5E1]">Why Choose Nexfly</a>
                </nav>
                <nav>
                    <h6 className=" text-white text-xl font-medium">Our Information</h6>
                    <a className="link link-hover font-light text-md text-[#CBD5E1]">Return Policy</a>
                    <a className="link link-hover font-light text-md text-[#CBD5E1]">Privacy Policy</a>
                    <a className="link link-hover font-light text-md text-[#CBD5E1]">Terms and Conditions</a>
                    <a className="link link-hover font-light text-md text-[#CBD5E1]">Site Map</a>
                    <a className="link link-hover font-light text-md text-[#CBD5E1]">Store Hours </a>
                </nav>
                <nav>
                    <h6 className=" text-white text-xl font-medium">My Account</h6>
                    <a className="link link-hover font-light text-md text-[#CBD5E1]">Press Inquiries</a>
                    <a className="link link-hover font-light text-md text-[#CBD5E1]">Social Media Directories</a>
                    <a className="link link-hover font-light text-md text-[#CBD5E1]">Images & B-roll</a>
                    <a className="link link-hover font-light text-md text-[#CBD5E1]">Permissions</a>
                    <a className="link link-hover font-light text-md text-[#CBD5E1]">Speaker Requests </a>
                </nav>
            </div>

            <div className="bg-[#ffffff14] w-full mx-auto ">
                <div className="w-11/12 mx-auto px-10 py-2 flex items-center justify-between">
                    <h3 className="text-sm font-light text-[#ffffff60]">2024@nexfly.com</h3>
                    <h3 className="text-sm font-light text-[#ffffff60]">Terms Conditions & Policy</h3>
                </div>

            </div>
        </footer>
    );
};

export default Footer;