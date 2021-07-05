import React from "react";

function CardBg({ shoeImg }) {
  return (
    <div>
      <div className="cardBg">
        <img src={shoeImg} alt="shoe" />
      </div>
    </div>
  );
}

export default CardBg;
