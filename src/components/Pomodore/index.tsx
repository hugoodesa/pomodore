import { Footer } from "../Footer";
import { HeaderHeading } from "../HeaderHeading";
import { Menu } from "../Menu";
import styles from "./style.module.css";

type PomodoreAppProps = {
  children: React.ReactNode;
};

export const PomodoreApp = ({ children }: PomodoreAppProps) => {
  return (
    <div className={styles.container}>
      <HeaderHeading />
      <Menu />
      {children}
      <Footer />
    </div>
  );
};
