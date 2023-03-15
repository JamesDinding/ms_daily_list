import React from "react";
import classes from "./Btn.module.css";

interface BtnProps {
  content: string;
  cbFunc: (arg: any) => void;
  isAble?: boolean;
  addionalCss?: string;
}

const Btn: React.FC<BtnProps> = ({
  content,
  cbFunc,
  isAble = true,
  addionalCss = "",
}) => {
  return (
    <button
      type="button"
      className={
        addionalCss + " " + (isAble ? classes["btn"] : classes["btn--disabled"])
      }
      onClick={cbFunc}
    >
      {content}
    </button>
  );
};

export default Btn;
