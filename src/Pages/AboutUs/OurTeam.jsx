import Slider from "react-slick";
import img1 from "../../assets/team1.png";
import img2 from "../../assets/team2.png";
import img3 from "../../assets/team3.png";
import img4 from "../../assets/team4.png";

const OurTeam = () => {
  const teamMembers = [
    {
      image: img1,
      name: "Esther Howard",
      position: "Chairman",
    },
    {
      image: img2,
      name: "Wade Warren",
      position: "Managing Director",
    },
    {
      image: img3,
      name: "Leslie Alexander",
      position: "Deputy Managing Director",
    },
    {
      image: img4,
      name: "Robert Fox",
      position: "Deputy Managing Director",
    },
  ];

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="absolute top-[-40%] left-[75%] lg:top-[-20%] lg:left-[91%] transform -translate-y-1/2 z-10 bg-indigo-400 text-white px-4 py-2  rounded-full shadow-lg hover:bg-indigo-700 transition-all"
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
        className="absolute top-[-40%] right-[2%] lg:top-[-20%] lg:right-[2%] transform -translate-y-1/2 z-10 bg-indigo-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-indigo-700 transition-all"
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
    <div className="px-5 md:px-10 lg:px-40 mb-20">
      <div className="space-y-3 mb-12">
        <h1 className="font-Poppins font-medium text-xl md:text-2xl lg:text-4xl">
          Our Team
        </h1>
        <p className="text-slate-500 font-normal lg:w-1/2">
          We provide exceptional support and resources to make your study abroad
          journey smooth and successful.
        </p>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                <div className="p-2">
                    <div>
                        <img className="mb-4 w-full" src={img1} alt="" />
                    </div>
                    <h3 className="mb-1 font-Poppins text-xl font-medium">Esther Howard</h3>
                    <p className="text-slate-500">Chairman</p>
                </div>

                <div className="p-2">
                    <div>
                        <img className="mb-4 w-full" src={img2} alt="" />
                    </div>
                    <h3 className="mb-1 font-Poppins text-xl font-medium">Wade Warren</h3>
                    <p className="text-slate-500">Managing Director</p>
                </div>

                <div className="p-2">
                    <div>
                        <img className="mb-4 w-full" src={img3} alt="" />
                    </div>
                    <h3 className="mb-1 font-Poppins text-xl font-medium">Leslie Alexander</h3>
                    <p className="text-slate-500">Deputy Managing Director</p>
                </div>

                <div className="p-2">
                    <div>
                        <img className="mb-4 w-full" src={img4} alt="" />
                    </div>
                    <h3 className="mb-1 font-Poppins text-xl font-medium">Robert Fox</h3>
                    <p className="text-slate-500">Deputy Managing Director</p>
                </div>

            </div> */}

      <div className="relative mt-10">
        <Slider {...settings}>
          {teamMembers.map((member, index) => (
            <div key={index} className="p-5">
              <div className="p-2">
                <div>
                  <img className="mb-4 w-full" src={member.image} alt="" />
                </div>
                <h3 className="mb-1 font-Poppins text-xl font-medium">
                  {" "}
                  {member.name}{" "}
                </h3>
                <p className="text-slate-500">{member.position}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OurTeam;
