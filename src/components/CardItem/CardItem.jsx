import { NavLink } from "react-router-dom";

function CardItem() {
  return (
    <>
      <li className="cards-item">
        <NavLink className="cards-item-link">
          <figure className="cards-item-pic-wrap">
            <img src="/" alt="Travel" className="cards-item-img" />
          </figure>
          <div className="cards-item-info">
            <h5 className="cards-item-text">
                
            </h5>
          </div>
        </NavLink>
      </li>
    </>
  );
}

export default CardItem;
