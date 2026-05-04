import type React from "react";
import styles from "./styles.module.css";

type FormProps = {
  children: React.ReactNode;
} & React.ComponentProps<"form">;

export const Form = ({ children, ...rest }: FormProps) => {
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className={styles.container}
      {...rest}
    >
      {children}
    </form>
  );
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log("submit");
};
