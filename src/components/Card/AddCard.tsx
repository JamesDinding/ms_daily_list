import React, { useState, useEffect, useRef } from "react";
import { useListDispatch } from "../../hooks/list-hooks";
import { listActions } from "../../store/list-slice";
import Input from "./Input";
import Btn from "../UI/Btn";
import AddTask from "./AddTask";
import classes from "./AddCard.module.css";

interface AddCardProps {
  onShut: () => void;
  listName: string;
}

const AddCard: React.FC<AddCardProps> = ({ onShut, listName }) => {
  const dispatch = useListDispatch();
  const [tasks, setTasks] = useState<string[]>([]);
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);

  const createCardHandler = () => {
    if (!titleRef.current?.value || !descriptionRef.current?.value) return;

    dispatch(
      listActions.addToList({
        id: "" + Math.floor(Math.random() * 1000),
        listName: listName,
        title: titleRef.current?.value,
        description: descriptionRef.current?.value,
        creater: "DinDing",
        tasks: tasks.map((el) => ({ taskDescription: el, isDone: false })),
      })
    );
    onShut();
  };

  return (
    <form className={classes.form}>
      <Input placeHolder="標題" maxLen={15} inputRef={titleRef} />
      <Input placeHolder="目標描述" maxLen={55} inputRef={descriptionRef} />
      <AddTask tasks={tasks} setTasks={setTasks} />
      <div style={{ flexGrow: "1" }}></div>
      <Btn
        content="新增卡片"
        cbFunc={createCardHandler}
        isAble={true}
        addionalCss={classes["form__btn--card"]}
      />
    </form>
  );
};

export default AddCard;
