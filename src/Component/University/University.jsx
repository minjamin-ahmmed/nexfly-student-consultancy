import { useEffect } from "react";
import Banner from "../../Pages/University/Banner";
import Criteria from "../../Pages/University/Criteria";
import Lifestyle from "../../Pages/University/Lifestyle";
import Reason from "../../Pages/University/Reason";
import Requirements from "../../Pages/University/Requirements";

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
    </div>
  );
};

export default University;
