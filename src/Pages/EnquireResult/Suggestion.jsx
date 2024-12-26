import img1 from "../../assets/cse.png";
import img2 from "../../assets/it.png";
import img3 from "../../assets/ds.png";
import img4 from "../../assets/swe.png";
import SuggestionCard from "./SuggestionCard";

const Suggestion = () => {
  const suggestionList = [
    {
      image: img1,
      course: "MS in Computer Science",
      country: "USA Canada, UK, Australia",
      description:
        "If you're passionate about technology and eager to pursue a career in this exciting field, the Web and Application Development program at Touro University is the perfect choice for you.",
    },
    {
      image: img2,
      course: "MS in Computer Science",
      country: "USA Canada, UK, Australia",
      description:
        "If you're passionate about technology and eager to pursue a career in this exciting field, the Web and Application Development program at Touro University is the perfect choice for you.",
    },
    {
      image: img3,
      course: "MS in Computer Science",
      country: "USA Canada, UK, Australia",
      description:
        "If you're passionate about technology and eager to pursue a career in this exciting field, the Web and Application Development program at Touro University is the perfect choice for you.",
    },
    {
      image: img4,
      course: "MS in Computer Science",
      country: "USA Canada, UK, Australia",
      description:
        "If you're passionate about technology and eager to pursue a career in this exciting field, the Web and Application Development program at Touro University is the perfect choice for you.",
    },
  ];

  return (
    <div className="px-5 md:px-10 lg:px-40 py-5 md:py-10 lg:pt-10 lg:pb-24">
      <h1 className="text-2xl font-medium mb-8">Suggest For You: </h1>
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-10 ">
        {suggestionList.map((suggestion, index) => (
          <SuggestionCard key={index} suggestion={suggestion}></SuggestionCard>
        ))}
      </div>
    </div>
  );
};

export default Suggestion;
