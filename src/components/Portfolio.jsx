import { useState, useEffect } from "react";
import AllDataTable from "./AllDataTable";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
const Portfolio = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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
    <div>
      <Navbar />

      <div className="d-flex justify-content-between">
        <span className={`sidebar-container ${isSidebarOpen ? "open" : ""}`}>
          <Sidebar />
        </span>
        <div className="p-4">
          <h4 className="fw-bold mb-3">Portfolio</h4>
          <div className="d-flex justify-content-start mb-3">
            <button
              className="btn btn-primary sidebar-toggle m-3"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              ☰ Sidebar
            </button>
            <button className="btn btn-light me-2">All</button>
            <button className="btn btn-light me-2">Pre Sarfaesi</button>
            <button className="btn btn-light me-2">13(3) Responses</button>
            <button className="btn btn-light me-2">Symbolic Possession</button>
            <button className="btn btn-light me-2">DM Order</button>
            <button className="btn btn-light me-2">Physical Possessions</button>
            <button className="btn btn-light me-2">Auctions</button>
          </div>

          <div className="d-flex justify-content-end mb-3">
            <ul className="nav bg-primary p-2 rounded">
              <li className="nav-item">
                <a className="nav-link fs-5 text-white" href="/filters">
                  More Filters
                </a>
              </li>
            </ul>
          </div>
          <AllDataTable />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
