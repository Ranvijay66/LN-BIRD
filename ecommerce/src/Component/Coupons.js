import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import BootstrapToast from "bootstrap/js/dist/toast";
import "@fortawesome/fontawesome-free/css/all.min.css";


import Sidebar from "./sidebar";
import Header from "./Header";

import Uploadimage from "../Uploadimage.png";

function Coupons() {
  const navigate = useNavigate();
  const [isHovered1, setIsHovered1] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const toastRef = useRef(null);

  const showToast = () => {
    if (toastRef.current) {
      const toastEl = toastRef.current;

      // Remove any previous animation classes
      toastEl.classList.remove("slide-in", "slide-out");

      setTimeout(() => {
        toastEl.classList.add("slide-in");

        // Get or create toast with autohide set to false
        const toast = BootstrapToast.getOrCreateInstance(toastEl, {
          autohide: false, // <-- disable auto close
        });

        toast.show();
      }, 10);
    }
  };

  return (
    <div className="d-flex">
      <Sidebar />

      <div className="content flex-grow-1 p-4" style={{ marginTop: "-50px" }}>
        <div
          className="body-content px-4 py-4"
          style={{ backgroundColor: "#f1f5f9" }}
        >
          <div className="d-flex justify-content-between align-items-end flex-wrap">
            <div className="page-title mb-4">
              <Header />
              <h4 className="mb-0 text-start">Coupon</h4>

              <a
                onClick={() => navigate("/Dashboard")}
                style={{ cursor: "pointer", textDecoration: "none" }}
                onMouseEnter={() => setIsHovered1(true)}
                onMouseLeave={() => setIsHovered1(false)}
              >
                <h6
                  style={{
                    display: "inline",
                    color: isHovered1 ? "blue" : "black",
                    margin: 0,
                    opacity: 0.6,
                    fontSize: "13px",
                  }}
                >
                  Home
                </h6>
              </a>

              <h6
                style={{
                  display: "inline",
                  marginLeft: "10px",
                  opacity: 0.6,
                  fontSize: "13px",
                }}
              >
                • Coupon List
              </h6>
            </div>
          </div>

          <div
            className="container"
            style={{
              width: "100%",
              backgroundColor: "#f1f5f9",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              padding: "0px",
              gap: "10px",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                width: "100%",
                backgroundColor: "white",
                borderRadius: "10px",
              }}
            >
              <div
                className="container"
                style={{
                  width: "100%",
                  backgroundColor: "white",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px",
                  gap: "10px",
                  marginTop: "20px",
                }}
              >
                <div
                  className="search-box"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    border: isFocused
                      ? "1px solid blue"
                      : "1px solid rgba(210, 206, 206, 0.3)",
                    borderRadius: "4px",
                    padding: "6px 10px",
                    width: "250px",
                    backgroundColor: "#fff",
                    marginTop: "20px",
                  }}
                >
                  <i
                    className="fas fa-search"
                    style={{ marginRight: "8px", color: "#666" }}
                  ></i>
                  <input
                    type="text"
                    placeholder="Search by Invoice no"
                    style={{ border: "none", outline: "none", width: "100%" }}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                  />
                </div>

                <div
                  style={{ display: "flex", gap: "10px", marginLeft: "auto" }}
                >
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={showToast}
                  >
                    Add Coupon
                  </button>

                  <div className="toast-container position-fixed bottom-0 end-0 p-3">
                    <div
                      ref={toastRef}
                      className="toast fade"
                      role="alert"
                      aria-live="assertive"
                      aria-atomic="true"
                    >
                      <div
                        className="toast-header"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <button
                          type="button"
                          className="btn-close"
                          aria-label="Close"
                          onClick={(e) => {
                            e.preventDefault(); // prevent default close
                            const toastEl = toastRef.current;

                            // Trigger slide-out animation
                            toastEl.classList.remove("slide-in");
                            toastEl.classList.add("slide-out");

                            // Hide the toast after animation completes
                            setTimeout(() => {
                              const toast =
                                BootstrapToast.getOrCreateInstance(toastEl);
                              toast.hide();
                            }, 500); // match animation duration
                          }}
                        ></button>

                        <strong style={{ marginLeft: "8px" }}>
                          Enter coupons Details
                        </strong>
                        {/* optional small margin to separate button and text */}
                      </div>

                      <div
                        style={{
                          width: "100%",
                          backgroundColor: "white",
                          padding: "15px",
                          borderRadius: "5px",
                          maxHeight: "580px", // ⬅️ limit height
                          overflowY: "auto", // ⬅️ enable vertical scroll
                          overflowX: "hidden", // ⬅️ hide horizontal scroll
                        }}
                      >
                        <h6 style={{ marginTop: "20px" }}>Upload Image</h6>
                        <div style={{ marginBottom: "10px" }}>
                          <img
                            src={Uploadimage}
                            alt="upload-img"
                            style={{
                              width: "30%",
                              height: "auto",
                              objectFit: "cover",
                              display: "block",
                              margin: "0 auto",
                            }}
                          />
                          <small
                            style={{ display: "block", textAlign: "center" }}
                          >
                            (Only png, jpg, jpeg, webp will be accepted)
                          </small>
                        </div>

                        <button
                          style={{
                            marginBottom: "15px",
                            width: "100%",
                            height: "40px",
                            border: "0.5px solid rgba(97, 94, 94, 0.09)",
                            backgroundColor: "transparent",
                            color: "gray",
                            padding: "10px",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            borderRadius: "4px",
                            display: "block",
                            textAlign: "center",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "blue";
                            e.currentTarget.style.color = "white";
                            e.currentTarget.style.borderColor = "blue";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor =
                              "transparent";
                            e.currentTarget.style.color = "black";
                            e.currentTarget.style.borderColor =
                              "rgba(97, 94, 94, 0.09)";
                          }}
                        >
                          <p style={{ opacity: 0.6, margin: 0 }}>
                            Upload Image
                          </p>
                        </button>

                        <div style={{ marginBottom: "10px" }}>
                          <label>Name</label>
                          <input
                            type="text"
                            placeholder="name"
                            className="input-light-border"
                          />
                        </div>

                        <div style={{ marginBottom: "5px" }}>
  <label>Product Type</label>
  <select
    style={{
      width: "100%",
      padding: "8px",
      marginTop: "5px",
      boxSizing: "border-box",
    }}
    className="input-light-border"
  >
    <option value="" disabled selected>
      Select
    </option>
    <option value="electronics">Electronics</option>
    <option value="clothing">Clothing</option>
    <option value="books">Books</option>
    <option value="furniture">Furniture</option>
    {/* Add more options as needed */}
  </select>
