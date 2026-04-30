import styles from "./styles.module.css";

type CycleProps = {
  type: "work" | "short" | "long";
};

export const Cycle = ({ type }: CycleProps) => {
  return <div title={type} className={`${styles.cicle} ${styles[type]}`} />;
};
