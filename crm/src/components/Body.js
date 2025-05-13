import React from "react";

const TwoDivsContainer = () => {
  return (
    <div className="container-fluid" style={styles.container}>
      <div style={styles.box}>
        <nav className="navbar navbar-expand-lg bg-body-lightblue d-flex">
          <div className="container-fluid">
            <a
              className="navbar-brand"
              style={{ fontSize: "15px", marginRight: "400px" }}
              href="#"
            >
              MY Open Tasks
            </a>
            <button
              className="navbar-toggler ms-auto"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown1" // Unique ID for the first navbar
              aria-controls="navbarNavDropdown1"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={styles.button}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown1">
              <ul className="navbar-nav">
                <li className="nav-item dropdown px-3">
                  <div className="dropdown">
                    <button
                      className="btn btn-light ms-auto" // Added ms-auto here to move button to the right
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      aria-label="Dropdown menu"
                      style={{
                        border: "none",
                        backgroundColor: "transparent",
                        fontSize: "25px",
                        color: "black", // Changed 'dark' to 'black'
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

      <div style={styles.box}>
        <nav className="navbar navbar-expand-lg bg-body-lightblue d-flex">
          <div className="container-fluid">
            <a
              className="navbar-brand"
              style={{ fontSize: "15px", marginRight: "400px" }}
              href="#"
            >
              My Meetings
            </a>
            <button
              className="navbar-toggler ms-auto"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown2" // Unique ID for the second navbar
              aria-controls="navbarNavDropdown2"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={styles.button}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown2">
              <ul className="navbar-nav">
                <li className="nav-item dropdown px-3">
                  <div className="dropdown">
                    <button
                      className="btn btn-light ms-auto" // Added ms-auto here to move button to the right
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      aria-label="Dropdown menu"
                      style={{
                        border: "none",
                        backgroundColor: "transparent",
                        fontSize: "25px",
                        color: "black", // Changed 'dark' to 'black'
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
    height: "50px",
    backgroundColor: "lightblue", // Uniform color for all divs
    display: "flex",
    borderRadius: "5px", // Optional rounded corners for style
    textAlign: "left",
    margin: "0px", // Fixed issue here, changed textmargin to margin
    color: "#fff", // Text color for contrast
  },
  button: {
    marginLeft: "auto", // This ensures the button is pushed to the right side of its container
  },
};

export default TwoDivsContainer;
