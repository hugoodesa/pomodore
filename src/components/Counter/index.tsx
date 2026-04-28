import styles from "./styles.module.css";
import { Button } from "../Button";
import { Play } from "lucide-react";
import { Form } from "../Form";
import { Cycles } from "../Cycles";

type CounterProps = {
  children?: React.ReactNode;
};

export const Counter = ({ children }: CounterProps) => {
  return (
    <div className={styles.counter}>
      <h1 className={styles.counterValue}>00:00</h1>

      <Form>
        <label htmlFor="task">Tarefa</label>
        <input type="text" name="task" id="task" />
        <p>
          Neste ciclo <b>foque</b> por <b>25 minutos</b>
        </p>

        <Cycles />

        <Button>
          <Play color="white" />
        </Button>
      </Form>
    </div>
  );
};
