import { useContext, useState } from "react";
import { CardMenu } from "../CardMenu";
import styles from "./styles.module.css";
import { History, Settings, Sun, SunMoon, Watch } from "lucide-react";
import { ThemeContext } from "../../context/theme";

type ThemeType = "dark" | "light";

export const Menu = () => {
  const themeContext = useContext(ThemeContext);
  const iconConfig = {
    size: 30,
    strokeWidth: 1.25,
  };
  const [theme, setTheme] = useState<ThemeType>("dark");

  const handleTheme = () => {
    console.log(themeContext);
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
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
                theme === "dark" ? styles.iconActive : styles.iconInactive
              }`}
            >
              <SunMoon
                size={iconConfig.size}
                strokeWidth={iconConfig.strokeWidth}
              />
            </span>
            <span
              className={`${styles.themeIcon} ${
                theme === "light" ? styles.iconActive : styles.iconInactive
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
