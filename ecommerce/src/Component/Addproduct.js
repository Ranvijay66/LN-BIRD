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

function Addproduct() {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Content Area */}
      <div className="content flex-grow-1 p-4" style={{ marginTop: "-50px" }}>
        <div className="body-content px-4 py-4 bg-light">
          <div className="d-flex justify-content-between align-items-end flex-wrap">
            <div className="page-title mb-4">
              <Header />
              <h3 className="mb-0 text-start">Add Product</h3>






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
                Add Product
              </h6>
            </div>
          </div>
          <div className="container">
            <div className="left">
              <div className="box" style={{ height: "300px", padding: "20px" }}>
                 <h4 style={{ fontWeight: 500 }}>General</h4>
                Title<span style={{ color: "red" }}> *</span>
                <br />
              <>
  <style>
    {`
      .input-highlight:focus {
        border: 1px solid blue !important;
        outline: none;
      }
    `}
  </style>

  <input
    className="input-highlight"
    style={{
      width: "100%",
      height: "45px",
      border: "1px solid #ebedef",
      padding: "8px",
      borderRadius: "4px",
    }}
    placeholder="Product title"
  />
</>


                <p style={{ marginTop: "15px" }}>
                  Description
                  <br />
                </p>

                
               <>
  <style>
    {`
      .textarea-highlight:focus {
        border: 1px solid blue !important;
        outline: none;
      }
    `}
  </style>

  <textarea
    className="textarea-highlight"
    style={{
      width: "100%",
      height: "100px",
      padding: "8px",
      boxSizing: "border-box",
      resize: "none",
      border: "1px solid #ebedef", // default border
      borderRadius: "4px"          // optional, for smoother look
    }}
    placeholder="Your description"
  />
</>

              </div>

              <div className="box" style={{ height: "250px", padding: "15px" }}>
                <div style={{ display: "inline-flex", gap: "15px" }}>
                  <div>
                    Price<span style={{ color: "red" }}> *</span>
                    <br />
                    <>
  <style>
    {`
      .input-price:focus {
        border: 1px solid blue !important;
        outline: none;
      }
    `}
  </style>

  <input
    className="input-price"
    style={{
      width: "95%",
      height: "45px",
      border: "1px solid #ebedef",
      borderRadius: "4px",
      padding: "8px",
      boxSizing: "border-box",
    }}
    placeholder="Product Price"
  />
</>

                    <br />
                    <span style={{ fontSize: "13px" }}>
                      Set the base price of the product
                    </span>
                  </div>

                  <div>
                    Sku<span style={{ color: "red" }}> *</span>
                    <br />
                   <>
  <style>
    {`
      .input-sku:focus {
        border: 1px solid blue !important;
        outline: none;
      }
    `}
  </style>

  <input
    className="input-sku"
    style={{
      width: "95%",
      height: "45px",
      border: "1px solid #ebedef",
      borderRadius: "4px",
      padding: "8px",
      boxSizing: "border-box",
    }}
    placeholder="SKU"
  />
</>

                    <br />
                    <span style={{ fontSize: "13px", marginLeft: "5px" }}>
                      Enter the product SKU.
                    </span>
                  </div>

                  <div>
                    Quantity<span style={{ color: "red" }}> *</span>
                    <br />
                    <>
  <style>
    {`
      .input-quantity:focus {
        border: 1px solid blue !important;
        outline: none;
      }
    `}
  </style>

  <input
    className="input-quantity"
    style={{
      width: "100%",
      height: "45px",
      border: "1px solid #ebedef",
      borderRadius: "4px",
      padding: "8px",
      boxSizing: "border-box",
    }}
    placeholder="Quantity"
  />
</>

                    <br />
                    <span style={{ fontSize: "13px" }}>
                      Enter the product quantity.
                    </span>
                  </div>
                </div>
                <div style={{ marginTop: "15px" }}>
                  Discount
                  <br />
                 <>
  <style>
    {`
      .input-discount:focus {
        border: 1px solid blue !important;
        outline: none;
      }
    `}
  </style>

  <input
    className="input-discount"
    style={{
      width: "30%",
      height: "45px",
      border: "1px solid #ebedef",
      borderRadius: "4px",
      padding: "8px",
      boxSizing: "border-box",
    }}
    placeholder="Discount"
  />
