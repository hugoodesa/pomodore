//representation of a task running
export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startDate: number;
  completedDate: number | null;
  interruptedDate: number | null;
};
