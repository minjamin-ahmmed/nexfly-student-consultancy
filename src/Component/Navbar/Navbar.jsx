import { MdOutlineArrowOutward } from "react-icons/md";
import { ArrowRight01Icon } from "hugeicons-react";
import logo from "../../assets/Color Logo.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import useStore from "../../store/store";
import usaFlag from "../../assets/United States flag.png";
import finland from "../../assets/Finland flag.png";
import canada from "../../assets/canada.png";
import pearland from "../../assets/pearland.png";
import uk from "../../assets/uk.png";
import sweden from "../../assets/sweden.png";
import germany from "../../assets/germany.png";
import norway from "../../assets/norway.png";
import denmark from "../../assets/denmark.png";
import spain from "../../assets/spain.png";
import service1 from "../../assets/service1.png";
import service2 from "../../assets/service2.png";
import service3 from "../../assets/service3.png";
import service4 from "../../assets/service4.png";

const Navbar = () => {
  const currentUser = useStore((state) => state.currentUser); // Read-only access to Zustand state
  const logoutUser = useStore((state) => state.logoutUser);
  const users = useStore((state) => state.users);

  const location = useLocation();

  const navbarBgColor =
    (location.pathname === "/aboutUs") |
    (location.pathname === "/selfAssesment") |
    (location.pathname === "/auth/signup") |
    (location.pathname === "/auth/signin") |
    (location.pathname === "/contactUs") |
    (location.pathname === "/refer") |
    (location.pathname === "/became-partner") |
    (location.pathname === "/discover-universities") |
    (location.pathname === "/userProfile")
      ? "bg-none"
      : "bg-[url('/src/assets/background-gradiant.png')] bg-no-repeat bg-cover bg-top";

  // style={{
  //     backgroundImage: url(${bannerBG}),
  //     backgroundPosition: "top",
  //     backgroundRepeat: "no-repeat",
  //     backgroundSize: "cover"
  // }}

  return (
    <div className={`navbar px-5 md:px-10 lg:px-40 ${navbarBgColor}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/"> Home </NavLink>
            </li>
            <li>
              <NavLink to="/aboutUs"> About Us </NavLink>
            </li>
            <li>
              <details>
                <summary>Destination</summary>
                <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-[400px] p-4 shadow">
                  <h3 className="text-slate-900 font-medium text-xl">
                    Country
                  </h3>
                  <div className="grid grid-cols-2 gap-8 mt-6">
                    <div className="flex items-center gap-2">
                      <img src={usaFlag} alt="" />
                      <p className="text-slate-700 font-medium text-lg">
                        United States
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <img src={finland} alt="" />
                      <p className="text-slate-700 font-medium text-lg">
                        Finland
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <img
                        className="w-10 h-10 rounded-md"
                        src={canada}
                        alt=""
                      />
                      <p className="text-slate-700 font-medium text-lg">
                        Canada
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <img src={pearland} alt="" />
                      <p className="text-slate-700 font-medium text-lg">
                        Pearland
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <img src={uk} alt="" />
                      <p className="text-slate-700 font-medium text-lg">UK</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <img src={sweden} alt="" />
                      <p className="text-slate-700 font-medium text-lg">
                        Sweden
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <img src={germany} alt="" />
                      <p className="text-slate-700 font-medium text-lg">
                        Germany
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <img src={norway} alt="" />
                      <p className="text-slate-700 font-medium text-lg">
                        Norway
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <img src={denmark} alt="" />
                      <p className="text-slate-700 font-medium text-lg">
                        Denmark
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <img src={spain} alt="" />
                      <p className="text-slate-700 font-medium text-lg">
                        Spain
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center my-6">
                    <p className="text-indigo-500 font-medium text-lg">More</p>
                    <p className="text-indigo-500 font-medium text-lg">
                      <ArrowRight01Icon />
                    </p>
                  </div>
                </ul>
              </details>
            </li>

            <li>
              <details>
                <summary>Service</summary>
                <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-[404px] h-[520px] p-4 shadow">
                  <h3 className="text-slate-900 font-medium text-xl">
                    Services
                  </h3>
                  <div className="grid grid-cols-2 gap-8 mt-6">
                    <div className="bg-indigo-50 p-2 rounded-xl">
                      <div>
                        <img
                          className="w-full object-cover"
                          src={service1}
                          alt=""
                        />
                      </div>
                      <h4 className="text-slate-900 font-medium mt-2">
                        Education Consaltant
                      </h4>
                    </div>

                    <div className="bg-indigo-50 p-4 rounded-xl">
                      <div>
                        <img
                          className="w-full object-cover"
                          src={service2}
                          alt=""
                        />
                      </div>
                      <h4 className="text-slate-900 font-medium mt-2">
                        Travel Support
                      </h4>
                    </div>

                    <div className="bg-indigo-50 p-4 rounded-xl">
                      <div>
                        <img
                          className="w-full object-cover"
                          src={service3}
                          alt=""
                        />
                      </div>
                      <h4 className="w-full object-cover">Financial Support</h4>
                    </div>

                    <div className="bg-indigo-50 p-4 rounded-xl">
                      <div>
                        <img
                          className="w-full object-cover"
                          src={service4}
                          alt=""
                        />
                      </div>
                      <h4 className="text-slate-900 font-medium mt-2">
                        Language Training
                      </h4>
                    </div>
                  </div>
                </ul>
              </details>
            </li>

            <li>
              <NavLink to="/contactUs"> Contact Us </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <Link to="/">
            <img className="w-16 lg:w-full" src={logo} alt="" />
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-3 px-1">
          <li>
            <NavLink to="/"> Home </NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/aboutUs"> About Us </NavLink>
          </li>
          <li>
            <details>
              <summary>Destination</summary>
              <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-[400px] p-4 shadow">
                <h3 className="text-slate-900 font-medium text-xl">Country</h3>
                <div className="grid grid-cols-2 gap-8 mt-6">
                  <div className="flex items-center gap-2">
                    <img src={usaFlag} alt="" />
                    <p className="text-slate-700 font-medium text-lg">
                      United States
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <img src={finland} alt="" />
                    <p className="text-slate-700 font-medium text-lg">
                      Finland
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <img className="w-10 h-10 rounded-md" src={canada} alt="" />
                    <p className="text-slate-700 font-medium text-lg">Canada</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <img src={pearland} alt="" />
                    <p className="text-slate-700 font-medium text-lg">
                      Pearland
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <img src={uk} alt="" />
                    <p className="text-slate-700 font-medium text-lg">UK</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <img src={sweden} alt="" />
                    <p className="text-slate-700 font-medium text-lg">Sweden</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <img src={germany} alt="" />
                    <p className="text-slate-700 font-medium text-lg">
                      Germany
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <img src={norway} alt="" />
                    <p className="text-slate-700 font-medium text-lg">Norway</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <img src={denmark} alt="" />
                    <p className="text-slate-700 font-medium text-lg">
                      Denmark
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <img src={spain} alt="" />
                    <p className="text-slate-700 font-medium text-lg">Spain</p>
                  </div>
                </div>

                <div className="flex items-center justify-center my-6">
                  <p className="text-indigo-500 font-medium text-lg">More</p>
                  <p className="text-indigo-500 font-medium text-lg">
                    <ArrowRight01Icon />
                  </p>
                </div>
              </ul>
            </details>
          </li>

          <li>
            <details>
              <summary>Service</summary>
              <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-[404px] h-[520px] p-4 shadow">
                <h3 className="text-slate-900 font-medium text-xl">Services</h3>
                <div className="grid grid-cols-2 gap-8 mt-6">
                  <div className="bg-indigo-50 p-2 rounded-xl">
                    <div>
                      <img
                        className="w-full object-cover"
                        src={service1}
                        alt=""
                      />
                    </div>
                    <h4 className="text-slate-900 font-medium mt-2">
                      Education Consaltant
                    </h4>
                  </div>

                  <div className="bg-indigo-50 p-4 rounded-xl">
                    <div>
                      <img
                        className="w-full object-cover"
                        src={service2}
                        alt=""
                      />
                    </div>
                    <h4 className="text-slate-900 font-medium mt-2">
                      Travel Support
                    </h4>
                  </div>

                  <div className="bg-indigo-50 p-4 rounded-xl">
                    <div>
                      <img
                        className="w-full object-cover"
                        src={service3}
                        alt=""
                      />
                    </div>
                    <h4 className="w-full object-cover">Financial Support</h4>
                  </div>

                  <div className="bg-indigo-50 p-4 rounded-xl">
                    <div>
                      <img
                        className="w-full object-cover"
                        src={service4}
                        alt=""
                      />
                    </div>
                    <h4 className="text-slate-900 font-medium mt-2">
                      Language Training
                    </h4>
                  </div>
                </div>
              </ul>
            </details>
          </li>

          <li>
            <NavLink to="/contactUs"> Contact Us </NavLink>
          </li>

          {/* <li>Total Users: {users.length} </li> */}
        </ul>
      </div>
      <div className="navbar-end gap-2 flex flex-wrap justify-end items-center">
        {currentUser ? (
          <div className="flex items-center gap-4">
            {/* Display user info */}
            <span className="text-indigo-500 text-sm lg:text-md font-bold">
              {currentUser?.name}
            </span>

            {/* Logout Button */}
            <button
              onClick={() => logoutUser()}
              className="bg-transparent text-indigo-500 font-bold px-4 py-1 text-sm rounded-full lg:px-5 lg:py-2 lg:text-md hover:bg-indigo-500 hover:text-white border border-indigo-500"
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <Link to="/auth/signup">
              <button className="text-slate-700 text-[16px] font-normal">
                Sign Up
              </button>
            </Link>

            <Link to="/auth/signin">
              <div className="flex items-center justify-between gap-2 border border-indigo-500 pl-5 pr-1 py-1 rounded-full lg:gap-4">
                <button className="text-indigo-500 text-sm lg:text-md">
                  Sign In
                </button>
                <p className="bg-indigo-500 p-1 rounded-full lg:p-2">
                  <MdOutlineArrowOutward className="text-white" />
                </p>
              </div>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
