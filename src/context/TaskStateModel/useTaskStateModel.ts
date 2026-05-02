import { useContext } from "react";
import { TaskStateModelContext } from "./taskState.context";

export const useTaskStateModel = () => {
  const context = useContext(TaskStateModelContext);

  if (!context) {
    throw new Error("useTaskStateModel must be used within provider");
  }

  return context;
};
