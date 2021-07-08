import React from "react";

function ShoppingCart({ cartItem }) {
  return (
    <div className="shoppingCart">
      {cartItem.map((item) => (
        <div key={item.id} className="cardRow">
          <div className="cardImg">
            <p>x{item.cartCount}</p>
            <img src={item.img} alt="shoe" />
          </div>
          <div className="cartPrice">
            <p>{item.price}$</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShoppingCart;
