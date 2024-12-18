import { useEffect } from "react";
import Banner from "../../Pages/Partner/Banner";
import Benifits from "../../Pages/Partner/Benifits";
import Help from "../../Pages/Partner/Help";
import Journey from "../../Pages/Partner/Journey";
import OurPartners from "../../Pages/Partner/OurPartners";
import Testimonial from "../../Pages/Partner/Testimonial";
import UniversityPartners from "../../Pages/Partner/UniversityPartners";
import Video from "../../Pages/Partner/Video";

const Partner = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Banner></Banner>
      <Journey></Journey>
      <Benifits></Benifits>
      <OurPartners></OurPartners>
      <UniversityPartners></UniversityPartners>
      <Video></Video>
      <Testimonial></Testimonial>
      <Help></Help>
    </div>
  );
};

export default Partner;
