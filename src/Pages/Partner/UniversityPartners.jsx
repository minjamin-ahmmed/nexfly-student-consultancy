import Slider from "react-slick";
import img1 from "../../assets/universityImg 1.png";
import img2 from "../../assets/universityImg 2.png";
import img3 from "../../assets/universityImg 3.png";
import img4 from "../../assets/universityImg 4.png";
import icon from "../../assets/UniversityImg Logo.png";

const UniversityPartners = () => {
  const universities = [
    {
      image: img1,
      universityName: "The University of New South Wales",
      icon: icon,
    },
    {
      image: img2,
      universityName: "The University of New South Wales",
      icon: icon,
    },
    {
      image: img3,
      universityName: "The University of New South Wales",
      icon: icon,
    },
    {
      image: img4,
      universityName: "The University of New South Wales",
      icon: icon,
    },
  ];

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="absolute top-[-30%] left-[75%] lg:top-[-40%] lg:left-[91%] transform -translate-y-1/2 z-10 bg-indigo-400 text-white px-4 py-2  rounded-full shadow-lg hover:bg-indigo-700 transition-all"
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
        className="absolute top-[-30%] right-[2%] lg:top-[-40%] lg:right-[2%] transform -translate-y-1/2 z-10 bg-indigo-400 text-white px-4 py-2 rounded-full shadow-lg hover:bg-indigo-700 hover:text-white transition-all"
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
      <h1 className="text-xl text-slate-900 md:text-3xl lg:text-4xl font-medium mb-4">
        Our University Partners
      </h1>
      <p className="text-md text-slate-700 mb-10 lg:w-1/2"></p>
      We provide exceptional support and resources to make your study abroad
      journey smooth and successful.
      <div className="relative mt-10 ">
        <Slider {...settings}>
          {universities.map((university, index) => (
            <div key={index}>
              <div>
                <div className="space-y-4">
                  <img src={university.image} alt="" />
                  <img src={university.icon} alt="" />
                </div>
                <h2 className="mt-4 font-medium text-lg">
                  {" "}
                  {university.universityName}{" "}
                </h2>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default UniversityPartners;