</>

                  <br />
                  <span style={{ fontSize: "13px" }}>
                    Set the discount percentage
                  </span>
                </div>
              </div>
              <div className="box" style={{ height: "150px", padding: "15px" }}>
                <div
                  style={{ display: "inline-flex", gap: "15px", width: "50%" }}
                >
                  <div>
                    Brands
                    <br />
                    <>
  <style>
    {`
      .select-brand:focus {
        border: 1px solid blue !important;
        outline: none;
      }
    `}
  </style>

  <select
    className="select-brand"
    style={{
      width: "200%",
      height: "45px",
      border: "1px solid #ebedef",
      borderRadius: "4px",
      padding: "8px",
      boxSizing: "border-box",
      //appearance: "none",  /* optional: removes default arrow for consistent styling */
      backgroundColor: "white",
      cursor: "pointer",
    }}
  >
    <option value="">Select</option>
    <option value="nike">Nike</option>
    <option value="adidas">Adidas</option>
    <option value="puma">Puma</option>
    <option value="reebok">Reebok</option>
    {/* Add more brand options as needed */}
  </select>
</>

                    <br />
                    <span style={{ fontSize: "13px" }}>
                      Set the product Brand.
                    </span>
                  </div>
                </div>

                <div style={{ display: "inline-flex", width: "50%" }}>
                  <div>
                    unit<span style={{ color: "red" }}> *</span>
                    <br />
                   <>
  <style>
    {`
      .input-unit:focus {
        border: 1px solid blue !important;
        outline: none;
      }
    `}
  </style>

  <input
    className="input-unit"
    style={{
      width: "150%",
      height: "45px",
      border: "1px solid #ebedef",
      borderRadius: "4px",
      padding: "8px",
      boxSizing: "border-box",
    }}
    placeholder="Product unit"
  />
</>

                    <br />
                    <span style={{ fontSize: "13px" }}>
                      Set the unit of product.
                    </span>
                  </div>
                </div>
              </div>

              <div className="box" style={{ height: "130px", padding: "15px" }}>
                <h5>Product Variations</h5>

                <button
                  style={{
                    backgroundColor: "blue",
                    color: "white",
                    borderRadius: "10px",
                    border: "none",
                    padding: "10px 20px",
                  }}
                >
                  Add Field
                </button>
              </div>

              <button
                style={{
                  backgroundColor: "blue",
                  color: "white",
                  borderRadius: "10px",
                  border: "none",
                  padding: "10px 20px",
                  marginTop: "150pX",
                }}
              >
                Submit Product
              </button>
            </div>
            <div className="right">
              <div
                className="box"
                style={{ width: "270px", height: "210px", textAlign: "center" }}
              >
                Upload image <br /> <br />
                <img
                  src={Uploadimage}
                  alt="Uploadimage"
                  style={{ maxWidth: "75px" }}
                />{" "}
                <br />
                <button
                  style={{
                    backgroundColor: isHovered ? "blue" : "white",
                    color: isHovered ? "white" : "black",
                    borderRadius: "5px",
                  border: "1px solid #ebedef",
                    padding: "10px 20px",
                    marginTop: "10px",
                    width: "100%",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease, color 0.3s ease",
                  }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  Upload Image
                </button>
              </div>

              <div
                className="box"
                style={{ width: "270px", height: "400px", textAlign: "center" }}
              >
                Product Category
              </div>

              <div
                className="box"
                style={{ width: "270px", height: "150px", textAlign: "Left" }}
              >
                Product Tags
                <br />
               <>
  <style>
    {`
      .input-tags:focus {
        border: 1px solid blue !important;
        outline: none;
      }
    `}
  </style>

  <input
    className="input-tags"
    style={{
      width: "100%",
      marginTop: "20px",
      height: "45px",
      border: "1px solid #ebedef",
      borderRadius: "4px",
      padding: "8px",
      boxSizing: "border-box",
    }}
    placeholder="enter tags"
  />
</>

                <br />
                <i>press enter to add new tag</i>
              </div>

              <div
                className="box"
                style={{ width: "270px", height: "150px", textAlign: "Left" }}
              >
                Product Colors
                <br />
               <>
  <style>
    {`
      .input-color:focus {
        border: 1px solid blue !important;
        outline: none;
      }
    `}
  </style>

  <input
    className="input-color"
    style={{
      width: "100%",
      marginTop: "20px",
      height: "45px",
      border: "1px solid #ebedef",
      borderRadius: "4px",
      padding: "8px",
      boxSizing: "border-box",
    }}
    placeholder="enter color"
  />
</>

                <br />
                <i>Press enter to add new color</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Addproduct;
