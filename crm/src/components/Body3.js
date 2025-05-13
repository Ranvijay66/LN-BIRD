import React from "react";
import "../style/Button.css"; // Import the CSS file
import "../style/Header.css";

function Body3() {
  return (
    <div
      style={{
        height: "350px",
        width: "1330px",
        marginTop: "0px",
        marginLeft: "10px",
        padding: "0px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {/* Table Section */}

      <div
        style={{
          height: "450px",
          width: "640px",
          backgroundColor: "lightblue",
          padding: "10px",
          marginTop: "5px",
          display: "flex",
        }}
      >
        <div style={styles.box} id="firstdiv">
          <nav
            className="navbar navbar-expand-lg bg-body-lightblue"
            id="firstdiv"
          >
            <div className="container-fluid">
              <a
                className="navbar-brand"
                style={{ fontSize: "15px", marginRight: "400px" }}
                href="#"
              >
                Todays Leads
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
                          //color: "dark",
                          display: "none",
                          textAlign: "right",
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

      {/* Second Section */}
      <div
        style={{
          height: "450px",
          width: "640px",
          backgroundColor: "lightblue",
          padding: "10px",
          marginLeft: "10px",
          overflow: "auto",
        }}
      >
        <div style={styles.box} id="firstdiv">
          <nav
            className="navbar navbar-expand-lg bg-body-lightblue"
            id="firstdiv"
          >
            <div className="container-fluid">
              <a
                className="navbar-brand"
                style={{ fontSize: "15px", marginRight: "300px" }}
                href="#"
              >
                My Deals Closing this Month
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
                          //color: "dark",
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

        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                Deal Name
              </th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                Amount
              </th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                Stage
              </th>

              <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                Closing date
              </th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                Account Name
              </th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                Deal Owner
              </th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                Stage
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                King
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                $60,000.00
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                Identify Decision Makers
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                23/3/2025
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                king(Sample)
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                kris Marrier (sample)
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                dev.papayapalette
              </td>
            </tr>

            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                Truhlar And Truhlar Attys
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                $45,000.00
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                Needs Analysis
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                21/3/2025
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                Truhlar And Truhlar(sample)
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                Sage Wieser (sample)
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                dev.papayapalette
              </td>
            </tr>

            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                Commercial Press
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                $45,000.00
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                Closed lost
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                22/3/2025
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                Commercial Press(sample)
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                Leota Dilliard (sample)
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                dev.papayapalette
              </td>
            </tr>

            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                Morlong Associates
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                $35,000.00
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                Closed Won
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                22/3/2025
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                Morlong Associates(sample)
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                Mitsue Tollner (sample)
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                dev.papayapalette
              </td>
            </tr>

            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                Chapman
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                $70,000.00
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                Negotiation/Review
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                21/3/2025
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                Chapman(sample)
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                Simon Morasca (sample)
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                dev.papayapalette
              </td>
            </tr>

            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                Printing Dimentions
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                $25,000.00
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                Proposal/Price Quote
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                26/3/2025
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                Printing Dimentions(sample)
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                Donette Foller (sample)
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                dev.papayapalette
              </td>
            </tr>

            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                Feltz Printing Service
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                $45,000.00
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                Identify Decision Makers
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                24/3/2025
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                Feltz Printing Service(sample)
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                Capla Paprocki (sample)
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                dev.papayapalette
              </td>
            </tr>

            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                Chemel
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                $70,000.00
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                Value Proposition
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                21/3/2025
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                Chemel(sample)
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                James Venere (sample)
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                dev.papayapalette
              </td>
            </tr>

            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                Chaney
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                $ 55,000.00
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                Needs Analysis
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                22/3/2025
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                Chaney(sample)
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                Josephine Darakjy (sample)
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                dev.papayapalette
              </td>
            </tr>

            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                Benton
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                $ 250,000.00
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                Qualification
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                21/3/2025
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                Benton(sample)
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                John Butt (sample)
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                dev.papayapalette
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

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
    alignItems: "right",
    //justifyContent: "center",
    //borderRadius: "5px", // Optional rounded corners for style
    textAlign: "right",
    //color: "#fff", // Text color for contrast
  },
};

export default Body3;
