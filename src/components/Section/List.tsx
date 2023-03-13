import React from "react";
import Card from "../Card/Card";

const List: React.FC = () => {
  return (
    <div>
      {new Array(6).fill("").map(() => (
        <Card />
      ))}
    </div>
  );
};

export default List;
