import React from "react";

const FourDivsContainer = () => {
  const dark = {
    color: 'darkgray', // Example dark color for the icon
  };

  return (
    <div className="container-fluid" style={styles.container}>
      <div style={styles.box}>
        <nav className="navbar navbar-expand-lg bg-body-lightblue">
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
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item dropdown px-3">
                  <div className="dropdown">
                    <button 
                      className="btn btn-light" 
                      type="button" 
                      data-bs-toggle="dropdown" 
                      aria-expanded="false"
                      aria-label="Dropdown menu"
                      style={{
                        border: "none",
                        backgroundColor: "transparent",
                        fontSize: "21px",
                        color: "white"
                      }}
                    >
                      &hellip;
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Edit
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
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

      <div style={styles.box}>My Untouched Deals</div>
      <div style={styles.box}>My Call Today</div>
      <div style={styles.box}>My Leads</div>
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
