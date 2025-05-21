import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo1 from "../logo3.png";
import Header from "./Header";

function Dashboard() {
  const [productsOpen, setProductsOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div
        className="sidebar d-flex flex-column p-3"
        style={{ width: "250px" }}
      >
        <img
          src={logo1}
          alt="eBazar Logo"
          className="mb-4"
          style={{ maxWidth: "150px" }}
        />

        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a
              href="#"
              className="nav-link text-start d-flex align-items-center"
            >
              <i className="fas fa-tachometer-alt me-2"></i> Dashboard
            </a>
          </li>

          {/* Products Dropdown */}
          <li>
            <a
              href="#"
              className="nav-link text-start d-flex align-items-center justify-content-between"
              onClick={() => setProductsOpen(!productsOpen)}
            >
              <span>
                <i className="fas fa-boxes me-2"></i> Products
              </span>
              <i className="fas fa-angle-right"></i>
            </a>
            {productsOpen && (
              <div className="ps-4">
                <a href="#" className="nav-link text-start">
                  All Products
                </a>
                <a href="#" className="nav-link text-start">
                  Add Product
                </a>
              </div>
            )}
          </li>

          <li>
            <a
              href="#"
              className="nav-link text-start d-flex align-items-center"
            >
              <i className="fas fa-th-large me-2"></i> Category
            </a>
          </li>
          <li>
            <a
              href="#"
              className="nav-link text-start d-flex align-items-center"
            >
              <i className="fas fa-shopping-cart me-2"></i> Order
            </a>
          </li>
          <li>
            <a
              href="#"
              className="nav-link text-start d-flex align-items-center"
            >
              <i className="fas fa-tags me-2"></i> Brand
            </a>
          </li>
          <li>
            <a
              href="#"
              className="nav-link text-start d-flex align-items-center"
            >
              <i className="fas fa-gift me-2"></i> Coupons
            </a>
          </li>
          <li>
            <a
              href="#"
              className="nav-link text-start d-flex align-items-center"
            >
              <i className="fas fa-user-circle me-2"></i> Profile
            </a>
          </li>
          <li>
            <a
              href="#"
              className="nav-link text-start d-flex align-items-center"
            >
              <i className="fas fa-store me-2"></i> Online Store
            </a>
          </li>
          <li>
            <a
              href="#"
              className="nav-link text-start d-flex align-items-center"
            >
              <i className="fas fa-users me-2"></i> Our Staff
            </a>
          </li>

          {/* Pages Dropdown */}
          <li>
            <a
              href="#"
              className="nav-link text-start d-flex align-items-center justify-content-between"
              onClick={() => setPagesOpen(!pagesOpen)}
            >
              <span>
                <i className="fas fa-file-alt me-2"></i> Pages
              </span>
              <i className="fas fa-angle-right"></i>
            </a>
            {pagesOpen && (
              <div className="ps-4">
                <a href="#" className="nav-link text-start">
                  About Us
                </a>
                <a href="#" className="nav-link text-start">
                  Contact
                </a>
              </div>
            )}
          </li>
        </ul>

        {/* Logout */}
        <div className="logout-btn mt-auto" style={{ borderRadius: "5px",paddingLeft:"5px",marginLeft:"30px" }}>
          <a
            href="#"
            className="nav-link text-white text-start d-flex align-items-center"
          >
            <i className="fas fa-sign-out-alt me-2"></i> Logout
          </a>
        </div>
      </div>

      {/* Content Area */}
      <div className="content flex-grow-1 p-4">
        <div className="body-content px-4 py-4 bg-light">
          <div className="d-flex justify-content-between align-items-end flex-wrap">
            <div className="page-title mb-4">
                <Header/>
              <h3 className="mb-0 text-start">Dashboard</h3>

              <p className="text-muted m-0">Welcome to your dashboard</p>
            </div>
          </div>
        </div>
        <div style={{ height: "2000px" }}></div> {/* Demo scroll */}
      </div>
    </div>
  );
}

export default Dashboard;
