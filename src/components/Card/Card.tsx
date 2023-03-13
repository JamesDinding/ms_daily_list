import React from "react";
import classes from "./Card.module.css";

const Card: React.FC = () => {
  return (
    <div draggable className={classes.card}>
      卡片
    </div>
  );
};

export default Card;
