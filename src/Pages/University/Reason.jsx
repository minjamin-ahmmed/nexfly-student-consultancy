import culturalImg from "../../assets/cultural.png";
import exploreImg from "../../assets/explore.png";
import qualityImg from "../../assets/quality.png";
import workingImg from "../../assets/working.png";

const Reason = () => {
  const benifits = [
    {
      image: culturalImg,
      name: "Cultural Exporsure",
      description:
        "Hosting students from around the globe to experience rich cultural diversity",
    },
    {
      image: exploreImg,
      name: "Explore Australia",
      description:
        "Hosting students from around the globe to experience rich cultural diversity",
    },
    {
      image: qualityImg,
      name: "Quality Education",
      description:
        "Hosting students from around the globe to experience rich cultural diversity",
    },
    {
      image: workingImg,
      name: "Working Opportunities",
      description:
        "Hosting students from around the globe to experience rich cultural diversity",
    },
  ];

  return (
    <div className="mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-5 md:p-10 lg:p-20">
        <div>
          <h1 className="text-2xl lg:text-4xl text-slate-900 font-medium mb-4">
            Why Study Australia
          </h1>
          <ul className="space-y-2 list-disc lg:ml-6">
            <li>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic,
              perspiciatis.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic,
              perspiciatis.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic,
              perspiciatis.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic,
              perspiciatis.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic,
              perspiciatis.
            </li>
          </ul>
        </div>

        <div>
          <h1 className="text-2xl lg:text-4xl text-slate-900 font-medium mb-4">
            Student Visa Checklist for Australia
          </h1>
          <ul className="space-y-2 list-disc lg:ml-6">
            <li>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic,
              perspiciatis.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic,
              perspiciatis.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic,
              perspiciatis.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic,
              perspiciatis.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic,
              perspiciatis.
            </li>
          </ul>
        </div>
      </div>

      <div className="px-5 md:px-10 lg:px-20 py-5">
        <h1 className="text-2xl lg:text-4xl text-slate-900 font-medium mb-4">
          Benifits
        </h1>
        <p className="text-md lg:text-lg text-[#334155] lg:w-1/2">
          We provide exceptional support and resources to make your study abroad
          journey smooth and successful.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {benifits.map((benifit, index) => (
            <div key={index} className="space-y-4">
              <div>
                <img className="w-full" src={benifit.image} alt="" />
              </div>
              <h1 className="text-xl font-medium text-slate-900">
                {" "}
                {benifit.name}{" "}
              </h1>
              <p className="text-sm text-slate-500"> {benifit.description} </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reason;
