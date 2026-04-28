import { Footer } from "../Footer";
import { HeaderHeading } from "../HeaderHeading";
import { Menu } from "../Menu";
import styles from "./style.module.css";
import { ThemeContext, type ThemeType } from "../../context/theme";
import { useState } from "react";

type PomodoreAppProps = {
  children: React.ReactNode;
};

export const PomodoreApp = ({ children }: PomodoreAppProps) => {
  const [theme, setTheme] = useState<ThemeType>("dark");

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
