import React, { useRef } from "react";
import classes from "./Card.module.css";
import { useListDispatch } from "../../hooks/list-hooks";
import { ListItem } from "../../module/list";
import { enterScope } from "immer/dist/internal";

interface CardProps {
  cardData: ListItem;
  order: number;
}

let startList = "";
let endList = "";
let endOrder = 0;

const Card: React.FC<CardProps> = ({ cardData, order }) => {
  const dispatch = useListDispatch();
  const listRef = useRef<HTMLDivElement>(null);

  const swapCardHandler = (e: React.DragEvent) => {
    e.preventDefault();
    const target = e.target as HTMLElement;
    // console.log(target.id);
  };

  const dragStartHandler = (e: React.DragEvent) => {
    startList = cardData.listName;
  };

  const dropHandler = (e: React.DragEvent) => {
    endList = cardData.listName;
  };

  return (
    <div
      draggable={true}
      id={`order_${order}`}
      ref={listRef}
      className={classes.card}
      onDragEnter={swapCardHandler}
      onDragStart={dragStartHandler}
      onDrop={dropHandler}
      onDragOver={(e) => e.preventDefault()}
    >
      <div className={classes.card__title}>{cardData.title}</div>
      <div className={classes.card__description}>{cardData.description}</div>
      <div className={classes.card__tasks}>
        {cardData.tasks.map((task, i) => {
          return <div key={i}>{task.taskDescription}</div>;
        })}
      </div>
      <div className={classes.card__process}>進度條</div>
    </div>
  );
};

export default Card;
