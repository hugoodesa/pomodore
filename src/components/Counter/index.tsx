import styles from "./styles.module.css";
import { Button } from "../Button";
import { Play } from "lucide-react";
import { Form } from "../Form";
import { Cycles } from "../Cycles";
import { useTaskStateModel } from "../../context/TaskStateModel/useTaskStateModel";

export const Counter = () => {
  const { state } = useTaskStateModel();
  console.log(state);

  return (
    <div className={styles.counter}>
      <h1 className={styles.counterValue}>{state.formattedSecondsRemaining}</h1>

      <Form>
        <label htmlFor="task">Tarefa</label>
        <input type="text" name="task" id="task" />
        <p>
          Neste ciclo <b>foque</b> por <b>25 minutos</b>
        </p>

        <Cycles />

        <Button type="submit">
          <Play color="white" />
        </Button>
      </Form>
    </div>
  );
};
