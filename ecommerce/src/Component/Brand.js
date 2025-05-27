import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo1 from "../logo3.png";
import Header from "./Header";
import Icon1 from "../Icon1 (1).png";
import Graphimage from "../Graphimage.png";
import User from "../User.png";
import Cube from "../Cube.png";
import { useNavigate } from "react-router-dom";
import Sidebar from "./sidebar";
import Uploadimage from "../Uploadimage.png";

function Brand() {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Content Area */}
      <div className="content flex-grow-1 p-4" style={{ marginTop: "-50px" }}>
        <div
          className="body-content px-4 py-4 "
          style={{ backgroundColor: "#f1f5f9" }}
        >
          <div className="d-flex justify-content-between align-items-end flex-wrap">
            <div className="page-title mb-4">
              <Header />
              <h4 className="mb-0 text-start"> Brands</h4>

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
                  }}
                >
                  Home
                </h6>
              </a>

              <h6 style={{ display: "inline", marginLeft: "10px" }}>
                &#8226; Brands
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
            {/* Left Div */}
            <div
              style={{
                width: "35%",
                backgroundColor: "white",
                padding: "15px",
                border: "0px solid #ddd",
                borderRadius: "5px",
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
                <small style={{ display: "block", textAlign: "center" }}>
                  (Only png, jpg, jpeg, webp will be accepted)
                </small>
              </div>

              <button
                style={{
                  marginBottom: "15px",
                  width: "100%",
                  height: "40px",
                  border: "0.5px solid rgba(97, 94, 94, 0.09)", // light border with opacity 0.2
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
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "black";
                  e.currentTarget.style.borderColor = "rgba(97, 94, 94, 0.09)";
                }}
              >
                <p style={{ opacity: 0.6 }}>Upload Image</p>
              </button>

              <div style={{ marginBottom: "10px" }}>
                <label>name</label>
                <input
                  type="text"
                  placeholder="name"
                  className="input-light-border"
                />
              </div>

              <div style={{ marginBottom: "5px" }}>
                <label>email</label>
                <input
                  type="text"
                  placeholder="email"
                  style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                  className="input-light-border"
                />
              </div>

              <div style={{ marginBottom: "5px" }}>
                <label>website</label>
                <input
                  type="text"
                  placeholder="website"
                  style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                  className="input-light-border"
                />
              </div>

              <div style={{ marginBottom: "5px" }}>
                <label>location</label>
                <input
                  type="text"
                  placeholder="location"
                  style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                  className="input-light-border"
                />
              </div>

              <div style={{ margin: "15px 0" }}>
                <label>Description</label>
                <textarea
                  placeholder="Description Here"
                  rows={4}
                  style={{
                    width: "100%",
                    padding: "8px",
                    marginTop: "5px",
                    resize: "vertical",
                  }}
                  className="input-light-border"
                ></textarea>
              </div>

            <div className="dropdown-wrapper">
  <label htmlFor="status">Status</label>
  <div
    className="custom-select"
    style={{
      position: "relative",
      width: "100%",
      height: "40px",
      display: "inline-flex",
      alignItems: "center",
    }}
  >
    <select
      id="status"
      defaultValue=""
      className="input-light-border"
      style={{
        height: "40px",
        paddingRight: "30px",
        appearance: "none",
        WebkitAppearance: "none",
        MozAppearance: "none",
        boxSizing: "border-box",
        marginTop: "0px", // override default if needed
      }}
    >
      <option value="" disabled>
        &nbsp;&nbsp;&nbsp;&nbsp;Select
      </option>
      <option value="active">Active</option>
      <option value="inactive">Inactive</option>
    </select>

    {/* Vertical divider */}
    <div
      className="icon-wrapper"
      style={{
        position: "absolute",
        right: "30px",
        height: "24px",
        borderLeft: "1px solid rgba(0, 0, 0, 0.2)",
        top: "50%",
        transform: "translateY(-50%)",
      }}
    ></div>

    {/* Dropdown arrow icon */}
    <div
      className="dropdown-icon"
      style={{
        position: "absolute",
        right: "8px",
        top: "50%",
        transform: "translateY(-50%)",
        pointerEvents: "none",
        width: "10px",
        height: "10px",
        borderLeft: "5px solid transparent",
        borderRight: "5px solid transparent",
        borderTop: "5px solid rgba(0, 0, 0, 0.2)",
      }}
    ></div>
  </div>
</div>

              <button
                style={{
                  backgroundColor: "blue",
                  border: "none",
                  color: "white",
                  width: "150px",
                  height: "40px",
                  borderRadius: "4px", // optional: makes it look cleaner
                  cursor: "pointer", // optional: pointer cursor on hover
                  marginTop: "20px",
                }}
              >
                Add Brand
              </button>
            </div>

            {/* Right Div */}
            <div style={{ width: "65%",  backgroundColor: "#fff",}}>
              {/* Scrollable Table Container */}
              <div
                style={{
                  backgroundColor: "#fff",
                  padding: "10px",
                  border: "0px solid #ddd",
                  overflow: "auto",
                  maxHeight: "400px",
                  width:"90%",
                  marginLeft:"20px"
                }}
              >
                <table
                  style={{
                    minWidth: "1000px",
                    borderCollapse: "collapse",
                    width: "100%",
                  }}
                >
                  <thead>
                    <tr style={{ opacity: 0.3 ,fontSize:"12px"}}>
                      <th style={{ textAlign: "left", padding: "10px" }}>Id</th>
                     
                      <th
                        style={{
                          textAlign: "left",
                          padding: "10px",
                          paddingLeft: "200px",
                        }}
                      >
                        NAME
                      </th>
                      <th
                        style={{
                          textAlign: "left",
                          padding: "10px",
                          paddingLeft: "100px",
                        }}
                      >
                        EMAIL
                      </th>



                      <th
                        style={{
                          textAlign: "left",
                          padding: "10px",
                          paddingLeft: "100px",
                        }}
                      >
                        WEBSITE
                      </th>


                      <th
                        style={{
                          textAlign: "left",
                          padding: "10px",
                          paddingLeft: "100px",
                        }}
                      >
                        LOCATION
                      </th>
                      <th
                        style={{
                          textAlign: "left",
                          padding: "10px",
                          paddingLeft: "75px",
                        }}
                      >
                        ACTION
                      </th>
                    </tr>
                  </thead>
                  <tbody>{/* Rows go here */}</tbody>
                </table>
              </div>

              {/* Text below scrollable table */}
              <div style={{ marginTop: "10px",marginLeft:"20px", fontSize: "14px" }}>
                Showing 1–0 of 0
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brand;
