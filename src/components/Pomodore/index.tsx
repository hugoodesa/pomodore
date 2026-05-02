import { useEffect, useState } from "react";
import { type ThemeType } from "../../models/Theme";
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

  useEffect(() => {
    saveIntoLocalStorage(theme);
  }, [theme]);

  const handleTheme = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    console.log("change theme");
  };

  return (
    <div className={`${styles.container} ${styles[theme]}`}>
      <HeaderHeading />
      <Menu handleTheme={handleTheme} theme={theme} />
      {children}
      <Footer />
    </div>
  );
};
