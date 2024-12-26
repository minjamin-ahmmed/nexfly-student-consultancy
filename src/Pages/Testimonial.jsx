import Slider from "react-slick";
import testimonialImg from "../assets/testimonial.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const testimonials = [
    {
      heading:
        "Working with Master in me has been an incredibly painless and enjoyable experience",
      name: "Manuel Rokib",
      companyName: "CEO of Intel",
      image: testimonialImg,
    },

    {
      heading:
        "Working with Master in me has been an incredibly painless and enjoyable experience",
      name: "Manuel Rokib",
      companyName: "CEO of Intel",
      image: testimonialImg,
    },

    {
      heading:
        "Working with Master in me has been an incredibly painless and enjoyable experience",
      name: "Manuel Rokib",
      companyName: "CEO of Intel",
      image: testimonialImg,
    },

    {
      heading:
        "Working with Master in me has been an incredibly painless and enjoyable experience",
      name: "Manuel Rokib",
      companyName: "CEO of Intel",
      image: testimonialImg,
    },
  ];

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="absolute top-[-22%] lg:top[-30%] left-[75%] lg:top-[-15%] lg:left-[91%] transform -translate-y-1/2 z-10 bg-indigo-400 text-white px-4 py-2  rounded-full shadow-lg hover:bg-indigo-700 transition-all"
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
        className="absolute top-[-22%] lg:top[-30%] right-[2%] lg:top-[-15%] lg:right-[2%] transform -translate-y-1/2 z-10 bg-indigo-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-indigo-700 transition-all"
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
    slidesToShow: 1,
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
    <div className="px-5 md:px-10 lg:px-40 py-5 md:py-10 lg:py-20">
      <h1 className="font-Poppins font-medium text-2xl md:text-3xl lg:text-4xl mb-4">
        Testimonial
      </h1>
      <p className="font-Manrope text-md lg:text-lg text-[#334155] mb-10 lg:w-1/2">
        We provide exceptional support and resources to make your study abroad
        journey smooth and successful.
      </p>

      {/* <div className="grid grid-cols-1 lg:grid-cols-3">

                <div className="flex items-center justify-center bg-indigo-500 text-center rounded-t-xl lg:rounded-l-xl lg:rounded-r-none p-12 lg:col-span-2">
                    <div>
                        <h2 className="text-white text-2xl font-normal mb-10">“Working with Master in me has been an incredibly painless and enjoyable experience.”</h2>
                        <div>
                            <p className="text-white text-lg font-medium">Manuel Rikob <span className="text-[#CBD5E1] font-normal text-lg">CEO of Intel</span> </p>
                        </div>
                    </div>

                </div>

                <div className="lg:col-span-1 rounded-r-xl">
                    <img className="w-full rounded-b-xl lg:rounded-b-none h-[350px] object-cover lg:h-auto" src={testimonialImg} alt="" />
                </div>
            </div> */}

      <div className="relative mt-10">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-5">
              <div className="grid grid-cols-1 lg:grid-cols-4">
                <div className="col-span-3 bg-indigo-500 flex flex-col items-center justify-center p-10 rounded-t-xl lg:rounded-l-xl lg:rounded-r-none">
                  <h1
                    className="text-white text-2xl font-normal text-center
                   mb-10"
                  >
                    {testimonial.heading}
                  </h1>
                  <p className="text-white text-lg font-medium">
                    {testimonial.name}{" "}
                    <span className="text-[#CBD5E1] font-normal text-lg">
                      {testimonial.companyName}
                    </span>
                  </p>
                </div>

                <div className="col-span-1">
                  <img
                    className="object-cover w-full rounded-b-2xl lg:rounded-r-2xl lg:rounded-b-none"
                    src={testimonialImg}
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
