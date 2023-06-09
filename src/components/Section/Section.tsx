import React, { useState, useEffect, useRef, Fragment } from "react";
import { createPortal } from "react-dom";
import { useListSelector } from "../../hooks/list-hooks";
import { ListState } from "../../module/list";
import classes from "./Section.module.css";
import List from "./List";
import AddCard from "../Card/AddCard";
import BackDrop from "../UI/BackDrop";
import { Droppable } from "react-beautiful-dnd";

interface SectionProps {
  title: string;
  section_id: string;
  allowCreate?: boolean;
}

const Section: React.FC<SectionProps> = ({
  title,
  section_id = "pendingList",
  allowCreate = true,
}) => {
  const list = useListSelector(
    (state) => state.list[section_id as keyof ListState]
  );

  const [isPop, setIsPop] = useState(false);

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
        <h1 className={classes.section__title}>{title}</h1>
        <div>
          <List
            cardList={list}
            listName={section_id}
            allowCreate={allowCreate}
            popAddCard={setIsPop}
          ></List>
        </div>
      </div>
    </Fragment>
  );
};

export default Section;
