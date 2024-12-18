import Banner from "../../Pages/Refer/Banner";
import Earn from "../../Pages/Refer/Earn";
import ShareRefaral from "../../Pages/Refer/ShareRefaral";
import Question from "../../Pages/Question";
import { useEffect } from "react";

const Refer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Banner></Banner>
      <ShareRefaral></ShareRefaral>
      <Earn></Earn>
      <Question />
    </div>
  );
};

export default Refer;
