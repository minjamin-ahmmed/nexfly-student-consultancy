import helpImg from "../assets/red-tshirt-women.png"
function HelpContainer() {
    return (
        <div className="px-5 md:px-10 lg:px-20 mt-20">
            <div className="mb-10">
                <h1 className="font-Poppins font-medium text-2xl md:text-3xl lg:text-4xl mb-4">Nexfly can help you</h1>
                <p className="font-Manrope text-md lg:text-lg text-[#334155]">Provide your details, and our expert counselors will reach out to connect you with the ideal course, country, university, and scholarship opportunities!</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:gap-5 mb-10">
                <div className="w-full">
                    <img className="bg-[#C7D2FE] rounded-2xl w-full lg:w-[600px] " src={helpImg} alt="" />
                </div>

                <div className="">
                    <form className="card-body px-0 py-4 font-Manrope space-y-6">
                        <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between gap-5">
                            <div className="form-control w-full">

                                <input type="text" placeholder="First Name" className="input input-bordered" required />
                            </div>

                            <div className="form-control w-full">

                                <input type="text" placeholder="Last Name" className="input input-bordered" required />
                            </div>
                        </div>

                        <div className="form-control w-full">

                            <input type="email" placeholder="Email Address" className="input input-bordered" required />
                        </div>

                        <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between gap-5">
                            <div className="form-control w-full">

                                <input type="text" placeholder="Your Mobile Number" className="input input-bordered" required />
                            </div>

                            <div className="form-control w-full">

                                <input type="text" placeholder="Parent Mobile Number" className="input input-bordered" required />
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between gap-5">
                            <div className="form-control w-full">

                                <input type="text" placeholder="When do you plan to study" className="input input-bordered" list="study-plan" required />
                                <datalist id="study-plan">
                                    <option>England</option>
                                    <option>Australia</option>
                                    <option>Canada</option>
                                </datalist>


                            </div>

                            <div className="form-control w-full">

                                <input type="text" placeholder="How would you fund your education" className="input input-bordered" list="study-plan" required />
                                <datalist id="study-plan">
                                    <option>England</option>
                                    <option>Australia</option>
                                    <option>Canada</option>
                                </datalist>


                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between gap-5">
                            <div className="form-control w-full">

                                <input type="text" placeholder="Preferred Study level" className="input input-bordered" list="study-plan" required />
                                <datalist id="study-plan">
                                    <option>England</option>
                                    <option>Australia</option>
                                    <option>Canada</option>
                                </datalist>


                            </div>

                            <div className="form-control w-full">

                                <input type="text" placeholder="Your Location" className="input input-bordered" list="study-plan" required />
                                <datalist id="study-plan">
                                    <option>England</option>
                                    <option>Australia</option>
                                    <option>Canada</option>
                                </datalist>


                            </div>
                        </div>





                        <div className="form-control mt-6 w-1/3 lg:w-1/6">
                            <button className="btn bg-indigo-500 rounded-[100px] text-white">Enquire</button>
                        </div>
                    </form>
                </div>
            </div>


        </div>
    )
}

export default HelpContainer