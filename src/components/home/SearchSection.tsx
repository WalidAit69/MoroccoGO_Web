import { useEffect, useRef, useState } from "react";
import { BsTicketPerforated } from "react-icons/bs";
import { CiLocationArrow1, CiSearch } from "react-icons/ci";
import { IoRestaurantOutline } from "react-icons/io5";
import { LiaBedSolid } from "react-icons/lia";
import { RiHomeLine } from "react-icons/ri";
import CityCard from "../../widgets/CityCard";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { motion } from "framer-motion";

const images = [
  "https://ucarecdn.com/112e7812-9f8d-4fc4-8a57-3174075813d7/-/preview/1000x667/",
  "https://ucarecdn.com/22a93a2d-ea14-481e-953e-ad63a6bf8ed2/-/preview/1000x666/",
  "https://ucarecdn.com/25c3358f-579b-4413-9c64-d93bb5701243/-/preview/1000x1000/",
  "https://ucarecdn.com/148020a4-ec2c-493a-894e-7354490de46e/-/preview/750x1000/",
];

const SearchSection = () => {
  const [activeButton, setActiveButton] = useState("searchall");
  const [title, settitle] = useState("Explore Morocco");
  const [search, setsearch] = useState(false);
  const searchContainerRef = useRef(null);

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
    if (buttonName === "searchall") {
      settitle("Explore Morocco");
    } else if (buttonName === "hotels") {
      settitle("Stay somewhere great");
    } else if (buttonName === "thingstodo") {
      settitle("Do something fun");
    } else if (buttonName === "restaurants") {
      settitle("Find places to eat");
    }
  };

  const handleSearchClick = () => {
    setsearch(true);
    document.body.classList.add("dark-overlay");
    const el = document.querySelector(".search-input") as HTMLInputElement;
    if (el) {
      el.focus();
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      searchContainerRef.current &&
      //@ts-ignore
      !searchContainerRef.current.contains(event.target)
    ) {
      setsearch(false);
      document.body.classList.remove("dark-overlay");
    }
  };

  useEffect(() => {
    if (search) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [search]);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5, ease: "easeIn" }}
        className="home_search"
      >
        <h1>{title}</h1>

        <ul>
          <button
            className={activeButton === "searchall" ? "active" : ""}
            onClick={() => handleButtonClick("searchall")}
          >
            <RiHomeLine size={20} />
            <li>Search All</li>
          </button>

          <button
            className={activeButton === "hotels" ? "active" : ""}
            onClick={() => handleButtonClick("hotels")}
          >
            <LiaBedSolid size={20} />
            <li>Hotels</li>
          </button>

          <button
            className={activeButton === "thingstodo" ? "active" : ""}
            onClick={() => handleButtonClick("thingstodo")}
          >
            <BsTicketPerforated size={20} />
            <li>Things to Do</li>
          </button>

          <button
            className={activeButton === "restaurants" ? "active" : ""}
            onClick={() => handleButtonClick("restaurants")}
          >
            <IoRestaurantOutline size={20} />
            <li>Restaurants</li>
          </button>
        </ul>

        <form>
          <div
            className={`search-bar ${search && "search-bar-active"}`}
            ref={searchContainerRef}
          >
            <div className="input-container">
              <CiSearch size={25} style={{ marginLeft: ".5rem" }} />
              <input
                className="search-input"
                onClick={handleSearchClick}
                type="text"
                placeholder="Places to go, things to do, hotels..."
              />
            </div>
            <button onClick={handleSearchClick} type="button">
              Search
            </button>

            {search && (
              <div className="search-container">
                <div className="city_card">
                  <div className="icon">
                    <CiLocationArrow1 size={28} />
                  </div>
                  <span>Nearby</span>
                </div>

                <span className="seperator">Popular Destinations</span>

                <div className="cities">
                  <CityCard />
                  <CityCard />
                  <CityCard />
                </div>
              </div>
            )}
          </div>
          <div className={`${search && "dropdown"}`}></div>
        </form>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.7, ease: "easeIn" }}
      >
        <Splide
          options={{
            type: "loop",
            perPage: 2,
            draggable: true,
            pagination: false,
            arrows: false,
            gap: "1rem",
            autoplay: true,
            interval: 3000,
          }}
          className="container_inner main-slider"
        >
          {images.map((img, index) => (
            <SplideSlide key={index} className="cities-coantainer">
              <button className="MainSlider_cities">
                <img src={img} alt="landscape" />

                <div className="MainSlider_cities_text">
                  <span>Name</span>
                  <span>Description</span>
                </div>
              </button>
            </SplideSlide>
          ))}
        </Splide>
      </motion.div>
    </div>
  );
};

export default SearchSection;
