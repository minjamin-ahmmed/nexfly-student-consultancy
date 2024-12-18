import { useEffect } from "react";
import OurTeam from "../../Pages/AboutUs/OurTeam";
import Vission from "../../Pages/AboutUs/Vission";
import HelpContainer from "../../Pages/HelpContainer";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div>
        <Vission></Vission>
        <OurTeam></OurTeam>
        <HelpContainer></HelpContainer>
      </div>
    </div>
  );
};

export default AboutUs;
