import { useState } from "react";

export default function AppointmentForm() {
  const [form, setForm] = useState({
    name: "",
    date: "",
    doctor: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.date || !form.doctor) {
      alert("Please fill all fields");
      return;
    }

    alert("Appointment Booked Successfully!");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Book Appointment</h2>

      <input
        placeholder="Patient Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        type="date"
        onChange={(e) => setForm({ ...form, date: e.target.value })}
      />

      <select
        onChange={(e) => setForm({ ...form, doctor: e.target.value })}
      >
        <option value="">Select Doctor</option>
        <option>Dr. Sharma</option>
        <option>Dr. Patil</option>
      </select>

      <button type="submit">Book Now</button>
    </form>
  );
}
