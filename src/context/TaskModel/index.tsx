import { createContext } from "react";
import type { TaskModel } from "../../models/TaskModel";

const initialState: TaskModel = {
  completedDate: 0,
  id: "0",
  duration: 25,
  name: "",
  startDate: 0,
  interruptedDate: 0,
};

export const TaskModelContext = createContext(initialState);
