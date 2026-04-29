import styles from "./styles.module.css";
import { Form } from "../Form";
import { Button } from "../Button";
import { Save } from "lucide-react";

export const ConfigPomodore = () => {
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
        <Button type="submit">
          <Save color="white" />
        </Button>
      </Form>
    </div>
  );
};
