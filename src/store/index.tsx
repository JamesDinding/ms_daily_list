import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./list-slice";

const store = configureStore({
  reducer: { list: listReducer },
});

export default store;
