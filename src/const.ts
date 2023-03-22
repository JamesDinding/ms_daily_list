export const FB_DOMAIN = "https://note-b6774-default-rtdb.firebaseio.com/note/";
export const ANONYMOUS_USER = "-NR9SdrVP7TjGU7Z9n6g";
export const DUMMY_DATA = {
  pending: [
    {
      id: "2023032301",
      listName: "pendingList",
      title: "第一張卡片",
      description: "測試用的第一張卡片",
      creater: "user1",
      tasks: [
        { taskDescription: "第一個目標", isDone: true },
        { taskDescription: "第二個目標", isDone: false },
        { taskDescription: "第三個目標", isDone: false },
      ],
    },
    {
      id: "2023032302",
      listName: "pendingList",
      title: "第二張卡片",
      description: "測試用的第二張卡片",
      creater: "user1",
      tasks: [
        { taskDescription: "第一個目標", isDone: true },
        { taskDescription: "第二個目標", isDone: true },
        { taskDescription: "第三個目標", isDone: false },
      ],
    },
  ],
  current: [
    {
      id: "2023032303",
      listName: "currentList",
      title: "今日任務",
      description: "測試用的第一張卡片",
      creater: "user1",
      tasks: [
        { taskDescription: "第一個目標", isDone: true },
        { taskDescription: "第二個目標", isDone: false },
        { taskDescription: "第三個目標", isDone: false },
      ],
    },
    {
      id: "2023032304",
      listName: "currentList",
      title: "今日子任務",
      description: "測試用的第二張卡片",
      creater: "user1",
      tasks: [
        { taskDescription: "第一個目標", isDone: true },
        { taskDescription: "第二個目標", isDone: true },
        { taskDescription: "第三個目標", isDone: false },
      ],
    },
  ],
  finished: [
    {
      id: "2023032305",
      listName: "finishedList",
      title: "測試用的完成卡",
      description: "測試用的第一張完成卡片",
      creater: "user1",
      tasks: [
        { taskDescription: "第一個目標", isDone: true },
        { taskDescription: "第二個目標", isDone: true },
        { taskDescription: "第三個目標", isDone: true },
      ],
    },
  ],
};
