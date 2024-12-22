import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import discoverImg from "../assets/Image Container (1).png";
import australia from "../assets/australia.png";
import canada from "../assets/canada.png";
import belgium from "../assets/belgium.png";
import element from "../assets/elements.svg";
import { Link } from "react-router-dom";

const DiscoverUniversities = () => {
  const universities = [
    {
      name: "United States of America",
      description:
        "We provide exceptional support and resources to make your study abroad journey smooth and successful.",
      image: discoverImg,
    },
    {
      name: "Australia",
      description:
        "We provide exceptional support and resources to make your study abroad journey smooth and successful.",
      image: australia,
    },
    {
      name: "Canada",
      description:
        "We provide exceptional support and resources to make your study abroad journey smooth and successful.",
      image: canada,
    },
    {
      name: "Belgium",
      description:
        "We provide exceptional support and resources to make your study abroad journey smooth and successful.",
      image: belgium,
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
    slidesToShow: 4,
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
      <h1 className="font-Poppins text-2xl md:text-3xl lg:text-4xl font-medium mb-3">
        Discover Universities
      </h1>
      <p className="font-Manrope text-md text-[#64748B]">
        We provide exceptional support and resources to make your study abroad
        journey smooth and successful.
      </p>

      <div className="relative mt-10 ">
        <Slider {...settings}>
          {universities.map((uni, index) => (
            <div key={index} className="p-4">
              <div className="mb-4">
                <img className="w-full" src={uni.image} alt={uni.name} />
              </div>
              <div className="p-2">
                <h3 className="text-[#0F172A] font-Poppins text-xl mb-3">
                  {uni.name}
                </h3>
                <p className="text-[#64748B] font-medium font-Manrope text-lg mb-3">
                  {uni.description}
                </p>
                <div className="flex items-center gap-2">
                  <Link
                    to="/discover-universities"
                    className="text-indigo-500 font-medium"
                  >
                    Learn More
                  </Link>
                  <img src={element} alt="" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default DiscoverUniversities;
