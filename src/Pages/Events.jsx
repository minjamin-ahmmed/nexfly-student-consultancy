import event1 from "../assets/Image Container.png";
import clockElement from "../assets/clock-elements.svg";
import arrow from "../assets/elements.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img2 from "../assets/Image2.png";
import img3 from "../assets/Image3.png";
import { ArrowRight01Icon } from "hugeicons-react";

const Events = () => {
  const incident = [
    {
      name: "Tech Innovators Summit 2023: Celebrating 200+ Graduates from Leading Institutes",
      description:
        "We provide exceptional support and resources to make your study abroad journey smooth and successful.",
      image: event1,
    },
    {
      name: "Tech Innovators Summit 2023: Celebrating 200+ Graduates from Leading Institutes",
      description:
        "We provide exceptional support and resources to make your study abroad journey smooth and successful.",
      image: img2,
    },
    {
      name: "Tech Innovators Summit 2023: Celebrating 200+ Graduates from Leading Institutes",
      description:
        "We provide exceptional support and resources to make your study abroad journey smooth and successful.",
      image: img3,
    },
  ];

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="absolute top-[-30%] left-[75%] lg:top-[-15%] lg:left-[91%] transform -translate-y-1/2 z-10 bg-indigo-400 text-white px-4 py-2  rounded-full shadow-lg hover:bg-indigo-700 transition-all"
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
        className="absolute top-[-30%] right-[2%] lg:top-[-15%] lg:right-[2%] transform -translate-y-1/2 z-10 bg-indigo-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-indigo-700 transition-all"
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
    <div className="px-5 md:px-10 lg:px-40 py-10 mb-10">
      <h1 className="font-Poppins font-medium text-[#0F172A] text-2xl md:text-3xl lg:text-4xl mb-4">
        Events
      </h1>
      <p className="font-Manrope text-md lg:text-lg text-[#64748B] mb-10 lg:w-1/2">
        We provide exceptional support and resources to make your study abroad
        journey smooth and successful.
      </p>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> */}
      {/* <div className="shadow-xl">
                    <div className="mb-4">
                        <img className="w-full" src={event1} alt="" />
                    </div>
                    <div className="p-2">
                        <h3 className="text-[#0F172A] font-Poppins text-xl mb-3"></h3>
                        <p className="text-[#64748B] font-Manrope text-sm mb-3"> <i className="fa-regular fa-clock text-sm"> 22 Oct, 2024; 8:00 PM</i> </p>
                        <p className="text-[#64748B] font-medium font-Manrope text-lg mb-3"></p>
                        <a href="#" className="text-indigo-500 font-medium">Learn More <i className="fa-solid fa-greater-than text-sm font-normal ml-2"></i> </a>
                    </div>
                </div>

                <div className="shadow-xl">
                    <div className="mb-4">
                        <img className="w-full" src={event1} alt="" />
                    </div>
                    <div className="p-2">
                        <h3 className="text-[#0F172A] font-Poppins text-xl mb-3"></h3>
                        <p className="text-[#64748B] font-Manrope text-sm mb-3"> <i className="fa-regular fa-clock text-sm"> 22 Oct, 2024; 8:00 PM</i> </p>
                        <p className="text-[#64748B] font-medium font-Manrope text-lg mb-3">We provide exceptional support and resources to make your study abroad journey smooth and successful.</p>
                        <a href="#" className="text-indigo-500 font-medium">Learn More <i className="fa-solid fa-greater-than text-sm font-normal ml-2"></i> </a>
                    </div>
                </div>

                <div className="shadow-xl">
                    <div className="mb-4">
                        <img className="w-full" src={event1} alt="" />
                    </div>
                    <div className="p-2">
                        <h3 className="text-[#0F172A] font-Poppins text-xl mb-3"></h3>
                        <p className="text-[#64748B] font-Manrope text-sm mb-3"> <i className="fa-regular fa-clock text-sm"> 22 Oct, 2024; 8:00 PM</i> </p>
                        <p className="text-[#64748B] font-medium font-Manrope text-lg mb-3">We provide exceptional support and resources to make your study abroad journey smooth and successful.</p>
                        <a href="#" className="text-indigo-500 font-medium">Learn More <i className="fa-solid fa-greater-than text-sm font-normal ml-2"></i> </a>
                    </div>
                </div> */}

      <div className="relative mt-10 ">
        <Slider {...settings}>
          {incident.map((event, index) => (
            <div key={index} className="pr-9 ">
              <div className="rounded-xl">
                <div className="mb-4">
                  <img className="w-full rounded-xl" src={event.image} alt="" />
                </div>
                <div className="p-2">
                  <h3 className="text-[#0F172A] font-Poppins text-xl mb-3">
                    {event.name}
                  </h3>
                  <div className="flex items-center gap-4 mb-3">
                    <img src={clockElement} alt="" />
                    <p className="text-indigo-500"> 22 Oct, 2024; 8:00 PM </p>
                  </div>
                  <p className="text-[#64748B] font-medium font-Manrope text-lg mb-3">
                    {event.description}
                  </p>
                  <div className="flex items-center gap-2 mb-3">
                    {/* <a href="#" className="text-indigo-500 font-medium">
                      Learn More{" "}
                    </a>
                    <p className="text-indigo-500">
                      {" "}
                      <ArrowRight01Icon />{" "}
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    // </div>
  );
};

export default Events;
