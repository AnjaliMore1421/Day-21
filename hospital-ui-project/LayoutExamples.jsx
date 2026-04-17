export default function LayoutExamples() {
  return (
    <div>
      <h2>Complex UI Layouts</h2>

      {/* Layout 1: Grid Dashboard */}
      <div className="layout layout1">
        <div className="header">Header</div>
        <div className="sidebar">Sidebar</div>
        <div className="content">Content</div>
        <div className="footer">Footer</div>
      </div>

      {/* Layout 2: Card Layout */}
      <div className="layout layout2">
        <div className="card">Profile</div>
        <div className="card">Reports</div>
        <div className="card">Analytics</div>
      </div>

      {/* Layout 3: Gallery Layout */}
      <div className="layout layout3">
        <div className="box">1</div>
        <div className="box">2</div>
        <div className="box">3</div>
        <div className="box">4</div>
      </div>
    </div>
  );
}
