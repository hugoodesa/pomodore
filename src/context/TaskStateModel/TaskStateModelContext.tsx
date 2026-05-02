import { useState } from "react";
import { initialState, TaskStateModelContext } from "./taskState.context";

export const TaskStateModelContextComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, setState] = useState(initialState);

  return (
    <TaskStateModelContext.Provider value={{ state, setState }}>
      {children}
    </TaskStateModelContext.Provider>
  );
};
