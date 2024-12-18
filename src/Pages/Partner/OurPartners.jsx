import Slider from "react-slick";
import partner1 from "../../assets/partner1.png";
import partner2 from "../../assets/partner2.png";
import partner3 from "../../assets/partner3.png";
import partner4 from "../../assets/partner4.png";
import partner5 from "../../assets/partner5.png";
import partner6 from "../../assets/partner6.png";
const OurPartners = () => {
  const partners = [
    { partnerImg: partner1 },
    { partnerImg: partner2 },
    { partnerImg: partner3 },
    { partnerImg: partner4 },
    { partnerImg: partner5 },
    { partnerImg: partner6 },
  ];

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="absolute top-[-30%] left-[75%] lg:top-[-15%] lg:left-[91%] transform -translate-y-1/2 z-10 bg-slate-400 text-white px-4 py-2  rounded-full shadow-lg hover:bg-white hover:text-indigo-500 transition-all"
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
        className="absolute top-[-30%] right-[2%] lg:top-[-15%] lg:right-[2%] transform -translate-y-1/2 z-10 bg-slate-300 text-white px-4 py-2 rounded-full shadow-lg hover:bg-white hover:text-indigo-500 transition-all"
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
    <div className="p-5 md:p-10 lg:p-20 bg-indigo-500 text-white">
      <h1 className="text-xl md:text-3xl lg:text-4xl font-medium mb-4">
        Our Partners
      </h1>
      <p className="text-md text-slate-200 mb-10 lg:w-1/2">
        We provide exceptional support and resources to make your study abroad
        journey smooth and successful.
      </p>

      <div className="relative mt-10 ">
        <Slider {...settings}>
          {partners.map((partner, index) => (
            <div className="p-5" key={index}>
              <div className="mb-4">
                <img className="w-full" src={partner.partnerImg} alt="" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OurPartners;
