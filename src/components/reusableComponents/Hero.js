import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ShoppingCartContainer from "../ShoppingCartContainer";
import CardContainer from "./CardContainer";
import Container from "./Container";
import Nav from "./Nav";

function Hero() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [itemCount, setitemCount] = useState(0);
  const [cartItem, setCartItem] = useState([]);
  const [hiddenMenu, sethiddenMenu] = useState(false);

  const updateCart = (shoeImg, shoePrice) => {
    setitemCount((prevCount) => prevCount + 1);
    setTotalPrice((prevPrice) => prevPrice + shoePrice);
    if (cartItem.find((item) => item.img === shoeImg)) {
      const result = cartItem.find((item) => item.img === shoeImg);
      result.cartCount++;
      return;
    }

    setCartItem([
      ...cartItem,
      {
        img: shoeImg,
        price: shoePrice,
        id: uuidv4(),
        cartCount: 1,
      },
    ]);
  };

  return (
    <div>
      <section className="hero">
        <Nav
          hiddenMenu={hiddenMenu}
          sethiddenMenu={sethiddenMenu}
          itemCount={itemCount}
        />
        <Container>
          <CardContainer updateCart={updateCart} />
          <ShoppingCartContainer
            hiddenMenu={hiddenMenu}
            cartItem={cartItem}
            totalPrice={totalPrice}
            itemCount={itemCount}
          />
        </Container>
      </section>
    </div>
  );
}

export default Hero;
