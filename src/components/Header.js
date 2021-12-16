import React from "react";
import "./Header.css";
import punkLogo from "../assets/header/cryptopunk-logo.png";
import searchIcon from "../assets/header/search.png";
import themeSwitch from "../assets/header/theme-switch.png";
const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={punkLogo} className="punkLogo" alt="" />
      </div>
      <div className="searchContainer">
        <img className="searchIcon" src={searchIcon} />
        <input
          className="searchInput"
          placeholder="Collection, item or user..."
        />
      </div>
      <div className="headerItems">
        <p>Drops</p>
        <p>
          <a href="https://testnets.opensea.io/account" target="_blank">
            Marketplace{" "}
          </a>
        </p>
        <p>Create</p>
      </div>
      <div className="headerActions">
        <div className="themeSwitchContainer">
          <img className="themeSwitchIcon" src={themeSwitch} />
        </div>
      </div>
      <div className="logInButton">Get In</div>
    </div>
  );
};

export default Header;
