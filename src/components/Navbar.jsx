import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light border-bottom"
        id="navbar"
      >
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <span
              className="d-inline-flex justify-content-center align-items-center rounded-circle bg-dark text-white "
              style={{
                width: "40px",
                height: "40px",
                fontSize: "30px",
                fontWeight: "bold",
              }}
            >
              r
            </span>
            <span className="ms-2 text-primary">esollect</span>
          </a>
        </div>
        <div className="d-flex" id="user-profile">
          <img src="/logo.svg" alt="Logo" width="50" height="50" />
          <div className="me-4">
            <span style={{ fontWeight: "bold" }}>Tilak</span>
            <div>tiluck44@resollect.com</div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
