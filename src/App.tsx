import { Counter } from "./components/Counter";
import { History } from "./components/History";
import { PomodoreApp } from "./components/Pomodore";
import "./styles/global.css";
import "./styles/theme.css";

function App() {
  return (
    <>
      <PomodoreApp>
        <Counter />
      </PomodoreApp>
    </>
  );
}

export default App;
