import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ListState, ListItem } from "../module/list";

const initialListState: ListState = {
  pendingList: [],
  currentList: [],
  finishedList: [],
};

const listSlice = createSlice({
  name: "list",
  initialState: initialListState,
  reducers: {
    addToList(state, action: PayloadAction<ListItem>) {
      const { listName } = action.payload;
      state[listName as keyof ListState].push(action.payload);
    },
    removeFromList(state, action) {
      const { listName, id } = action.payload;
      state[listName as keyof ListState].filter((list) => list.id !== id);
    },
  },
});

export const listActions = listSlice.actions;
export default listSlice.reducer;
