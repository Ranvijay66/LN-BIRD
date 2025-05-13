import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Header from "./Header";

function Alltask() {
  const [showKanban, setShowKanban] = useState(false);
  const [showKanban1, setShowKanban1] = useState(false);
  const [showKanban2, setShowKanban2] = useState(false);
  const [showKanban3, setShowKanban3] = useState(false);
  const [showKanban4, setShowKanban4] = useState(false);

  return (
    <div style={{ width: "100%" }}>
      <Header />

      <div
        style={{
          backgroundColor: "lightgreen",
          marginTop: "6px",
          padding: "10px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {/* Left Dropdown */}
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              All Account
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

          {/* Right Dropdowns */}
          <div style={{ display: "flex", gap: "10px" }}>
            {/* View Dropdown */}
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle d-flex align-items-center justify-content-center"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{
                  width: "auto",
                  lineHeight: ".4",
                  whiteSpace: "pre-line",
                  fontFamily: "monospace",
                  textAlign: "center",
                  padding: "8px 0",
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
                <li className="dropdown-item">
                  <b>Canvas View</b>
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

            {/* Create Account Dropdown */}
            <div className="dropdown">
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Create Account
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

            {/* Actions Dropdown */}
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
                    Zoho Sheet View
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

      <h6 style={{ marginLeft: "20px", marginTop: "10px", marginBottom: "0" }}>
        Total records 10
      </h6>

      <div
        style={{
          display: "flex",
          marginTop: "10px",
          padding: "10px",
          height: "500px",
        }}
      >
        {/* Left Panel Filters */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            borderRadius: "10px",
            overflowY: "auto",
            backgroundColor: "green",
          }}
        >
          <h6 style={{ marginLeft: "10px", marginTop: "10px" }}>
            Filter Accounts By
          </h6>

          <div style={{ position: "relative", width: "80%" }}>
            <input
              type="text"
              placeholder="Search..."
              style={{ width: "100%", marginLeft: "10px", borderRadius: "5px" }}
            />
            <span
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                pointerEvents: "none",
              }}
            >
              🔍
            </span>
          </div>

          {/* Filter Section Component */}
          {renderFilterSection("System Defined Filters", "collapseCheckbox1", [
            "Touched Records",
            "Untouched Records",
            "Record Action",
            "Related Records Action",
            "Latest Email Status",
            "Activities",
            "Campaigns",
          ])}

          {renderFilterSection("Filter Contacts By", "collapseCheckbox2", [
            "Annual Revenue",
            "City",
            "Company",
            "Converted Contact",
            "Converted Deal",
            "Country",
            "Created BY",
            "Created Time",
            "Email",
            "Email Opt Out",
            "Fax",
            "First Name",
            "Industry",
            "Last Activity Time",
            "Last Name",
            "Lead Convertion Time",
            "Lead Name",
            "Lead Owner",
            "Lead Source",
            "Lead Status",
            "Mobile",
            "Modified By",
            "Modified Time",
            "No of Employees",
            "Phone",
            "Rating",
            "Solution",
            "Secondary Email",
            "Skype ID",
            "State",
            "Title",
            "Unsubscribe Mode",
            "Unsubscribe Time",
            "Website",
            "Zipcode",
          ])}

          {renderFilterSection(
            "Filter By Related Modules",
            "collapseCheckbox3",
            [
              "Calls",
              "Invitees (Invited Meetings)",
              "Meetings",
              "Notes",
              "Tasks",
            ]
          )}
        </div>

        {/* Right Panel */}
        <div
          style={{
            flex: 3,
            paddingLeft: "20px",
            maxHeight: "500px",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {showKanban && (
            <div
              style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "15px",
                marginBottom: "20px",
                backgroundColor: "#f7f7f7",
              }}
            >
              <h5>Not Started</h5>
              <div style={{ display: "flex", gap: "20px", overflowX: "auto" }}>
                <div
                  style={{
                    minWidth: "200px",
                    backgroundColor: "#d1ecf1",
                    padding: "10px",
                    borderRadius: "8px",
                  }}
                >
                  <strong>Register for upcoming CRM Webinar</strong>
                  <input type="checkbox" />
                  <p>20/3/2025</p>
                  <p>Low</p>
                  <p>dev.papayapalette</p>
                  <p>Kris Marrier(sample)</p>
                  <p>King(sample)</p>
                </div>

                <div
                  style={{
                    minWidth: "200px",
                    backgroundColor: "#d1ecf1",
                    padding: "10px",
                    borderRadius: "8px",
                  }}
                >
                  <strong>Competitor Comparision Document</strong>
                  <input type="checkbox" />
                  <p>18/3/2025</p>
                  <p>Highest</p>
                  <p>dev.papayapalette</p>
                  <p>Capla paprocki(sample)</p>
                  <p>Feltz Printing Service</p>
                </div>

                <div
                  style={{
                    minWidth: "200px",
                    backgroundColor: "#d1ecf1",
                    padding: "10px",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center", // Align the checkbox with the text
                    gap: "10px", // Space between checkbox and task details
                    flexDirection: "row-reverse", // Moves the checkbox to the right side
                  }}
                >
                  <label htmlFor="task3" style={{ margin: 0 }}>
                    <strong>Get Approval from Manager</strong>{" "}
                    <input type="checkbox" />
                    <p>19/3/2025</p>
                    <p>Low</p>
                    <p>dev.papayapalette</p>
                    <p>Simon Morasca(sample)</p>
                    <p>Chapman(sample)</p>
                  </label>
                </div>
              </div>
            </div>
          )}

          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button
              className="btn btn-info"
              onClick={() => setShowKanban(!showKanban)}
            >
              {showKanban ? "NOT STARTED" : " NOT STARTED"}
            </button>
          </div>

          <div style={{ textAlign: "center", marginTop: "-20px" }}>
            <button
              className="btn btn-info"
              onClick={() => setShowKanban1(!showKanban1)}
            >
              {showKanban1 ? "DEFERRED" : " DEFERRED"}
            </button>
          </div>

          <div style={{ textAlign: "center", marginTop: "-20px" }}>
            <button
              className="btn btn-info"
              onClick={() => setShowKanban2(!showKanban2)}
            >
              {showKanban2 ? "IN PROGRESS" : " IN PROGRESS"}
            </button>
          </div>

          <div style={{ textAlign: "center", marginTop: "-20px" }}>
            <button
              className="btn btn-info"
              onClick={() => setShowKanban3(!showKanban3)}
            >
              {showKanban3 ? "COMPLETED" : " COMPLETED"}
            </button>
          </div>

          <div style={{ textAlign: "center", marginTop: "-20px" }}>
            <button
              className="btn btn-info"
              onClick={() => setShowKanban4(!showKanban4)}
            >
              {showKanban3 ? "WAITING FOR INPUT" : " WAITING FOR INPUT"}
            </button>
          </div>
        </div>

        <div>
          {showKanban1 && (
            <div
              style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "15px",
                marginBottom: "20px",
                backgroundColor: "#f7f7f7",
              }}
            >
              <h5>NO RECORDS FOUND</h5>
              <div style={{ display: "flex", gap: "20px", overflowX: "auto" }}>
                <div
                  style={{
                    minWidth: "200px",
                    backgroundColor: "#d1ecf1",
                    padding: "10px",
                    borderRadius: "8px",
                  }}
                >
                  <strong>Register for upcoming CRM Webinar</strong>
                  <input type="checkbox" />
                  <p>20/3/2025</p>
                  <p>Low</p>
                  <p>dev.papayapalette</p>
                  <p>Kris Marrier(sample)</p>
                  <p>King(sample)</p>
                </div>

                <div
                  style={{
                    minWidth: "200px",
                    backgroundColor: "#d1ecf1",
                    padding: "10px",
                    borderRadius: "8px",
                  }}
                >
                  <strong>Competitor Comparision Document</strong>
                  <input type="checkbox" />
                  <p>18/3/2025</p>
                  <p>Highest</p>
                  <p>dev.papayapalette</p>
                  <p>Capla paprocki(sample)</p>
                  <p>Feltz Printing Service</p>
                </div>

                <div
                  style={{
                    minWidth: "200px",
                    backgroundColor: "#d1ecf1",
                    padding: "10px",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center", // Align the checkbox with the text
                    gap: "10px", // Space between checkbox and task details
                    flexDirection: "row-reverse", // Moves the checkbox to the right side
                  }}
                >
                  <label htmlFor="task3" style={{ margin: 0 }}>
                    <strong>Get Approval from Manager</strong>{" "}
                    <input type="checkbox" />
                    <p>19/3/2025</p>
                    <p>Low</p>
                    <p>dev.papayapalette</p>
                    <p>Simon Morasca(sample)</p>
                    <p>Chapman(sample)</p>
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>

        <div>
          {showKanban2 && (
            <div
              style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "15px",
                marginBottom: "20px",
                overflowX: "auto",
                backgroundColor: "#f7f7f7",
              }}
            >
              <h5>IN PROGRESS</h5>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  overflowX: "auto",
                  overflowY: "hidden",
                  whiteSpace: "nowrap",
                  padding: "10px",
                  maxWidth: "100%",
                }}
              >
                <div
                  style={{
                    minWidth: "200px",
                    backgroundColor: "#d1ecf1",
                    padding: "10px",
                    borderRadius: "8px",
                  }}
                >
                  <strong>REFER CRM VIDEOS</strong>
                  <input type="checkbox" />
                  <p>22/3/2025</p>
                  <p>Normal</p>
                  <p>dev.papayapalette</p>
                  <p>Mitsue Tollner(sample)</p>
                  <p>Morlong Associates(sample)</p>
                </div>

                <div
                  style={{
                    minWidth: "200px",
                    backgroundColor: "#d1ecf1",
                    padding: "10px",
                    borderRadius: "8px",
                  }}
                >
                  <strong>Get Approval from Manager</strong>
                  <input type="checkbox" />
                  <p>21/3/2025</p>
                  <p>Normal</p>
                  <p>dev.papayapalette</p>
                  <p>Leota Dilliard(sample)</p>
                  <p>Commercial Press</p>
                </div>

                <div
                  style={{
                    minWidth: "200px",
                    backgroundColor: "#d1ecf1",
                    padding: "10px",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center", // Align the checkbox with the text
                    gap: "10px", // Space between checkbox and task details
                    flexDirection: "row-reverse", // Moves the checkbox to the right side
                  }}
                >
                  <label htmlFor="task3" style={{ margin: 0 }}>
                    <strong>Get Approval from Manager</strong>{" "}
                    <input type="checkbox" />
                    <p>21/3/2025</p>
                    <p>High</p>
                    <p>dev.papayapalette</p>
                    <p>Kris Marrier(sample)</p>
                    <p>King(sample)</p>
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>

        <div>
          {showKanban3 && (
            <div
              style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "15px",
                marginBottom: "20px",
                overflowX: "auto",
                backgroundColor: "#f7f7f7",
              }}
            >
              <h5>COMPLETED</h5>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  overflowX: "auto",
                  overflowY: "hidden",
                  whiteSpace: "nowrap",
                  padding: "10px",
                  maxWidth: "100%",
                }}
              >
                <div
                  style={{
                    minWidth: "200px",
                    backgroundColor: "#d1ecf1",
                    padding: "10px",
                    borderRadius: "8px",
                  }}
                >
                  <strong>Complete CRM Geting Started steps </strong>
                  <input type="checkbox" />
                  <p>20/3/2025</p>
                  <p>Highest</p>
                  <p>dev.papayapalette</p>
                  <p>John Butt(sample)</p>
                  <p>Benton(sample)</p>
                </div>

                <div
                  style={{
                    minWidth: "200px",
                    backgroundColor: "#d1ecf1",
                    padding: "10px",
                    borderRadius: "8px",
                  }}
                >
                  <strong>Complete CRM Getting started steps</strong>
                  <input type="checkbox" />
                  <p>23/3/2025</p>
                  <p>Normal</p>
                  <p>dev.papayapalette</p>
                  <p>Theola Frey(sample)</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div>
          {showKanban4 && (
            <div
              style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "15px",
                marginBottom: "20px",
                overflowX: "auto",
                backgroundColor: "#f7f7f7",
              }}
            >
              <h5>WAITING FOR INPUT</h5>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  overflowX: "auto",
                  overflowY: "hidden",
                  whiteSpace: "nowrap",
                  padding: "10px",
                  maxWidth: "100%",
                }}
              >
                <div
                  style={{
                    minWidth: "200px",
                    backgroundColor: "#d1ecf1",
                    padding: "10px",
                    borderRadius: "8px",
                  }}
                >
                  <strong>NO TASK FOUND </strong>
                  <input type="checkbox" />
                  <p>20/3/2025</p>
                  <p>Highest</p>
                  <p>dev.papayapalette</p>
                  <p>John Butt(sample)</p>
                  <p>Benton(sample)</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Helper Function to Render Filter Section
const renderFilterSection = (title, collapseId, items) => (
  <div style={{ marginLeft: "10px" }}>
    <button
      className="btn btn-primary d-flex align-items-center"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target={`#${collapseId}`}
      aria-expanded="false"
      aria-controls={collapseId}
    >
      <FontAwesomeIcon icon={faChevronDown} className="me-2" />
      {title}
    </button>
    <div className="collapse mt-2" id={collapseId}>
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {items.map((label, idx) => (
          <li key={idx}>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id={`${collapseId}-option-${idx}`}
              />
              <label
                className="form-check-label"
                htmlFor={`${collapseId}-option-${idx}`}
              >
                {label}
              </label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Alltask;
