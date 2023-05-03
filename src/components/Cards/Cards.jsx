import CardItem from "../CardItem/CardItem";
import "./CardsStyles.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Click to see more daily adventures</h1>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            <CardItem
              src="images/img-9.jpg"
              text="Big Yawns for a boy that has no job or rent to pay"
              label="Mornings"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Big smiles all around"
              label="Adventure"
              path="/services"
            />
          </ul>
          <ul className="cards-items">
            <CardItem
              src="images/img-3.jpg"
              text="Sometimes his ears just disappear"
              label="Seal dog"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Much Sleep"
              label="Sleep"
              path="/products"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Burrito Dog"
              label="Food"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
