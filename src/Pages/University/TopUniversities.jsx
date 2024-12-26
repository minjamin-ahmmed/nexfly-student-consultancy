import uni1 from "../../assets/university1.png";
import uni2 from "../../assets/university2.png";
import uni3 from "../../assets/university3.png";
import uni4 from "../../assets/university4.png";
import icon from "../../assets/uni_Icon.png";
import Slider from "react-slick";
import eventIcon from "../../assets/Event Date Icon2.png";
import rankIcon from "../../assets/ele.png";

const TopUniversities = () => {
  const universities = [
    {
      image: uni1,
      icon: icon,
      ranking: 88,
      name: "The University of South Wales",
      course: "English Course Availabe",
    },
    {
      image: uni2,
      icon: icon,
      ranking: 78,
      name: "The University of South Wales",
      course: "English Course Availabe",
    },
    {
      image: uni3,
      icon: icon,
      ranking: 18,
      name: "The University of South Wales",
      course: "English Course not Availabe",
    },

    {
      image: uni4,
      icon: icon,
      ranking: 48,
      name: "The University of South Wales",
      course: "English Course Availabe",
    },
  ];

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="absolute top-[-35%] left-[75%] lg:top-[-15%] lg:left-[91%] transform -translate-y-1/2 z-10 bg-white text-indigo-500 px-4 py-2  rounded-full shadow-lg hover:bg-indigo-700 hover:text-white transition-all"
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
        className="absolute top-[-35%] right-[2%] lg:top-[-15%] lg:right-[2%] transform -translate-y-1/2 z-10 bg-white text-indigo-500 px-4 py-2 rounded-full shadow-lg hover:bg-indigo-700 hover:text-white transition-all"
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
    <div className="px-5 md:px-10 lg:px-40 pt-32 pb-10 md:pb-10 md:pt-64 lg:pt-64 lg:pb-20 my-14 bg-indigo-500 advantage-container">
      <h1 className="w-3/4 lg:w-full font-medium text-white text-2xl md:text-3xl lg:text-4xl mb-4">
        Top universities in Australia
      </h1>
      <p className="font-Manrope text-md lg:text-lg text-slate-300 mb-10 lg:w-1/2">
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
              <div>
                <h3 className="text-white font-Poppins text-xl">{uni.name}</h3>
              </div>

              <div className="flex items-center gap-4">
                <img src={rankIcon} alt="" />
                <p className="text-slate-300">
                  THE World Ranking:<span>{uni.ranking}</span>{" "}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <img src={eventIcon} alt="" />
                <p className="text-slate-300">{uni.course}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TopUniversities;
