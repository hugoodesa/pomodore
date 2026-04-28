import styles from "./styles.module.css";

type FormProps = {
  children: React.ReactNode;
};

export const Form = ({ children }: FormProps) => {
  return <form className={styles.container}>{children}</form>;
};
