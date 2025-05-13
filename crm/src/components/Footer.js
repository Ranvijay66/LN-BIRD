import React, { useRef } from "react";
import "../style/Header.css";
import "../style/Button.css";
import "../style/Box.css";

function Footer() {
  // Create individual refs for each hidden text
  const hiddenTextRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  // Handlers for mouse events
  const handleMouseEnter = (index) => {
    if (hiddenTextRefs[index].current) {
      hiddenTextRefs[index].current.style.display = "block";
    }
  };

  const handleMouseLeave = (index) => {
    if (hiddenTextRefs[index].current) {
      hiddenTextRefs[index].current.style.display = "none";
    }
  };

  return (
    <div style={styles.box} id="firstdiv">
      <nav className="navbar navbar-expand-lg bg-body-lightblue" id="firstdiv">
        <div className="container-fluid">
          <a className="navbar-brand" style={{ fontSize: "15px" }} href="#">
            MY Pipeline Deals
          </a>
        </div>
      </nav>

      <div
        id="box"
        style={{
          position: "absolute",
          display: "flex",
          marginLeft: "50px",
          marginTop: "100px",
        }}
      >
        <div id="box1"></div>
        <div id="box2">2</div>
        <div id="box3">3</div>
        <div id="box4">4</div>
        <div id="box5">5</div>
        <div id="box6">6</div>
      </div>

      {/* First item: Qualification */}
      <div
        style={{
          marginLeft: "260px",
          marginTop: "140px",
          position: "relative",
          cursor: "pointer",
        }}
        onMouseEnter={() => handleMouseEnter(0)}
        onMouseLeave={() => handleMouseLeave(0)}
      >
        -------Qualification:1
        <div
          ref={hiddenTextRefs[0]} // Attach individual ref
          className="hiddenText"
          style={{
            display: "none",
            position: "absolute",
            top: "-30px",
            left: "0",
            marginLeft: "60px",
            backgroundColor: "green",
            padding: "5px",
            borderRadius: "3px",
            boxShadow: "0px 0px 5px rgba(246, 238, 238, 0.93)",
            color: "white",
            fontSize: "15px",
          }}
        >
          Qualification:1
        </div>
      </div>

      {/* Second item: Need Analysis */}
      <div
        style={{
          marginLeft: "-190px",
          position: "relative",
          cursor: "pointer",
          marginTop: "180px",
        }}
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={() => handleMouseLeave(1)}
      >
        ---------Need Analysis:2
        <div
          ref={hiddenTextRefs[1]} // Attach individual ref
          className="hiddenText"
          style={{
            display: "none",
            position: "absolute",
            top: "0px",
            left: "100px",
            marginLeft: "0px",
            backgroundColor: "green",
            padding: "5px",
            borderRadius: "3px",
            boxShadow: "0px 0px 5px rgba(246, 238, 238, 0.93)",
            color: "white",
            fontSize: "15px",
          }}
        >
          Need Analysis:2
        </div>
      </div>

      {/* Third item: Value Proposition */}
      <div
        style={{
          marginLeft: "-200px",
          position: "relative",
          cursor: "pointer",
          marginTop: "240px",
        }}
        onMouseEnter={() => handleMouseEnter(2)}
        onMouseLeave={() => handleMouseLeave(2)}
      >
        -------Value Proposition:1
        <div
          ref={hiddenTextRefs[2]} // Attach individual ref
          className="hiddenText"
          style={{
            display: "none",
            position: "absolute",
            top: "0px",
            left: "100px",
            backgroundColor: "green",
            padding: "5px",
            borderRadius: "3px",
            boxShadow: "0px 0px 5px rgba(246, 238, 238, 0.93)",
            color: "white",
            fontSize: "14px",
          }}
        >
          Value Proposition:1
        </div>
      </div>

      {/* Fourth item: Identify Decision Makers */}
      <div
        style={{
          marginLeft: "-200px",
          position: "relative",
          cursor: "pointer",
          marginTop: "290px",
        }}
        onMouseEnter={() => handleMouseEnter(3)}
        onMouseLeave={() => handleMouseLeave(3)}
      >
        ----Identify Decision Makers:2
        <div
          ref={hiddenTextRefs[3]} // Attach individual ref
          className="hiddenText"
          style={{
            display: "none",
            position: "absolute",
            top: "0px",
            left: "100px",
            backgroundColor: "green",
            padding: "5px",
            borderRadius: "3px",
            boxShadow: "0px 0px 5px rgba(246, 238, 238, 0.93)",
            color: "white",
            fontSize: "13px",
          }}
        >
          Identify Decision Makers:2
        </div>
      </div>

      {/* Fifth item: Proposal/Price Quote */}
      <div
        style={{
          marginLeft: "-250px",
          position: "relative",
          cursor: "pointer",
          marginTop: "350px",
        }}
        onMouseEnter={() => handleMouseEnter(4)}
        onMouseLeave={() => handleMouseLeave(4)}
      >
        ---------Proposal/Price Quote:1
        <div
          ref={hiddenTextRefs[4]} // Attach individual ref
          className="hiddenText"
          style={{
            display: "none",
            position: "absolute",
            top: "0px",
            left: "100px",
            backgroundColor: "green",
            padding: "5px",
            borderRadius: "3px",
            boxShadow: "0px 0px 5px rgba(246, 238, 238, 0.93)",
            color: "white",
            fontSize: "15px",
          }}
        >
          Proposal/Price Quote:1
        </div>
      </div>

      {/* Sixth item: Negotiation/Review */}
      <div
        style={{
          marginLeft: "-210px",
          position: "relative",
          cursor: "pointer",
          marginTop: "400px",
        }}
        onMouseEnter={() => handleMouseEnter(5)}
        onMouseLeave={() => handleMouseLeave(5)}
      >
        ---------Negotiation/Review:1
        <div
          ref={hiddenTextRefs[5]} // Attach individual ref
          className="hiddenText"
          style={{
            display: "none",
            position: "absolute",
            top: "20px",
            left: "100px",
            backgroundColor: "green",
            padding: "5px",
            borderRadius: "3px",
            boxShadow: "0px 0px 5px rgba(246, 238, 238, 0.93)",
            color: "white",
            fontSize: "15px",
          }}
        >
          Negotiation/Review:1
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          display: "flex",
          height: "40px",
          backgroundColor: "red",
          width: "45px",
          marginLeft: "227px",
          marginTop: "400px",
        }}
      ></div>
    </div>
  );
}

const styles = {
  box: {
    flex: "2 2 20%",
    height: "500px",
    backgroundColor: "lightblue",
    display: "flex",
    alignItems: "flex-start",
    borderRadius: "5px",
    textAlign: "left",
    color: "#fff",
    marginTop: "110px",
    marginLeft: "10px",
    width: "47%", // Set the width of the parent div
  },
};

export default Footer;
