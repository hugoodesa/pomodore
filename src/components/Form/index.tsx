import styles from "./styles.module.css";

type FormProps = {
  children: React.ReactNode;
};

export const Form = ({ children }: FormProps) => {
  return (
    <form onSubmit={(e) => handleSubmit(e)} className={styles.container}>
      {children}
    </form>
  );
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log("submit");
};
