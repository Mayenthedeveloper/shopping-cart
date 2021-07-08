import React from "react";
import Button from "./Button";

function CardInfo({ shoePrice, updateCart }) {
  return (
    <div>
      <div className="cardInfo">
        <p>${shoePrice}</p>
        <Button addItem={updateCart} />
      </div>
    </div>
  );
}

export default CardInfo;
