import React from "react";
import { useStateValue } from "../../StateProvider";

import "./Product.css";

const Product = ({ id, title, image, prise, rating }) => {
  const [, dispatch] = useStateValue();

  function handleClick() {
    dispatch({
      type: "ADD_TO_BASHKET",
      item: {
        id,
        title,
        image,
        prise,
        rating,
      },
    });
  }

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_prise">
          <small>€</small>
          <strong>{prise}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p key={Math.random()}>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="product" />
      <button onClick={handleClick}>Add to Basket</button>
    </div>
  );
};

export default Product;
