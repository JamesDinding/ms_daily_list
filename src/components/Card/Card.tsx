import React, { useRef } from "react";
import classes from "./Card.module.css";
import { ListItem } from "../../module/list";
import { Draggable } from "react-beautiful-dnd";

interface CardProps {
  cardData: ListItem;
  order: number;
}

const Card: React.FC<CardProps> = ({ cardData, order }) => {
  const finishNum = cardData.tasks.reduce((pre, cur) => {
    return pre + (cur.isDone ? 1 : 0);
  }, 0);
  const processPercentage = +(finishNum / cardData.tasks.length).toFixed(2);

  const processBarColor = processPercentage >= 1 ? "green" : "rgb(239,217,140)";

  return (
    <Draggable key={cardData.id} draggableId={cardData.id} index={order}>
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
            <span className={classes.card__description}>
              completed: {processPercentage} %
            </span>
            <div
              style={{
                marginTop: ".75rem",
                height: "1rem",
                width: "100%",
                background: `linear-gradient(to right,${processBarColor} ${
                  processPercentage * 100
                }%,white 0%)`,
              }}
              className={classes.card__process}
            ></div>
          </div>
        );
      }}
    </Draggable>
  );
};

export default Card;
