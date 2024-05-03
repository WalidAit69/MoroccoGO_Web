import MainCard from "../../widgets/MainCard";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { motion } from "framer-motion";

const EssentialSection = () => {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.7, ease: "easeIn" }}
        className="essential_section"
      >
        <h2>Essential Morocco</h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1, ease: "easeIn" }}
          className="row"
        >
          <div className="maincard maincard_text">
            <h3>Stay</h3>
            <span>A mix of the charming, modern, and tried and true.</span>
          </div>

          <Splide
            options={{
              type: "slide",
              perPage: 3,
              draggable: true,
              pagination: false,
              arrows: false,
              gap: "1rem",
              autoplay: true,
              interval: 5000,
            }}
            className="main-slider"
          >
            <SplideSlide className="cities-coantainer">
              <MainCard />
            </SplideSlide>
            <SplideSlide className="cities-coantainer">
              <MainCard />
            </SplideSlide>
            <SplideSlide className="cities-coantainer">
              <MainCard />
            </SplideSlide>
          </Splide>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2, ease: "easeIn" }}
          className="row"
        >
          <div className="maincard maincard_text">
            <h3>Eat</h3>
            <span>Can't-miss spots to dine, drink, and feast.</span>
          </div>

          <Splide
            options={{
              type: "slide",
              perPage: 3,
              draggable: true,
              pagination: false,
              arrows: false,
              gap: "1rem",
              autoplay: true,
              interval: 5000,
            }}
            className="main-slider"
          >
            <SplideSlide className="cities-coantainer">
              <MainCard />
            </SplideSlide>
            <SplideSlide className="cities-coantainer">
              <MainCard />
            </SplideSlide>
            <SplideSlide className="cities-coantainer">
              <MainCard />
            </SplideSlide>
          </Splide>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2, ease: "easeIn" }}
          className="row"
        >
          <div className="maincard maincard_text">
            <h3>Do</h3>
            <span>
              Places to see, ways to wander, and signature experiences.
            </span>
          </div>

          <Splide
            options={{
              type: "slide",
              perPage: 3,
              draggable: true,
              pagination: false,
              arrows: false,
              gap: "1rem",
              autoplay: true,
              interval: 5000,
            }}
            className="main-slider"
          >
            <SplideSlide className="cities-coantainer">
              <MainCard />
            </SplideSlide>
            <SplideSlide className="cities-coantainer">
              <MainCard />
            </SplideSlide>
            <SplideSlide className="cities-coantainer">
              <MainCard />
            </SplideSlide>
          </Splide>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EssentialSection;
