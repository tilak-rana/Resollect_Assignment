import { useState, useEffect } from "react";
import AllDataTable from "./AllDataTable";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "./Home.css";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Window ke kisi bhi part pe click karne se sidebar band ho
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isSidebarOpen &&
        !event.target.closest(".sidebar-container") &&
        !event.target.closest(".sidebar-toggle")
      ) {
        setIsSidebarOpen(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, [isSidebarOpen]);

  return (
    <>
      <Navbar />
      <button
        className="btn btn-primary sidebar-toggle m-3"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        ☰ Sidebar
      </button>
      <div className="d-flex">
        {/* Sidebar Toggle Button (Mobile Only) */}

        {/* Sidebar */}
        <div className={`sidebar-container ${isSidebarOpen ? "open" : ""}`}>
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-grow-1 p-3">
          <h4 className="fw-bold mb-3">DashBoard</h4>
          <AllDataTable />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
