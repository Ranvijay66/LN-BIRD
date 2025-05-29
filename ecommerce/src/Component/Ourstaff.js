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

function Ourstaff() {
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
              <h4 className="mb-0 text-start"> Staff</h4>

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

              <h6 style={{ display: "inline", marginLeft: "10px", opacity: 0.6,
                    fontSize: "13px",}}>
                &#8226; Category List
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
                  placeholder="Name"
                  className="input-light-border"
                />
              </div>

              <div style={{ marginBottom: "5px" }}>
                <label>email</label>
                <input
                  type="text"
                  placeholder="enter email"
                  style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                  className="input-light-border"
                />
                
              </div>

               <div style={{ marginBottom: "5px" }}>
                <label>password</label>
                <input
                  type="text"
                  placeholder="enter password"
                  style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                  className="input-light-border"
                />
                
              </div>

              <div style={{ marginBottom: "5px" }}>
                <label>phone</label>
                <input
                  type="text"
                  placeholder="enter phone "
                  style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                  className="input-light-border"
                />
                
              </div>

<div style={{ marginBottom: "5px", position: "relative", width: "100%" }}>
  <label>joining date</label>
  <input
    type="text"
    placeholder="dd-mm-yy"
    style={{ 
      width: "100%", 
      padding: "8px 30px 8px 8px", // add right padding for icon space
      marginTop: "5px",
      boxSizing: "border-box"
    }}
    className="input-light-border"
  />
  <i
    className="fas fa-calendar-alt"
    style={{
      position: "absolute",
      right: "8px",
      bottom: "8px",
      color: "#555",
      fontSize: "18px",
      pointerEvents: "none" // so icon doesn't block typing
    }}
  ></i>
</div>

 <div style={{ marginTop: "10px" }}>
  <label style={{ marginBottom: "5px", display: "block" }}> Admin Role</label>

   <>
  <style>
    {`
      .input-highlight:focus {
        border: 1px solid blue !important;
        outline: none;
      }
    `}
  </style>
  <select
   className="input-highlight"
    style={{
      width: "100%",
      height: "40px",
      padding: "8px",
      borderRadius: "4px",
     
      outline: "none",
      borderRadius:"4px",
        border: "1px solid #ebedef",
    }}
    defaultValue=""
  >
  <option value="" style={{ color: "#6c757d" }}>
  Admin
</option>


    <option value="admin">Admin</option>
    <option value="super-admin">Super Admin</option>
    <option value="manager">Manager</option>
    <option value="ceo">CEO</option>
  </select>
  </>
</div>


              
<button className="my-button">Add Staff</button>

            </div>

            {/* Right Div */}
            <div style={{ width: "65%" , backgroundColor: "#fff",}}>
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
                    <tr style={{ opacity: 0.2, fontSize: "12px" }}>

                     
                      <th
                        style={{
                          textAlign: "left",
                          padding: "10px",
                          paddingLeft: "10px",
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
                        CONTACT
                      </th>


                      <th
                        style={{
                          textAlign: "left",
                          padding: "10px",
                          paddingLeft: "100px",
                        }}
                      >
                        STATUS
                      </th>

                        <th
                        style={{
                          textAlign: "left",
                          padding: "10px",
                          paddingLeft: "100px",
                        }}
                      >
                        ROLE
                      </th>

                       <th
                        style={{
                          textAlign: "left",
                          padding: "10px",
                          paddingLeft: "100px",
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
              <div style={{ marginTop: "10px", fontSize: "14px" ,marginLeft:"20px"}}>
                Showing 1–0 of 0
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ourstaff;
