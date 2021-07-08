import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ShoppingCartContainer from "../ShoppingCartContainer";
import CardContainer from "./CardContainer";
import Container from "./Container";
import Nav from "./Nav";

function Hero() {
  const [totalPrice, settotalPrice] = useState(0);
  const [itemCount, setitemCount] = useState(0);
  const [cartItem, setCartItem] = useState([]);
  const [hiddenMenu, sethiddenMenu] = useState(false);

  const updateCart = (shoeImg, shoePrice) => {};

  return (
    <div>
      <section className="hero">
        <Nav />
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
