import React from "react";
import List from "./List";
import { useSelector, useDispatch } from "react-redux";
import { useListDispatch, useListSelector } from "../../hooks/list-hooks";

const FinishedSection: React.FC = () => {
  const list = useListSelector((state) => state.list.finishedList);
  const dispatch = useListDispatch();

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
