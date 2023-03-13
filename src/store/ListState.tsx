import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  pendingList: [],
  currentList: [],
  finishedList: [],
};

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addToList(state, action) {
      // state['what_list_should_update'].push(action.payload)
    },
    removeFromList(state, action) {
      // state['list_name'].filter(el=> el !== action.id)
    },
  },
});

const store = configureStore({
  reducer: { list: listSlice.reducer },
});

export const listActions = listSlice.actions;
export default store;
