import Slider from "react-slick";
import event1 from "../../assets/Image Container.png";
import img2 from "../../assets/Image2.png";
import img3 from "../../assets/Image3.png";

const Articles = () => {
  const universities = [
    {
      image: event1,
      name: "Study Master of Architecture in Australia",
      description:
        "We provide exceptional support and resources to make your study abroad journey smooth and successful.",
    },
    {
      image: img2,
      name: "A Complete List of Public Holidays in Australia",
      description:
        "We provide exceptional support and resources to make your study abroad journey smooth and successful.",
    },
    {
      image: img3,
      name: "Your Guide to Renting in Australia as an International Student",
      description:
        "We provide exceptional support and resources to make your study abroad journey smooth and successful.",
    },
  ];

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="absolute top-[-45%] left-[75%] lg:top-[-15%] lg:left-[91%] transform -translate-y-1/2 z-10 text-white bg-indigo-500 px-4 py-2  rounded-full shadow-lg hover:bg-indigo-700 hover:text-white transition-all"
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
        className="absolute top-[-45%] right-[2%] lg:top-[-15%] lg:right-[2%] transform -translate-y-1/2 z-10 text-white bg-indigo-500 px-4 py-2 rounded-full shadow-lg hover:bg-indigo-700 hover:text-white transition-all"
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
    <div className="p-5 md:p-10 lg:p-20">
      <h1 className="w-3/4 lg:w-full font-medium text-[#0F172A] text-2xl md:text-3xl lg:text-4xl mb-4">
        Articles Austratlia’s Student
      </h1>
      <p className="font-Manrope text-md lg:text-lg text-[#64748B] mb-10 lg:w-1/2">
        We provide exceptional support and resources to make your study abroad
        journey smooth and successful.
      </p>

      <div className="relative mt-10 ">
        <Slider {...settings}>
          {universities.map((uni, index) => (
            <div key={index} className="p-4 space-y-4">
              <div className="mb-4">
                <img className="w-full" src={uni.image} alt={uni.name} />
              </div>
              <div>
                <img src={uni.icon} alt="" />
              </div>

              <h3 className="text-slate-900 text-xl font-medium">{uni.name}</h3>
              <p className="text-slate-700"> {uni.description} </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Articles;
