import { initialTaskStateModelProps, TaskStateModelContext } from ".";

type TaskStateModelContextProps = {
  children: React.ReactNode;
};

export const TaskStateModelContextComponent = ({
  children,
}: TaskStateModelContextProps) => {
  return (
    <TaskStateModelContext.Provider value={initialTaskStateModelProps}>
      {children}
    </TaskStateModelContext.Provider>
  );
};
