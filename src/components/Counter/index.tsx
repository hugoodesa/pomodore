import styles from "./styles.module.css";
import { Button } from "../Button";
import { Play } from "lucide-react";
import { Form } from "../Form";
import { Cycles } from "../Cycles";
import { useTaskStateModel } from "../../context/TaskStateModel/useTaskStateModel";
import { useEffect } from "react";

export const Counter = () => {
  const { state, setState } = useTaskStateModel();
  console.log(state);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log("submit");
    e.preventDefault();
    setState((prevState) => ({
      ...prevState,
      formattedSecondsRemaining: "00:01",
    }));
    console.log("render", state.formattedSecondsRemaining);
  };

  useEffect(() => {
    console.log("updated", state.formattedSecondsRemaining);
  }, [state.formattedSecondsRemaining]);

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

        <Button type="button" onClick={handleSubmit}>
          <Play color="white" />
        </Button>
      </Form>
    </div>
  );
};
