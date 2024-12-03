

const Video = () => {
    return (
        <div className="px-5 md:px-10 lg:px-20 my-14">
            <h1 className="font-Poppins font-medium text-[#0F172A] text-2xl md:text-3xl lg:text-4xl mb-4">Video</h1>
            <p className="font-Manrope text-md lg:text-lg text-[#64748B] mb-10">We provide exceptional support and resources to make your study abroad journey smooth and successful.</p>

            <div className="flex flex-col md:flex-col lg:flex-row items-center justify-between gap-10">
                <div>
                    <video className="h-full w-full rounded-xl" controls>
                        <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div>
                    <video className="h-full w-full rounded-xl" controls>
                        <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>

    );
};

export default Video;