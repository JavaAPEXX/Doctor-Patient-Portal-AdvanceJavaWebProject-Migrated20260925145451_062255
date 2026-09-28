import React from 'react';

interface NavbarProps {
  /** Full name of the logged‑in doctor, injected from the backend */
  doctorFullName: string;
}

const Navbar: React.FC<NavbarProps> = ({ doctorFullName }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <a className="navbar-brand" href="index.jsp">
          <i className="fa-sharp fa-solid fa-hospital"></i> Doctor Patient Portal
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="index.jsp">
                <i className="fa fa-home"></i> HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="patient.jsp">
                <i className="fa fa-wheelchair"></i> PATIENT
              </a>
            </li>
          </ul>

          <div className="dropdown">
            <button
              className="btn btn-outline-light dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fa-solid fa-user-doctor"></i> {doctorFullName}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="edit_profile.jsp">
                  Edit Profile
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="../doctorLogout">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;