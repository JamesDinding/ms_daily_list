export interface ListItem {
  id: string;
  listName: string;
  title: string;
  description: string;
  creater: string;
  tasks: {
    taskDescription: string;
    isDone: boolean;
  }[];
}

export interface ListState {
  pendingList: ListItem[];
  currentList: ListItem[];
  finishedList: ListItem[];
}
