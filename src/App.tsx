import classes from "./App.module.css";
import { useEffect } from "react";
import { useListDispatch, useListSelector } from "./hooks/list-hooks";
import { getNotes } from "./store/list-action";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotePage from "./pages/NotePage";
import ErrorPage from "./pages/Error";
import RootLayout from "./pages/Root";
import { ANONYMOUS_USER, FB_DOMAIN } from "./const";

let initial = true;

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      // { path: "", element: <LandingPage /> },
      { path: "", element: <NotePage /> },
    ],
  },
]);

function App() {
  const dispatch = useListDispatch();
  const allList = useListSelector((state) => state);

  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);

  useEffect(() => {
    if (initial) {
      initial = false;
      return;
    }
    const { pendingList, currentList, finishedList } = allList.list;
    fetch(FB_DOMAIN + ANONYMOUS_USER + ".json", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pending: pendingList || [],
        current: currentList || [],
        finished: finishedList || [],
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("failed");
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [allList]);

  return (
    <div className={classes.app}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
