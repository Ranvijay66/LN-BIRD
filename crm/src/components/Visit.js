import React, { useState, useEffect } from "react";
import Header from "./Header";
import logo from "../Visitor.png";

function Visit() {
  return (
    <>
      <Header />

      <div>
        <img
          src={logo}
          alt="Banner"
          style={{
            width: "600px",
            height: "auto",
            marginLeft: "300px",
            alignItems: "center",
          }}
        />
      </div>

      <div>
        <h3 style={{ marginLeft: "20px" }}>Generate More Qualified Leads</h3>
        <p style={{ marginLeft: "20px" }}>
          Identify important prospects on your website, engage them in real
          time, and convert them to leads — all without leaving your Zoho CRM
          window.
        </p>
        <br />
        <button
          style={{ width: "200px", marginLeft: "100px", borderRadius: "10PX" }}
        >
          Get started
        </button>
      </div>

      <div>
        <h3 style={{ marginLeft: "20px" }}>
          Equip Your Sales Team with Customer Context
        </h3>
        <p style={{ marginLeft: "20px" }}>
          Help your sales team convert more deals by giving them detailed
          insights about your visitors' behavior on your website.
        </p>
        <br />
        <button
          style={{ width: "200px", marginLeft: "100px", borderRadius: "10PX" }}
        >
          Get started
        </button>
      </div>

      <div>
        <h3 style={{ marginLeft: "20px" }}>Capture Leads 24/7</h3>
        <p style={{ marginLeft: "20px" }}>
          Never miss a lead! Capture, qualify and engage them with Zobot,
          pushing their data and conversations into Zoho CRM, syncing the whole
          process.
        </p>
        <br />
        <button
          style={{ width: "200px", marginLeft: "100px", borderRadius: "10PX" }}
        >
          Get started
        </button>
      </div>

      <div>
        <h3 style={{ marginLeft: "20px" }}>
          Shorten Your Sales Cycle with Audio Calls
        </h3>
        <p style={{ marginLeft: "20px" }}>
          When your prospects have a concern, what could be better than talking
          it out? Address your prospective customers' questions quickly and<br/> more
          effectively by calling them up right from within your chat window. Get
          Started
        </p>
        <br />
        <button
          style={{ width: "200px", marginLeft: "100px", borderRadius: "10PX" }}
        >
          Get started
        </button>
      </div>

       <div>
        <h3 style={{ marginLeft: "20px" }}>
          Scale Your Sales Team with Self Service Articles
        </h3>
        <p style={{ marginLeft: "20px" }}>
          Add answers to frequently asked questions as articles that prospects can 
          access right from your chat window, so your team can spend more <br/>
           time addressing bigger and more unique concerns.
        </p>
        <br />
        <button
          style={{ width: "200px", marginLeft: "100px", borderRadius: "10PX" }}
        >
          Get started
        </button>
      </div>

      <div>
        <h3 style={{ marginLeft: "20px" }}>
         Converge Deals Seamlessly
        </h3>
        <p style={{ marginLeft: "20px" }}>
          View website behavior and related insights of each prospects within your Zoho CRM, along with their 
          conversations with your team to close<br/> deals faster.
        </p>
        <br />
        <button
          style={{ width: "200px", marginLeft: "100px", borderRadius: "10PX" }}
        >
          Get started
        </button>
      </div>
    </>
  );
}

export default Visit;
