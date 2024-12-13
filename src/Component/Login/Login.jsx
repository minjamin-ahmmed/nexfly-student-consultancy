import "../../Pages/banner.css"
import signinImg from "../../assets/Rectangle 4084.png"
import google from "../../assets/google.png"
import facebook from "../../assets/Social icon.png"
import apple from "../../assets/Social icon (1).png"
import { useState } from "react"
import { IoEye, IoEyeOffSharp } from "react-icons/io5"



const Login = () => {

    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className="mt-5 md:mt-10 lg:mt-24">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 items-center px:5 md:px-10 lg:px-28">

                <div className="px-5 lg:px-0 lg:w-1/2 flex items-center">
                    <img src={signinImg} alt="Sign In Image" />
                </div>

                <div className="lg:w-1/3 px-5 lg:px-0">
                    <h1 className="text-3xl font-semibold text-start mb-6">Sign in to your Nexfly Account</h1>
                    <form>

                        <div className="form-control mb-4">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-700 font-medium"
                                required
                            />


                        </div>
                        <div className="form-control mb-4 relative">
                            <input type={showPassword ? 'text' : 'password'} placeholder="Password" className="input input-bordered w-full border border-[#CBD5E1] placeholder-slate-700 font-medium" required />
                            <label className="label">
                                <button onClick={() => setShowPassword(!showPassword)} className="absolute top-4 right-4">
                                    {
                                        showPassword ? <IoEye /> : <IoEyeOffSharp />
                                    }
                                </button>
                            </label>
                            <label className="label">
                                <a href="#" className="label-text-alt text-indigo-500 link link-hover">Forgot password?</a>
                            </label>


                        </div>
                        <div className="">
                            <button className="btn bg-indigo-500 text-white font-bold rounded-[100px] w-full hover:bg-indigo-700">Sign in</button>
                        </div>
                    </form>

                    <div className="divider text-[#52525B] font-normal text-sm">Or</div>

                    <div className="flex items-center justify-between">
                        <div className="px-8 py-2 rounded-3xl bg-indigo-50">
                            <div>
                                <img src={google} alt="Google Icon" />
                            </div>
                        </div>

                        <div className="px-8 py-2 rounded-3xl bg-indigo-50">
                            <div>
                                <img src={facebook} alt="Google Icon" />
                            </div>
                        </div>

                        <div className="px-8 py-2 rounded-3xl bg-indigo-50">
                            <div>
                                <img src={apple} alt="Google Icon" />
                            </div>
                        </div>
                    </div>

                    <p className="font-medium text-sm text-zinc-900 text-center my-6">New to Nexfly? <span className="text-indigo-500">sign up</span> </p>
                </div>



            </div>





            <footer className="footer-container h-[200px] bg-[#1B1464]"></footer>


        </div>
    );
};

export default Login;