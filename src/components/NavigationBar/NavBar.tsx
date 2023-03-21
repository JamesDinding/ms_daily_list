import React from "react";
import classes from "./NavBar.module.css";
import { useNavigate } from "react-router-dom";

const NavBar: React.FC = () => {
  const navigate = useNavigate();

  function navigateHandler() {
    // for logout
    // if(isLogged)
    navigate("/");
  }

  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>logo</div>
      <button className={classes.login} onClick={navigateHandler}>
        logout
      </button>
    </nav>
  );
};

export default NavBar;
