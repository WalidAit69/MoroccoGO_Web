import { motion } from "framer-motion";

const PopularCities = () => {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1, ease: "easeIn" }}
        className="Popular_section"
      >
        <h2>Popular Cities in Morocco</h2>

        <div className="Popular_cities">
          <div className="Popular_card Popular_card_sm">
            <img
              src="https://ucarecdn.com/52d8bd87-d90f-4a4d-ade9-1b17e57bb460/-/preview/1000x195/"
              alt="Agadir"
            />
            <span className="rank">2</span>
            <span className="name">Agadir</span>
          </div>
          <div className="Popular_card Popular_card_md">
            <img
              src="https://ucarecdn.com/4d7adeec-0607-4095-bb93-3c4d45162549/-/preview/1000x665/"
              alt="Marrakech"
            />
            <span className="rank">1</span>
            <span className="name">Marrakech</span>
          </div>
          <div className="Popular_card Popular_card_sm">
            <img
              src="https://ucarecdn.com/7e04f601-deb0-487f-b4ff-f93667a1f02f/-/preview/1000x426/"
              alt="Casablanca"
            />
            <span className="rank">3</span>
            <span className="name">Casablanca</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default PopularCities;
