import React from "react";
import List from "./List";

const FinishedSection: React.FC = () => {
  return (
    <div>
      已辦區塊:
      <div>
        <List />
      </div>
    </div>
  );
};

export default FinishedSection;
