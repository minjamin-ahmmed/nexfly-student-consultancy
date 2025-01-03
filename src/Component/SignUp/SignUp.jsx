import "../../Pages/banner.css";
import signinImg from "../../assets/Rectangle 4084.png";
import google from "../../assets/google.svg";
import facebook from "../../assets/facebook.svg";
import apple from "../../assets/apple.svg";
import { IoEye, IoEyeOffSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import useStore from "../../store/store";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const registerUser = useStore((state) => state.registerUser);

  const API_URL = import.meta.env.VITE_API_URL_Register;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
  } = useForm();

  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
        message: "Passwords do not match",
      });
      return;
    }

    console.log("Form Submitted Successfully:", data);

    try {
      const response = await axios.post(`${API_URL}/auth/register`, {
        role: "2",
        name: data.name,
        email: data.email,
        phone: data.phone,
        password: data.password,
        password_confirmation: data.confirmPassword,
      });

      console.log(response.data);
      registerUser(data);
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: "Successfully Registered",
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="mt-5 md:mt-10 lg:mt-24">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 items-center px:5 md:px-10 lg:px-28">
        <div className="px-5 lg:px-0 lg:w-1/2 flex items-center">
          <img src={signinImg} alt="Sign In" />
        </div>

        <div className="lg:w-1/3 px-5 lg:px-0">
          <h1 className="text-3xl font-semibold text-start mb-6">
            Sign Up to your Nexfly Account
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control mb-4">
              <input
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters",
                  },
                })}
                type="text"
                placeholder="Name"
                className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-700 font-medium"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

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
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div className="form-control mb-4">
              <input
                {...register("number", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Enter a valid phone number",
                  },
                  minLength: {
                    value: 11,
                    message: "Phone Number must be 11 character",
                  },
                })}
                type="number"
                placeholder="Phone Number"
                className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-700 font-medium"
              />
              {errors.number && (
                <p className="text-red-500 text-sm">{errors.number.message}</p>
              )}
            </div>

            <div className="form-control relative mb-4">
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
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
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="form-control relative mb-4">
              <input
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                })}
                type={showPasswordConfirm ? "text" : "password"}
                placeholder="Confirm Password"
                className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-700 font-medium"
              />
              <button
                type="button"
                onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
                className="absolute top-4 right-4"
              >
                {showPasswordConfirm ? <IoEye /> : <IoEyeOffSharp />}
              </button>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="btn bg-indigo-500 text-white font-bold rounded-[100px] w-full hover:bg-indigo-700"
            >
              Sign Up
            </button>
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
            Already signed up?{" "}
            <Link to="/auth/signin" className="text-indigo-500 underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>

      <footer className="footer-container h-[200px] bg-[#1B1464]"></footer>
    </div>
  );
};

export default SignUp;
