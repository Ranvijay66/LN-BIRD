import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import Sidebar from "./sidebar";
import Uploadimage from "../Uploadimage.png";

function Category() {
  const navigate = useNavigate();
  const [isHovered1, setIsHovered1] = useState(false);

  // Form state
  const [imageFile, setImageFile] = useState(null);
  const [parent, setParent] = useState("");
  const [children, setChildren] = useState("");
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState([]);


  // Add these with your other useState calls
const [showConfirmModal, setShowConfirmModal] = useState(false);
const [categoryToDelete, setCategoryToDelete] = useState(null);
const [showSuccessMessage, setShowSuccessMessage] = useState(false);
const promptDelete = (category) => {
  setCategoryToDelete(category);
  setShowConfirmModal(true);
};
const [successMessage, setSuccessMessage] = useState("");


const confirmDelete = async () => {
  try {
    await axios.delete(
      `http://localhost:5000/api/category/categories/${categoryToDelete._id}`
    );
    setShowConfirmModal(false);
    setCategoryToDelete(null);
    fetchCategories();

    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 2000);
  } catch (error) {
    console.error(error);
    alert("Failed to delete category");
  }
};



  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/category/getcategory"
      );
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

const handleAddCategory = async () => {
  if (!parent) {
    alert("Parent category name is required");
    return;
  }

  const formData = new FormData();
  formData.append("name", parent);
  formData.append("parent", parent);
  formData.append("children", children);
  formData.append("description", description);
  if (imageFile) formData.append("image", imageFile);

  try {
    await axios.post(
      "http://localhost:5000/api/category/addcategory",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    setSuccessMessage("✅ Category added successfully!");
    setShowSuccessMessage(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      setShowSuccessMessage(false);
      setSuccessMessage("");
    }, 3000);

    // Reset form
    setParent("");
    setChildren("");
    setDescription("");
    setImageFile(null);

    fetchCategories(); // Refresh list
  } catch (error) {
    console.error("Error adding category:", error);
    alert("Failed to add category");
  }
};


  const handleDeleteCategory = async (_id) => {
    if (!window.confirm("Are you sure you want to delete this category?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/category/categories/${_id}`);
      alert("Category deleted successfully");
      fetchCategories(); // Refresh after delete
    } catch (error) {
      console.error("Error deleting category:", error);
      alert("Failed to delete category");
    }
  };

  return (
    <div className="d-flex">
      <Sidebar />

      <div className="content flex-grow-1 p-4" style={{ marginTop: "-50px" }}>
        <div className="body-content px-4 py-4" style={{ backgroundColor: "#f1f5f9" }}>
          <div className="d-flex justify-content-between align-items-end flex-wrap">
            <div className="page-title mb-4">
              <Header />
              <h4 className="mb-0 text-start">Category</h4>

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

              <h6
                style={{
                  display: "inline",
                  marginLeft: "10px",
                  opacity: 0.6,
                  fontSize: "13px",
                }}
              >
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

              <input
                type="file"
                accept="image/png, image/jpeg, image/jpg, image/webp"
                onChange={(e) => setImageFile(e.target.files[0])}
                style={{ marginBottom: "15px", width: "100%" }}
              />

              <div style={{ marginBottom: "10px" }}>
                <label>Parent</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input-light-border"
                  value={parent}
                  onChange={(e) => setParent(e.target.value)}
                />
              </div>

              <div style={{ marginBottom: "5px" }}>
                <label>Children</label>
                <input
                  type="text"
                  placeholder="Enter children"
                  style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                  className="input-light-border"
                  value={children}
                  onChange={(e) => setChildren(e.target.value)}
                />
                <small>
                  <i style={{ fontSize: "15px", opacity: "0.6" }}>
                    Press enter to add new children
                  </i>
                </small>
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
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>

              <button
                className="custom-button"
                onClick={handleAddCategory}
                style={{ width: "100%", padding: "0px", cursor: "pointer" }}
              >
                Add Category
              </button>
            </div>

            {/* Right Div */}
            <div style={{ width: "65%", backgroundColor: "#fff" }}>
              <div
                style={{
                  backgroundColor: "#fff",
                  padding: "10px",
                  overflow: "auto",
                  maxHeight: "400px",
                  width: "90%",
                  marginLeft: "20px",
                }}
              >
                <table
                  style={{
                    minWidth: "1000px",
                    borderCollapse: "collapse",
                    width: "100%",
                  }}
                >
                  <thead style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.2)" }}> 
                    <tr style={{ opacity: 0.2 }}>
                    
                      
                      <th style={{ textAlign: "left", padding: "10px" }}>Id</th>
                      <th style={{ textAlign: "left", paddingLeft: "500px" }}>Name</th>
                      <th style={{ textAlign: "left", paddingLeft: "300px" }}>Children</th>
                      <th style={{ textAlign: "left", paddingLeft: "100px" }}>Action</th>
                    </tr>
                    
                  </thead>
                  
                  

                  <tbody>
                    
                    {categories.length === 0 && (
                      <tr>
                        <td colSpan={4} style={{ textAlign: "center", padding: "20px" }}>
                          No categories found
                        </td>
                      </tr>
                    )}

                   
                    {Array.isArray(categories) &&
                      categories.map((cat, index) => (
                        <tr key={cat._id}>
                          <td style={{ padding: "10px" }}>{index + 1}</td>
                          <td style={{ padding: "10px", paddingLeft: "500px" }}>{cat.name}</td>
                          <td style={{ padding: "10px", paddingLeft: "300px" }}>{cat.children}</td>
                          <td style={{ padding: "10px", paddingLeft: "100px" }}>
                            <button
  style={{
    backgroundColor: "red",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "3px",
  }}
  onClick={() => promptDelete(cat)} // <-- changed here
>
  Delete
</button>

                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>

              <div style={{ marginTop: "10px", fontSize: "14px", marginLeft: "20px" }}>
                Showing 1–{categories.length} of {categories.length}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Confirmation Modal */}
{showConfirmModal && (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0,0,0,0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 9999,
    }}
  >
    <div
      style={{
        backgroundColor: "white",
        padding: "30px",
        borderRadius: "8px",
        width: "300px",
        textAlign: "center",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
      }}
    >
      <h5>Are you sure?</h5>
      <p>This will delete the category.</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "20px",
        }}
      >
        <button className="btn btn-danger" onClick={confirmDelete}>
          Yes, Delete
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => setShowConfirmModal(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
)}

{/* Success Message Modal */}
{showSuccessMessage && (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0,128,0,0.1)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 9998,
    }}
  >
    <div
      style={{
        backgroundColor: "white",
        padding: "20px 40px",
        borderRadius: "10px",
        fontSize: "18px",
        fontWeight: "bold",
        color: "green",
      }}
    >
      ✅ Category deleted successfully
    </div>
  </div>
)}

    </div>
    
  );
}



export default Category;
