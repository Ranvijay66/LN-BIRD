import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Header from "./Header";

function Contact() {
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
          width: "1200px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <h5 style={{ margin: 0, marginLeft: "10px" }}>Create Contact</h5>
          <a href="https://www.example.com">Edit Page Layout</a>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: "20px",
            width: "400px",
            marginLeft: "auto",
          }}
        >
          <button type="submit" style={{ borderRadius: "5px" }}>
            Cancel
          </button>
          <button type="reset" style={{ borderRadius: "5px" }}>
            Save and New
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

      <h6 style={{ marginLeft: "20px" }}>Contact Image</h6>
      <FontAwesomeIcon
        icon={faCircleUser}
        size="4x"
        style={{ marginLeft: "30px", marginTop: "40PX" }}
      />
      <h6 style={{ marginLeft: "20px", marginTop: "100px" }}>
        Contact Information
      </h6>

      <form style={{ marginTop: "50px" }}>
        <label style={{ marginLeft: "30PX" }}>
          Contact Owner
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
          Lead source
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

        <label style={{ marginLeft: "55PX", marginTop: "10px" }}>
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

        <label style={{ marginLeft: "211PX" }}>
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

        <label style={{ marginLeft: "35PX", marginTop: "10px" }}>
          Account Name
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

        <label style={{ marginLeft: "185PX" }}>
          Vendor Name
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

        <label style={{ marginLeft: "93PX", marginTop: "10px" }}>
          Email&nbsp;{" "}
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
          Title
          <input
            type="text"
            name="firstName"
            style={{
              borderRadius: "5px",
              width: "400px",
              padding: "5px",
              marginLeft: "43px",
            }}
          />
        </label>

        <label style={{ marginLeft: "85PX", marginTop: "10px" }}>
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

        <label style={{ marginLeft: "205PX" }}>
          Department
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

        <label style={{ marginLeft: "40PX", marginTop: "10px" }}>
          Other Phone&nbsp;{" "}
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

        <label style={{ marginLeft: "195PX" }}>
          Home Phone
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
          Mobile&nbsp;{" "}
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

        <label style={{ marginLeft: "265PX" }}>
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

        <label style={{ marginLeft: "85PX", marginTop: "10px" }}>
          Assistant
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

        <label style={{ marginLeft: "200PX" }}>
          Date of Birth
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
            marginLeft: "730px",
            marginTop: "10px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          Email Opt Out
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleChange}
            style={{ marginLeft: "10px" }} // Adds space between text and checkbox
          />
        </label>

        <label style={{ marginLeft: "850PX", marginTop: "10PX" }}>
          Asst Phone
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
        <label style={{ marginLeft: "788PX", marginTop: "10PX" }}>
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
        <label style={{ marginLeft: "735PX", marginTop: "10PX" }}>
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
        <label style={{ marginLeft: "803PX", marginTop: "10PX" }}>
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
        <label style={{ marginLeft: "760PX", marginTop: "10PX" }}>
          Reporting To
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

        <h6 style={{ marginLeft: "20px", marginTop: "20px" }}>
          Address Information{" "}
        </h6>

        <label style={{ marginLeft: "85PX", marginTop: "10px" }}>
          Mailing Street
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

        <label style={{ marginLeft: "150PX", marginTop: "10px" }}>
          Other Street
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

        <label style={{ marginLeft: "98PX", marginTop: "10px" }}>
          Mailing City
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

        <label style={{ marginLeft: "165PX", marginTop: "10px" }}>
          Other City
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
          Mailing State
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

        <label style={{ marginLeft: "155PX", marginTop: "10px" }}>
          Other State
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
        <label style={{ marginLeft: "103PX", marginTop: "10px" }}>
          Mailing Zip
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

        <label style={{ marginLeft: "168PX", marginTop: "10px" }}>
          Other Zip
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
        <label style={{ marginLeft: "68PX", marginTop: "10px" }}>
          Mailing Country
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

        <label style={{ marginLeft: "135PX", marginTop: "10px" }}>
          Other Country
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

        <label style={{ marginLeft: "130PX", marginTop: "10px" }}>
          Description{" "}
          <input
            type="text"
            name="firstName"
            style={{
              borderRadius: "5px",
              width: "700px",
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

export default Contact;
