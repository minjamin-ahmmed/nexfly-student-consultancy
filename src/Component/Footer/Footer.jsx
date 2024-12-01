import { BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaSkype } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";

const Footer = () => {
    return (
        <footer className="bg-[#1E293B] text-white">
            <div className="w-11/12 mx-auto footer mb-12  px-10 pt-10">
                <aside>
                    <svg
                        width="50"
                        height="50"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        className="fill-current">
                        <path
                            d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
                    </svg>
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