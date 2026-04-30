import { createContext } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";

const initialState: TaskStateModel = {
  activeTask: null,
  currentCycle: 0,
  formattedSecondsRemaining: "00:00:00",
  secondsReamining: 0,
  tasks: [],
  config: {
    longBreakTime: 15,
    shortBreakTime: 5,
    workTime: 25,
  },
};

export const TaskStateModelContext = createContext(initialState);
