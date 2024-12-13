import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Video = () => {

    const videos = [
        {
            link: "https://docs.material-tailwind.com/demo.mp4"
        },
        {
            link: "https://docs.material-tailwind.com/demo.mp4"
        },
        {
            link: "https://docs.material-tailwind.com/demo.mp4"
        },
        {
            link: "https://docs.material-tailwind.com/demo.mp4"
        },
    ]

    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <button
                className="absolute top-[-60%] left-[75%] lg:top-[-15%] lg:left-[91%] transform -translate-y-1/2 z-10 bg-indigo-400 text-white px-4 py-2  rounded-full shadow-lg hover:bg-indigo-700 transition-all"
                onClick={onClick}
            >
                &#10094;
            </button>
        );
    };


    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <button
                className="absolute top-[-60%] right-[2%] lg:top-[-15%] lg:right-[2%] transform -translate-y-1/2 z-10 bg-indigo-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-indigo-700 transition-all"
                onClick={onClick}
            >
                &#10095;
            </button>
        );
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        swipe: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };


    return (
        <div className="px-5 md:px-10 lg:px-20 py-5 md:py-10 lg:py-20">
            <h1 className="font-Poppins font-medium text-[#0F172A] text-2xl md:text-3xl lg:text-4xl mb-4">Video</h1>
            <p className="font-Manrope text-md lg:text-lg text-[#64748B] mb-10 lg:w-1/2">We provide exceptional support and resources to make your study abroad journey smooth and successful.</p>

            {/* <div className="flex flex-col md:flex-col lg:flex-row items-center justify-between gap-10">
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
            </div> */}

            <div className="relative mt-10">
                <Slider {...settings}>

                    {
                        videos.map((video, index) => (
                            <div key={index} className="p-5">
                                <video className="h-full w-full rounded-2xl" controls>
                                    <source src={video.link} type="video/mp4"></source>

                                </video>
                            </div>
                        ))
                    }

                </Slider>

            </div>



        </div>

    );
};

export default Video;