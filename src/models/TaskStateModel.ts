import type { TaskModel } from "./TaskModel";

//tasks history and config
export type TaskStateModel = {
  tasks: TaskModel[];
  secondsReamining: number;
  formattedSecondsRemaining: string;
  activeTask: TaskModel | null;
  currentCycle: number; // 1 a 8
  config: {
    //timer configs
    workTime: number;
    shortBreakTime: number;
    longBreakTime: number;
  };
};
