import { MdOutlineArrowOutward } from "react-icons/md";
import logo from "../../assets/Color Logo.png"
import { NavLink } from "react-router-dom";
import bannerBG from "../../assets/background-gradiant.png"

const Navbar = () => {

    return (
        <div style={{
            backgroundImage: `url(${bannerBG})`,
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }} className="navbar px-5 md:px-10 lg:px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><NavLink to="/"> Home </NavLink></li>
                        <li><NavLink to="/aboutUs"> About Us </NavLink></li>
                        <li>
                            <a>Destination</a>
                            {/* <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul> */}
                        </li>

                        <li>
                            <a>Service</a>
                            {/* <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul> */}
                        </li>

                        <li><NavLink to="/contactUs"> Contact Us </NavLink></li>
                    </ul>
                </div>
                <div>
                    <img src={logo} alt="" />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to="/"> Home </NavLink></li>
                    <li> <NavLink to="/aboutUs"> About Us </NavLink></li>
                    <li>
                        <a>Destination</a>
                        {/* <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul> */}
                    </li>

                    <li>
                        <a>Service</a>
                        {/* <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul> */}
                    </li>

                    <li><NavLink to="/contactUs"> Contact Us </NavLink></li>
                </ul>
            </div>
            <div className="navbar-end gap-5">
                <button>Register Now</button>
                <div className="flex items-center justify-between lg:gap-4 border border-indigo-500 font-semibold pl-5 pr-1 py-1 rounded-[100px]">
                    <button className="text-indigo-500 text-md lg:text-lg">Sign in </button>
                    <p className="bg-indigo-500 p-2 rounded-full"> <MdOutlineArrowOutward className="text-white" /> </p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;