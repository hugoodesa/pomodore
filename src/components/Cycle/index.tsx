import styles from "./styles.module.css";

type CycleProps = {
  type: "work" | "short" | "long";
};

export const Cycle = ({ type }: CycleProps) => {
  return <div className={`${styles.cicle} ${styles[type]}`} />;
};
