import React from "react";
import Card from "../Card/Card";
import { ListItem } from "../../module/list";

interface ListProps {
  cardList: ListItem[];
}

const List: React.FC = ({}) => {
  return (
    <div>
      {new Array(6).fill("").map(() => (
        <Card />
      ))}
    </div>
  );
};

export default List;
