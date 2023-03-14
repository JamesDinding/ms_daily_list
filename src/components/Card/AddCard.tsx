import React, { useState, useEffect, useRef } from "react";
import Input from "./Input";

const AddCard: React.FC = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const [tasks, setTasks] = useState<any>([]);

  return (
    <form>
      <Input placeHolder="標題" maxLen={15} inputRef={titleRef} />
      <Input placeHolder="目標描述" maxLen={15} inputRef={descriptionRef} />
    </form>
  );
};

export default AddCard;
