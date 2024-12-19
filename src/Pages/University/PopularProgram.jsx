import uni1 from "../../assets/university1.png";
import uni2 from "../../assets/university2.png";
import uni3 from "../../assets/university3.png";
import uni4 from "../../assets/university4.png";
import icon from "../../assets/uni_Icon.png";
import Slider from "react-slick";
import eventIcon from "../../assets/Event Date Icon.png";
import rankIcon from "../../assets/elements_uni.svg";

const PopularProgram = () => {
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
        className="absolute top-[-37%] left-[75%] lg:top-[-15%] lg:left-[91%] transform -translate-y-1/2 z-10 bg-indigo-400 text-white px-4 py-2  rounded-full shadow-lg hover:bg-indigo-700 transition-all"
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
        className="absolute top-[-37%] right-[2%] lg:top-[-15%] lg:right-[2%] transform -translate-y-1/2 z-10 bg-indigo-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-indigo-700 transition-all"
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
    <div className="p-5 md:p-10 lg:p-20">
      <h1 className="w-3/4 lg:w-full font-medium text-[#0F172A] text-2xl md:text-3xl lg:text-4xl mb-4">
        Popular IT Programs to study in Australia
      </h1>
      <p className="font-Manrope text-md lg:text-lg text-[#64748B] mb-10 lg:w-1/2">
        We provide exceptional support and resources to make your study abroad
        journey smooth and successful.
      </p>

      <div className="relative mt-10 ">
        <Slider {...settings}>
          {universities.map((uni, index) => (
            <div key={index} className="shadow-xl p-4 space-y-4">
              <div className="mb-4">
                <img className="w-full" src={uni.image} alt={uni.name} />
              </div>
              <div>
                <img src={uni.icon} alt="" />
              </div>
              <div>
                <h3 className="text-slate-900 font-Poppins text-xl">
                  {uni.name}
                </h3>
              </div>

              <div className="flex items-center gap-4">
                <img src={rankIcon} alt="" />
                <p>
                  THE World Ranking:<span>{uni.ranking}</span>{" "}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <img src={eventIcon} alt="" />
                <p>{uni.course}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PopularProgram;
