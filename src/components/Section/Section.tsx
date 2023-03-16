import React, { useState, useEffect, useRef, Fragment } from "react";
import { createPortal } from "react-dom";
import { useListSelector } from "../../hooks/list-hooks";
import { ListState } from "../../module/list";
import classes from "./Section.module.css";
import List from "./List";
import AddCard from "../Card/AddCard";
import BackDrop from "../UI/BackDrop";
import { DragDropContext } from "react-beautiful-dnd";

interface SectionProps {
  title: string;
  section_id: string;
}

const Section: React.FC<SectionProps> = ({
  title,
  section_id = "pendingList",
}) => {
  const list = useListSelector(
    (state) => state.list[section_id as keyof ListState]
  );

  const [isPop, setIsPop] = useState(false);

  const dragEndHandler = () => {
    console.log("drag_end_event");
  };

  return (
    <Fragment>
      {isPop &&
        createPortal(
          <BackDrop onShut={() => setIsPop(false)} />,
          document.getElementById("back-drop")!
        )}
      {isPop &&
        createPortal(
          <AddCard onShut={() => setIsPop(false)} listName={section_id} />,
          document.getElementById("modal")!
        )}
      <div id={section_id} className={classes.section}>
        <h3>{title}</h3>
        <div>
          <List cardList={list} listName={section_id}></List>

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
