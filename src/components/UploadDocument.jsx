import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const UploadDocument = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      setMessage("File uploaded successfully!");
      setFile(null);
    } else {
      setMessage("Please select a file.");
    }
  };

  return (
    <div className="container mt-4">
      <h4 className="mb-3">Upload Document</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Document Name</label>
          <select className="form-select">
            <option>Select</option>
            <option>Report</option>
            <option>Invoice</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Document Type</label>
          <select className="form-select">
            <option>Select</option>
            <option>PDF</option>
            <option>Word</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Document Remarks</label>
          <input
            type="text"
            className="form-control"
            placeholder="Type remarks"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Select File</label>
          <input
            type="file"
            className="form-control"
            onChange={handleFileChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      {message && <div className="mt-3 alert alert-success">{message}</div>}
    </div>
  );
};

export default UploadDocument;
