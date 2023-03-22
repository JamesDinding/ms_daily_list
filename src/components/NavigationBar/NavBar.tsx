import React from "react";
import classes from "./NavBar.module.css";
import { useNavigate } from "react-router-dom";
import { DUMMY_DATA } from "../../const";

const NavBar: React.FC = () => {
  const navigate = useNavigate();

  function navigateHandler() {
    // for logout
    // if(isLogged)
    fetch(
      "https://note-b6774-default-rtdb.firebaseio.com/note/-NR9SdrVP7TjGU7Z9n6g.json",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(DUMMY_DATA),
      }
    )
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
      <div className={classes.logo}>logo</div>

      <button className={classes.navbar__btn} onClick={navigateHandler}>
        reset data
      </button>
    </nav>
  );
};

export default NavBar;
