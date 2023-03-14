import React from "react";
import List from "./List";
import { useSelector, useDispatch } from "react-redux";
import { useListDispatch, useListSelector } from "../../hooks/list-hooks";
import { listActions } from "../../store/list-slice";

const dummy_card_data = {
  id: "testid",
  listName: "finishedList",
  title: "testTitle",
  description: "It is for testing!",
  creater: "DinDing",
  tasks: [
    {
      taskDescription: "maple todo list",
      isDone: true,
    },
  ],
};

const FinishedSection: React.FC = () => {
  const list = useListSelector((state) => state.list.finishedList);
  const dispatch = useListDispatch();

  const createCardHandler = () => {
    dispatch(listActions.addToList(dummy_card_data));
  };

  return (
    <div>
      已辦區塊:
      <div>
        <List cardList={list} />
      </div>
      <div>
        <button type="button" onClick={createCardHandler}>
          +
        </button>
      </div>
    </div>
  );
};

export default FinishedSection;
