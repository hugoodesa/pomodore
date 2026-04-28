import { Cycle } from "../Cycle";
import styles from "./styles.module.css";

type CyclesProps = {
  children?: React.ReactNode;
};

export const Cycles = ({ children }: CyclesProps) => {
  return (
    <div className={styles.container}>
      <h3>Ciclo atual: </h3>
      <div className={styles.cicles}>
        <Cycle type="work" />
        <Cycle type="short" />
        <Cycle type="work" />
        <Cycle type="short" />
        <Cycle type="long" />
      </div>
    </div>
  );
};
