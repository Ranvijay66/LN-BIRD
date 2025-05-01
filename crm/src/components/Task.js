import React, { useState } from 'react';
import Header from './Header';
import { FaSearch } from 'react-icons/fa';

const TaskForm = () => {
  const [formData, setFormData] = useState({
    taskOwner: 'dev.papayapalette',
    subject: '',
    dueDate: '',
    relatedTo: 'Contact',
    status: 'Not Started',
    priority: 'High',
    reminder: false,
    repeat: false,
    description: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const inputStyle = {
    border: 'none',
    outline: 'none',
    boxShadow: 'none'
  };

  return (
    <div style={{ width: '100%' }}>
      <Header />
      <div style={{ marginLeft: "100px", marginTop: "20px", display: "flex", flexDirection: "column", width: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0px" }}>
          <h5 style={{ marginRight: "20px", marginLeft: "10px" }}>Create Task</h5>
          <a href="https://www.google.com">Edit Page Layout</a>
        </div>

        <hr style={{ width: '100%', border: 'none', borderBottom: '2px solid #000' }} />

        <form className="task-form" onSubmit={handleSubmit}>

          {/* Task Owner */}
          <div className="form-group" style={{ borderBottom: '1px solid #333', width: '50%' }}>
            <label style={{ marginTop: '50px' }}>Task Owner</label>
            <select
              name="taskOwner"
              value={formData.taskOwner}
              onChange={handleChange}
              style={{ marginLeft: '50px', width: '70%', ...inputStyle }}
            >
              <option value="dev.papayapalette">dev.papayapalette</option>
              <option value="papayapalette">papayapalette</option>
              <option value="jane.smith">jane.smith</option>
            </select>
          </div>

          {/* Subject */}
          <div className="form-group" style={{ borderBottom: '1px solid #333', width: '50%' }}>
            <label style={{ marginTop: '20px' }}>Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              style={{ marginLeft: '100px', width: '70%', ...inputStyle }}
            />
          </div>

          {/* Due Date */}
          <div className="form-group" style={{ borderBottom: '1px solid #333', width: '50%' }}>
            <label style={{ marginTop: '20px',marginLeft:'0px' }}>Due Date</label>
            <input
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              style={{ marginLeft: '85px', width: '70%', ...inputStyle }}
            />
          </div>

          {/* Related To + Search */}
          <div className="form-group" style={{ display: 'flex', borderBottom: '1px solid #333', alignItems: 'center', gap: '20px', width: '50%', marginTop: '20px' }}>
            <select
              name="relatedTo"
              value={formData.relatedTo}
              onChange={handleChange}
              style={{ width: '50%', ...inputStyle }}
            >
              <option value="Contact">Contact</option>
              <option value="Lead">Lead</option>
            </select>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', width: '50%' }}>
              <FaSearch style={{ fontSize: '20px', color: '#ccc', cursor: 'pointer' }} />
            </div>
          </div>

          {/* Account + Dropdown Button Input */}
          <div className="input-group mb-3" style={{ display: 'flex', borderBottom: '1px solid #333', alignItems: 'start', width: '50%', marginTop: '20px' }}>
            <button
              className="btn btn-outline-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ border: 'none', backgroundColor: 'transparent' }}
            >
              Account
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Account</a></li>
              <li><a className="dropdown-item" href="#">Separated link</a></li>
            </ul>
            <input
              type="text"
              className="form-control"
              aria-label="Text input with dropdown button"
              style={{ ...inputStyle }}
            />
          </div>

          {/* Status */}
          <div className="form-group" style={{ borderBottom: '1px solid #333', width: '50%' }}>
            <label>Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              style={{ marginLeft: '100px', width: '30%', ...inputStyle }}
            >
              <option>Not Started</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>
          </div>

          {/* Priority */}
          <div className="form-group" style={{ borderBottom: '1px solid #333', width: '50%', marginTop: '20px' }}>
            <label>Priority</label>
            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              style={{ marginLeft: '95px', width: '30%', ...inputStyle }}
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>

          {/* Reminder Toggle */}
          <div className="form-check form-switch" style={{ display: 'flex', alignItems: 'center', marginLeft: '20px', marginTop: '20px' }}>
            <label className="form-check-label" htmlFor="reminderSwitch" style={{ marginRight: '10px' }}>Reminder</label>
            <input
              className="form-check-input"
              type="checkbox"
              id="reminderSwitch"
              name="reminder"
              checked={formData.reminder}
              onChange={handleChange}
              style={{ marginLeft: '70px' }}
            />
          </div>

          {/* Repeat Toggle */}
          <div className="form-check form-switch" style={{ display: 'flex', alignItems: 'center', marginLeft: '20px', marginTop: '20px' }}>
            <label className="form-check-label" htmlFor="repeatSwitch" style={{ marginRight: '50px' }}>Repeat</label>
            <input
              className="form-check-input"
              type="checkbox"
              id="repeatSwitch"
              name="repeat"
              checked={formData.repeat}
              onChange={handleChange}
              style={{ marginLeft: '50px' }}
            />
          </div>

          {/* Description */}
          <div className="form-group" style={{ marginLeft: '20px', marginTop: '20px', display: 'flex', flexDirection: 'column' }}>
  <label style={{ marginBottom: '8px' }}>Description</label>
  <textarea
    name="description"
    value={formData.description}
    onChange={handleChange}
    style={{
      padding: '8px',
      fontSize: '14px',
      border: '2px solid #000',  // Corrected border
      outline: 'none',
      width: '50%',
        // You may want to remove this if it overrides the border
    }}
  />
</div>


          {/* Submit */}
          <button type="submit" style={{ marginLeft: '20px',borderRadius:'20px',
            backgroundColor:'blue', marginTop: '50px',   padding: '10px 20px' }}>
            Save Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
