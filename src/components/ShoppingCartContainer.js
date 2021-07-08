import React from "react";
import ShoppingCart from "./ShoppingCart";
import TotalPrice from "./TotalPrice";

function ShoppingCartContainer(props) {
  const { hiddenMenu, cartItem, totalPrice, itemCount } = props;

  return (
    <div className="shoppingCartContainer">
      <ShoppingCart cartItem={cartItem} />
      <TotalPrice totalPrice={totalPrice} itemCount={itemCount} />
    </div>
  );
}

export default ShoppingCartContainer;
