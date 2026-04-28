import type { TaskModel } from "../../model/TaskModel";
import styles from "./styles.module.css";

export const History = () => {
  const mockTasks: TaskModel[] = [
    {
      task: "Estudar",
      data: "01/01/01",
      duracao: "25",
      status: "TESTE",
      tipo: "FOCAR",
    },
    {
      task: "Estudar",
      data: "01/01/01",
      duracao: "25",
      status: "TESTE",
      tipo: "FOCAR",
    },
    {
      task: "Estudar",
      data: "01/01/01",
      duracao: "25",
      status: "TESTE",
      tipo: "FOCAR",
    },
    {
      task: "Estudar",
      data: "01/01/01",
      duracao: "25",
      status: "TESTE",
      tipo: "FOCAR",
    },
    {
      task: "Estudar",
      data: "01/01/01",
      duracao: "25",
      status: "TESTE",
      tipo: "FOCAR",
    },
    {
      task: "Estudar",
      data: "01/01/01",
      duracao: "25",
      status: "TESTE",
      tipo: "FOCAR",
    },
    {
      task: "Estudar",
      data: "01/01/01",
      duracao: "25",
      status: "TESTE",
      tipo: "FOCAR",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.toolbar}>
        <h1>Histórico</h1>
        <Button type="button" className={styles.deleteBtn}>
          Delete
        </Button>
      </div>
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Data</th>
              <th>Status</th>
              <th>Tipo</th>
            </tr>
          </thead>
          <tbody>
            {mockTasks.map((task, index) => (
              <tr key={`${task.data}-${index}`}>
                <td>{task.task}</td>
                <td>{task.duracao}</td>
                <td>{task.data}</td>
                <td>{task.status}</td>
                <td>{task.tipo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
