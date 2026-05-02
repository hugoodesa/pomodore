import { Save } from "lucide-react";
import { Button } from "../Button";
import { Form } from "../Form";
import styles from "./styles.module.css";
import { useTaskStateModel } from "../../context/TaskStateModel/useTaskStateModel";

export const ConfigPomodore = () => {
  const { setState } = useTaskStateModel();

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log("submit");
    e.preventDefault();
    setState((prevState) => ({
      ...prevState,
      formattedSecondsRemaining: "00:01",
    }));
  };

  return (
    <div className={styles.container}>
      <h1>Configurações</h1>
      <h3>Configure os minutos para as etapas do Pomodoro.</h3>
      <Form>
        <label htmlFor="foco">Foco (min):</label>
        <input type="number" name="foco" />
        <label htmlFor="foco">Descanso curto (min):</label>
        <input type="number" name="foco" />
        <label htmlFor="foco">Descanso long(min):</label>
        <input type="number" name="foco" />
        <Button onClick={(e) => handleSubmit(e)} type="button">
          <Save color="white" />
        </Button>
      </Form>
    </div>
  );
};
