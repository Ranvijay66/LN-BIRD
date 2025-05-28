import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate


function LoginForm() {
  const [formData, setFormData] = useState({
    email: "ranvijay6.indiamart@gmail.com",
    password: "",
    rememberMe: false,
  });

   const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in with email: ${formData.email}`);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
        fontFamily: "Poppins, sans-serif",
        padding: "40px",
      }}
    >
      {/* Container for both sides */}
      <div
        style={{
          display: "flex",
          backgroundColor: "#fff",
          boxShadow: "0 0 15px rgba(0,0,0,0.1)",
          borderRadius: "8px",
          overflow: "hidden",
          width: "800px", // total width for two sides
        }}
      >
        {/* Left Gray Div */}
        <div
          style={{
            width: "400px",
            backgroundColor: "#d3d3d3",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2 style={{ color: "#555" }}>Welcome Back</h2>
        </div>

        {/* Right Login Form */}
        <div
          style={{
            padding: "40px",
            width: "400px",
            boxSizing: "border-box",
          }}
        >
          <h2 style={{ marginBottom: "10px", textAlign: "center" }}>Login Now.</h2>
          <p style={{ textAlign: "center", marginBottom: "30px", fontSize: "14px" }}>
            Don't have an account?{" "}
            <a onClick={() => navigate("/RegisterForm")}style={{ color: "#0d6efd", textDecoration: "none"
                ,cursor:"pointer"
             }}>
              Sign Up
            </a>
          </p>

          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            {/* Email */}
            <label style={{ fontWeight: "600" }}>
              Email *
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  marginTop: "5px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  fontSize: "16px",
                }}
              />
            </label>

            {/* Password */}
            <label style={{ fontWeight: "600" }}>
              Password *
              <input
                type="password"
                name="password"
                placeholder="••••••••••••••"
                value={formData.password}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  marginTop: "5px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  fontSize: "16px",
                }}
              />
            </label>

            {/* Remember Me & Forgot Password */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: "14px",
              }}
            >
              <label style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />
                Remember Me
              </label>
              <a onClick={() => navigate("/ResetPassword")} style={{ color: "#0d6efd", textDecoration: "none",
                cursor:"pointer"
               }}>
                Forgot Password ?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              style={{
                backgroundColor: "#0d6efd",
                color: "white",
                padding: "12px",
                border: "none",
                borderRadius: "4px",
                fontWeight: "600",
                fontSize: "16px",
                cursor: "pointer",
                marginTop: "10px",
              }}
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
