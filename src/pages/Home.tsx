import EssentialSection from "../components/home/EssentialSection";
import SearchSection from "../components/home/SearchSection";

const Home = () => {
  return (
    <section className="container">
      <div className="home_container">
        <SearchSection />
        <EssentialSection />
      </div>
    </section>
  );
};

export default Home;
