import React from "react";
import Container from "./Container";

function Nav({ hiddenMenu, sethiddenMenu, itemCount }) {
  return (
    <nav>
      <Container>
        <h2>
          Shoes<span>.</span>
        </h2>
        <div className="menuWrapper" onClick={() => sethiddenMenu(!hiddenMenu)}>
          <i
            className={
              hiddenMenu ? "fas fa-timees fa-lg" : "fas fa-shopping-cart fa-lg"
            }
          ></i>
          <p>{itemCount > 0 && itemCount}</p>
        </div>
      </Container>
    </nav>
  );
}

export default Nav;
