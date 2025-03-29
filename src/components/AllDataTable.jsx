const AllDataTable = () => {
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
  return (
    <>
      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th>Loan No.</th>
            <th>Loan Type</th>
            <th>Borrower</th>
            <th>Borrower Address</th>
            <th>Co Borrower 1 Name</th>
            <th>Co Borrower 1 Address</th>
            <th>Current DPD</th>
            <th>Sanction Amount</th>
            <th>Region</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {loans.map((loan, index) => (
            <tr key={index}>
              <td>
                <a href="#" className="text-primary">
                  {loan.loanNo}
                </a>
              </td>
              <td>{loan.type}</td>
              <td>{loan.borrower}</td>
              <td>{loan.address}</td>
              <td>{loan.coBorrower}</td>
              <td>{loan.coAddress}</td>
              <td>{loan.dpd}</td>
              <td>{loan.amount}</td>
              <td>{loan.region}</td>
              <td>{loan.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AllDataTable;
