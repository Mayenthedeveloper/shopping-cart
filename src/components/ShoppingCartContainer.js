import React from "react";
import ShoppingCart from "./ShoppingCart";

function ShoppingCartContainer(props) {
  const { hiddenMenu, cartItem, totalPrice, itemCount } = props;

  return (
    <div className="shoppingCartContainer">
      <ShoppingCart cartItem={cartItem} />
    </div>
  );
}

export default ShoppingCartContainer;
