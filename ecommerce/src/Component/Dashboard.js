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


function Dashboard() {
  const [productsOpen, setProductsOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const navigate = useNavigate();


  return (
    <div className="d-flex">
    <Sidebar/>

      {/* Content Area */}
      <div className="content flex-grow-1 p-4" style={{ marginTop: "-50px" }}>
        <div className="body-content px-4 py-4 bg-light">
          <div className="d-flex justify-content-between align-items-end flex-wrap">
            <div className="page-title mb-4">
              <Header />
              <h3 className="mb-0 text-start">Dashboard</h3>
              <p className="text-muted m-0 text-start">
                Welcome to your dashboard
              </p>
            </div>
          </div>

          {/* Dashboard Cards */}
          <div className="d-flex gap-3">
            {/* Card 1 */}
            <div className="card" style={{ width: "18rem", height: "100px" }}>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h5 className="card-title mb-0">0</h5>
                  <img src={Icon1} alt="Icon1" style={{ maxWidth: "40px" }} />
                </div>
                <h6 className="card-subtitle mb-0 text-body-secondary text-start">
                  Today's order
                </h6>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card" style={{ width: "18rem", height: "100px" }}>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h5 className="card-title mb-0">0</h5>
                  <img
                    src={Graphimage}
                    alt="Graph"
                    style={{ maxWidth: "40px" }}
                  />
                </div>
                <h6 className="card-subtitle mb-0 text-body-secondary text-start">
                  Yesterday orders
                </h6>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card" style={{ width: "18rem", height: "100px" }}>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h5 className="card-title mb-0">0</h5>
                  <img src={User} alt="User" style={{ maxWidth: "40px" }} />
                </div>
                <h6 className="card-subtitle mb-0 text-body-secondary text-start">
                  Monthly orders
                </h6>
              </div>
            </div>

            {/* Card 4 */}
            <div className="card" style={{ width: "18rem", height: "100px" }}>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h5 className="card-title mb-0">0</h5>
                  <img src={Cube} alt="Cube" style={{ maxWidth: "40px" }} />
                </div>
                <h6 className="card-subtitle mb-0 text-body-secondary text-start">
                  Total orders
                </h6>
              </div>
            </div>
          </div>

          {/* Sales Statistics Section */}
          <div
            style={{
              fontFamily: "Arial, sans-serif",
              padding: "20px",
              maxWidth: "100%",
              height: "20%",
              backgroundColor:"white",
              // border: "1px solid #ccc",
              marginTop: "30px",
            }}
          >
            <h5 style={{ textAlign: "left" }}>Sales Statistics</h5>

            {/* Navigation Bar */}
            <div style={{ display: "flex", gap: "20px", marginBottom: "10px" }}>
              <a href="#" style={{ textDecoration: "none", color: "#007bff" }}>
                Sales
              </a>
              <a href="#" style={{ textDecoration: "none", color: "#007bff" }}>
                Order
              </a>
            </div>

            <hr />

            {/* Scale from 1.0 to 0.0 */}
          <div
  style={{
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    
  }}
>
  {/* Vertical Scale */}
  <div
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginRight: "10px",  // Margin on the right (from the content next to it)
    marginLeft: "10px",   // Margin on the left side
    borderRight: "1px solid black", // Right border for separation
    paddingRight: "10px",  // Adds space inside the container next to the border
  }}
>
  <div>1.0</div> 
  <div>0.9</div>
  <div>0.8</div>
  <div>0.7</div>
  <div>0.6</div>
  <div>0.5</div>
  <div>0.4</div>
  <div>0.3</div>
  <div>0.2</div>
  <div>0.1</div>
  <div>0.0</div>
</div>



  {/* Horizontal Lines for Each Scale */}
 
</div>



          </div>

          <div style={{width:"50%",height:"300px",backgroundColor:"white",marginTop:"20px",
            padding:"20px", borderRadius:"10px"}}> <h6>  Most Selling Category     </h6></div>
        </div>


        <div className="recent-orders"style={{
    backgroundColor: "white", borderRadius:"10px"
  
  }} overflow="auto">
  <div className="d-flex justify-content-between align-items-center mb-3">
    <h5 className="mb-0" style={{ marginLeft: "10px",padding:"5px" }}>Recent Orders</h5>

    <a href="#" className="text-primary">View All</a>
  </div>

  {/* Scrollable container */}
  <div style={{ maxHeight: "100px", overflow: "auto" ,fontSize:'15px'}}>
    <table className="table table-bordered table-hover" style={{ minWidth: "900px" }}>
      <thead className="table-light" style={{ position: "sticky", top: 0, background: "#f8f9fa", zIndex: 1 }}>
        <tr>
          <th>INVOICE NO</th>
          <th>ORDER TIME</th>
          <th>CUSTOMER NAME</th>
          <th>Price</th>
          <th>Status</th>
          <th>Action</th>
          <th>Invoice</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan="7" className="text-center text-muted">
            No recent orders available.
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div className="text-end text-muted mt-2">
    Showing 1-0 of 0
  </div>
</div>


        
       
      </div>
    </div>
  );
}

export default Dashboard;
