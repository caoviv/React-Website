import CardItem from "../CardItem/CardItem";
import "./CardsStyles.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Tagline</h1>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            <CardItem
              src="images/img-9.jpg"
              text="Tagline"
              label="Category"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Tagline"
              label="Category"
              path="/services"
            />
          </ul>
          <ul className="cards-items">
            <CardItem
              src="images/img-3.jpg"
              text="Tagline"
              label="Category"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Tagline"
              label="Category"
              path="/products"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Tagline"
              label="Category"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
