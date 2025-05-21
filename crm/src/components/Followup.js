import React, { useState } from "react";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// Add this import at the top if not already present:
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Followup = () => {
  const [showCompletedMenu, setShowCompletedMenu] = useState(false);
  const [showDropdownIconMenu, setShowDropdownIconMenu] = useState(false);
  const [showDotMenu, setShowDotMenu] = useState(false);

  const layoutStyle = {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  };

  const containerStyle = {
    display: "flex",
    flex: 1, // Fills remaining height under the header
    overflow: "hidden",
  };

  const leftStyle = {
    width: "20%",
    backgroundColor: "#d3e0ea",
    padding: "20px",
    overflowY: "auto",
  };

  const rightOuterStyle = {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f7f7f7",
    padding: "20px",
    overflowY: "auto",
  };

  const topContentStyle = {
    marginBottom: "20px",
    backgroundColor: "#e0f7fa",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const innerRowStyle = {
    display: "flex",
    width: "100%",
  };

  const rightInner60 = {
    width: "70%",
    backgroundColor: "#ffffff",
    marginRight: "10px",
    padding: "20px",
  };

  const rightInner40 = {
    width: "30%",
    backgroundColor: "#eaeaea",
    padding: "20px",
  };

  const dropdownContainer = {
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
    alignItems: "center",
  };

  const dropdownStyle = {
    position: "relative",
    display: "inline-block",
  };

  const menuStyle = {
    position: "absolute",
    top: "100%",
    left: 0,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    minWidth: "150px",

    zIndex: 1,
    padding: "10px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  };

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "8px 12px",
    cursor: "pointer",
    fontSize: "15px",
    width: "200px",
  };

  const dotButtonStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "0",
    width: "40px",
    height: "35px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  };

  const dropdownButtonStyle = {
    ...buttonStyle,
    fontSize: "17px",
    padding: "4px 6px",
    width: "50px",
    marginLeft: "-8px",
  };

  return (
    <div style={layoutStyle}>
      <Header />

      <div style={containerStyle}>
        <div style={leftStyle}>
          {" "}
          <h5>
            <FontAwesomeIcon
              icon={faArrowLeft}
              style={{ marginRight: "8px" }}
            />
            All Calls{" "}
          </h5>
          <div style={{ backgroundColor: "lightgreen" }}>
            Chau Kitzman (Sample)
          </div>
        </div>

        <div style={rightOuterStyle}>
          <div style={topContentStyle}>
            <h5 style={{ margin: 0 }}>Chau Kitzman (Sample) - Leads</h5>

            <div style={dropdownContainer}>
              {/* Mark as Completed Dropdown */}
              <div style={dropdownStyle}>
                <button
                  style={buttonStyle}
                  onClick={() => {
                    setShowCompletedMenu(!showCompletedMenu);
                    setShowDropdownIconMenu(false);
                    setShowDotMenu(false);
                  }}
                >
                  Mark as Completed
                </button>
                {showCompletedMenu && (
                  <div style={menuStyle}>
                    <div>Reschedule Call</div>
                    <div>Cancel Call</div>
                  </div>
                )}
              </div>

              {/* ▼ Dropdown Icon Button */}
              <div style={dropdownStyle}>
                <button
                  style={dropdownButtonStyle}
                  onClick={() => {
                    setShowDropdownIconMenu(!showDropdownIconMenu);
                    setShowCompletedMenu(false);
                    setShowDotMenu(false);
                  }}
                >
                  <span style={{ fontSize: "12px" }}>▼</span>
                </button>
                {showDropdownIconMenu && (
                  <div style={menuStyle}>
                    <div>Reschedule Call</div>
                    <div>Cancel Call</div>
                  </div>
                )}
              </div>

              {/* Three Dots Dropdown */}
              <div style={dropdownStyle}>
                <button
                  style={dotButtonStyle}
                  onClick={() => {
                    setShowDotMenu(!showDotMenu);
                    setShowCompletedMenu(false);
                    setShowDropdownIconMenu(false);
                  }}
                >
                  <span style={{ fontSize: "22px" }}>⋯</span>
                </button>

                {showDotMenu && (
                  <div style={menuStyle}>
                    <div>Edit</div>
                    <div>Delete</div>
                    <hr />
                    <div>Print preview</div>
                    <div>Send Mail</div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div style={innerRowStyle}>
            <div style={rightInner60}>
              <div
                style={{
                  backgroundColor: "lightblue",
                  padding: "20px",
                  borderRadius: "10px",
                }}
              >
                <h5 style={{ marginTop: "10px" }}>
                  Call For: Chau Kitzman (Sample)
                </h5>

                <p>
                  <strong>Related To:</strong> Call Type Outbound
                </p>
                <p>
                  <strong>Outgoing Call Status:</strong> Overdue
                </p>
                <p>
                  <strong>Call Start Time:</strong> 20/03/2025 12:47 PM
                </p>
                <p>
                  <strong>Call Owner:</strong> dev.papayapalette
                </p>
                <p>
                  <strong>Subject:</strong> Follow up with Lead
                </p>
                <p>
                  <strong>Created By:</strong> dev.papayapalette (Thu, 20 Mar
                  2025 10:47 AM)
                </p>
                <p>
                  <strong>Modified By:</strong> dev.papayapalette (Thu, 20 Mar
                  2025 10:47 AM)
                </p>
              </div>

              <div
                style={{
                  marginTop: "100px",
                  background: "aqua",
                  borderRadius: "5px",
                  height: "200px",
                  padding: "10px",
                }}
              >
                <p style={{ marginLeft: "20px" }}>
                  <strong>Purpose of Outgoing Call:</strong>
                </p>
                <p style={{ marginLeft: "20px" }}>
                  <strong>Call Purpose:</strong> Prospecting
                </p>
                <div style={{ marginLeft: "20px" }}>
                  <strong>Call Agenda:</strong> <input type="text" />
                </div>
              </div>

              <div
                style={{
                  marginTop: "100px",
                  background: "aqua",
                  borderRadius: "5px",
                  height: "150px",
                  padding: "10px",
                }}
              >
                <p style={{ marginLeft: "20px" }}>
                  <strong>Notes</strong>
                </p>
                <hr />

                <div style={{ marginLeft: "20px" }}>
                  <strong>Add a Note</strong> <input type="text" />
                </div>
              </div>
            </div>

            <div style={rightInner40}>
              <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                  <a class="navbar-brand" href="#">
                    Info
                  </a>
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">
                          Timeline
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">
                          conversation
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
              <h6
                style={{
                  marginTop: "10px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FontAwesomeIcon
                  icon={faUserCircle}
                  style={{ fontSize: "20px", marginRight: "8px" }}
                />
                Chau Kitzman (Sample) Lead
              </h6>
              <button
                style={{
                  width: "100px",
                  height: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "5px",
                  fontSize: "14px",
                }}
              >
                Send Mail
              </button>
              <div>
                <p>🏢 Creative Business Systems</p>
                <p>📞 555-555-5555</p>
                <p>📲 555-555-5555</p>
                <p>chau-kitzman@noemail.invalid</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Followup;
