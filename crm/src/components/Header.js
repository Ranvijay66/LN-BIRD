import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useNavigate } from "react-router-dom";
import {
  faMagnifyingGlass,
  faBell,
  faCalendar,
  faHouse,
  faGear,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import { Toolbar, Tooltip } from "@mui/material";
import Form1 from "./Form";


function Header() {
  const navigate = useNavigate();
  const navItems = [
    "Home",
    "Lead",
    "Contact",
    "Account",
    "Deals",
    "Task",
    "Meetings",
    "Services",
    "Projects",
  ];
  const iconItems = [
    { icon: faMagnifyingGlass, label: "Search" },
    { icon: faBell, label: "Signals" },
    { icon: faCalendar, label: "Calender" },
    { icon: faHouse, label: "Market place" },
    { icon: faGear, label: "Settings" },
    { icon: faCircleUser, label: "Profile" },
  ];

  return (
    <nav className="navbar navbar-expand-lg bg-secondary">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#">
          CRM
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
            <li className="nav-item px-3">
              <a className="nav-link text-white" onClick={() => navigate("/")}>
                Home
              </a>
            </li>
            <li className="nav-item px-3">
              <a
                className="nav-link text-white"
                onClick={() => navigate("/Alllead")}
              >
                Lead
              </a>
            </li>
            <li className="nav-item px-3">
              <a
                className="nav-link text-white"
                onClick={() => navigate("/Allcontact")}
              >
                Contact
              </a>
            </li>
            <li className="nav-item px-3">
              <a
                className="nav-link text-white"
                onClick={() => navigate("/Allaccount")}
              >
                Account
              </a>
            </li>
            <li className="nav-item px-3">
              <a
                className="nav-link text-white"
                onClick={() => navigate("/Alldeals")}
              >
                Deals
              </a>
            </li>
            <li className="nav-item px-3">
              <a
                className="nav-link text-white"
                onClick={() => navigate("/Alltask")}
              >
                Task
              </a>
            </li>
            <li className="nav-item px-3">
              <a
                className="nav-link text-white"
                onClick={() => navigate("/Allmeeting")}
              >
                Meetings
              </a>
            </li>
            <li className="nav-item px-3">
              <a
                className="nav-link text-white"
                onClick={() => navigate("/Allservices")}
              >
                Services
              </a>
            </li>
            <li className="nav-item px-3">
              <a
                className="nav-link text-white"
                onClick={() => navigate("/Project")}
              >
                Projects
              </a>
            </li>

            {/* Dropdown Menu */}
            <li className="nav-item dropdown px-3">
              <div className="dropdown">
                <button
                  className="btn btn-light "
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  aria-label="Dropdown menu"
                  style={{
                    border: "none",
                    backgroundColor: "transparent",
                    fontSize: "21px",
                    color: "white",
                  }}
                >
                  &hellip;
                </button>
                <ul
                  id="scrollspyMenu"
                  className="dropdown-menu dropdown-menu-white scrollspy-example"
                  style={{ maxHeight: "300px", overflowY: "auto" }}
                  data-bs-spy="scroll"
                  data-bs-target="#scrollspyMenu"
                >
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => navigate("/Call")}
                    >
                      Calls
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => navigate("/Report")}
                    >
                      Reports
                    </a>
                  </li>
                  
                  
                  
                 
                 
                  
                  
                  <li>
                    <a className="dropdown-item" onClick={() => navigate("/Mycampaign")}>
                      Campaign
                    </a>
                  </li>
                  
                  
                  
                  
                  
                  <li>
                    <a className="dropdown-item" onClick={() => navigate("/Documents")}>
                      Documents
                    </a>
                  </li>
                  
                  <li>
                    <a className="dropdown-item"onClick={() => navigate("/Visit")}>
                      Visits
                    </a>
                  </li>
                  
                  
                  
                </ul>
              </div>
            </li>

            <li className="nav-item dropdown px-3">
              <div className="dropdown">
                <button
                  className="btn btn-light "
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  aria-label="Dropdown menu"
                  style={{
                    border: "none",
                    backgroundColor: "white",
                    fontSize: "21px",
                    color: "dark",
                  }}
                >
                  +
                </button>
                <ul
                  id="scrollspyMenu"
                  className="dropdown-menu dropdown-menu-white scrollspy-example"
                  style={{ maxHeight: "300px", overflowY: "auto" }}
                  data-bs-spy="scroll"
                  data-bs-target="#scrollspyMenu"
                >
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => navigate("/leads")}
                    >
                      + &nbsp;Lead
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => navigate("/Contact")}
                    >
                      + &nbsp;Contact
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => navigate("/Account")}
                    >
                      + &nbsp;Account
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => navigate("/Deal")}
                    >
                      + &nbsp;Deal
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => navigate("/Task")}
                    >
                      + &nbsp;Task
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#sales-orders">
                      + &nbsp;Meeting
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => navigate("/calls")}
                    >
                      + &nbsp;Call
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#invoices">
                      + &nbsp;Product
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#sales-inbox">
                      + &nbsp;Quote
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#campaigns">
                      + &nbsp;Sales Order
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#vendors">
                      + &nbsp;Purchase Order
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#price-books">
                      + &nbsp;Invoice
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#cases">
                      + &nbsp;Campaign
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#solutions">
                      + &nbsp;Vendor
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#documents">
                      + &nbsp;Price Book
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#forecasts">
                      + &nbsp;Case
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => navigate("/Solution")}
                    >
                      + &nbsp;Solutions
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            {/* Icons */}
            {iconItems.map((item, index) => (
              <li key={index} className="nav-item px-2">
                <a
                  className="nav-link text-white"
                  href="#"
                  aria-label={item.label}
                >
                  <Tooltip title={`Go to ${item.label}`} arrow>
                    <FontAwesomeIcon icon={item.icon} />
                  </Tooltip>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
