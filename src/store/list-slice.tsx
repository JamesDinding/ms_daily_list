import { createSlice } from "@reduxjs/toolkit";

const initialListState = {
  pendingList: [],
  currentList: [],
  finishedList: [],
};

const listSlice = createSlice({
  name: "list",
  initialState: initialListState,
  reducers: {
    addToList(state, action) {
      // state['what_list_should_update'].push(action.payload)
    },
    removeFromList(state, action) {
      // state['list_name'].filter(el=> el !== action.id)
    },
  },
});

export const listActions = listSlice.actions;
export default listSlice.reducer;
