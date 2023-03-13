import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./list-slice";

const store = configureStore({
  reducer: { list: listReducer },
});

// for using ts in redux
export type ListRootState = ReturnType<typeof store.getState>;
export type ListDispatch = typeof store.dispatch;

export default store;