</div>


                        <div style={{ marginBottom: "5px" }}>
                          <label>Code</label>
                          <input
                            type="text"
                            placeholder="Code"
                            style={{
                              width: "100%",
                              padding: "8px",
                              marginTop: "5px",
                            }}
                            className="input-light-border"
                          />
                        </div>

                     <div style={{ marginBottom: "5px", position: "relative" }}>
  <label>endt ime</label>
  <input
  type="date"
  style={{
    width: "100%",
    padding: "8px 35px 8px 8px", // right padding for calendar icon space
    marginTop: "5px",
    boxSizing: "border-box",
    color: "#6c757d", // optional to make the text look like a placeholder
    fontSize: "14px",
  }}
  className="input-light-border"
/>

 
</div>




                        <div style={{ marginBottom: "5px" }}>
                          <label>discount percentage</label>
                          <input
                            type="text"
                            placeholder="discount percentage"
                            style={{
                              width: "100%",
                              padding: "8px",
                              marginTop: "5px",
                            }}
                            className="input-light-border"
                          />
                        </div>

                        <div style={{ marginBottom: "5px" }}>
                          <label>minimum amount</label>
                          <input
                            type="text"
                            placeholder="minimum amount"
                            style={{
                              width: "100%",
                              padding: "8px",
                              marginTop: "5px",
                            }}
                            className="input-light-border"
                          />
                        </div>

                        <div
                          style={{
                            display: "flex",
                            gap: "10px",
                            marginTop: "20px",
                            position: "sticky",
                            bottom: "0px",
                            zIndex: 10,
                          }}
                        >
                          {/* Add Brand Button */}
                         <button className="btn-blue">
  Add Brand
</button>


                          {/* Cancel Button */}
                          <button
                            className="cancel-button"
                            style={{
                              backgroundColor: "white",
                              border: "1px solid rgba(128, 128, 128, 0.2)", // Light gray with opacity
                              color: "black",
                              width: "150px",
                              height: "40px",
                              borderRadius: "4px",
                              cursor: "pointer",
                              transition: "all 0.3s ease",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = "red";
                              e.currentTarget.style.color = "white";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = "white";
                              e.currentTarget.style.color = "black";
                            }}
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "#fff",
                  padding: "10px",
                  border: "0px solid #ddd",
                  maxHeight: "400px",
                  overflowY: "auto",
                  overflowX: "auto",
                  boxSizing: "border-box",
                  marginBottom: "20px",
                  paddingBottom: "10px",
                }}
              >
                <table
                  style={{
                    minWidth: "1000px",
                    borderCollapse: "collapse",
                    width: "100%",
                    borderBottom: "0px solid rgba(0, 0, 0, 0.2)",
                    marginTop: "10px",
                    marginLeft: "10px",
                  }}
                >
                  <thead>
                    <tr
                      style={{
                        opacity: 0.6,
                        fontSize: "12px",
                        borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <th style={{ textAlign: "left", whiteSpace: "nowrap" }}>
                        NAME
                      </th>
                      <th style={{ textAlign: "left", paddingLeft: "100px" }}>
                        CODE
                      </th>
                      <th style={{ textAlign: "left", paddingLeft: "100px" }}>
                        AMOUNT
                      </th>
                      <th style={{ textAlign: "left", paddingLeft: "100px" }}>
                        STATUS
                      </th>
                      <th style={{ textAlign: "left", paddingLeft: "100px" }}>
                        START
                      </th>
                      <th style={{ textAlign: "left", paddingLeft: "70px" }}>
                        END
                      </th>
                      <th style={{ textAlign: "left", paddingLeft: "30px" }}>
                        ACTION
                      </th>
                    </tr>
                  </thead>
                  <tbody style={{ fontSize: "11px" }}>
                    <tr style={{ whiteSpace: "nowrap" }}>
                      <td colSpan="7">Showing 1–0 of 0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coupons;
