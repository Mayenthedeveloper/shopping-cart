import React from "react";
import Container from "./Container";

function Nav() {
  return (
    <nav>
      <Container>
        <h2>
          Shoes<span>.</span>
        </h2>
        <div className="menuWrapper"></div>
      </Container>
    </nav>
  );
}

export default Nav;