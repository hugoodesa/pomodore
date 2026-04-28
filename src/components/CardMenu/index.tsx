import type React from "react";
import styles from "./styles.module.css";

type CardMenuProps = {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
} & React.ComponentProps<"button">;

export const CardMenu = ({ children, ...restProps }: CardMenuProps) => {
  return (
    <button className={styles.cardMenuContainer} {...restProps}>
      <a href="#">
        <div className={styles.cardMenu}>{children}</div>
      </a>
    </button>
  );
};
