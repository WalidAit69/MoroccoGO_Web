import { PiAppStoreLogo } from "react-icons/pi";
import img from "../assets/App.png";
import { BiLogoPlayStore } from "react-icons/bi";

const AppBanner = () => {
  return (
    <div className="App_banner">
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
    </div>
  );
};

export default AppBanner;
