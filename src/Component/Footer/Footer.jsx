import { BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaSkype } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";
import whiteLogo from "../../assets/Mask group.png";
import { Link } from "react-router-dom";
import qrCode from "../../assets/QR_code_for_mobile_English_Wikipedia.svg";
import smallQr from "../../assets/qr_code_scanner.svg";
const Footer = () => {
  return (
    <footer className="bg-[#1E293B] text-white">
      <div className="w-11/12 mx-auto footer mb-12  px-10 pt-10">
        <aside>
          <div>
            <Link to="/">
              <img src={whiteLogo} alt="" />
            </Link>
          </div>
          <div className="space-y-4">
            <p>Hello@nexfly.com </p>
            <p>+01 ( 1234 567 890 )</p>
          </div>
          <div className="space-y-4">
            <p className="text-lg font-medium">Follow Us</p>
            <div className="flex items-center gap-3 ">
              <div className="bg-[#ffffff14] rounded-md px-3 py-2 ">
                {" "}
                <FaFacebook className="text-xl" />
              </div>
              <div className="bg-[#ffffff14] rounded-md px-3 py-2 ">
                {" "}
                <ImTwitter className="text-xl" />
              </div>
              <div className="bg-[#ffffff14] rounded-md px-3 py-2 ">
                {" "}
                <BsLinkedin className="text-xl" />
              </div>
              <div className="bg-[#ffffff14] rounded-md px-3 py-2 ">
                {" "}
                <FaSkype className="text-xl" />
              </div>
            </div>
          </div>
        </aside>
        <nav>
          <h6 className=" text-white text-xl font-medium">About Us</h6>
          <Link to="/aboutUs">
            <p className="link link-hover font-light text-md text-[#CBD5E1]">
              About Us
            </p>
          </Link>
          <p className="link link-hover font-light text-md text-[#CBD5E1]">
            Service
          </p>
          <Link to="contactUs">
            <p className="link link-hover font-light text-md text-[#CBD5E1]">
              Contact Us
            </p>
          </Link>

          <Link to="/became-partner">
            <p className="link link-hover font-light text-md text-[#CBD5E1]">
              Became a Partner
            </p>
          </Link>
          <Link to="/refer">
            <p className="link link-hover font-light text-md text-[#CBD5E1]">
              Refer
            </p>
          </Link>
        </nav>
        <nav>
          <h6 className=" text-white text-xl font-medium">Our Information</h6>
          <a className="link link-hover font-light text-md text-[#CBD5E1]">
            Return Policy
          </a>
          <a className="link link-hover font-light text-md text-[#CBD5E1]">
            Privacy Policy
          </a>
          <a className="link link-hover font-light text-md text-[#CBD5E1]">
            Terms and Conditions
          </a>
          <a className="link link-hover font-light text-md text-[#CBD5E1]">
            Site Map
          </a>
          <a className="link link-hover font-light text-md text-[#CBD5E1]">
            Store Hours{" "}
          </a>
        </nav>
        <nav>
          <h6 className=" text-white text-xl font-medium">Popular Courses</h6>
          <a className="link link-hover font-light text-md text-[#CBD5E1]">
            Course 1
          </a>
          <a className="link link-hover font-light text-md text-[#CBD5E1]">
            Course 2
          </a>
          <a className="link link-hover font-light text-md text-[#CBD5E1]">
            Course 3
          </a>
          <a className="link link-hover font-light text-md text-[#CBD5E1]">
            Course 4
          </a>
          <a className="link link-hover font-light text-md text-[#CBD5E1]">
            Course 5
          </a>
        </nav>

        <nav className="bg-slate-700 p-4 rounded-xl">
          <img className="bg-white rounded-xl w-40 h-40" src={qrCode} alt="" />
          <div className="flex items-center justify-center gap-4">
            <div>
              <img src={smallQr} alt="" />
            </div>
            <p className="text-white font-medium text-lg">Scan Me</p>
          </div>
        </nav>
      </div>

      <div className="bg-[#ffffff14] w-full mx-auto ">
        <div className="w-11/12 mx-auto px-10 py-2 flex items-center justify-between">
          <h3 className="text-sm font-light text-[#ffffff60]">
            2024@nexfly.com
          </h3>
          <h3 className="text-sm font-light text-[#ffffff60]">
            Terms Conditions & Policy
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
