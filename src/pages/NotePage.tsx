import classes from "./NotePage.module.css";
import { useListDispatch } from "../hooks/list-hooks";
import { listActions } from "../store/list-slice";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useLoaderData, useNavigation, json } from "react-router-dom";
import Section from "../components/Section/Section";

const NotePage = () => {
  // const noteData: any = useLoaderData();
  const navigation = useNavigation();
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
    <div className={classes.section}>
      <DragDropContext onDragEnd={swapOrderHandler}>
        <Section title="To Do" section_id="pendingList" />
        <Section title="Doing" section_id="currentList" />
        <Section title="Done" section_id="finishedList" />
      </DragDropContext>
    </div>
  );
};

export default NotePage;

// export async function loader() {
//   const response = await fetch("probably_firebase_dummy_backend");

//   if (!response.ok) {
//     // throw new Response(JSON.stringify({ message: "Could not fetch data." }), {
//     //   status: 500,
//     // });
//     throw json({ message: "Could not get data!" }, { status: 500 });
//   } else {
//     const resData = await response.json();
//     return resData;
//   }
// }
