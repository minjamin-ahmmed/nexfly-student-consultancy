import { useState } from "react";
import { IoEye, IoEyeOffSharp } from "react-icons/io5";

const Settings = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordCurrent, setShowPasswordCurrent] = useState(false);
  const [showPasswordNew, setShowPasswordNew] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1 className="font-medium text-3xl text-slate-900 mb-6">Settings</h1>
      <h3 className="font-medium text-xl text-slate-900 mb-8">
        Password Settings
      </h3>

      <form onSubmit={handleSubmit} className="mb-8">
        <label className="font-medium text-slate-900">
          Email <br />
        </label>
        <input
          type="email"
          placeholder="example@gmail.com"
          className="input input-bordered w-full lg:w-1/2 border border-[#CBD5E1] placeholder-slate-700 font-medium"
        />

        <div className="relative">
          <div className="flex justify-between items-center mt-4 mb-1 w-full lg:w-1/2">
            <label className="font-medium text-slate-900">Password</label>
            {!isEditing && (
              <button
                type="button"
                className="text-indigo-500 underline"
                onClick={() => setIsEditing(true)}
              >
                Edit
              </button>
            )}
          </div>
          {!isEditing ? (
            <input
              type={showPassword ? "text" : "password"}
              placeholder="********"
              className="input input-bordered w-full lg:w-1/2 border border-[#CBD5E1] placeholder-slate-700 font-medium"
            />
          ) : (
            <div className="space-y-4">
              <div className="relative">
                <input
                  type={showPasswordCurrent ? "text" : "password"}
                  placeholder="Current Password"
                  className="input input-bordered w-full lg:w-1/2 border border-[#CBD5E1] placeholder-slate-700 font-medium"
                />
                <button
                  type="button"
                  className="absolute top-4 left-[47%]"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowPasswordCurrent(!showPasswordCurrent);
                  }}
                >
                  {showPasswordCurrent ? <IoEye /> : <IoEyeOffSharp />}
                </button>
              </div>
              <div className="relative">
                <input
                  type={showPasswordNew ? "text" : "password"}
                  placeholder="New Password"
                  className="input input-bordered w-full lg:w-1/2 border border-[#CBD5E1] placeholder-slate-700 font-medium"
                />
                <button
                  type="button"
                  className="absolute top-4 left-[47%]"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowPasswordNew(!showPasswordNew);
                  }}
                >
                  {showPasswordNew ? <IoEye /> : <IoEyeOffSharp />}
                </button>
              </div>
              <div className="relative">
                <input
                  type={showPasswordConfirm ? "text" : "password"}
                  placeholder="Confirm New Password"
                  className="input input-bordered w-full lg:w-1/2 border border-[#CBD5E1] placeholder-slate-700 font-medium"
                />
                <button
                  type="button"
                  className="absolute top-4 left-[47%]"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowPasswordConfirm(!showPasswordConfirm);
                  }}
                >
                  {showPasswordConfirm ? <IoEye /> : <IoEyeOffSharp />}
                </button>
              </div>

              <button className="font-semibold px-12 py-4 rounded-[100px] bg-indigo-500 text-white">
                Save
              </button>
            </div>
          )}
          {!isEditing && (
            <button
              type="button"
              className="absolute top-10 left-[47%]"
              onClick={(e) => {
                e.preventDefault();
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? <IoEye /> : <IoEyeOffSharp />}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Settings;
