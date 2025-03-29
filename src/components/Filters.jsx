import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const Filters = () => {
  const [filters, setFilters] = useState({
    type: "",
    borrower: "",
    region: "",
    status: "",
    loanNo: "",
  });

  const [selectedColumns, setSelectedColumns] = useState([
    "loanNo",
    "type",
    "borrower",
    "address",
    "coBorrower",
    "coAddress",
    "dpd",
    "amount",
    "region",
    "status",
  ]);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const allColumns = [
    { key: "loanNo", label: "Loan No." },
    { key: "type", label: "Loan Type" },
    { key: "borrower", label: "Borrower" },
    { key: "address", label: "Borrower Address" },
    { key: "coBorrower", label: "Co Borrower" },
    { key: "coAddress", label: "Co Borrower Address" },
    { key: "dpd", label: "Current DPD" },
    { key: "amount", label: "Sanction Amount" },
    { key: "region", label: "Region" },
    { key: "status", label: "Status" },
  ];

  const loans = [
    {
      loanNo: "L28J3247",
      type: "Home Loan",
      borrower: "Vedica Sachar",
      address: "83 Yogi Ganj, Kadapa-058720",
      coBorrower: "Divit Vora",
      coAddress: "24/53, Acharya Path Ongole-052360",
      dpd: "91",
      amount: "₹ 1,934068",
      region: "West",
      status: "Active",
    },
    {
      loanNo: "L28J3243",
      type: "Home Loan",
      borrower: "Hrishita Agrawal",
      address: "86/22, Deo Path, Betulampore 841186",
      coBorrower: "Mahika Tak",
      coAddress: "58 Teal Road, Sultan Pur, Maja-91878",
      dpd: "100",
      amount: "₹ 1,824143",
      region: "North",
      status: "Overdue",
    },
    {
      loanNo: "L28J3252",
      type: "Car Loan",
      borrower: "Priyansh Soman",
      address: "H.No. 152 Andree Street, Amritsar-47162",
      coBorrower: "Zaina Dara",
      coAddress: "H.No. 42, Srinivasta Marg, Junagadh-191124",
      dpd: "100",
      amount: "₹ 4,537889",
      region: "East",
      status: "Active",
    },
    {
      loanNo: "L28J3248",
      type: "Home Loan",
      borrower: "Priyansh Chanda",
      address: "24, Ray Chowk, Qutbkal 800332",
      coBorrower: "Zain Ghosh",
      coAddress: "H.No. 59, Sugar Street, Kolhapur-543900",
      dpd: "100",
      amount: "₹ 2,687172",
      region: "West",
      status: "Closed",
    },
    {
      loanNo: "L28J3261",
      type: "Home Loan",
      borrower: "Hrishita Sen",
      address: "94/36 Baraj, Hubli-Dharwad-469709",
      coBorrower: "Shray Kala",
      coAddress: "63/86, Bhardwaj Street, Bokaro 662024",
      dpd: "100",
      amount: "₹ 4,456808",
      region: "West",
      status: "Overdue",
    },
    {
      loanNo: "L28J3265",
      type: "Personal Loan",
      borrower: "Vivaan Virk",
      address: "H.No. 653 Dada Ganj, Khagaria-279923",
      coBorrower: "Elakshi Chahal",
      coAddress: "16/45 Divan Road, Jabalpur 962051",
      dpd: "76",
      amount: "₹ 3,865314",
      region: "West",
      status: "Active",
    },
    {
      loanNo: "L28J3264",
      type: "Personal Loan",
      borrower: "Nirvaan Mander",
      address: "543 Singhal Street, Bhaiwas Jahangir Pur-348320",
      coBorrower: "Vihaan Dua",
      coAddress: "H.No. 115, Saha Road, Singraul 049374",
      dpd: "92",
      amount: "₹ 1,256683",
      region: "South",
      status: "Pending",
    },
    {
      loanNo: "L28J3267",
      type: "Personal Loan",
      borrower: "Nirvi Sahil",
      address: "414Z, Dua, Amroh-741195",
      coBorrower: "Dhruak Lalhs",
      coAddress: "484/41, Gopal Path, Uluberia 709956",
      dpd: "75",
      amount: "₹ 2,687368",
      region: "East",
      status: "Closed",
    },
  ];

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleColumnChange = (e) => {
    const value = e.target.value;
    setSelectedColumns((prev) =>
      prev.includes(value)
        ? prev.filter((col) => col !== value)
        : [...prev, value]
    );
  };

  const filteredLoans = loans.filter((loan) =>
    Object.keys(filters).every(
      (key) =>
        filters[key] === "" ||
        loan[key].toLowerCase().includes(filters[key].toLowerCase())
    )
  );

  return (
    <div className="p-4">
      <h4 className="fw-bold">All Filters</h4>
      <div className="d-flex gap-2 mb-3">
        <select
          name="type"
          className="form-select w-auto"
          onChange={handleFilterChange}
        >
          <option value="">All Loan Types</option>
          <option value="Home Loan">Home Loan</option>
          <option value="Car Loan">Car Loan</option>
        </select>
        <input
          type="text"
          name="borrower"
          className="form-control w-auto"
          placeholder="Borrower Name"
          onChange={handleFilterChange}
        />
        <select
          name="region"
          className="form-select w-auto"
          onChange={handleFilterChange}
        >
          <option value="">All Regions</option>
          <option value="West">West</option>
          <option value="North">North</option>
          <option value="East">East</option>
        </select>
        <select
          name="status"
          className="form-select w-auto"
          onChange={handleFilterChange}
        >
          <option value="">All Status</option>
          <option value="Active">Active</option>
          <option value="Overdue">Overdue</option>
          <option value="Closed">Closed</option>
        </select>
        <input
          type="text"
          name="loanNo"
          className="form-control w-auto"
          placeholder="Search Loan Number"
          onChange={handleFilterChange}
        />

        <ul className="nav bg-primary p-2 rounded">
          <li className="nav-item">
            <a className="nav-link fs-5 text-white" href="/upload">
              Upload Document
            </a>
          </li>
        </ul>
      </div>

      <div className="mb-3 position-relative">
        <button
          className="btn btn-secondary"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          Select Columns
        </button>
        {dropdownOpen && (
          <div
            className="position-absolute bg-white border p-2"
            style={{ zIndex: 10 }}
          >
            {allColumns.map((col) => (
              <div key={col.key}>
                <label>
                  <input
                    type="checkbox"
                    value={col.key}
                    checked={selectedColumns.includes(col.key)}
                    onChange={handleColumnChange}
                  />{" "}
                  {col.label}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>

      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            {allColumns.map(
              (col) =>
                selectedColumns.includes(col.key) && (
                  <th key={col.key}>{col.label}</th>
                )
            )}
          </tr>
        </thead>
        <tbody>
          {filteredLoans.map((loan, index) => (
            <tr key={index}>
              {allColumns.map(
                (col) =>
                  selectedColumns.includes(col.key) && (
                    <td key={col.key}>{loan[col.key]}</td>
                  )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Filters;
