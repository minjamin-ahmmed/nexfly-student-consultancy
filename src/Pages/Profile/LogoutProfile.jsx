import { Logout05Icon } from "hugeicons-react";
import useStore from "../../store/store";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";

const LogoutProfile = () => {
  const logoutUser = useStore((state) => state.logoutUser);

  const alertandLogoutUser = () => {
    logoutUser();
    Swal.fire({
      title: "Logout",
      text: "You have successfully logged out",
      icon: "success",
      confirmButtonText: "Close",
    });
  };

  return (
    <div className="mt-8">
      <NavLink to="/">
        <button
          className="border border-red-500 text-red-500 py-4 w-full rounded-[100px] font-medium"
          onClick={() => alertandLogoutUser()}
        >
          <div className="flex items-center justify-center gap-2">
            <p>
              {" "}
              <Logout05Icon></Logout05Icon>{" "}
            </p>
            <p>Logout</p>
          </div>
        </button>
      </NavLink>
    </div>
  );
};
export default LogoutProfile;
