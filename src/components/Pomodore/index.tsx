import { Footer } from "../Footer";
import { HeaderHeading } from "../HeaderHeading";
import { Menu } from "../Menu";
import styles from "./style.module.css";
import { ThemeContext, type ThemeType } from "../../context/theme";
import { useState } from "react";
import { getDataFromLocalStorage } from "../../utils/localStorage";

type PomodoreAppProps = {
  children: React.ReactNode;
};

export const PomodoreApp = ({ children }: PomodoreAppProps) => {
  //works as a provider
  const [theme, setTheme] = useState<ThemeType>(() => {
    return (getDataFromLocalStorage("theme") as ThemeType) || "dark";
  });

  return (
    <ThemeContext value={{ theme, setTheme }}>
      <div className={`${styles.container} ${styles[theme]}`}>
        <HeaderHeading />
        <Menu />
        {children}
        <Footer />
      </div>
    </ThemeContext>
  );
};
