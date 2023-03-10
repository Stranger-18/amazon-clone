import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="checkout__ad"
        />
        <div>
          <h3>{user?.email}</h3>
          <h2 className="checkout__title">Your shopping basket</h2>
          {basket?.map((singleItem) => (
            <CheckoutProduct
              id={singleItem.id}
              image={singleItem.image}
              title={singleItem.title}
              rating={singleItem.rating}
              price={singleItem.price}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
