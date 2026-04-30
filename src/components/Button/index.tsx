import styles from "./styles.module.css";

type ButtonProps = {
  children?: React.ReactNode;
  type?: string;
} & React.ComponentProps<"button">;

export const Button = ({ children }: ButtonProps) => {
  return (
    <button className={styles.button} type="submit">
      {children}
    </button>
  );
};
