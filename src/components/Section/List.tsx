import React, { Fragment } from "react";
import Card from "../Card/Card";
import { ListItem } from "../../module/list";
import { Droppable } from "react-beautiful-dnd";

interface ListProps {
  cardList: ListItem[];
  listName: string;
}

const List: React.FC<ListProps> = ({ cardList, listName }) => {
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
              {provided.placeholder}
            </Fragment>
          );
        }}
      </Droppable>
    </div>
  );
};

export default List;
