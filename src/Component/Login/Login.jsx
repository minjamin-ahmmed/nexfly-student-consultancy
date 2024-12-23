import "../../Pages/banner.css";
import signinImg from "../../assets/Rectangle 4084.png";
import google from "../../assets/google.svg";
import facebook from "../../assets/facebook.svg";
import apple from "../../assets/apple.svg";
import { useState } from "react";
import { IoEye, IoEyeOffSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import useStore from "../../store/store";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const loginUser = useStore((state) => state.loginUser);

  const API_URL = import.meta.env.VITE_API_URL_Login;
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Form Data:", data);

    try {
      const response = await axios.post(`${API_URL}/auth/login`, {
        email: data.email,
        password: data.password,
      });
      loginUser(data.email, data.password);
      console.log(response.data);
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: "Successfully Loggedin",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-5 md:mt-10 lg:mt-24">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 items-center px:5 md:px-10 lg:px-28">
        <div className="px-5 lg:px-0 lg:w-1/2 flex items-center">
          <img src={signinImg} alt="Sign In Image" />
        </div>

        <div className="lg:w-1/3 px-5 lg:px-0">
          <h1 className="text-3xl font-semibold text-start mb-6">
            Sign in to your Nexfly Account
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control mb-4">
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
                type="email"
                placeholder="Email Address"
                className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-700 font-medium"
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="form-control mb-4 relative">
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-700 font-medium"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-4 right-4"
              >
                {showPassword ? <IoEye /> : <IoEyeOffSharp />}
              </button>
              {errors.password && (
                <p className="text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
              {!errors.password && (
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt text-indigo-500 link link-hover"
                  >
                    Forgot password?
                  </a>
                </label>
              )}
            </div>

            <div className="">
              <button
                type="submit"
                className="btn bg-indigo-500 text-white font-bold rounded-[100px] w-full hover:bg-indigo-700"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="divider text-[#52525B] font-normal text-sm">Or</div>

          <div className="flex items-center justify-between">
            <div className="px-8 py-2 rounded-3xl bg-indigo-50">
              <img src={google} alt="Google Icon" />
            </div>

            <div className="px-8 py-2 rounded-3xl bg-indigo-50">
              <img src={facebook} alt="Facebook Icon" />
            </div>

            <div className="px-8 py-2 rounded-3xl bg-indigo-50">
              <img src={apple} alt="Apple Icon" />
            </div>
          </div>

          <p className="font-medium text-sm text-zinc-900 text-center my-6">
            New to Nexfly?{" "}
            <Link to="/auth/signup" className="text-indigo-500 underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>

      <footer className="footer-container h-[200px] bg-[#1B1464]"></footer>
    </div>
  );
};

export default Login;
