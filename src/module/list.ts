export interface ListItem {
  id: string;
  title: string;
  description: string;
  creater: string;
  tasks: {
    taskDescription: string;
    isDone: boolean;
  }[];
}
