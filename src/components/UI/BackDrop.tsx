import React from "react";
import classes from "./BackDrop.module.css";

interface BackDropProps {
  onShut: () => void;
}

const BackDrop: React.FC<BackDropProps> = ({ onShut }) => {
  return <div className={classes["back-drop"]} onClick={onShut}></div>;
};

export default BackDrop;
