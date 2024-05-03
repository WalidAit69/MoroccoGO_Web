import EssentialSection from "../components/home/EssentialSection";
import PopularCities from "../components/home/PopularCities";
import SearchSection from "../components/home/SearchSection";
import TopAttractions from "../components/home/TopAttractions";

const Home = () => {
  return (
    <section className="container">
      <div className="home_container">
        <SearchSection />
        <EssentialSection />
        <TopAttractions />
        <PopularCities/>
      </div>
    </section>
  );
};

export default Home;
