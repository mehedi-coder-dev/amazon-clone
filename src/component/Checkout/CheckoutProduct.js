import React from "react";
import { useStateValue } from "../../StateProvider";
import "./CheckoutProduct.css";

const CheckoutProduct = ({ title, prise, rating, image, id }) => {
  const [, dispatch] = useStateValue();

  const removeFromBashket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkout_image" src={image} alt="basketImg" />

      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>

        <p className="checkoutProduct_prise">
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
        <button onClick={removeFromBashket}>Remove from basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
