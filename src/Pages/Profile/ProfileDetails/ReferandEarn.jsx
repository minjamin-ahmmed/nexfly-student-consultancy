import { ClipboardIcon } from "hugeicons-react";
import Swal from "sweetalert2";
import referImg from "../../../assets/refer.png";

const ReferandEarn = () => {
  const copyToClipboard = () => {
    const link = "https://www.ictolympiadbangladesh.com/";
    navigator.clipboard
      .writeText(link)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Link Copied",
          text: "The refer link has been copied to your clipboard",
          showConfirmButton: false,
          timer: 1500,
        });
      })

      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };

  return (
    <div className="flex flex-col lg:flex-row gap-5 items-center justify-between bg-indigo-100 p-4 md:p-5 lg:p-10 rounded-2xl">
      <div>
        <h1 className="text-3xl font-medium text-slate-900 mb-6">
          Refer & Earn
        </h1>
        <p className="text-slate-600 font-medium lg:w-3/4 mb-6">
          We provide exceptional support and resources to make your study abroad
          journey smooth and successful.
        </p>

        <button
          onClick={copyToClipboard}
          className="bg-indigo-500 text-white font-semibold py-4 px-12 rounded-[100px]"
        >
          <div className="flex items-center gap-2">
            <p>
              {" "}
              <ClipboardIcon></ClipboardIcon>{" "}
            </p>
            <p>Copy Refer Link</p>
          </div>
        </button>
      </div>

      <div>
        <img src={referImg} alt="Refer Image" />
      </div>
    </div>
  );
};

export default ReferandEarn;
