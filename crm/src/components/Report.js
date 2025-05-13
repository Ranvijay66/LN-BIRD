import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import Header from "./Header";

function Report() {
  const [activeFolder, setActiveFolder] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");

  const handleClick = (folder) => {
    setActiveFolder(folder);
  };

  const isVisible = (label) =>
    label.toLowerCase().includes(searchTerm.toLowerCase());

  return (
    <div style={{ width: "100%" }}>
      <Header />

      <div
        style={{ backgroundColor: "green", marginTop: "6px", padding: "10px" }}
      >
        {/* Flex container for dropdowns */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {/* First dropdown aligned to the left */}
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              All Meetings
            </button>
            <ul className="dropdown-menu">
              <li>
                <button className="dropdown-item" type="button">
                  Action
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Another action
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Something else here
                </button>
              </li>
            </ul>
          </div>

          {/* Container for last three buttons with gap of 10px */}
          <div style={{ display: "flex", gap: "10px" }}>
            {/* Second dropdown aligned to the right */}
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle d-flex align-items-center justify-content-center"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{
                  width: "auto", // Adjust button width based on content
                  lineHeight: ".4",
                  whiteSpace: "pre-line",
                  fontFamily: "monospace",
                  textAlign: "center", // Horizontal center for text
                  padding: "8px 0", // Optional: tighter vertical spacing
                }}
              >
                • ━━━━━{"\n"}• ━━━━━{"\n"}• ━━━━━
              </button>

              <ul
                className="dropdown-menu"
                style={{ position: "absolute", right: 0 }}
              >
                <li>
                  <button className="dropdown-item" type="button">
                    List View
                  </button>
                </li>
                <li>
                  &nbsp;&nbsp;&nbsp;&nbsp;<b>Canvas View</b>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    Custom View List
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    Tile View
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    Table View
                  </button>
                </li>
              </ul>
            </div>

            {/* Third dropdown */}
            <div className="dropdown">
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Create Lead
              </button>
              <ul className="dropdown-menu">
                <li>
                  <button className="dropdown-item" type="button">
                    Import Leads
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    Import Notes
                  </button>
                </li>
              </ul>
            </div>

            {/* Fourth dropdown */}
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Actions
              </button>
              <ul className="dropdown-menu">
                <li>
                  <button className="dropdown-item" type="button">
                    Mass Delete
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    Mass Update
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    Mass Email
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    Approve Leads
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    Add to Campaigns
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    Export Leads
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    Zoho sheet view
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    Print View
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Wrapper with flex layout */}
      <div
        style={{
          display: "flex",
          marginTop: "10px",
          padding: "10px",
          height: "500px",
        }}
      >
        {/* Left Section with both dropdowns */}
        <div
          style={{
            flex: 1,
            display: "flex",
            borderRadius: "10px",
            flexDirection: "column",
            gap: "10px",
            overflowY: "auto",
            backgroundColor: "white",
          }}
        >
          {/* First Dropdown */}

          <div style={styles.container}>
            <h5 style={styles.header}>Folders</h5>

            <input
              type="text"
              placeholder="Search folders..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: "100%",
                padding: "6px 10px",
                marginBottom: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />

            <ul style={styles.list}>
              {isVisible("All Reports") && (
                <li
                  style={
                    activeFolder === "All Reports"
                      ? styles.activeItem
                      : styles.item
                  }
                  onClick={() => handleClick("All Reports")}
                >
                  All Reports
                </li>
              )}
              {isVisible("My Reports") && (
                <li
                  style={
                    activeFolder === "My Reports"
                      ? styles.activeItem
                      : styles.item
                  }
                  onClick={() => handleClick("My Reports")}
                >
                  My Reports
                </li>
              )}
              {isVisible("Favorites") && (
                <li
                  style={
                    activeFolder === "Favorites"
                      ? styles.activeItem
                      : styles.item
                  }
                  onClick={() => handleClick("Favorites")}
                >
                  Favorites
                </li>
              )}
              {isVisible("Recently Viewed") && (
                <li
                  style={
                    activeFolder === "Recently Viewed"
                      ? styles.activeItem
                      : styles.item
                  }
                  onClick={() => handleClick("Recently Viewed")}
                >
                  Recently Viewed
                </li>
              )}
              {isVisible("Recently Deleted") && (
                <li
                  style={
                    activeFolder === "Recently Deleted"
                      ? styles.activeItem
                      : styles.item
                  }
                  onClick={() => handleClick("Recently Deleted")}
                >
                  Recently Deleted
                </li>
              )}
              {isVisible("Account and Contact Reports") && (
                <li
                  style={
                    activeFolder === "Account and Contact Reports"
                      ? styles.activeItem
                      : styles.item
                  }
                  onClick={() => handleClick("Account and Contact Reports")}
                >
                  Account and Contact Reports
                </li>
              )}
              {isVisible("Deal Reports") && (
                <li
                  style={
                    activeFolder === "Deal Reports"
                      ? styles.activeItem
                      : styles.item
                  }
                  onClick={() => handleClick("Deal Reports")}
                >
                  Deal Reports
                </li>
              )}
              {isVisible("Lead Reports") && (
                <li
                  style={
                    activeFolder === "Lead Reports"
                      ? styles.activeItem
                      : styles.item
                  }
                  onClick={() => handleClick("Lead Reports")}
                >
                  Lead Reports
                </li>
              )}
              {isVisible("Campaign Reports") && (
                <li
                  style={
                    activeFolder === "Campaign Reports"
                      ? styles.activeItem
                      : styles.item
                  }
                  onClick={() => handleClick("Campaign Reports")}
                >
                  Campaign Reports
                </li>
              )}
              {isVisible("Case and Solution Reports") && (
                <li
                  style={
                    activeFolder === "Case and Solution Reports"
                      ? styles.activeItem
                      : styles.item
                  }
                  onClick={() => handleClick("Case and Solution Reports")}
                >
                  Case and Solution Reports
                </li>
              )}
              {isVisible("Product Reports") && (
                <li
                  style={
                    activeFolder === "Product Reports"
                      ? styles.activeItem
                      : styles.item
                  }
                  onClick={() => handleClick("Product Reports")}
                >
                  Product Reports
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Right Section with scrollable table */}
        <div
          style={{
            flex: 3,
            paddingLeft: "20px",
            maxHeight: "500px",
            overflowY: "auto",
          }}
        >
          <table className="table table-striped table-bordered">
            <thead className="table-yellow">
              <tr>
                <th style={{ width: "40px" }}></th>
                <th>Subject</th>
                <th>Call Type</th>
                <th>Call start time</th>
                <th>Call Duration </th>
                <th>Related To</th>
                <th>Contact Name</th>
                <th>Call Owner</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Follow Up With Lead</td>
                <td>Out bound</td>
                <td>20/03/2025 12:47 PM</td>
                <td></td>
                <td>Chau Kitzman(sample)</td>
                <td></td>
                <td>dev.papayapalette</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "250px",
    backgroundColor: "#f5f5f5",
    padding: "10px",
    borderRight: "1px solid #ccc",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    marginBottom: "10px",
  },
  list: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
  },
  item: {
    padding: "8px 12px",
    cursor: "pointer",
    borderRadius: "4px",
    marginBottom: "4px",
  },
  activeItem: {
    padding: "8px 12px",
    cursor: "pointer",
    borderRadius: "4px",
    marginBottom: "4px",
    backgroundColor: "#007bff",
    color: "#fff",
  },
};

export default Report;
