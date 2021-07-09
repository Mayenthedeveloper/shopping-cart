import React from "react";
import ShoppingCart from "./ShoppingCart";
import TotalPrice from "./TotalPrice";

function ShoppingCartContainer(props) {
  const { hiddenMenu, cartItem, totalPrice, itemCount, removeItem } = props;

  return (
    <div className={`shoppingCartContainer ${!hiddenMenu ? "" : "hidden"}`}>
      <ShoppingCart cartItem={cartItem} removeItem={removeItem} />
      <TotalPrice totalPrice={totalPrice} itemCount={itemCount} />
    </div>
  );
}

export default ShoppingCartContainer;
