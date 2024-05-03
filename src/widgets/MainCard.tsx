import RatingCircle from "./RatingCircle";

const MainCard = () => {
  return (
    <button className="maincard">
      <img src="" alt="" />
      <div className="maincard_info">
        <span className="name">name</span>
        <div className="reviews">
          <RatingCircle rating={4} />
          <span>200</span>
        </div>
        <span className="location">location</span>
        <span className="price">price</span>
      </div>
    </button>
  );
};

export default MainCard;
