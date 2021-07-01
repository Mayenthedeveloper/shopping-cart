import React from "react";
import { v4 as uuidv4 } from "uuid";
import CardContainer from "./CardContainer";
import Container from "./Container";
import Nav from "./Nav";

function Hero() {
  return (
    <div>
      <section className="hero">
        <Nav />
        <Container>
          <CardContainer />
        </Container>
      </section>
    </div>
  );
}

export default Hero;
