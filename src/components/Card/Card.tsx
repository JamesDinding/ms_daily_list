import React from "react";
import classes from "./Card.module.css";

const Card: React.FC = () => {
  return (
    <div draggable className={classes.card}>
      <div>Title</div>
      <div>description</div>
      <div>check box</div>
      <div>進度條</div>
    </div>
  );
};

export default Card;
