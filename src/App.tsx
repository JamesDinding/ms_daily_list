import React from "react";
import "./App.css";
import NavBar from "./components/NavigationBar/NavBar";
import Section from "./components/Section/Section";
import { useListDispatch } from "./hooks/list-hooks";
import { listActions } from "./store/list-slice";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

function App() {
  const dispatch = useListDispatch();

  const swapOrderHandler = (e: DropResult) => {
    const { destination, source } = e;
    if (!destination || !source) return;

    dispatch(
      listActions.movingCardOrder({
        targetList: destination.droppableId,
        originList: source.droppableId,
        targetIndex: destination.index,
        originIndex: source.index,
      })
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <div className="Section">
        <DragDropContext onDragEnd={swapOrderHandler}>
          <Section title="代辦區塊" section_id="pendingList" />
          <Section title="在辦區塊" section_id="currentList" />
          <Section title="已辦區塊" section_id="finishedList" />
        </DragDropContext>
      </div>
    </div>
  );
}

export default App;
