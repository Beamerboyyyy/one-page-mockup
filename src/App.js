import "./App.css";
import LoginPage from "./components/loginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import WorkerPerformanceMetrics from "./components/workerPerformanceMetrics";
import WorkshopFloor from "./components/workshopFloor";
import DemandForecasting from "./components/demandForecasting";
import Footer from "./components/footer";
import Workflowoptimizer from "./components/workflowOptimizer";
// import Dashboard from "./components/Dashboard";
// import { ThemeProvider } from "@material-tailwind/react";
// import { MaterialTailwindControllerProvider } from "./context";
// import Dashboard from "./layouts/dashboard";
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App overflow-hidden bg-[#242323]">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/main/"
            element={
              <>
                <Navbar />
                <Home />
                <WorkshopFloor />
                <WorkerPerformanceMetrics />
                <Workflowoptimizer />
                <DemandForecasting />
                <Footer />
              </>
            }
          />
          <Route
            path="/dashboard"
            element={
              <>
                {/* <Navbar /> */}
                {/* <ThemeProvider>
                  <MaterialTailwindControllerProvider> */}
                {/* <Navbar /> */}
                <Dashboard />
                  {/* </MaterialTailwindControllerProvider>

                </ThemeProvider> */}
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
