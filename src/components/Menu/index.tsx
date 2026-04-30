import { History, Settings, Sun, SunMoon, Watch } from "lucide-react";
import { useContext, useEffect } from "react";
import { ThemeContext, type ThemeType } from "../../context/theme";
import { CardMenu } from "../CardMenu";
import styles from "./styles.module.css";

type MenuProps = {
  handleTheme: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const Menu = ({ handleTheme }: MenuProps) => {
  const iconConfig = {
    size: 30,
    strokeWidth: 1.25,
  };
  const theme = useContext<ThemeType>(ThemeContext);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

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
