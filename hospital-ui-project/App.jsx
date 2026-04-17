import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import AppointmentForm from "./components/AppointmentForm";
import LayoutExamples from "./components/LayoutExamples";
import CssFixDemo from "./components/CssFixDemo";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Sidebar />

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/appointment" element={<AppointmentForm />} />
            <Route path="/layouts" element={<LayoutExamples />} />
            <Route path="/fixes" element={<CssFixDemo />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
