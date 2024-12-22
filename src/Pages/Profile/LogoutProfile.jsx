import { Logout05Icon } from "hugeicons-react";
import useStore from "../../store/store";

const LogoutProfile = () => {
  const logoutUser = useStore((state) => state.logoutUser);

  return (
    <div className="mt-8">
      <button
        className="border border-red-500 text-red-500 py-4 w-full rounded-[100px] font-medium"
        onClick={() => logoutUser()}
      >
        <div className="flex items-center justify-center gap-2">
          <p>
            {" "}
            <Logout05Icon></Logout05Icon>{" "}
          </p>
          <p>Logout</p>
        </div>
      </button>
    </div>
  );
};

export default LogoutProfile;
