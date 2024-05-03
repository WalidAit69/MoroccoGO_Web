import { motion } from "framer-motion";
import MainCardLg from "../../widgets/MainCardLg";

const TopAttractions = () => {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1, ease: "easeIn" }}
        className="essential_section"
      >
        <div>
          <div className="Title_Navigation">
            <h2>Top Attractions in Morocco</h2>

            <button>See all</button>
          </div>

          <p style={{ opacity: 0.6 }}>
            We consider the quality, quantity, recency, consistency of reviews,
            and the number of page views over time.
          </p>
        </div>

        <div className="row">
          <MainCardLg />
          <MainCardLg />
          <MainCardLg />
        </div>
      </motion.div>
    </section>
  );
};

export default TopAttractions;
