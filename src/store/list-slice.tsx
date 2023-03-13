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
      // state['what_list_should_update'].push(action.payload)
    },
    removeFromList(state, action) {
      // state['list_name'].filter(el=> el !== action.id)
    },
  },
});

export const listActions = listSlice.actions;
export default listSlice.reducer;
