import React from "react";
import classes from "./NavBar.module.css";
import { useNavigate } from "react-router-dom";
import { DUMMY_DATA, FB_DOMAIN, ANONYMOUS_USER } from "../../const";

const NavBar: React.FC = () => {
  const navigate = useNavigate();

  function navigateHandler() {
    // for logout
    // if(isLogged)
    fetch(FB_DOMAIN + ANONYMOUS_USER + ".json", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(DUMMY_DATA),
    })
      .then((res) => {
        if (!res.ok) throw new Error("firebase sucks.");
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
    navigate("/");
  }

  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>
        <img src="/assets/notes.png" className={classes.logo__img} alt="" />
        <span className={classes.logo__txt}>NOTE</span>
      </div>

      <button className={classes.navbar__btn} onClick={navigateHandler}>
        reset data
      </button>
    </nav>
  );
};

export default NavBar;
