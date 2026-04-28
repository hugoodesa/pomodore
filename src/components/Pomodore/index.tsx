import { Footer } from "../Footer";
import { HeaderHeading } from "../HeaderHeading";
import { Menu } from "../Menu";
import styles from "./style.module.css";
import { ThemeContext } from "../../context/theme";

type PomodoreAppProps = {
  children: React.ReactNode;
};

export const PomodoreApp = ({ children }: PomodoreAppProps) => {
  return (
    <ThemeContext value="light">
      <div className={`${styles.container} ${styles.light}`}>
        <HeaderHeading />
        <Menu />
        {children}
        <Footer />
      </div>
    </ThemeContext>
  );
};
