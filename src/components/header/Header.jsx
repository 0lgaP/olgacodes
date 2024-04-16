import React from "react";
import "./header.css";
import CTA from "./CTA";
import About from "../about/About";

const Header = () => {
  return (
    <header>
      <div id="home" className="container header__container">
        <h5>Artist</h5>
        <h1>Olga Perron</h1>
        <CTA />
        <About />
      </div>
    </header>
  );
};

export default Header;
