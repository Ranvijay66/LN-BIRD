import React, { useState } from "react";
import logo1 from "../logo3.png";
import { useNavigate } from "react-router-dom";

function Sidebar() {

      const [productsOpen, setProductsOpen] = useState(false);
      const [pagesOpen, setPagesOpen] = useState(false);
      const navigate = useNavigate();

  return (
    <div>
       <div
        className="sidebar d-flex flex-column p-3"
        style={{ width: "250px",backgroundColor:"white" }}
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
              
              className="nav-link text-start d-flex align-items-center" onClick={() => navigate("/")}
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
                <a  className="nav-link text-start"  onClick={() => navigate("/Productlist")}>
                 Products List
                </a>
                 <a href="#" className="nav-link text-start"   >
                 Products Grid
                </a>
                <a  className="nav-link text-start"  onClick={() => navigate("/Addproduct")}>
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
                  Register
                </a>
                <a href="#" className="nav-link text-start">
                  Login
                </a>
                 <a href="#" className="nav-link text-start">
                  Forget Password
                </a>
              </div>
            )}
          </li>
        </ul>

        {/* Logout */}
        <div
          className="logout-btn mt-auto"
          style={{
            borderRadius: "5px",
            paddingLeft: "5px",
            marginLeft: "30px",
          }}
        >
          <a
            href="#"
            className="nav-link text-white text-start d-flex align-items-center"
          >
            <i className="fas fa-sign-out-alt me-2"></i> Logout
          </a>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
