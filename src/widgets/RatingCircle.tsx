const RatingCircle = ({ rating }: { rating: number }) => {
  const circles = [];
  for (let i = 0; i < 5; i++) {
    circles.push(
      <div
        key={i}
        className={`RatingCircle ${i < rating ? "filled" : ""}`}
      ></div>
    );
  }

  return <div className="RatingContainer">{circles}</div>;
};

export default RatingCircle;
