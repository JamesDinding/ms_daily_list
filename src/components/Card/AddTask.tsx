import React, { useRef, useState } from "react";
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
      tempTask.push("test");
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

  return (
    <div className={classes.task + " no-scrollbar"}>
      <div className={classes.title}>待辦事項</div>
      <ul className={classes.task__list}>
        {tasks.map((task, index) => {
          return (
            <li key={index}>
              <input
                id={`task_${index}`}
                className={classes["task__input"]}
                type="text"
                autoFocus={true}
                minLength={1}
                maxLength={30}
                onBlur={updateTaskGoal.bind(null, `task_${index}`)}
                onKeyDown={enterTaskGoal.bind(null, `task_${index}`)}
              />
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
