import React from "react";
import { ReactDOM, useState, useEffect, useRef, Fragment } from "react";
import List from "./List";
import { useListDispatch, useListSelector } from "../../hooks/list-hooks";
import { listActions } from "../../store/list-slice";
import { ListState } from "../../module/list";
import AddCard from "../Card/AddCard";
interface SectionProps {
  title: string;
  section_id: string;
}

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

const Section: React.FC<SectionProps> = ({
  title,
  section_id = "pendingList",
}) => {
  const dispatch = useListDispatch();
  const list = useListSelector(
    (state) => state.list[section_id as keyof ListState]
  );

  const [isPop, setIsPop] = useState(false);

  const createCardHandler = () => {
    dispatch(listActions.addToList(dummy_card_data));
  };

  return (
    <Fragment>
      <div style={{ backgroundColor: "#aaf2aa" }}>
        <AddCard />
      </div>
      {isPop && <div>backdrop</div>}
      {isPop && <div>form</div>}
      <div id={section_id}>
        <h3>{title}</h3>
        <div>
          <List cardList={list}></List>
          <div>
            <button type="button" onClick={() => setIsPop(true)}>
              +
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Section;
