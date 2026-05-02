import { TaskStateModelContextComponent } from "./context/TaskStateModel/TaskStateModelContext";
import { Home } from "./pages/home";
import "./styles/global.css";
import "./styles/theme.css";

function App() {
  return (
    <TaskStateModelContextComponent>
      <Home />;
    </TaskStateModelContextComponent>
  );
}

export default App;
