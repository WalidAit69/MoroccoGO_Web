import { PiAppStoreLogo } from "react-icons/pi";
import img from "../assets/App.png";
import { BiLogoPlayStore } from "react-icons/bi";
import { motion } from "framer-motion";


const AppBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.1, ease: "easeIn" }}
      className="container_inner App_banner"
    >
      <img src={img} alt="App" />
      <div className="App_banner_text">
        <span>App available</span>
        <span>
          Get a personalized itinerary just for you, guided by traveler tips and
          reviews.
        </span>

        <button>Download Now</button>
      </div>

      <div className="App_platforms">
        <a href="#">
          <PiAppStoreLogo size={25} />
        </a>
        <a href="#">
          <BiLogoPlayStore size={25} />
        </a>
      </div>
    </motion.div>
  );
};

export default AppBanner;
