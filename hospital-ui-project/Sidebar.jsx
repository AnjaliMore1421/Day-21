import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Hospital</h2>

      <Link to="/">Dashboard</Link>
      <Link to="/appointment">Appointment</Link>
      <Link to="/layouts">Layouts</Link>
      <Link to="/fixes">CSS Fixes</Link>
    </div>
  );
}
