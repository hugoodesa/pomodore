import { createContext } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";

const initialState: TaskStateModel = {
  activeTask: null,
  currentCycle: 0,
  formattedSecondsRemaining: "00:00",
  secondsReamining: 0,
  tasks: [],
  config: {
    longBreakTime: 15,
    shortBreakTime: 5,
    workTime: 25,
  },
};

type TaskStateModelProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel | undefined>>;
};

export const initialTaskStateModelProps = {
  state: initialState,
  setState: () => {},
};
export const TaskStateModelContext = createContext<TaskStateModelProps>(
  initialTaskStateModelProps,
);
