import React, { Fragment, useRef, useState } from "react";
import Btn from "../UI/Btn";
import classes from "./AddTask.module.css";

interface AddTaskProps {
  tasks: string[];
  setTasks: React.Dispatch<React.SetStateAction<string[]>>;
}

const AddTask: React.FC<AddTaskProps> = ({ tasks, setTasks }) => {
  const [isCreating, setIsCreating] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const createEmptyTask = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isCreating) return;
    setTasks((prev) => {
      const tempTask = [...prev];
      tempTask.push("");
      return tempTask;
    });
    setIsCreating(true);

    let timer: ReturnType<typeof setTimeout>;
    timer = setTimeout(() => {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
      clearTimeout(timer);
    });
  };

  const updateTaskGoal = (target: string) => {
    const { value } = document.querySelector("#" + target) as HTMLInputElement;
    if (value.length == 0) return;

    const index = +target.split("_")[1];

    setTasks((prev) => {
      const tempTask = [...prev];
      tempTask[index] = value;
      return tempTask;
    });
    setIsCreating(false);
  };

  const enterTaskGoal = (
    target: string,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key !== "Enter" || e.keyCode !== 13) return;
    updateTaskGoal(target);

    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  const removeTaskHandler = (order: number) => {
    setTasks((prev) => {
      const temp = [...prev];
      temp.splice(order, 1);
      return temp;
    });
    setIsCreating(false);
  };

  return (
    <div className={classes.task + " no-scrollbar"}>
      <div className={classes.title}>待辦事項</div>
      <ul className={classes.task__list}>
        {tasks.map((task, index) => {
          console.log(task, task.length);
          return (
            <li key={index} className={classes["task__list--item"]}>
              <input
                id={`task_${index}`}
                className={classes["task__input"]}
                type="text"
                autoFocus={true}
                minLength={1}
                maxLength={30}
                onKeyDown={enterTaskGoal.bind(null, `task_${index}`)}
              />
              <button
                type="button"
                onClick={removeTaskHandler.bind(null, index)}
              >
                <img src="/assets/minus.png" alt="" />
              </button>
              {!task.length && (
                <button
                  type="button"
                  onClick={updateTaskGoal.bind(null, `task_${index}`)}
                >
                  <img src="/assets/add.png" alt="" />
                </button>
              )}
            </li>
          );
        })}
      </ul>
      <Btn
        content="新增待辦事項"
        isAble={!isCreating}
        cbFunc={createEmptyTask}
      />
      <div ref={bottomRef}></div>
    </div>
  );
};

export default AddTask;
