import styles from "./styles.module.css";

type ButtonProps = {
  children?: React.ReactNode;
  type?: string;
} & React.ComponentProps<"button">;

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button className={styles.button} {...rest}>
      {children}
    </button>
  );
};
