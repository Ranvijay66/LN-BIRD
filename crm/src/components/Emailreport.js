import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import Header from "./Header";
import { useNavigate } from "react-router-dom";

function Emailreport() {
  const navigate = useNavigate();
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

      <h5 style={{ marginLeft: "350px", marginTop: "20px", color: "green" }}>
        Email Reports
      </h5>

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
            // overflowY: "auto",
            // backgroundColor: "dark",
          }}
        >
          {/* First Dropdown */}

          <div style={styles.container}>
            <h5 style={{ ...styles.header, color: "green" }}>
              <b>Folders</b>
            </h5>

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
              {isVisible("Allreport") && (
                <li
                  style={
                    activeFolder === "Allreport"
                      ? styles.activeItem
                      : styles.item
                  }
                  onClick={() => navigate("/Allreport")}
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
                  onClick={() => navigate("/Myreport")}
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
                  onClick={() => navigate("/Favorites")}
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
                  onClick={() => navigate("/Recent")}
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
                  onClick={() => navigate("/Recentlydelete")}
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
                  onClick={() => navigate("/Accountandcontact")}
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
                  onClick={() => navigate("/Dealreports")}
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
                  onClick={() => navigate("/Readreports")}
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
                  onClick={() => navigate("/Campaignreports")}
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
                  onClick={() => navigate("/Caseandsolution")}
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
                  onClick={() => navigate("/Productreport")}
                >
                  Product Reports
                </li>
              )}

              {isVisible("Vendor Reports") && (
                <li
                  style={
                    activeFolder === "Vendor Reports"
                      ? styles.activeItem
                      : styles.item
                  }
                  onClick={() => navigate("/Vendor")}
                >
                  Vendor Reports
                </li>
              )}

              {isVisible("Quote Reports") && (
                <li
                  style={
                    activeFolder === "Quote Reports"
                      ? styles.activeItem
                      : styles.item
                  }
                  onClick={() => navigate("/Quotereport")}
                >
                  Quote Reports
                </li>
              )}

              {isVisible("Sales Order  Reports") && (
                <li
                  style={
                    activeFolder === "Sales Order Reports"
                      ? styles.activeItem
                      : styles.item
                  }
                  onClick={() => navigate("/Salesorderreport")}
                >
                  Sales Order Reports
                </li>
              )}

              {isVisible("Purchase Order  Reports") && (
                <li
                  style={
                    activeFolder === "Purchase Order Reports"
                      ? styles.activeItem
                      : styles.item
                  }
                  onClick={() => navigate("/Purchaseorder")}
                >
                  Purchase Order Reports
                </li>
              )}

              {isVisible("Invoice  Reports") && (
                <li
                  style={
                    activeFolder === "Invoice Reports"
                      ? styles.activeItem
                      : styles.item
                  }
                  onClick={() => navigate("/Invoicereport")}
                >
                  Invoice Reports
                </li>
              )}

              {isVisible("Sales Metrics  Reports") && (
                <li
                  style={
                    activeFolder === "Sales Metrics Reports"
                      ? styles.activeItem
                      : styles.item
                  }
                  onClick={() => navigate("/Salesmetrics")}
                >
                  Sales Metrics Reports
                </li>
              )}

              {isVisible("Email Reports") && (
                <li
                  style={
                    activeFolder === "Email Reports"
                      ? styles.activeItem
                      : styles.item
                  }
                  onClick={() => navigate("/Emailreport")}
                >
                  Email Reports
                </li>
              )}

               {isVisible("Meeting Reports") && (
                <li
                  style={
                    activeFolder === "Meeting Reports"
                      ? styles.activeItem
                      : styles.item
                  }
                  onClick={() => navigate("/Meetingreport")}
                >
                  Meeting  Reports
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Right Section with scrollable table */}

        <div
          style={{
            paddingLeft: "10px",
            maxHeight: "500px",
            overflowY: "auto",
          }}
        >
          <table
            className="table table-striped table-bordered"
            style={{ marginRight: "200px" }}
          >
            <thead className="table-yellow">
              <tr>
                <th style={{ width: "40px" }}></th>
                <th style={{ color: "green" }}>Report Name</th>
                <th style={{ color: "green" }}>Description</th>

                <th style={{ fontSize: "15px", color: "green" }}>
                  Last Accessed Date
                </th>
                <th style={{ fontSize: "15px", color: "green" }}>Created By</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Top 10 Users</td>
                <td>Top 10 users based on Mails Sent Rate</td>
                <td>16/05/2025</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Top 10 Templates by Open Rate</td>
                <td>
                  Top 10 templates based on percentage of recipients who have
                  opened the email
                </td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Top 10 Templates by Click Rate</td>
                <td>
                  Top 10 templates based on percentage of recipients who have
                  clicked the email
                </td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Sent Email Status</td>
                <td>Emails sent by users to all records and their status</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Email and Call Analytics Report</td>
                <td>
                  No. of mails sent and replied, calls attended and missed by
                  sales representatives
                </td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Email and Activities Analytics Report</td>
                <td>
                  No. of emails sent and replied, calls dialled and received,
                  events, checkins, and tasks listed by date and sales
                  representatives
                </td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Email Analytics</td>
                <td>
                  Summary of the email status (sent, bounced, opened, and
                  clicked) based on date, template, module and user
                </td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Bounce Report</td>
                <td>
                  Summary of bounced emails, reason for the bounce, date the
                  bounce occurred, the record related to the bounce etc.
                </td>
                <td>-</td>
                <td>-</td>
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
    width: "300px",
    backgroundColor: "#f5f5f5",
    padding: "10px",
    borderRight: "1px solid #ccc",
    fontFamily: "Arial, sans-serif",
    overflowY: "auto",
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

export default Emailreport;
