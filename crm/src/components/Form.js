import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Header from "./Header";

function Form1() {
  // Define the state for the checkbox
  const [isChecked, setIsChecked] = useState(false);

  // Function to handle checkbox state change
  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div style={{ width: "100%" }}>
      <Header />

      <div
        style={{
          marginLeft: "10px",
          marginTop: "10px",
          display: "flex",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <h5 style={{ margin: 0, marginLeft: "10px" }}>Create Leads</h5>
          <a href="https://www.example.com">Edit Page Layout</a>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: "10px",
            marginLeft: "auto",
            width: "400px",
          }}
        >
          <button type="submit" style={{ borderRadius: "5px" }}>
            Cancel
          </button>
          <button type="submit" style={{ borderRadius: "5px" }}>
            save and new
          </button>
          <button
            type="button"
            onclick="alert('Hello!')"
            style={{ borderRadius: "5px", backgroundColor: "lightblue" }}
          >
            Save
          </button>
        </div>
      </div>
      <hr style={{ border: "1px solid black", margin: "20px 0" }} />

      <h6 style={{ marginLeft: "20px" }}>Lead Image</h6>
      <FontAwesomeIcon
        icon={faCircleUser}
        size="4x"
        style={{ marginLeft: "30px", marginTop: "40PX" }}
      />
      <h6 style={{ marginLeft: "20px", marginTop: "100px" }}>
        Lead Information
      </h6>

      <form style={{ marginTop: "50px" }}>
        <label style={{ marginLeft: "30PX" }}>
          Lead Owner
          <input
            type="text"
            name="firstName"
            style={{
              borderRadius: "5px",
              width: "400px",
              padding: "5px",
              marginLeft: "30px",
            }}
          />
        </label>
        <label style={{ marginLeft: "200PX" }}>
          Company
          <input
            type="text"
            name="firstName"
            style={{
              borderRadius: "5px",
              width: "400px",
              padding: "5px",
              marginLeft: "30px",
            }}
          />
        </label>
        <label style={{ marginLeft: "35PX", marginTop: "10px" }}>
          First&nbsp; Name
          <input
            type="text"
            name="firstName"
            style={{
              borderRadius: "5px",
              width: "400px",
              padding: "5px",
              marginLeft: "30px",
            }}
          />
        </label>
        <label style={{ marginLeft: "195PX" }}>
          Last Name
          <input
            type="text"
            name="firstName"
            style={{
              borderRadius: "5px",
              width: "400px",
              padding: "5px",
              marginLeft: "30px",
            }}
          />
        </label>
        <label style={{ marginLeft: "85PX", marginTop: "10px" }}>
          Title
          <input
            type="text"
            name="firstName"
            style={{
              borderRadius: "5px",
              width: "400px",
              padding: "5px",
              marginLeft: "30px",
            }}
          />
        </label>
        <label style={{ marginLeft: "230PX" }}>
          Email
          <input
            type="text"
            name="firstName"
            style={{
              borderRadius: "5px",
              width: "400px",
              padding: "5px",
              marginLeft: "30px",
            }}
          />
        </label>
        <label style={{ marginLeft: "65PX", marginTop: "10px" }}>
          Phone&nbsp;{" "}
          <input
            type="text"
            name="firstName"
            style={{
              borderRadius: "5px",
              width: "400px",
              padding: "5px",
              marginLeft: "25px",
            }}
          />
        </label>
        <label style={{ marginLeft: "245PX" }}>
          Fax
          <input
            type="text"
            name="firstName"
            style={{
              borderRadius: "5px",
              width: "400px",
              padding: "5px",
              marginLeft: "30px",
            }}
          />
        </label>
        <label style={{ marginLeft: "65PX", marginTop: "10px" }}>
          Mobile&nbsp;{" "}
          <input
            type="text"
            name="firstName"
            style={{
              borderRadius: "5px",
              width: "400px",
              padding: "5px",
              marginLeft: "25px",
            }}
          />
        </label>
        <label style={{ marginLeft: "205PX" }}>
          Website
          <input
            type="text"
            name="firstName"
            style={{
              borderRadius: "5px",
              width: "400px",
              padding: "5px",
              marginLeft: "30px",
            }}
          />
        </label>
        <label style={{ marginLeft: "30PX", marginTop: "10px" }}>
          Lead source&nbsp;{" "}
          <input
            type="text"
            name="firstName"
            style={{
              borderRadius: "5px",
              width: "400px",
              padding: "5px",
              marginLeft: "25px",
            }}
          />
        </label>
        <label style={{ marginLeft: "180PX" }}>
          Lead Status
          <input
            type="text"
            name="firstName"
            style={{
              borderRadius: "5px",
              width: "400px",
              padding: "5px",
              marginLeft: "30px",
            }}
          />
        </label>
        <label style={{ marginLeft: "45PX", marginTop: "10px" }}>
          Industry&nbsp;{" "}
          <input
            type="text"
            name="firstName"
            style={{
              borderRadius: "5px",
              width: "400px",
              padding: "5px",
              marginLeft: "35px",
            }}
          />
        </label>
        <label style={{ marginLeft: "140PX" }}>
          No of Employees
          <input
            type="text"
            name="firstName"
            style={{
              borderRadius: "5px",
              width: "400px",
              padding: "5px",
              marginLeft: "30px",
            }}
          />
        </label>
        <label style={{ marginLeft: "10PX", marginTop: "10px" }}>
          Annual Revenue{" "}
          <input
            type="text"
            name="firstName"
            style={{
              borderRadius: "5px",
              width: "400px",
              padding: "5px",
              marginLeft: "15px",
            }}
          />
        </label>
        <label style={{ marginLeft: "220PX" }}>
          Rating
          <input
            type="text"
            name="firstName"
            style={{
              borderRadius: "5px",
              width: "400px",
              padding: "5px",
              marginLeft: "30px",
            }}
          />
        </label>
        <label
          style={{
            marginLeft: "30px",
            marginTop: "10px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <input type="checkbox" checked={isChecked} onChange={handleChange} />
          Email Opt Out
        </label>
        <label style={{ marginLeft: "750PX", marginTop: "0PX" }}>
          Skype ID
          <input
            type="text"
            name="firstName"
            style={{
              borderRadius: "5px",
              width: "400px",
              padding: "5px",
              marginLeft: "30px",
            }}
          />
        </label>
        <label style={{ marginLeft: "695PX", marginTop: "10PX" }}>
          Secondary Email
          <input
            type="text"
            name="firstName"
            style={{
              borderRadius: "5px",
              width: "400px",
              padding: "5px",
              marginLeft: "30px",
            }}
          />
        </label>
        <label style={{ marginLeft: "765PX", marginTop: "10PX" }}>
          Twitter
          <input
            type="text"
            name="firstName"
            style={{
              borderRadius: "5px",
              width: "400px",
              padding: "5px",
              marginLeft: "30px",
            }}
          />
        </label>

        <h6 style={{ marginLeft: "20px" }}>Address Information </h6>

        <label style={{ marginLeft: "85PX", marginTop: "10px" }}>
          Street
          <input
            type="text"
            name="firstName"
            style={{
              borderRadius: "5px",
              width: "400px",
              padding: "5px",
              marginLeft: "30px",
            }}
          />
        </label>
        <label style={{ marginLeft: "230PX" }}>
          City
          <input
            type="text"
            name="firstName"
            style={{
              borderRadius: "5px",
              width: "400px",
              padding: "5px",
              marginLeft: "30px",
            }}
          />
        </label>
        <label style={{ marginLeft: "90PX", marginTop: "10px" }}>
          State
          <input
            type="text"
            name="firstName"
            style={{
              borderRadius: "5px",
              width: "400px",
              padding: "5px",
              marginLeft: "30px",
            }}
          />
        </label>
        <label style={{ marginLeft: "200PX" }}>
          Zip Code
          <input
            type="text"
            name="firstName"
            style={{
              borderRadius: "5px",
              width: "400px",
              padding: "5px",
              marginLeft: "30px",
            }}
          />
        </label>
        <label style={{ marginLeft: "70PX", marginTop: "10px" }}>
          Country
          <input
            type="text"
            name="firstName"
            style={{
              borderRadius: "5px",
              width: "400px",
              padding: "5px",
              marginLeft: "30px",
            }}
          />
        </label>

        <h6 style={{ marginLeft: "20px", marginTop: "20Ppx" }}>
          Description Information{" "}
        </h6>

        <label style={{ marginLeft: "85PX", marginTop: "10px" }}>
          Description{" "}
          <input
            type="text"
            name="firstName"
            style={{
              borderRadius: "5px",
              width: "600px",
              padding: "5px",
              marginLeft: "30px",
            }}
          />
        </label>
      </form>

      <hr style={{ border: "1px solid black", margin: "20px 0" }} />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: "10px",
          width: "100%",
        }}
      >
        Create Forms View
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <button type="reset" style={{ borderRadius: "5px" }}>
            Standard View
          </button>
          <button
            type="button"
            onClick={() => alert("Hello!")}
            style={{ borderRadius: "5px", backgroundColor: "lightblue" }}
          >
            Create a custom form page
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form1;
