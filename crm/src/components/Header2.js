import React from "react";
import "../style/Header.css";

const FourDivsContainer = () => {
  const dark = {
    color: "darkgray", // Example dark color for the icon
  };

  return (
    <div className="container-fluid" style={styles.container}>
      <div style={styles.box} id="firstdiv">
        <nav
          className="navbar navbar-expand-lg bg-body-lightblue"
          id="firstdiv"
        >
          <div className="container-fluid">
            <a className="navbar-brand" style={{ fontSize: "15px" }} href="#">
              MY Open Deals &nbsp;&nbsp;&nbsp;
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown1">
              <ul className="navbar-nav">
                <li className="nav-item dropdown px-3">
                  <div className="dropdown">
                    <button
                      id="firstdivbutton"
                      className="btn btn-light"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      aria-label="Dropdown menu"
                      style={{
                        border: "none",
                        backgroundColor: "transparent",
                        fontSize: "25px",
                        color: "dark",
                        display: "none",
                      }}
                    >
                      &#8942;
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Edit
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          style={{ color: "red" }}
                          href="#"
                        >
                          Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* Fixed the syntax error here */}
      <div style={styles.box} id="firstdiv">
        <nav className="navbar navbar-expand-lg bg-body-light" id="firstdiv">
          <div className="container-fluid">
            <a className="navbar-brand" style={{ fontSize: "15px" }} href="#">
              MY Untouched Deals &nbsp;&nbsp;&nbsp;
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown1">
              <ul className="navbar-nav">
                <li className="nav-item dropdown px-3">
                  <div className="dropdown">
                    <button
                      id="firstdivbutton"
                      className="btn btn-light"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      aria-label="Dropdown menu"
                      style={{
                        border: "none",
                        backgroundColor: "transparent",
                        fontSize: "25px",
                        color: "dark",
                        display: "none",
                      }}
                    >
                      &#8942;
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Edit
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          style={{ color: "red" }}
                          href="#"
                        >
                          Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div style={styles.box} id="firstdiv">
        <nav
          className="navbar navbar-expand-lg bg-body-lightblue"
          id="firstdiv"
        >
          <div className="container-fluid">
            <a className="navbar-brand" style={{ fontSize: "15px" }} href="#">
              MY Calls Today &nbsp;&nbsp;&nbsp;
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown1">
              <ul className="navbar-nav">
                <li className="nav-item dropdown px-3">
                  <div className="dropdown">
                    <button
                      id="firstdivbutton"
                      className="btn btn-light"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      aria-label="Dropdown menu"
                      style={{
                        border: "none",
                        backgroundColor: "transparent",
                        fontSize: "25px",
                        color: "dark",
                        display: "none",
                      }}
                    >
                      &#8942;
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Edit
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          style={{ color: "red" }}
                          href="#"
                        >
                          Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div style={styles.box} id="firstdiv">
        <nav
          className="navbar navbar-expand-lg bg-body-lightblue"
          id="firstdiv"
        >
          <div className="container-fluid">
            <a className="navbar-brand" style={{ fontSize: "15px" }} href="#">
              MY Leads &nbsp;&nbsp;&nbsp;
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown1">
              <ul className="navbar-nav">
                <li className="nav-item dropdown px-3">
                  <div className="dropdown">
                    <button
                      id="firstdivbutton"
                      className="btn btn-light"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      aria-label="Dropdown menu"
                      style={{
                        border: "none",
                        backgroundColor: "transparent",
                        fontSize: "25px",
                        color: "dark",
                        display: "none",
                      }}
                    >
                      &#8942;
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Edit
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          style={{ color: "red" }}
                          href="#"
                        >
                          Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between", // Evenly space divs
    alignItems: "stretch", // Ensure divs stretch to fill available height
    flexWrap: "wrap",
    gap: "10px", // Add space between the divs
    padding: "10px",
  },
  box: {
    flex: "1 1 20%", // Adjusted to take up more space
    height: "100px",
    backgroundColor: "lightblue", // Uniform color for all divs
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px", // Optional rounded corners for style
    textAlign: "center",
    color: "#fff", // Text color for contrast
  },
};

export default FourDivsContainer;
