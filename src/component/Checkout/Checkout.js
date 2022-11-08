import React from "react";
import { useStateValue } from "../../StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "../subtotal/Subtotal";

const Checkout = () => {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img className="cheout_add" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="banner" />

        {basket.length === 0 ? (
          <div>
            <h1>Your Shopping Basket is empty</h1>
            <p>You have no items in your basket.To buy on or "Add to basket" next to the items.</p>
          </div>
        ) : (
          <div>
            <h2 className="checkout_title">Your Shopping Basket</h2>

            {basket.map((bsk) => (
              <CheckoutProduct key={Math.random()} title={bsk.title} image={bsk.image} prise={bsk.prise} rating={bsk.rating} id={bsk.id} />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout_right">
          <Subtotal />
        </div>
      )}
    </div>
  );
};

export default Checkout;
