export default function Dashboard() {
  return (
    <div className="dashboard-container">
      
      {/* Header */}
      <div className="dashboard-header">
        <h1>CityCare Hospital</h1>
        <p>Welcome back, Admin 👋</p>
      </div>

      {/* Stats Cards */}
      <div className="dashboard-cards">
        <div className="card blue">
          <h3>Patients</h3>
          <p>120</p>
        </div>

        <div className="card green">
          <h3>Doctors</h3>
          <p>25</p>
        </div>

        <div className="card orange">
          <h3>Appointments</h3>
          <p>45</p>
        </div>

        <div className="card red">
          <h3>Emergency Cases</h3>
          <p>8</p>
        </div>
      </div>

      {/* Sections */}
      <div className="dashboard-sections">
        
        {/* Recent Appointments */}
        <div className="section">
          <h2>Recent Appointments</h2>
          <ul>
            <li>Ravi - Dr. Sharma (10 AM)</li>
            <li>Priya - Dr. Patil (11 AM)</li>
            <li>Amit - Dr. Khan (12 PM)</li>
          </ul>
        </div>

        {/* Available Doctors */}
        <div className="section">
          <h2>Available Doctors</h2>
          <ul>
            <li>Dr. Sharma - Cardiologist</li>
            <li>Dr. Patil - Dentist</li>
            <li>Dr. Khan - Neurologist</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
