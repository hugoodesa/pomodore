import { useContext } from "react";
import { TaskStateModelContext } from ".";

export const useTaskStateModel = () => {
  const context = useContext(TaskStateModelContext);
  if (!context) {
    throw new Error("Must be used inside provider");
  }
  return context;
};
