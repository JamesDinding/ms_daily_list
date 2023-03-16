import React, { useRef } from "react";
import classes from "./Card.module.css";
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
  const finishNum = cardData.tasks.reduce((pre, cur) => {
    return pre + (cur.isDone ? 1 : 0);
  }, 0);
  const processPercentage = +(finishNum / cardData.tasks.length).toFixed(2);

  const processBarColor = processPercentage >= 1 ? "green" : "yellow";

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
            <div
              style={{
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
