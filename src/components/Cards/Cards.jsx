import CardItem from "../CardItem/CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these Epic Destinations!</h1>
      <div className="cards-container">
        <div className="cards-wrapper">
          <div className="cards-items">
            <CardItem />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
