import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate


function ResetPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Password reset link sent to: ${email}`);
    // Add actual reset password logic here (API call, etc.)
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
      <div
        style={{
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "8px",
          boxShadow: "0 0 15px rgba(0,0,0,0.1)",
          width: "400px",
          boxSizing: "border-box",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "10px" }}>Reset Password</h2>
        <p style={{ textAlign: "center", fontSize: "14px", marginBottom: "30px" }}>
          Enter your email address to request password reset.
        </p>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <label style={{ fontWeight: "600" }}>
            Email  <span style={{ color: "red" }}>*</span>
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            }}
          >
            Send Mail
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: "20px", fontSize: "14px" }}>
          Remember password?{" "}
          <a onClick={() => navigate("/LoginForm")} style={{ color: "#0d6efd", textDecoration: "none" ,
            cursor:"pointer"
          }}>
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default ResetPassword;
