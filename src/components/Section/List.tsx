import React from "react";
import Card from "../Card/Card";
import { ListItem } from "../../module/list";

interface ListProps {
  cardList: ListItem[];
}

const List: React.FC<ListProps> = ({ cardList }) => {
  return (
    <div>
      {cardList.map((_, index) => (
        <Card key={index} />
      ))}
    </div>
  );
};

export default List;
