import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Header from "./Header";

function Account() {
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
          <h5 style={{ margin: 0, marginLeft: "10px" }}>Create Account</h5>
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

      <h6 style={{ marginLeft: "20px" }}>Account Image</h6>
      <FontAwesomeIcon
        icon={faCircleUser}
        size="4x"
        style={{ marginLeft: "30px", marginTop: "40PX" }}
      />
      <h6 style={{ marginLeft: "20px", marginTop: "100px" }}>
        Account Information
      </h6>

      <form style={{ marginTop: "50px" }}>
        <label style={{ marginLeft: "30PX" }}>
          Account Owner
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

        <label style={{ marginLeft: "30PX", marginTop: "10px" }}>
          Account&nbsp; Name
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
          Phone
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
          Account Site
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

        <label style={{ marginLeft: "220PX" }}>
          Fax
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

        <label style={{ marginLeft: "30PX", marginTop: "10px" }}>
          Parent Account&nbsp;{" "}
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

        <label style={{ marginLeft: "174PX" }}>
          Website
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

        <label style={{ marginLeft: "53PX", marginTop: "10px" }}>
          Account No&nbsp;{" "}
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

        <label style={{ marginLeft: "145PX" }}>
          Ticker Symbol
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
          Account Type&nbsp;{" "}
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

        <label style={{ marginLeft: "170PX" }}>
          Ownership
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

        <label style={{ marginLeft: "170PX", marginTop: "10px" }}>
          Employees
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
          Annual Revenue
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

        <label style={{ marginLeft: "180PX" }}>
          SIC Code
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

        <h6
          style={{
            marginLeft: "20px",
            marginTop: "50px",
            display: "inline-block",
            marginRight: "980px",
          }}
        >
          Address Information
        </h6>
        <button
          type="submit"
          style={{ borderRadius: "5px", display: "inline-block" }}
        >
          Copy Address
        </button>

        <label style={{ marginLeft: "85PX", marginTop: "10px" }}>
          Billing Street
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

        <label style={{ marginLeft: "120PX", marginTop: "10px" }}>
          Shipping Street
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

        <label style={{ marginLeft: "78PX", marginTop: "10px" }}>
          Billinging City
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
          Shipping City
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
          Billing State
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

        <label style={{ marginLeft: "130PX", marginTop: "10px" }}>
          Shipping State
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
        <label style={{ marginLeft: "95PX", marginTop: "10px" }}>
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

        <label style={{ marginLeft: "150PX", marginTop: "10px" }}>
          Billing Code
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
          Shipping Code
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
          Billing Country
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
        <label style={{ marginLeft: "50PX", marginTop: "10px" }}>
          Shipping Country
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
          margin: "20px",
        }}
      >
        Create Forms View
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginRight: "20px",
          }}
        >
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

export default Account;
