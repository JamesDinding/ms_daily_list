import classes from "./App.module.css";
import Section from "./components/Section/Section";
import { useListDispatch } from "./hooks/list-hooks";
import { listActions } from "./store/list-slice";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import LandingPage from "./pages/LandingPage";
import NotePage, { loader as NoteLoader } from "./pages/NotePage";
import ErrorPage from "./pages/Error";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <LandingPage /> },
      { path: "notes", element: <NotePage />, loader: NoteLoader },
    ],
  },
]);

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
    <div className={classes.app}>
      <RouterProvider router={router} />
      <div className={classes.section}>
        <DragDropContext onDragEnd={swapOrderHandler}>
          <Section title="To Do" section_id="pendingList" />
          <Section title="Doing" section_id="currentList" />
          <Section title="Done" section_id="finishedList" />
        </DragDropContext>
      </div>
    </div>
  );
}

export default App;
