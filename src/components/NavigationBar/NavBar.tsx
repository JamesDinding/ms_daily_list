import React from "react";
import classes from "./NavBar.module.css";

const NavBar: React.FC = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>logo</div>
      <button className={classes.login}>login/logout</button>
    </nav>
  );
};

export default NavBar;
