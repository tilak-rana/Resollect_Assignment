import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const NotificationSystem = () => {
  const [notifications] = useState([
    { id: 1, message: "New loan approved!" },
    { id: 2, message: "Your EMI is due soon!" },
  ]);

  return (
    <div className="container mt-4">
      <h4 className="fw-bold text-center">Notifications</h4>

      <div className="d-flex flex-column align-items-center">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className="alert alert-primary w-100 text-center"
            style={{ maxWidth: "400px" }}
          >
            {notif.message}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationSystem;
