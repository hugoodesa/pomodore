import { History, Settings, Sun, SunMoon, Watch } from "lucide-react";
import { CardMenu } from "../CardMenu";
import styles from "./styles.module.css";
import type { ThemeType } from "../../context/theme";

type MenuProps = {
  handleTheme: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  theme: ThemeType;
};

export const Menu = ({ handleTheme, theme }: MenuProps) => {
  const iconConfig = {
    size: 30,
    strokeWidth: 1.25,
  };

  const icons = [
    {
      element: (
        <CardMenu>
          <Watch size={iconConfig.size} strokeWidth={iconConfig.strokeWidth} />
        </CardMenu>
      ),
    },
    {
      element: (
        <CardMenu>
          <History
            size={iconConfig.size}
            strokeWidth={iconConfig.strokeWidth}
          />
        </CardMenu>
      ),
    },
    {
      element: (
        <CardMenu>
          <Settings
            size={iconConfig.size}
            strokeWidth={iconConfig.strokeWidth}
          />
        </CardMenu>
      ),
    },
    {
      element: (
        <CardMenu onClick={handleTheme}>
          <div className={styles.themeIconWrapper}>
            <span
              className={`${styles.themeIcon} ${
                theme === "light" ? styles.iconActive : styles.iconInactive
              }`}
            >
              <SunMoon
                size={iconConfig.size}
                strokeWidth={iconConfig.strokeWidth}
              />
            </span>
            <span
              className={`${styles.themeIcon} ${
                theme === "dark" ? styles.iconActive : styles.iconInactive
              }`}
            >
              <Sun
                size={iconConfig.size}
                strokeWidth={iconConfig.strokeWidth}
              />
            </span>
          </div>
        </CardMenu>
      ),
    },
  ];

  return (
    <nav className={styles.menuContainer}>
      {icons.map((icon, index) => {
        return <div key={index}>{icon.element}</div>;
      })}
    </nav>
  );
};
