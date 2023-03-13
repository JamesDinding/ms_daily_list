import React from "react";
import Card from "../Card/Card";

interface ListProps {
  cardList: {
    id: string;
    title: string;
    description: string;
    creater: string;
  }[];
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
