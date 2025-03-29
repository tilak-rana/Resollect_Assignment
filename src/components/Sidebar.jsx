import "bootstrap/dist/css/bootstrap.min.css";

const Sidebar = () => {
  return (
    <div
      className="bg-light vh-100 p-3"
      style={{ width: "250px", minheight: "100vh" }}
    >
      <ul className="nav flex-column">
        <li className="nav-item">
          <a href="/" className="nav-link text-secondary fw-bold">
            <img
              className="me-2"
              width="23"
              height="23"
              src="https://img.icons8.com/fluency-systems-filled/48/dashboard-layout.png"
              alt="dashboard-layout"
            />
            DashBoard
          </a>
        </li>
        <li className="nav-item">
          <a href="/portfolio" className="nav-link text-secondary fw-bold">
            <img
              className="me-2"
              width="23"
              height="23"
              src="https://img.icons8.com/ios-glyphs/30/portfolio.png"
              alt="portfolio"
            />
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a href="/notifications" className="nav-link text-secondary fw-bold">
            <img
              className="me-2"
              width="23"
              height="23"
              src="https://img.icons8.com/ios-filled/50/appointment-reminders--v1.png"
              alt="appointment-reminders--v1"
            />
            Notifications
          </a>
        </li>
        <li className="nav-item">
          <a href="/notices" className="nav-link text-secondary fw-bold">
            <img
              className="me-2"
              width="24"
              height="24"
              src="https://img.icons8.com/material-sharp/24/mail.png"
              alt="mail"
            />
            Notices
          </a>
        </li>
        <li className="nav-item">
          <a href="/auction" className="nav-link text-secondary fw-bold">
            <img
              className="me-2"
              width="20"
              height="20"
              src="https://img.icons8.com/ios-filled/50/message-preview.png"
              alt="message-preview"
            />{" "}
            Auction
          </a>
        </li>
        <li className="nav-item">
          <a href="/upload" className="nav-link text-secondary fw-bold">
            <img
              className="me-2"
              width="24"
              height="24"
              src="https://img.icons8.com/ios-glyphs/30/upload--v1.png"
              alt="upload--v1"
            />
            Data Upload
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-secondary fw-bold">
            <img
              className="me-2"
              width="24"
              height="23"
              src="https://img.icons8.com/ios-filled/50/control.png"
              alt="control"
            />
            Control Panel
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-secondary fw-bold">
            <img
              className="me-2"
              width="20"
              height="20"
              src="https://img.icons8.com/external-vectorslab-glyph-vectorslab/50/external-User-Management-machine-learning-vectorslab-glyph-vectorslab.png"
              alt="external-User-Management-machine-learning-vectorslab-glyph-vectorslab"
            />
            User Management
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-secondary fw-bold">
            <img
              className="me-2"
              width="28"
              height="28"
              src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/external-user-cyber-security-kiranshastry-solid-kiranshastry.png"
              alt="external-user-cyber-security-kiranshastry-solid-kiranshastry"
            />
            Permissions
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
