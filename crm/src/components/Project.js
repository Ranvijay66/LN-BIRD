import React from "react";
import Header from "./Header";

function Project() {
  return (
    <div style={{ width: "100%" }}>
      <Header />
      <h3 style={{ textAlign: "center", marginTop: "100px" }}>
        Unified Sales and Project Management
      </h3>

      <div
        style={{
          display: "flex",
          marginLeft: "200px",
          marginTop: "100px",
          gap: "30px",
        }}
      >
        <div className="card" style={{ width: "18rem" }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              <h6>Connect</h6>
              Integrate Zoho Projects to create and associate projects in Zoho
              CRM.
            </p>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              <h6>Track</h6>
              Stay on top of your tasks and milestones.
            </p>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              <h6>Deliver</h6>
              Execute customer projects on time, every time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
