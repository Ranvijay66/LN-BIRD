import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import Header from "./Header";

function Alldeals() {
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpanded3, setIsExpanded3] = useState(false);
  const [isExpanded4, setIsExpanded4] = useState(false);
  const [isExpanded5, setIsExpanded5] = useState(false);
  const [isExpanded6, setIsExpanded6] = useState(false);
  const [isExpanded7, setIsExpanded7] = useState(false);
  const [isExpanded8, setIsExpanded8] = useState(false);
  const [isExpanded9, setIsExpanded9] = useState(false);

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
              All Deals
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
                Create Deal
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

      <h6 style={{ marginLeft: "20px", marginTop: "10px", marginBottom: "0" }}>
        Total records 10
      </h6>
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
            backgroundColor: "lightgrey",
          }}
        >
          {/* First Dropdown */}

          <h6 style={{ marginLeft: "10px", marginTop: "10px" }}>
            Filter Deals By{" "}
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

          <div style={{ marginLeft: "10px" }}>
            <button
              className="btn btn-primary d-flex align-items-center"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseCheckbox1"
              aria-expanded="false"
              aria-controls="collapseCheckbox1"
            >
              <FontAwesomeIcon icon={faChevronDown} className="me-2" />
              System Defined Filters
            </button>

            <div className="collapse mt-2" id="collapseCheckbox1">
              <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="option1-1"
                    />
                    <label className="form-check-label" htmlFor="option1-1">
                      Touched Records
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="option1-2"
                    />
                    <label className="form-check-label" htmlFor="option1-2">
                      Untouched Records
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="option1-3"
                    />
                    <label className="form-check-label" htmlFor="option1-3">
                      Record Action
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="option1-3"
                    />
                    <label className="form-check-label" htmlFor="option1-3">
                      Related Records Action
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="option1-3"
                    />
                    <label className="form-check-label" htmlFor="option1-3">
                      Latest Email Status
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="option1-3"
                    />
                    <label className="form-check-label" htmlFor="option1-3">
                      Activities
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="option1-3"
                    />
                    <label className="form-check-label" htmlFor="option1-3">
                      Campaigns
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Second Dropdown */}
          <div style={{ marginLeft: "10px" }}>
            <button
              className="btn btn-primary d-flex align-items-center"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseCheckbox2"
              aria-expanded="false"
              aria-controls="collapseCheckbox1"
            >
              <FontAwesomeIcon icon={faChevronDown} className="me-2" />
              Filter By Fields
            </button>

            <div className="collapse mt-2" id="collapseCheckbox2">
              <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="option1-1"
                    />
                    <label className="form-check-label" htmlFor="option1-1">
                      Account Name
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="option1-2"
                    />
                    <label className="form-check-label" htmlFor="option1-2">
                      Amount
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="option1-3"
                    />
                    <label className="form-check-label" htmlFor="option1-3">
                      Campaign Source
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="option1-3"
                    />
                    <label className="form-check-label" htmlFor="option1-3">
                      Closing Date
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="option1-3"
                    />
                    <label className="form-check-label" htmlFor="option1-3">
                      Contact Name
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="option1-3"
                    />
                    <label className="form-check-label" htmlFor="option1-3">
                      Created By
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="option1-3"
                    />
                    <label className="form-check-label" htmlFor="option1-3">
                      Created Time
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="option1-3"
                    />
                    <label className="form-check-label" htmlFor="option1-3">
                      Deal Name
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="option1-3"
                    />
                    <label className="form-check-label" htmlFor="option1-3">
                      Deal owner
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="option1-3"
                    />
                    <label className="form-check-label" htmlFor="option1-3">
                      Expected Revenue
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="option1-3"
                    />
                    <label className="form-check-label" htmlFor="option1-3">
                      Last Activities Time
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="option1-3"
                    />
                    <label className="form-check-label" htmlFor="option1-3">
                      Lead Convertion Time
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="option1-3"
                    />
                    <label className="form-check-label" htmlFor="option1-3">
                      Lead source
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="option1-3"
                    />
                    <label className="form-check-label" htmlFor="option1-3">
                      Modified By
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="option1-3"
                    />
                    <label className="form-check-label" htmlFor="option1-3">
                      Modified Time
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="option1-3"
                    />
                    <label className="form-check-label" htmlFor="option1-3">
                      Next Step
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="option1-3"
                    />
                    <label className="form-check-label" htmlFor="option1-3">
                      Overall Sales Duration
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="option1-3"
                    />
                    <label className="form-check-label" htmlFor="option1-3">
                      Probability(%)
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="option1-3"
                    />
                    <label className="form-check-label" htmlFor="option1-3">
                      Reason For Loss
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="option1-3"
                    />
                    <label className="form-check-label" htmlFor="option1-3">
                      Sales Cycle Duration
                    </label>
                  </div>{" "}
                </li>

                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="option1-3"
                    />
                    <label className="form-check-label" htmlFor="option1-3">
                      stage
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="option1-3"
                    />
                    <label className="form-check-label" htmlFor="option1-3">
                      Type
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="option1-3"
                    />
                    <label className="form-check-label" htmlFor="option1-3">
                      Modified Time
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="option1-3"
                    />
                    <label className="form-check-label" htmlFor="option1-3">
                      No of Employees
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="option1-3"
                    />
                    <label className="form-check-label" htmlFor="option1-3">
                      Phone{" "}
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="option1-3"
                    />
                    <label className="form-check-label" htmlFor="option1-3">
                      Rating
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="option1-3"
                    />
                    <label className="form-check-label" htmlFor="option1-3">
                      Solution
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="option1-3"
                    />
                    <label className="form-check-label" htmlFor="option1-3">
                      Secondary Email
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="option1-3"
                    />
                    <label className="form-check-label" htmlFor="option1-3">
                      Skype ID
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="option1-3"
                    />
                    <label className="form-check-label" htmlFor="option1-3">
                      State
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="option1-3"
                    />
                    <label className="form-check-label" htmlFor="option1-3">
                      Title
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="option1-3"
                    />
                    <label className="form-check-label" htmlFor="option1-3">
                      Unsubscribe Mode
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="option1-3"
                    />
                    <label className="form-check-label" htmlFor="option1-3">
                      Unsubscribe Time
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="option1-3"
                    />
                    <label className="form-check-label" htmlFor="option1-3">
                      Website
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="option1-3"
                    />
                    <label className="form-check-label" htmlFor="option1-3">
                      Zipcode
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div style={{ marginLeft: "10px" }}>
            <button
              className="btn btn-primary d-flex align-items-center"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseCheckbox3"
              aria-expanded="false"
              aria-controls="collapseCheckbox1"
            >
              <FontAwesomeIcon icon={faChevronDown} className="me-2" />
              Filter By Related Modules
            </button>

            <div className="collapse mt-2" id="collapseCheckbox3">
              <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="option1-1"
                    />
                    <label className="form-check-label" htmlFor="option1-1">
                      Calls
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="option1-2"
                    />
                    <label className="form-check-label" htmlFor="option1-2">
                      Invitees (Invited Meetings)
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="option1-3"
                    />
                    <label className="form-check-label" htmlFor="option1-3">
                      Meetings
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="option1-3"
                    />
                    <label className="form-check-label" htmlFor="option1-3">
                      Notes
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="option1-3"
                    />
                    <label className="form-check-label" htmlFor="option1-3">
                      Tasks
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Section with scrollable table */}

        <div style={{ width: "1000px", overflowX: "auto" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              marginLeft: "10px",
            }}
          >
            <div
              onClick={() => setIsExpanded1(!isExpanded1)}
              style={{
                width: isExpanded1 ? "400px" : "100px",
                height: "500px",
                backgroundColor: "lightblue",
                cursor: "pointer",
                transition: "width 0.3s ease",
                overflow: "hidden",
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                whiteSpace: "nowrap",
              }}
            >
              <strong
                style={
                  isExpanded1
                    ? {
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }
                    : {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        lineHeight: "1.0",
                        height: "500px",
                        marginTop: "10px",
                        letterSpacing: "1px",
                        backgroundColor: "lightblue",
                        whiteSpace: "normal",
                        padding: "10px",
                        textAlign: "center",
                      }
                }
              >
                {isExpanded1 ? (
                  "QUALIFICATION  1 .10% $250,000.00"
                ) : (
                  <>
                    {"QUALIFICATION".split("").map((char, idx) => (
                      <span key={`q-${idx}`}>{char}</span>
                    ))}
                    <span
                      style={{ display: "inline-block", width: "10px" }}
                    ></span>
                    <span
                      style={{
                        display: "inline-block",
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        backgroundColor: "blue",
                        color: "white",
                        textAlign: "center",
                        lineHeight: "20px",
                        marginBottom: "5px",
                      }}
                    >
                      1
                    </span>
                    {".10% $250,000.00".split("").map((char, idx) => (
                      <span key={`rest-${idx}`}>{char}</span>
                    ))}
                  </>
                )}
              </strong>

              {isExpanded1 && (
                <div
                  style={{
                    marginLeft: "0px",
                    whiteSpace: "normal",
                    flex: 1,
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        width: "380px",
                        height: "100px",
                        backgroundColor: "lightgreen",
                        flexDirection: "row",
                        alignItems: "center",
                        paddingLeft: "10px", // Optional: adds space on the left
                        gap: "10px", // Optional: space between checkbox and text
                      }}
                    >
                      <label
                        htmlFor="qualification-checkbox"
                        style={{ margin: 0 }}
                      >
                        Qualification
                        <span
                          style={{
                            display: "inline-block",
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                            backgroundColor: "blue",
                            color: "white",
                            textAlign: "center",
                            lineHeight: "20px",
                            marginLeft: "10px",
                          }}
                        >
                          1
                        </span>
                        10% $250,000.00
                      </label>

                      <input type="checkbox" id="qualification-checkbox" />
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      width: "380px",
                      height: "200px",
                      backgroundColor: "lightgreen",
                      flexDirection: "row",

                      paddingLeft: "10px", // Optional: adds space on the left
                      marginTop: "20px",
                    }}
                  >
                    {" "}
                    Benton <br />
                    Qualification <br />
                    Benton(sample)
                    <br />
                    dev.papayapallete
                    <br />
                    John Butt(sample)
                    <br />
                    $250,000.00
                    <br />
                    21/3/2025
                  </div>
                </div>
              )}
            </div>

            <div
              onClick={() => setIsExpanded2(!isExpanded2)}
              style={{
                width: isExpanded2 ? "400px" : "100px",
                height: "500px",
                backgroundColor: "lightblue",
                cursor: "pointer",
                transition: "width 0.3s ease",
                overflow: "hidden",
                padding: "10px",
                marginLeft: "10px",

                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                whiteSpace: "nowrap",
              }}
            >
              <strong
                style={
                  isExpanded2
                    ? {
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }
                    : {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        lineHeight: "1.2",
                        height: "100%",
                      }
                }
              >
                {isExpanded2
                  ? "Need Analysis 2 .20% $250,000.00"
                  : "NEED ANALYSIS"
                      .split("")
                      .map((char, idx) => <span key={idx}>{char}</span>)}
              </strong>

              {isExpanded2 && (
                <div
                  style={{
                    marginLeft: "0px",
                    whiteSpace: "normal",
                    flex: 1,
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        width: "380px",
                        height: "100px",
                        backgroundColor: "red",
                        flexDirection: "row",
                        alignItems: "center",
                        paddingLeft: "20px", // Optional: adds space on the left
                        gap: "10px", // Optional: space between checkbox and text
                      }}
                    >
                      <label
                        htmlFor="qualification-checkbox"
                        style={{ margin: 0 }}
                      >
                        Need Analysis
                        <span
                          style={{
                            display: "inline-block",
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                            backgroundColor: "blue",
                            color: "white",
                            textAlign: "center",
                            lineHeight: "20px",
                            marginLeft: "10px",
                          }}
                        >
                          2
                        </span>
                        10% $250,000.00
                      </label>

                      <input type="checkbox" id="qualification-checkbox" />
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      width: "380px",
                      height: "200px",
                      backgroundColor: "lightgreen",
                      flexDirection: "row",

                      paddingLeft: "10px", // Optional: adds space on the left
                      marginTop: "20px",
                    }}
                  >
                    {" "}
                    Benton <br />
                    Qualification <br />
                    Benton(sample)
                    <br />
                    dev.papayapallete
                    <br />
                    John Butt(sample)
                    <br />
                    $250,000.00
                    <br />
                    21/3/2025
                  </div>
                </div>
              )}
            </div>
            <div
              onClick={() => setIsExpanded3(!isExpanded3)}
              style={{
                width: isExpanded3 ? "400px" : "100px",
                height: "500px",
                backgroundColor: "lightblue",
                cursor: "pointer",
                transition: "width 0.3s ease",
                overflow: "hidden",
                padding: "10px",
                marginLeft: "10px",

                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                whiteSpace: "nowrap",
              }}
            >
              <strong
                style={
                  isExpanded3
                    ? {
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }
                    : {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        lineHeight: "1.2",
                        height: "100%",
                      }
                }
              >
                {isExpanded3
                  ? "Value Proposition 1 .40% $70,000.00"
                  : "VALUE PROPOSITION "
                      .split("")
                      .map((char, idx) => <span key={idx}>{char}</span>)}
              </strong>

              {isExpanded3 && (
                <div
                  style={{
                    marginLeft: "0px",
                    whiteSpace: "normal",
                    flex: 1,
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        width: "400px",
                        height: "100px",
                        backgroundColor: "red",
                        flexDirection: "row",
                        alignItems: "center",
                        paddingLeft: "20px", // Optional: adds space on the left
                        gap: "10px", // Optional: space between checkbox and text
                      }}
                    >
                      <label
                        htmlFor="qualification-checkbox"
                        style={{ margin: 0 }}
                      >
                        Value Proposition
                        <span
                          style={{
                            display: "inline-block",
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                            backgroundColor: "blue",
                            color: "white",
                            textAlign: "center",
                            lineHeight: "20px",
                            marginLeft: "10px",
                          }}
                        >
                          1
                        </span>
                        40% $70,000.00
                      </label>

                      <input type="checkbox" id="qualification-checkbox" />
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      width: "380px",
                      height: "200px",
                      backgroundColor: "lightgreen",
                      flexDirection: "row",

                      paddingLeft: "10px", // Optional: adds space on the left
                      marginTop: "20px",
                    }}
                  >
                    {" "}
                    Chemel <br />
                    Value proposition
                    <br />
                    Chemel(sample)
                    <br />
                    dev.papayapallete
                    <br />
                    James Venere(sample)
                    <br />
                    $70,000.00
                    <br />
                    21/3/2025
                  </div>
                </div>
              )}
            </div>

            <div
              onClick={() => setIsExpanded4(!isExpanded4)}
              style={{
                width: isExpanded4 ? "400px" : "100px",
                height: "500px",
                backgroundColor: "lightblue",
                cursor: "pointer",
                transition: "width 0.3s ease",
                overflow: "hidden",
                padding: "10px",
                marginLeft: "10px",

                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                whiteSpace: "nowrap",
              }}
            >
              <strong
                style={
                  isExpanded4
                    ? {
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }
                    : {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        lineHeight: "1.2",
                        height: "100%",
                      }
                }
              >
                {isExpanded4
                  ? "IDENTIFY DECISION MAKERS 2 .20% $250,000.00"
                  : "IDENTIFY DECISION MAKERS "
                      .split("")
                      .map((char, idx) => <span key={idx}>{char}</span>)}
              </strong>

              {isExpanded4 && (
                <div
                  style={{
                    marginLeft: "0px",
                    whiteSpace: "normal",
                    flex: 1,
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        width: "380px",
                        height: "100px",
                        backgroundColor: "red",
                        flexDirection: "row",
                        alignItems: "center",
                        paddingLeft: "20px", // Optional: adds space on the left
                        gap: "10px", // Optional: space between checkbox and text
                      }}
                    >
                      <label
                        htmlFor="qualification-checkbox"
                        style={{ margin: 0 }}
                      >
                        IDENTIFY DECISION MAKERS
                        <span
                          style={{
                            display: "inline-block",
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                            backgroundColor: "blue",
                            color: "white",
                            textAlign: "center",
                            lineHeight: "20px",
                            marginLeft: "10px",
                          }}
                        >
                          2
                        </span>
                        60% $105,000.00
                      </label>

                      <input type="checkbox" id="qualification-checkbox" />
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      width: "400px",
                      height: "200px",
                      backgroundColor: "lightgreen",
                      flexDirection: "row",

                      paddingLeft: "10px", // Optional: adds space on the left
                      marginTop: "20px",
                    }}
                  >
                    {" "}
                    IDENTIFY DECISION MAKERS
                    <br />
                    KING(sample)
                    <br />
                    dev.papayapallete
                    <br />
                    KRIS MARRIER(sample)
                    <br />
                    $60,000.00
                    <br />
                    21/3/2025
                  </div>

                  <div
                    style={{
                      display: "flex",
                      width: "380px",
                      height: "200px",
                      backgroundColor: "lightgreen",
                      flexDirection: "row",

                      paddingLeft: "10px", // Optional: adds space on the left
                      marginTop: "20px",
                    }}
                  >
                    {" "}
                    FELTZ PRINTING SERVICE <br />
                    IDENTIFY DECISION MAKERS <br />
                    FELTZ PRINTING SERVICE(sample)
                    <br />
                    dev.papayapallete
                    <br />
                    CAPLA PAPROCKI(sample)
                    <br />
                    $45,000.00
                    <br />
                    21/3/2025
                  </div>
                </div>
              )}
            </div>

            <div
              onClick={() => setIsExpanded5(!isExpanded5)}
              style={{
                width: isExpanded5 ? "400px" : "100px",
                height: "500px",
                backgroundColor: "lightblue",
                cursor: "pointer",
                transition: "width 0.3s ease",
                overflow: "hidden",
                padding: "10px",
                marginLeft: "10px",

                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                whiteSpace: "nowrap",
              }}
            >
              <strong
                style={
                  isExpanded5
                    ? {
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }
                    : {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        lineHeight: "1.2",
                        height: "100%",
                      }
                }
              >
                {isExpanded5
                  ? "PROPOSAL PRICE QUOTE 1 .75% $25,000.00"
                  : "PROPOSAL /PRICE QUOTE "
                      .split("")
                      .map((char, idx) => <span key={idx}>{char}</span>)}
              </strong>

              {isExpanded5 && (
                <div
                  style={{
                    marginLeft: "0px",
                    whiteSpace: "normal",
                    flex: 1,
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        width: "380px",
                        height: "100px",
                        backgroundColor: "red",
                        flexDirection: "row",
                        alignItems: "center",
                        paddingLeft: "20px", // Optional: adds space on the left
                        gap: "10px", // Optional: space between checkbox and text
                      }}
                    >
                      <label
                        htmlFor="qualification-checkbox"
                        style={{ margin: 0 }}
                      >
                        PROPOSAL/PRICE QUOTE
                        <span
                          style={{
                            display: "inline-block",
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                            backgroundColor: "blue",
                            color: "white",
                            textAlign: "center",
                            lineHeight: "20px",
                            marginLeft: "10px",
                          }}
                        >
                          1
                        </span>
                        75% $25,000.00
                      </label>

                      <input type="checkbox" id="qualification-checkbox" />
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      width: "380px",
                      height: "200px",
                      backgroundColor: "lightgreen",
                      flexDirection: "row",

                      paddingLeft: "10px", // Optional: adds space on the left
                      marginTop: "20px",
                    }}
                  >
                    {" "}
                    PRINTING DIMENSIONS <br />
                    PROPOSAL/PRICE QUOTE
                    <br />
                    PRINTING DIMENTIONS(sample)
                    <br />
                    dev.papayapallete
                    <br />
                    DONETTE FOLLER(sample)
                    <br />
                    $25,000.00
                    <br />
                    21/3/2025
                  </div>
                </div>
              )}
            </div>

            <div
              onClick={() => setIsExpanded6(!isExpanded6)}
              style={{
                width: isExpanded6 ? "400px" : "100px",
                height: "500px",
                backgroundColor: "lightblue",
                cursor: "pointer",
                transition: "width 0.3s ease",
                overflow: "hidden",
                padding: "10px",
                marginLeft: "10px",

                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                whiteSpace: "nowrap",
              }}
            >
              <strong
                style={
                  isExpanded6
                    ? {
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }
                    : {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        lineHeight: "1.2",
                        height: "100%",
                      }
                }
              >
                {isExpanded6
                  ? "NEGOTIATION/REVIEW 2 .20% $250,000.00"
                  : "NEGOTIATION/ REVIEW "
                      .split("")
                      .map((char, idx) => <span key={idx}>{char}</span>)}
              </strong>

              {isExpanded6 && (
                <div
                  style={{
                    marginLeft: "0px",
                    whiteSpace: "normal",
                    flex: 1,
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        width: "380px",
                        height: "100px",
                        backgroundColor: "red",
                        flexDirection: "row",
                        alignItems: "center",
                        paddingLeft: "20px", // Optional: adds space on the left
                        gap: "10px", // Optional: space between checkbox and text
                      }}
                    >
                      <label
                        htmlFor="qualification-checkbox"
                        style={{ margin: 0 }}
                      >
                        NEGOTIATION/REVIEW
                        <span
                          style={{
                            display: "inline-block",
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                            backgroundColor: "blue",
                            color: "white",
                            textAlign: "center",
                            lineHeight: "20px",
                            marginLeft: "10px",
                          }}
                        >
                          1
                        </span>
                        90% $70,000.00
                      </label>

                      <input type="checkbox" id="qualification-checkbox" />
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      width: "380px",
                      height: "200px",
                      backgroundColor: "lightgreen",
                      flexDirection: "row",

                      paddingLeft: "10px", // Optional: adds space on the left
                      marginTop: "20px",
                    }}
                  >
                    {" "}
                    CHAPMAN <br />
                    NEGOTIATION/REVIEW <br />
                    CHAPMAN(sample)
                    <br />
                    dev.papayapallete
                    <br />
                    SIMON MORASCA(sample)
                    <br />
                    $70,000.00
                    <br />
                    21/3/2025
                  </div>
                </div>
              )}
            </div>

            <div
              onClick={() => setIsExpanded7(!isExpanded7)}
              style={{
                width: isExpanded7 ? "400px" : "100px",
                height: "500px",
                backgroundColor: "lightblue",
                cursor: "pointer",
                transition: "width 0.3s ease",
                overflow: "hidden",
                padding: "10px",
                marginLeft: "10px",

                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                whiteSpace: "nowrap",
              }}
            >
              <strong
                style={
                  isExpanded7
                    ? {
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }
                    : {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        lineHeight: "1.2",
                        height: "100%",
                      }
                }
              >
                {isExpanded7
                  ? "CLOSED/WON 2 .20% $250,000.00"
                  : "CLOSED/WON "
                      .split("")
                      .map((char, idx) => <span key={idx}>{char}</span>)}
              </strong>

              {isExpanded7 && (
                <div
                  style={{
                    marginLeft: "0px",
                    whiteSpace: "normal",
                    flex: 1,
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        width: "380px",
                        height: "100px",
                        backgroundColor: "red",
                        flexDirection: "row",
                        alignItems: "center",
                        paddingLeft: "20px", // Optional: adds space on the left
                        gap: "10px", // Optional: space between checkbox and text
                      }}
                    >
                      <label
                        htmlFor="qualification-checkbox"
                        style={{ margin: 0 }}
                      >
                        CLOSED WON
                        <span
                          style={{
                            display: "inline-block",
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                            backgroundColor: "blue",
                            color: "white",
                            textAlign: "center",
                            lineHeight: "20px",
                            marginLeft: "10px",
                          }}
                        >
                          1
                        </span>
                        100% $35,000.00
                      </label>

                      <input type="checkbox" id="qualification-checkbox" />
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      width: "380px",
                      height: "200px",
                      backgroundColor: "lightgreen",
                      flexDirection: "row",

                      paddingLeft: "10px", // Optional: adds space on the left
                      marginTop: "20px",
                    }}
                  >
                    {" "}
                    MORLONG ASSOCIATES <br />
                    CLOSED WON <br />
                    MORLONG ASSOCIATES(sample)
                    <br />
                    dev.papayapallete
                    <br />
                    MITSUE TOLLNER(sample)
                    <br />
                    $35,000.00
                    <br />
                    23/3/2025
                  </div>
                </div>
              )}
            </div>

            <div
              onClick={() => setIsExpanded8(!isExpanded8)}
              style={{
                width: isExpanded8 ? "400px" : "100px",
                height: "500px",
                backgroundColor: "lightblue",
                cursor: "pointer",
                transition: "width 0.3s ease",
                overflow: "hidden",
                padding: "10px",
                marginLeft: "10px",

                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                whiteSpace: "nowrap",
              }}
            >
              <strong
                style={
                  isExpanded8
                    ? {
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }
                    : {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        lineHeight: "1.2",
                        height: "100%",
                      }
                }
              >
                {isExpanded8
                  ? "CLOSED/LOST 1 .0% $45,000.00"
                  : "CLOSED/LOST "
                      .split("")
                      .map((char, idx) => <span key={idx}>{char}</span>)}
              </strong>

              {isExpanded8 && (
                <div
                  style={{
                    marginLeft: "0px",
                    whiteSpace: "normal",
                    flex: 1,
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        width: "380px",
                        height: "100px",
                        backgroundColor: "red",
                        flexDirection: "row",
                        alignItems: "center",
                        paddingLeft: "20px", // Optional: adds space on the left
                        gap: "10px", // Optional: space between checkbox and text
                      }}
                    >
                      <label
                        htmlFor="qualification-checkbox"
                        style={{ margin: 0 }}
                      >
                        CLOSED LOST
                        <span
                          style={{
                            display: "inline-block",
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                            backgroundColor: "blue",
                            color: "white",
                            textAlign: "center",
                            lineHeight: "20px",
                            marginLeft: "10px",
                          }}
                        >
                          1
                        </span>
                        0% $45,000.00
                      </label>

                      <input type="checkbox" id="qualification-checkbox" />
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      width: "380px",
                      height: "200px",
                      backgroundColor: "lightgreen",
                      flexDirection: "row",

                      paddingLeft: "10px", // Optional: adds space on the left
                      marginTop: "20px",
                    }}
                  >
                    {" "}
                    COMMERCIAL PRESS <br />
                    CLOSED LOST <br />
                    COMMERCIAL PRESS(sample)
                    <br />
                    dev.papayapallete
                    <br />
                    LEOTA DILLIARD(sample)
                    <br />
                    $45,000.00
                    <br />
                    22/3/2025
                  </div>
                </div>
              )}
            </div>

            <div
              onClick={() => setIsExpanded9(!isExpanded9)}
              style={{
                width: isExpanded9 ? "400px" : "100px",
                height: "500px",
                backgroundColor: "lightblue",
                cursor: "pointer",
                transition: "width 0.3s ease",
                overflow: "hidden",
                padding: "10px",
                marginLeft: "10px",

                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                whiteSpace: "nowrap",
              }}
            >
              <strong
                style={
                  isExpanded9
                    ? {
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }
                    : {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        lineHeight: "1.2",
                        height: "100%",
                      }
                }
              >
                {isExpanded9
                  ? "CLOSED LOST TO COMPETITION .0% $,000.00"
                  : "CLOSED LOST TO COMPETITION "
                      .split("")
                      .map((char, idx) => <span key={idx}>{char}</span>)}
              </strong>

              {isExpanded9 && (
                <div
                  style={{
                    marginLeft: "0px",
                    whiteSpace: "normal",
                    flex: 1,
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        width: "380px",
                        height: "100px",
                        backgroundColor: "red",
                        flexDirection: "row",
                        alignItems: "center",
                        paddingLeft: "20px", // Optional: adds space on the left
                        gap: "10px", // Optional: space between checkbox and text
                      }}
                    >
                      <label
                        htmlFor="qualification-checkbox"
                        style={{ margin: 0 }}
                      >
                        CLOSED LOST TO COMPETITION
                        <span
                          style={{
                            display: "inline-block",
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                            backgroundColor: "blue",
                            color: "white",
                            textAlign: "center",
                            lineHeight: "20px",
                            marginLeft: "10px",
                          }}
                        >
                          0
                        </span>
                        0% $,000.00
                      </label>

                      <input type="checkbox" id="qualification-checkbox" />
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      width: "380px",
                      height: "200px",
                      backgroundColor: "lightgreen",
                      flexDirection: "row",

                      paddingLeft: "10px", // Optional: adds space on the left
                      marginTop: "20px",
                    }}
                  >
                    {" "}
                    NO DEALS FOUND <br />
                    21/3/2025
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alldeals;
