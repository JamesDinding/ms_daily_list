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
    removeFromList(
      state,
      action: PayloadAction<{ listName: string; id: string }>
    ) {
      const { listName, id } = action.payload;
      state[listName as keyof ListState].filter((list) => list.id !== id);
    },
    movingCardOrder(
      state,
      action: PayloadAction<{
        targetList: string;
        originList: string;
        targetIndex: number;
        originIndex: number;
      }>
    ) {
      const { targetList, originList, targetIndex, originIndex } =
        action.payload;

      if (targetList === originList) {
        [
          state[targetList as keyof ListState][targetIndex],
          state[targetList as keyof ListState][originIndex],
        ] = [
          state[targetList as keyof ListState][originIndex],
          state[targetList as keyof ListState][targetIndex],
        ];
      } else {
        const cardData = state[originList as keyof ListState][originIndex];
        state[targetList as keyof ListState].splice(targetIndex, 0, cardData);
        state[originList as keyof ListState].splice(originIndex, 1);
      }
    },
  },
});

export const listActions = listSlice.actions;
export default listSlice.reducer;
