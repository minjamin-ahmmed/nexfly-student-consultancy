import icon from "../../assets/Checkmark.png";

const Requirements = () => {
  const visaRequirements = [
    {
      requirement:
        "Confirmation of Enrolment (CoE): The university issues it upon acceptance.",
    },
    {
      requirement:
        "Genuine Temporary Entrant (GTE) Statement: Demonstrates your intention to stay temporarily.",
    },
    {
      requirement:
        "Overseas Student Health Cover (OSHC): Proof of health insurance.",
    },
    {
      requirement: "Visa Application Form: Completed online",
    },
    {
      requirement:
        "Financial Proof: Evidence of funds to cover tuition, living expenses.",
    },

    {
      requirement: "English Proficiency: Proof as required by the program.",
    },

    {
      requirement:
        "Health Examination: May be required depending on your country.",
    },
  ];

  const costs = [
    {
      fees: "Tuition Fees: Lorem ipsum dolor sit amet consectetur. Viverra interdum at elementum adipiscing placerat dignissim sagittis.",
    },
    {
      fees: "Living Expenses: Morbi donec etiam cursus nunc odio non eu eu. Ultricies nulla at neque tortor aliquet sit. ",
    },

    {
      fees: "Health Insurance: Ultricies nulla at neque tortor aliquet sit. Sed urna convallis donec nullam tellus posuere amet.",
    },
    {
      fees: "Books and Supplies: Ultricies nulla at neque tortor aliquet sit. Sed urna convallis donec nullam tellus posuere amet.",
    },
  ];

  return (
    <div className="bg-indigo-500 text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-5 md:p-10 lg:p-20">
        <div>
          {visaRequirements.map((visaRequirement, index) => (
            <div key={index}>
              <div className="flex items-start gap-2 space-y-2">
                <div>
                  <img src={icon} alt="" />
                </div>
                <h1 className="text-[16px] text-white ">
                  {" "}
                  {visaRequirement.requirement}{" "}
                </h1>
              </div>
            </div>
          ))}
        </div>

        <div>
          {costs.map((cost, index) => (
            <div key={index}>
              <div className="flex items-start gap-2 space-y-2">
                <div>
                  <img src={icon} alt="" />
                </div>
                <h1 className="text-[16px] text-white "> {cost.fees} </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Requirements;
