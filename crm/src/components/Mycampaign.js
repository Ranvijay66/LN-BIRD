import React from "react";
import Header from "./Header";
import logo from "../images.png";
import { useNavigate } from "react-router-dom";

const Mycampaign = () => {
  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          marginTop: "100px",
          width: "100%",
          gap: "20px",
        }}
      >
        {/* Left Side */}
        <div
          style={{
            width: "30%",
            backgroundColor: "white",
            padding: "10px",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center", // Optional: vertically center the image
            marginLeft:"200px"
          }}
        >
          <img
            src={logo}
            alt="Banner"
            style={{ width: "200px", height: "auto" }}
          />
        </div>

        {/* Right Side */}
        <div
          style={{ width: "30%", backgroundColor: "white", padding: "10px" }}
        >
          <div
            style={{
              display: "block",
              marginBottom: "10px",
              backgroundColor: "white",
              padding: "10px",
            }}
          >
            <h6>Plan Campaigns</h6>
            <p>
              Campaigns are marketing efforts planned, executed, and monitored
              from within your CRM.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              backgroundColor: "white",
              padding: "10px",
              gap: "10px", // optional spacing between buttons
            }}
          >
           <button style={{ borderRadius: "20px" }}>Create Campaign</button>
<button style={{ borderRadius: "20px", marginLeft: "10px" }}>Import Campaigns</button>

          </div>
        </div>
      </div>
    </>
  );
};

export default Mycampaign;
