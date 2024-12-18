import { useEffect } from "react";
import Contact from "../../Pages/Contact Us/Contact";
import FrequentlyAsk from "../../Pages/Contact Us/FrequentlyAsk";
import Location from "../../Pages/Contact Us/Location";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Contact></Contact>
      <Location></Location>
      <FrequentlyAsk></FrequentlyAsk>
    </div>
  );
};

export default ContactUs;
