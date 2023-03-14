import React, { useState } from "react";
import classes from "./Input.module.css";

interface InputProps {
  inputRef: React.RefObject<HTMLInputElement>;
  placeHolder: string;
  minLen?: number;
  maxLen?: number;
}

const Input: React.FC<InputProps> = ({
  inputRef,
  placeHolder = "請輸入文字",
  minLen = 0,
  maxLen = 50,
}) => {
  const [labelCss, setLabelCss] = useState("form__label");

  const onBlurHandler = () => {
    if (inputRef.current?.value.length !== 0) return;
    setLabelCss("form__label");
  };

  return (
    <div className={classes.input}>
      <input
        ref={inputRef}
        className={classes.form__input}
        type="text"
        minLength={minLen}
        maxLength={maxLen}
        onFocus={() => setLabelCss("form__label--focus")}
        onBlur={onBlurHandler}
      />
      <label className={classes[labelCss]}>{placeHolder}</label>
    </div>
  );
};

export default Input;
