import React from "react";
import eth from "../assets/weth.png";
import "./CollectionCards.css";

const CollectionCards = ({ id, name, traits, image }) => {
  return (
    <div className="CollectionCards">
      {/* //image */}
      <img className="punkImg" src={image} />
      {/* //details */}
      <div className="details">
        <div className="name">
          {name} <div className="id">.#{id}</div>
          <div className="priceContainer">
            <img className="ethImg" src={eth} />{" "}
            <div className="price">{traits[0]?.value}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCards;
