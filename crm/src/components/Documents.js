import React, { useState, useEffect } from "react";
import Header from "./Header";

function Documents() {
  const [isTeamDropdownOpen, setIsTeamDropdownOpen] = useState(false);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [isBreadcrumbDropdownOpen, setIsBreadcrumbDropdownOpen] =
    useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !e.target.closest(".dropdown") &&
        !e.target.closest(".options-menu") &&
        !e.target.closest(".breadcrumb-dropdown")
      ) {
        setIsTeamDropdownOpen(false);
        setIsBreadcrumbDropdownOpen(false);
        setIsOptionsOpen(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <Header />

      <div style={styles.container}>
        {/* Left Panel */}
        <div style={styles.left}>
          <div style={{ ...styles.heading, color: "#000" }}>My Folder</div>

          <div className="dropdown" style={{ position: "relative" }}>
            <button
              style={styles.dropdownButton}
              onClick={() => setIsTeamDropdownOpen(!isTeamDropdownOpen)}
            >
              Team Folder {isTeamDropdownOpen ? "▼" : "➤"}
            </button>

            {isTeamDropdownOpen && (
              <div style={styles.dropdownContent}>
                <div style={styles.crmRow}>
                  <span>Zoho CRM</span>
                  <div
                    className="options-menu"
                    style={styles.threeDot}
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsOptionsOpen(!isOptionsOpen);
                    }}
                  >
                    ⋮
                    {isOptionsOpen && (
                      <div style={styles.optionMenu}>
                        <div style={styles.optionItem}>Edit Folder</div>
                        <div style={styles.optionItem}>Delete Folder</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Panel */}
        <div style={styles.right}>
          <nav
            style={{ "--bs-breadcrumb-divider": "'>'" }}
            aria-label="breadcrumb"
          >
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Apps</a>
              </li>
              <li
                className="breadcrumb-item breadcrumb-dropdown"
                style={{ position: "relative" }}
              >
                <span
                  onClick={() =>
                    setIsBreadcrumbDropdownOpen(!isBreadcrumbDropdownOpen)
                  }
                  style={{ cursor: "pointer", color: "#007bff" }}
                >
                  ZOHO CRM ▼
                </span>

                {isBreadcrumbDropdownOpen && (
                  <ul
                    className="dropdown-menu"
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      zIndex: 1000,
                      display: "block",
                      padding: "10px",
                      margin: 0,
                      listStyle: "none",
                      backgroundColor: "#fff",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                      borderRadius: "4px",
                      minWidth: "200px",
                    }}
                  >
                    <li style={{ padding: "5px 10px", cursor: "pointer" }}>
                      Copy Permalink
                    </li>

                    <li style={{ padding: "5px 10px", cursor: "pointer" }}>
                      organize
                    </li>
                    <li style={{ padding: "5px 10px", cursor: "pointer" }}>
                      Properties
                    </li>
                    <li style={{ padding: "5px 10px", cursor: "pointer" }}>
                      organize
                    </li>
                    <li style={{ padding: "5px 10px", cursor: "pointer" }}>
                      Download
                    </li>
                    <li style={{ padding: "5px 10px", cursor: "pointer" }}>
                      Copy To
                    </li>
                    <li style={{ padding: "5px 10px", cursor: "pointer" }}>
                      More Option
                    </li>
                  </ul>
                )}
              </li>
            </ol>
          </nav>
          <hr style={{ width: "100%" }} />

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              minHeight: "300px", // or "100vh" if you want full screen height
            }}
          >
            <h6>No items available.</h6>
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    fontFamily: "Arial, sans-serif",
    gap: "10px",
    marginTop: "20px",
  },
  left: {
    width: "28%",
    backgroundColor: "#f5f5f5",
    padding: "20px",
    boxSizing: "border-box",
    borderRadius: "10px",
    marginLeft: "20px",
  },
  right: {
    width: "70%",
    backgroundColor: "#fff",
    padding: "20px",
  },
  heading: {
    backgroundColor: "lightblue",
    padding: "10px",
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  dropdownButton: {
    padding: "10px 15px",
    fontSize: "16px",
    backgroundColor: "#e0e0e0",
    border: "none",
    cursor: "pointer",
    width: "100%",
    textAlign: "left",
    color: "black",
  },
  dropdownContent: {
    position: "relative",
    backgroundColor: "#fff",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
    marginTop: "5px",
    padding: "10px",
  },
  crmRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#f9f9f9",
    cursor: "default",
  },
  threeDot: {
    cursor: "pointer",
    position: "relative",
    padding: "0 10px",
  },
  optionMenu: {
    position: "absolute",
    top: "20px",
    right: "0",
    backgroundColor: "#fff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    zIndex: 1,
  },
  optionItem: {
    padding: "8px 12px",
    cursor: "pointer",
    whiteSpace: "nowrap",
  },
};

export default Documents;
