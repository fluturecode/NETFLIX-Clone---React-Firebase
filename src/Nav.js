import React, { useEffect, useState } from "react";
import "./Nav.css";
import NetflixLogo from "./netflix-logo.png";
import NeflixAvatar from "./netflix-avatar.jpg";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src={NetflixLogo} alt="Netflix Logo" />
      <img className="nav__avatar" src={NeflixAvatar} alt="Netflix Avatar" />
    </div>
  );
}

export default Nav;
