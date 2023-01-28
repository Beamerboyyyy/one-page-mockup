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
import { useStateValue } from "./StateProvider";
import data from "./data";
import { useEffect, useState } from "react";
// import Dashboard from "./components/Dashboard";
// import { ThemeProvider } from "@material-tailwind/react";
// import { MaterialTailwindControllerProvider } from "./context";
// import Dashboard from "./layouts/dashboard";
// import Dashboard from './pages/Dashboard';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";


function App() {
  const [state, dispatch] = useStateValue();
  const [array, setArray] = useState(data);
  const handleClose = () => {
    dispatch({
      type: "CLOSE_MODAL",
    });
    // setOpen(false);
  };
  useEffect(() => {
    dispatch({
      type: "ADD_DATA",
      payload: array,
    });
  }, [array])
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
                 <Dialog
            open={state.openModal}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            className="rounded-lg !text-gray-900  border-gray-900 bg-opacity-30 bg-gray-900 "
          >
            <DialogTitle id="alert-dialog-title" className="text-white bg-gray-900  !font-bold underline">
              {"Slot Description"}
            </DialogTitle>
            <DialogContent className="bg-gray-900">
              <DialogContentText id="alert-dialog-description" className="!text-white bg-gray-900">
                {state.event}
              </DialogContentText>
            </DialogContent>
            <DialogActions className="bg-gray-900 ">
              <Button onClick={handleClose}>Close</Button>
            </DialogActions>
          </Dialog>
                <Footer />
              </>
            }
          />
          {/* <Route
            path="/dashboard"
            element={
              <>

                <Dashboard />
                
              </>
            }
          /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
