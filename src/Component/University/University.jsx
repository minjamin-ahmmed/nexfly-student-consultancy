import { useEffect } from "react";
import Banner from "../../Pages/University/Banner";
import Criteria from "../../Pages/University/Criteria";
import Lifestyle from "../../Pages/University/Lifestyle";
import Reason from "../../Pages/University/Reason";
import Requirements from "../../Pages/University/Requirements";
import PopularProgram from "../../Pages/University/PopularProgram";
import TopUniversities from "../../Pages/University/TopUniversities";
import Articles from "../../Pages/University/Articles";
import OtherCountry from "../../Pages/University/OtherCountry";
import HelpContainer from "../../Pages/HelpContainer";

const University = () => {
  useEffect(() => {
    window.scrollTo({ top: (0, 0) });
  }, []);

  return (
    <div>
      <Banner></Banner>
      <Reason></Reason>
      <Lifestyle></Lifestyle>
      <Criteria></Criteria>
      <Requirements></Requirements>
      <PopularProgram></PopularProgram>
      <TopUniversities></TopUniversities>
      <Articles></Articles>
      <OtherCountry></OtherCountry>
      <HelpContainer></HelpContainer>
    </div>
  );
};

export default University;
