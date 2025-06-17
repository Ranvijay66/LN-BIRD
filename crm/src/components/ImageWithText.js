import React from "react";

function ImageWithText() {
  return (
    <div
      style={{
        display: "flex",
        height: "100px",
        width: "100%",
        flexWrap: "wrap",
        backgroundColor: "gray",
      }}
    >
      {/* Image Section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "lightgray",
          width: "20%",
          padding: "10px",
        }}
      >
        <img
          src="image.jpg"
          alt="Description of image"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>

      {/* Text Section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "lightgray",
          width: "60%",
          padding: "0 10px",
          minWidth: "200px",
        }}
      >
        <h5 style={{ margin: 0 }}>Truhlar & Truhlar (sample)</h5>
        <span style={{ marginLeft: "5px" }}>
          -{" "}
          <a
            href="http://truhlarandtruhlartech.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website
          </a>
        </span>
      </div>

      {/* Buttons Section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          backgroundColor: "lightgray",
          width: "20%",
          padding: "0 10px",
        }}
      >
        <button type="button" className="btn btn-primary">
          Send Email
        </button>
        <button type="button" className="btn btn-light">
          Edit
        </button>
        <button type="button" className="btn btn-light">
          More
        </button>
      </div>
    </div>
  );
}

export default ImageWithText;
