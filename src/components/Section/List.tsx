import React, { Fragment } from "react";
import classes from "./List.module.css";
import Card from "../Card/Card";
import { ListItem } from "../../module/list";
import { Droppable } from "react-beautiful-dnd";

interface ListProps {
  cardList: ListItem[];
  listName: string;
  allowCreate: boolean;
  popAddCard: React.Dispatch<React.SetStateAction<boolean>>;
}

const List: React.FC<ListProps> = ({
  cardList,
  listName,
  allowCreate,
  popAddCard,
}) => {
  return (
    <div>
      <Droppable key={listName} droppableId={listName}>
        {(provided, snapshot) => {
          return (
            <Fragment>
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {cardList.map((card, index) => (
                  <Card key={index} cardData={card} order={index} />
                ))}
              </div>
              {provided.placeholder}{" "}
              {allowCreate && (
                <div>
                  <button
                    type="button"
                    className={classes.section_btn}
                    onClick={() => popAddCard(true)}
                  >
                    <img src="/assets/add.png" alt="" />
                  </button>
                </div>
              )}
            </Fragment>
          );
        }}
      </Droppable>
    </div>
  );
};

export default List;
