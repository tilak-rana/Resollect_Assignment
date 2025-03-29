import { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Notices = () => {
  const [notices] = useState([
    {
      id: 1,
      title: "System Maintenance",
      message: "Scheduled maintenance on April 5th.",
    },
    {
      id: 2,
      title: "Policy Update",
      message: "New policy update effective from May 1st.",
    },
    {
      id: 3,
      title: "Holiday Notice",
      message: "Office closed on April 10th for public holiday.",
    },
    {
      id: 4,
      title: "Security Alert",
      message: "Ensure two-factor authentication is enabled.",
    },
  ]);

  return (
    <div className="container mt-4">
      <h4 className="fw-bold mb-3">Notices</h4>
      <div className="row">
        {notices.map((notice) => (
          <div key={notice.id} className="col-lg-4 col-md-6 col-sm-12 mb-3">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">{notice.title}</h5>
                <p className="card-text">{notice.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notices;
