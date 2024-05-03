import RatingCircle from "./RatingCircle";

const MainCardLg = () => {
  return (
    <button className="maincard maincard_large">
      <img src="" alt="" />
      <div className="maincard_info">
        <span className="name">name</span>
        <div className="reviews">
          <RatingCircle rating={4} />
          <span>200</span>
        </div>
        <span className="location">type</span>
      </div>

      <div className="description">
        <p>
          Nicely designed and maintained gardens, similar to those of Generalife
          in Granada, Spain. It’s a good place to recoup from the intensity of
          the market atmosphere
        </p>
        <a>See full details</a>
      </div>
    </button>
  );
};

export default MainCardLg;
