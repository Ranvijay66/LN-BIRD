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

function Productgrid() {
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
        <div className="body-content px-4 py-4 "style={{ backgroundColor: '#f1f5f9' }}>
          <div className="d-flex justify-content-between align-items-end flex-wrap">
            <div className="page-title mb-4">
              <Header />
              <h4 className="mb-0 text-start"> Product</h4>






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
  &#8226; Product Grid
</h6>

            </div>
          </div>
         
<div
  className="container"
  style={{
    width: '100%',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    gap: '10px',
    marginTop:"20px"
  }}
>
  {/* Search Input with Icon INSIDE to the LEFT */}

   
  <div
    className="search-box"
    style={{
      display: 'flex',
      alignItems: 'center',
     border: '1px solid rgba(210, 206, 206, 0.3)',

      borderRadius: '4px',
      padding: '6px 10px',
      width: '250px',
      backgroundColor: '#fff',
       marginTop:"50px",
       border: isFocused ? "1px solid blue" : "1px solid  rgba(210, 206, 206, 0.3)",
    }}
  >
    <i
      className="fas fa-search"
      style={{ marginRight: '8px', color: '#666' }}
    ></i>

    

    


    <input
        type="text"
        placeholder="Search by product name"
        style={{
          border: "none",
          outline: "none",
          width: "100%",
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

    
  </div>

  {/* Right Side Controls */}
  <div
    style={{
      display: 'flex',
      gap: '10px',
      marginLeft: 'auto',
    }}
  ><p style={{ fontSize: '15px',marginTop:"20px" }}>Status:</p>

    <select
      style={{
        padding: '6px 10px',
        borderRadius: '4px',
        border: '0px solid #ccc',
      }}
    > 
      <option>Status</option>
      <option>Active</option>
      <option>Inactive</option>
    </select>

    <button
      className="add-button"
       onClick={() => navigate("/Addproduct")}
      style={{
        //padding: '6px 14px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        width:"150px"
        , height:"30px",
        marginTop:"20px"
      }}
    >
      Add Product
    </button>




    
  </div>



  
</div>

<table
  style={{
    width: '100%',
    borderCollapse: 'collapse',
    backgroundColor:"white"
  }}
>
  <thead>
    <tr>
      {['Product', 'SKU', 'QTY', 'Price', 'Status', 'Action'].map((header) => (
        <th
          key={header}
        style={{
  opacity: 0.2,
  padding: '8px',
  textAlign: 'left',
  borderBottom: '1px solid rgba(0, 0, 0, 0.1)', // very light bottom border
  fontSize: '15px'
}}

        >
          {header}
        </th>
      ))}
    </tr>
  </thead>

  <tbody>
    {/* Example row */}
    

    {/* Add more rows as needed */}
  </tbody>
</table>



        </div>
      </div>
    </div>
  );
}

export default Productgrid;
