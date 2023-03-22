import React from "react";
import { ListItem, ListState } from "../../module/list";
import { useListDispatch, useListSelector } from "../../hooks/list-hooks";
import { listActions } from "../../store/list-slice";
import classes from "./CardDetail.module.css";

interface CardDetailProps {
  onShut: () => void;
  cardData: ListItem;
  order: number;
}

const CardDetail: React.FC<CardDetailProps> = ({ cardData, onShut, order }) => {
  const dispatch = useListDispatch();
  const tasks = useListSelector(
    (state) => state.list[cardData.listName as keyof ListState][order].tasks
  );

  return (
    <div className={classes.card}>
      <div className={classes.card__title}>{cardData.title}</div>
      <div className={classes.card__content}>
        <h2>description : </h2>
        <p className={classes.card__description}>{cardData.description}</p>
      </div>
      <div className={classes.card__tasks}>
        <h2>項目 : </h2>
        {tasks.map((task, i) => {
          return (
            <div key={i} className={classes.task}>
              {task.isDone ? (
                <img
                  src="/assets/check.png"
                  className={classes.task__btn}
                  onClick={() => {
                    dispatch(
                      listActions.toggleTask({
                        listName: cardData.listName,
                        order: order,
                        cardOrder: i,
                        value: !task.isDone,
                      })
                    );
                  }}
                  alt=""
                />
              ) : (
                <div
                  className={classes.task__circle}
                  onClick={() => {
                    dispatch(
                      listActions.toggleTask({
                        listName: cardData.listName,
                        order: order,
                        cardOrder: i,
                        value: !task.isDone,
                      })
                    );
                  }}
                ></div>
              )}
              <div className={classes.task__des}>{task.taskDescription}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardDetail;
