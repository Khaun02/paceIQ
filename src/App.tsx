import { BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import TrainingPlan from "./pages/TrainingPlan";
import RunLog from "./pages/RunLog";
import MetricCard from "./components/MetricCard";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/training-plan" element={<TrainingPlan/>} />
            <Route path="/run-log" element={<RunLog/>} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;
