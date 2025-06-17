import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import Header from "./Header";
import { useNavigate } from "react-router-dom";


function Allreport() {

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

      <h5 style={{ marginLeft:"320px",marginTop:"20px",color:"green" }}>All Report</h5>


     

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
            <h5 style={{ ...styles.header, color: "green" }}><b>Folders</b></h5>

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
                  Invoice  Reports
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
                  Sales Metrics  Reports
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
                  Email  Reports
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
          <table className="table table-striped table-bordered">
            <thead className="table-yellow">
              <tr>
                <th style={{ width: "40px" }}></th>
                <th style={{color:"green"}}>Report Name</th>
                <th style={{color:"green"}}>Description</th>
                <th style={{color:"green"}}>Folder</th>
                <th style={{ fontSize: "15px",color:"green"} }>Last Accessed Date</th>
                <th style={{fontSize:"15px",color:"green"}}>Created By</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Vendors vs Purchase</td>
                <td>Vendors Based on Purchase</td>
                <td>Vendors Report</td>
                <td>13/4/2024</td>
                <td>-</td>
              </tr>

              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>TOP 10 User</td>
                <td>Top 10 users based on Mails Sent...</td>
                <td>Email Report</td>
                <td>Now</td>
                <td>-</td>
              </tr>

              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>TOP 10 Templetes by Open Rate</td>
                <td>
                  Top 10 templates based on percentage of recipients who have
                  opened the email
                </td>
                <td>Email Report</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>TOP 10 Templetes by Click Rate</td>
                <td>
                  Top 10 templates based on percentage of recipients who have
                  clicked the email
                </td>
                <td>Email Report</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Today's Sales..</td>
                <td>Today's Sales</td>
                <td>Deal Report</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Today's Lead..</td>
                <td>Leads obtained today</td>
                <td>Lead Report</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Stage Vs Deal Type Report..</td>
                <td>
                  Summarizes the various stages of New and Existing Business{" "}
                </td>
                <td>Deal Report</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Send Email Status</td>
                <td>Emails sent by users to all records and Their Status </td>
                <td>Email Report</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Salesperson's Performance Report</td>
                <td>Deals gained by salesperson </td>
                <td>Deal Reports</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Sales by Lead Source</td>
                <td> Sales gained from various Lead Source</td>
                <td>Deal Reports</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Sales This Month</td>
                <td> This Month Sales</td>
                <td>Deal Reports</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Sales Orders by Status</td>
                <td> Sales Orders Based on Status</td>
                <td>Sales Order Reports</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Sales Orders by Owner</td>
                <td> Sales Orders and their Owners</td>
                <td>Sales Order Reports</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Sales Orders by Accounts</td>
                <td> Sales Orders Based on Accounts</td>
                <td>Sales Order Reports</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Sales Cycle Duration Across Owners</td>
                <td>Average time taken for Deals won by Owner Deal</td>
                <td>Sales Metrics Reports</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Sales Cycle Duration Across Lead Sources</td>
                <td>Average time taken for Deal to be Won by Lead Source</td>
                <td>Sales Metrics Reports</td>
                <td>Now</td>
                <td>-</td>
              </tr>

              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Quotes by Stage</td>
                <td>Quote Based on Stages</td>
                <td>Quote Reports</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Quotes by Accounts</td>
                <td>Quotes Based on Accounts</td>
                <td>Quote Reports</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Purchase Orders by Status</td>
                <td>Purchase Orders Based on Status</td>
                <td>Purchase Order Reports</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Products by Support Termination Date</td>
                <td>Products ending support this month</td>
                <td>Product Reports</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Products by Category</td>
                <td>Products based on category</td>
                <td>Product Reports</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Products by Cases</td>
                <td>Products and Cases</td>
                <td>Product Reports</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Popular Solutions</td>
                <td>Number of Comments for Solutions.</td>
                <td>Case and Solution Reports</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Planned Vs Realized Meetings this Month</td>
                <td>
                  Know how many planned check-ins have been realized in the
                  current month
                </td>
                <td>Meeting Reports</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Pipeline by Stage</td>
                <td>Deals by Stage</td>
                <td>Deal Reports</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Pipeline by Probability</td>
                <td>Deals by Probability</td>
                <td>Deal Reports</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Overall Sales Duration Across Lead Sources</td>
                <td>
                  Average number of days taken for the Lead to be converted to
                  Deal from various Lead sources
                </td>
                <td>Sales Metrics Reports</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Overall Sales Duration Across Deal Type</td>
                <td>
                  Average time taken for Lead to be converted to Deal of
                  different type
                </td>
                <td>Sales Metrics Reports</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Open Deals</td>
                <td>Deals Pending</td>
                <td>Deal Reports</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Number of Check-Ins by Salesperson</td>
                <td>
                  Get number of monthly check-ins for customers completed by
                  each Salesperson
                </td>
                <td>Meeting Reports</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Number of Check-Ins by Locality</td>
                <td>
                  Get total number of monthly check-ins for customers by
                  locality
                </td>
                <td>Meeting Reports</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Lost Deals</td>
                <td>Deals Lost</td>
                <td>Deal Reports</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Leads by Status</td>
                <td>Leads and their statuses</td>
                <td>Lead Reports</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Leads by Source</td>
                <td>Leads from various sources</td>
                <td>Lead Reports</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Leads by Ownership</td>
                <td>Leads by Owner</td>
                <td>Lead Reports</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Leads by Industry</td>
                <td>Leads by industry</td>
                <td>Lead Reports</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Lead Conversion Count across Owners</td>
                <td>
                  Total number of Lead converted for the past 6 months, by all
                  owners
                </td>
                <td>Sales Metrics Reports</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Lead Conversion Across Sources</td>
                <td>
                  Average time taken for Lead to be converted in the past 6
                  months, by source
                </td>
                <td>Sales Metrics Reports</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Lead Conversion Across Owners</td>
                <td>
                  Average Lead conversion time for the past 6 months, by owner
                </td>
                <td>Sales Metrics Reports</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Lead Conversion Across Industries</td>
                <td>
                  Average time taken for Lead to be converted for the past six
                  months, by industry
                </td>
                <td>Sales Metrics Reports</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Key Accounts</td>
                <td>Accounts with more Deals</td>
                <td>Account and Contact Reports</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Invoices by Status</td>
                <td>Invoice Based on Status</td>
                <td>Invoice Reports</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Invoices by Accounts</td>
                <td>Invoices Based on Accounts</td>
                <td>Invoice Reports</td>
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
                <td>Email Reports</td>
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
                <td>Email Reports</td>
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
                <td>Email Reports</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Deals by Type</td>
                <td>Deals by Type</td>
                <td>Deal Reports</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Deals Closing this Month</td>
                <td>Deals closing this month</td>
                <td>Deal Reports</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Converted Leads</td>
                <td>Leads converted to Account / Deal / Contact.</td>
                <td>Lead Reports</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Contacts vs Purchases</td>
                <td>Contacts Based on Purchases</td>
                <td>Purchase Order Reports</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Contact Mailing List</td>
                <td>Contact Address details</td>
                <td>Account and Contact Reports</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Check-Ins for Leads</td>
                <td>Get check-in details for each Lead</td>
                <td>Meeting Reports</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Check-Ins for Accounts</td>
                <td>Get check-in details for each Account</td>
                <td>Meeting Reports</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Check-Ins by Locality</td>
                <td>Get check-in details categorized by locality</td>
                <td>Meeting Reports</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Cases by Status</td>
                <td>Cases based upon their status.</td>
                <td>Case and Solution Reports</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Cases by Priority</td>
                <td>Cases based on Priorities</td>
                <td>Case and Solution Reports</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Cases by Origin</td>
                <td>Cases based upon their Origin.</td>
                <td>Case and Solution Reports</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Cases by Comments</td>
                <td>Cases with Comments</td>
                <td>Case and Solution Reports</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Campaigns Revenue Report</td>
                <td>Revenue generated from this Campaign.</td>
                <td>Campaign Reports</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Campaign Leads</td>
                <td>Leads marketed to through this Campaign.</td>
                <td>Campaign Reports</td>
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
                <td>Email Reports</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Amount by Vendors</td>
                <td>Vendors and Purchases</td>
                <td>Vendor Reports</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Accounts by Industry</td>
                <td>Accounts by Industry</td>
                <td>Account and Contact Reports</td>
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

export default Allreport;
