import React, { useRef } from "react";
import classes from "./Card.module.css";
import { useListDispatch } from "../../hooks/list-hooks";
import { ListItem } from "../../module/list";
import { Draggable } from "react-beautiful-dnd";

interface CardProps {
  cardData: ListItem;
  order: number;
}

let startList = "";
let endList = "";
let endOrder = 0;

const Card: React.FC<CardProps> = ({ cardData, order }) => {
  const dispatch = useListDispatch();

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
    <Draggable key={order} draggableId={cardData.id} index={order}>
      {(provided, snapshot) => {
        return (
          <div
            id={`order_${order}`}
            ref={provided.innerRef}
            className={classes.card}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div className={classes.card__title}>{cardData.title}</div>
            <div className={classes.card__description}>
              {cardData.description}
            </div>
            <div className={classes.card__tasks}>
              {cardData.tasks.map((task, i) => {
                return <div key={i}>{task.taskDescription}</div>;
              })}
            </div>
            <div className={classes.card__process}>進度條</div>
          </div>
        );
      }}
    </Draggable>
  );
};

export default Card;
