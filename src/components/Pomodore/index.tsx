import { useState } from "react";
import { ThemeContext, type ThemeType } from "../../context/theme";
import {
  getDataFromLocalStorage,
  saveIntoLocalStorage,
} from "../../utils/localStorage";
import { Footer } from "../Footer";
import { HeaderHeading } from "../HeaderHeading";
import { Menu } from "../Menu";
import styles from "./style.module.css";

type PomodoreAppProps = {
  children: React.ReactNode;
};

export const PomodoreApp = ({ children }: PomodoreAppProps) => {
  const [theme, setTheme] = useState<ThemeType>(() => {
    return (getDataFromLocalStorage("theme") as ThemeType) || "dark";
  });

  const handleTheme = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setTheme((prev) => {
      const newTheme = prev === "dark" ? "light" : "dark";
      saveIntoLocalStorage(newTheme);
      return newTheme;
    });
    console.log("change theme");
  };

  return (
    <ThemeContext value={theme}>
      <div className={`${styles.container} ${styles[theme]}`}>
        <HeaderHeading />
        <Menu handleTheme={handleTheme} />
        {children}
        <Footer />
      </div>
    </ThemeContext>
  );
};
