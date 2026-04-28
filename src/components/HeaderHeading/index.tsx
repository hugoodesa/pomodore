import TimerIcon from "@mui/icons-material/Timer";
import styles from "./styles.module.css";

export const HeaderHeading = () => {
  return (
    <div className={styles.container}>
      <a href="#">
        <TimerIcon sx={{ fontSize: 50, color: "#10b981" }} />
        <h1 className={styles.title}>Chronos</h1>
      </a>
    </div>
  );
};
