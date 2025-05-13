import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Header from "./Header";

function Solution() {
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
          marginLeft: "100px",
          marginTop: "20px",
          display: "flex",
          width: "1200px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <h5 style={{ margin: 0, marginLeft: "10px" }}>Create Solution</h5>
          <a href="https://www.google.com">Edit Page Layout</a>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: "20px",
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

      <h6 style={{ marginLeft: "40px", marginTop: "100px" }}>
        Solution Information
      </h6>

      <form style={{ marginTop: "50px", marginLeft: "30px" }}>
        <label style={{ marginLeft: "30PX" }}>
          Solution Title
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
          Solution Owner
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

        <label style={{ marginLeft: "75PX", marginTop: "10px" }}>
          Status&nbsp;
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

        <label style={{ marginLeft: "205PX" }}>
          Product Name
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

        <h6 style={{ marginLeft: "20px", marginTop: "100px" }}>
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

export default Solution;
