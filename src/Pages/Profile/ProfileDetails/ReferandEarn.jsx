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
    <div>
      <div className="flex flex-col lg:flex-row gap-5 items-center justify-between bg-indigo-100 p-4 md:p-5 lg:p-10 rounded-2xl">
        <div>
          <h1 className="text-3xl font-medium text-slate-900 mb-6">
            Refer & Earn
          </h1>
          <p className="text-slate-600 font-medium lg:w-3/4 mb-6">
            We provide exceptional support and resources to make your study
            abroad journey smooth and successful.
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
      </div>{" "}
      <div className="bg-white shadow rounded-lg overflow-y-auto lg:h-[350px] overflow-x-auto mt-8">
        <div className="mb-4 p-4 flex flex-wrap items-center gap-2">
          <h2 className="text-lg text-slate-900 font-semibold">
            Refer & Earn History
          </h2>
          <p className="text-indigo-500 text-sm font-normal px-2 py-1 bg-indigo-50 rounded-3xl">
            No. Refer and Earn
          </p>
        </div>

        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-200">
            <tr className="text-xs lg:text-sm font-semibold text-gray-600 border-b">
              <th className="py-4 px-6 text-center">SL</th>
              <th className="py-4 px-6 text-center">Referrer name</th>
              <th className="py-4 px-6 text-center">Date</th>
              <th className="py-4 px-6 text-center">Completed Step</th>
              <th className="py-4 px-6 text-center">Amount</th>
              <th className="py-4 px-6 text-center">Withdraw Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-xs lg:text-sm text-slate-500 border-b">
              <td className="py-4 px-6 text-center">1</td>
              <td className="py-4 px-6 text-center">ABC Main Topic</td>
              <td className="py-4 px-6 text-center">September 31, 2015</td>
              <td className="py-4 px-6 text-center">3</td>
              <td className="py-4 px-6 text-center">10,000 BDT</td>
              <td className="py-4 px-6 text-center">N/A</td>
            </tr>

            <tr className="text-xs lg:text-sm text-slate-500 border-b">
              <td className="py-4 px-6 text-center">2</td>
              <td className="py-4 px-6 text-center">ABC Main Topic</td>
              <td className="py-4 px-6 text-center">September 31, 2015</td>
              <td className="py-4 px-6 text-center">3</td>
              <td className="py-4 px-6 text-center">12,000 BDT</td>
              <td className="py-4 px-6 text-center">Withdraw</td>
            </tr>

            <tr className="text-xs lg:text-sm text-slate-500 border-b">
              <td className="py-4 px-6 text-center">3</td>
              <td className="py-4 px-6 text-center">ABC Main Topic</td>
              <td className="py-4 px-6 text-center">September 31, 2015</td>
              <td className="py-4 px-6 text-center">3</td>
              <td className="py-4 px-6 text-center">10,000 BDT</td>
              <td className="py-4 px-6 text-center">N/A</td>
            </tr>

            <tr className="text-xs lg:text-sm text-slate-500 border-b">
              <td className="py-4 px-6 text-center">4</td>
              <td className="py-4 px-6 text-center">ABC Main Topic</td>
              <td className="py-4 px-6 text-center">September 31, 2015</td>
              <td className="py-4 px-6 text-center">3</td>
              <td className="py-4 px-6 text-center">10,000 BDT</td>
              <td className="py-4 px-6 text-center">N/A</td>
            </tr>
            <tr className="text-xs lg:text-sm text-slate-500 border-b">
              <td className="py-4 px-6 text-center">4</td>
              <td className="py-4 px-6 text-center">ABC Main Topic</td>
              <td className="py-4 px-6 text-center">September 31, 2015</td>
              <td className="py-4 px-6 text-center">3</td>
              <td className="py-4 px-6 text-center">10,000 BDT</td>
              <td className="py-4 px-6 text-center">N/A</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReferandEarn;
