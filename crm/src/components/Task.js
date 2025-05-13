import React, { useState } from "react";
import Header from "./Header";
import { FaSearch } from "react-icons/fa";

const TaskForm = () => {
  const [formData, setFormData] = useState({
    taskOwner: "dev.papayapalette",
    subject: "",
    dueDate: "",
    relatedTo: "Contact",
    status: "Not Started",
    priority: "High",
    reminder: false,
    repeat: false,
    description: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const inputStyle = {
    border: "1px solid #ccc",
    outline: "none",
    padding: "10px",
    fontSize: "16px",
    width: "100%",
  };

  return (
    <div style={{ width: "100%" }}>
      <Header />
      <div
        style={{
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          maxWidth: "1600px",
          margin: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <h5>Create Task</h5>
          <a href="https://www.google.com">Edit Page Layout</a>
        </div>

        <hr
          style={{
            width: "100%",
            border: "none",
            borderBottom: "2px solid #000",
          }}
        />

        <form
          className="task-form"
          onSubmit={handleSubmit}
          style={{ width: "100%" }}
        >
          {/* Task Owner */}
          <div
            className="form-group"
            style={{ marginBottom: "20px", width: "100%" }}
          >
            <label>Task Owner</label>
            <select
              name="taskOwner"
              value={formData.taskOwner}
              onChange={handleChange}
              style={inputStyle}
            >
              <option value="dev.papayapalette">dev.papayapalette</option>
              <option value="papayapalette">papayapalette</option>
              <option value="jane.smith">jane.smith</option>
            </select>
          </div>

          {/* Subject */}
          <div
            className="form-group"
            style={{ marginBottom: "20px", width: "100%" }}
          >
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>

          {/* Due Date */}
          <div
            className="form-group"
            style={{ marginBottom: "20px", width: "100%" }}
          >
            <label>Due Date</label>
            <input
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>

          {/* Related To + Search */}
          <div
            className="form-group"
            style={{
              marginBottom: "20px",
              width: "100%",
              display: "flex",
              gap: "10px",
            }}
          >
            <select
              name="relatedTo"
              value={formData.relatedTo}
              onChange={handleChange}
              style={{ ...inputStyle, width: "80%" }}
            >
              <option value="Contact">Contact</option>
              <option value="Lead">Lead</option>
            </select>
            <FaSearch
              style={{
                fontSize: "24px",
                color: "#666",
                alignSelf: "center",
                cursor: "pointer",
              }}
            />
          </div>

          {/* Account Input + Dropdown */}
          <div
            className="input-group"
            style={{ marginBottom: "20px", width: "100%", display: "flex" }}
          >
            <button
              className="btn btn-outline-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{
                border: "1px solid #ccc",
                backgroundColor: "white",
                padding: "10px",
              }}
            >
              Account
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Account
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Separated link
                </a>
              </li>
            </ul>
            <input
              type="text"
              className="form-control"
              aria-label="Text input with dropdown button"
              style={{ ...inputStyle }}
            />
          </div>

          {/* Status */}
          <div
            className="form-group"
            style={{ marginBottom: "20px", width: "100%" }}
          >
            <label>Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              style={{ ...inputStyle, width: "40%" }}
            >
              <option>Not Started</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>
          </div>

          {/* Priority */}
          <div
            className="form-group"
            style={{ marginBottom: "20px", width: "100%" }}
          >
            <label>Priority</label>
            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              style={{ ...inputStyle, width: "40%" }}
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>

          {/* Reminder Toggle */}
          <div
            className="form-check form-switch"
            style={{ marginBottom: "20px" }}
          >
            <label className="form-check-label" htmlFor="reminderSwitch">
              Reminder
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              id="reminderSwitch"
              name="reminder"
              checked={formData.reminder}
              onChange={handleChange}
              style={{ marginLeft: "20px" }}
            />
          </div>

          {/* Repeat Toggle */}
          <div
            className="form-check form-switch"
            style={{ marginBottom: "20px" }}
          >
            <label className="form-check-label" htmlFor="repeatSwitch">
              Repeat
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              id="repeatSwitch"
              name="repeat"
              checked={formData.repeat}
              onChange={handleChange}
              style={{ marginLeft: "20px" }}
            />
          </div>

          {/* Description */}
          <div
            className="form-group"
            style={{ marginBottom: "20px", width: "100%" }}
          >
            <label>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              style={{
                ...inputStyle,
                resize: "vertical",
              }}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            style={{
              borderRadius: "20px",
              backgroundColor: "blue",
              color: "white",
              padding: "12px 30px",
              fontSize: "16px",
              border: "none",
            }}
          >
            Save Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
