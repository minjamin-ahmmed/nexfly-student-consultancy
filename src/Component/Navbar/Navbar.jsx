import { MdOutlineArrowOutward } from "react-icons/md";
import logo from "../../assets/Color Logo.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import useStore from "../../store/store";

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
  //     backgroundImage: `url(${bannerBG})`,
  //     backgroundPosition: "top",
  //     backgroundRepeat: "no-repeat",
  //     backgroundSize: "cover"
  // }}

  return (
    <div className={`navbar px-5 md:px-10 lg:px-20 ${navbarBgColor}`}>
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
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <details>
                <summary>Service</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
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
              <ul className="p-2 z-10">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>

          <li>
            <details>
              <summary>Service</summary>
              <ul className="p-2 z-10">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
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
            {/* Sign Up Button */}
            <Link to="/auth/signup">
              <button className="bg-transparent border border-indigo-500 px-3 py-1 text-sm rounded-full lg:px-5 lg:py-2 lg:text-md">
                Sign Up
              </button>
            </Link>

            {/* Sign In Button */}
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
