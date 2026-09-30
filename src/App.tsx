import { BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import TrainingPlan from "./pages/TrainingPlan";
import RunLog from "./pages/RunLog";
import MetricCard from "./components/MetricCard";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <nav>
          <NavLink to="/">Dashboard</NavLink>
          <NavLink to="/training-plan">Training Plan</NavLink>
          <NavLink to="/run-log">Run Log</NavLink>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/training-plan" element={<TrainingPlan/>} />
            <Route path="/run-log" element={<RunLog/>} />
          </Routes>
          <MetricCard></MetricCard>
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;
