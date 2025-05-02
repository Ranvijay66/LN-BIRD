import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";



import Header from "./Header";

function Alldeals() {

    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <div style={{ width: "100%" }}>
            <Header />

            <div style={{ backgroundColor: 'lightgreen', marginTop: '6px', padding: '10px' }}>
                {/* Flex container for dropdowns */}
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    
                    {/* First dropdown aligned to the left */}
                    <div className="dropdown">
                        <button
                            className="btn btn-secondary dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            All Deals
                        </button>
                        <ul className="dropdown-menu">
                            <li><button className="dropdown-item" type="button">Action</button></li>
                            <li><button className="dropdown-item" type="button">Another action</button></li>
                            <li><button className="dropdown-item" type="button">Something else here</button></li>
                        </ul>
                    </div>

                    {/* Container for last three buttons with gap of 10px */}
                    <div style={{ display: 'flex', gap: '10px' }}>
                        {/* Second dropdown aligned to the right */}
                        <div className="dropdown">
                            <button
                                className="btn btn-secondary dropdown-toggle d-flex align-items-center justify-content-center"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                style={{
                                    width: "auto", // Adjust button width based on content
                                    lineHeight: ".4",
                                    whiteSpace: "pre-line",
                                    fontFamily: "monospace",
                                    textAlign: "center", // Horizontal center for text
                                    padding: "8px 0", // Optional: tighter vertical spacing
                                }}
                            >
                                • ━━━━━{"\n"}• ━━━━━{"\n"}• ━━━━━
                            </button>

                            <ul className="dropdown-menu" style={{ position: "absolute", right: 0 }}>
                                <li><button className="dropdown-item" type="button">List View</button></li>
                                <li>&nbsp;&nbsp;&nbsp;&nbsp;<b>Canvas View</b></li>
                                <li><button className="dropdown-item" type="button">Custom View List</button></li>
                                <li><button className="dropdown-item" type="button">Tile View</button></li>
                                <li><button className="dropdown-item" type="button">Table View</button></li>
                            </ul>
                        </div>

                        {/* Third dropdown */}
                        <div className="dropdown">
                            <button
                                className="btn btn-primary dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Create Deal
                            </button>
                            <ul className="dropdown-menu">
                                <li><button className="dropdown-item" type="button">Import Leads</button></li>
                                <li><button className="dropdown-item" type="button">Import Notes</button></li>
                                
                            </ul>
                        </div>

                        {/* Fourth dropdown */}
                        <div className="dropdown">
                            <button
                                className="btn btn-secondary dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Actions
                            </button>
                            <ul className="dropdown-menu">
                                <li><button className="dropdown-item" type="button">Mass Delete</button></li>
                                <li><button className="dropdown-item" type="button">Mass Update</button></li>
                                <li><button className="dropdown-item" type="button">Mass Email</button></li>
                                <li><button className="dropdown-item" type="button">Approve Leads</button></li>
                                <li><button className="dropdown-item" type="button">Add to Campaigns</button></li>
                                <li><button className="dropdown-item" type="button">Export Leads</button></li>
                                <li><button className="dropdown-item" type="button">Zoho sheet view</button></li>
                                <li><button className="dropdown-item" type="button">Print View</button></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>


            <h6 style={{marginLeft:'20px',marginTop:'10px',marginBottom:'0'}}>Total records 10</h6>
{/* Wrapper with flex layout */}
<div style={{ display: 'flex', marginTop: '10px', padding: '10px',height:'500px',
   
 }}>

  

  {/* Left Section with both dropdowns */}
  <div style={{ flex: 1, display: 'flex',
    borderRadius:'10px', flexDirection: 'column', gap: '10px',overflowY:'auto',
    backgroundColor:'lightgrey' }}>
    {/* First Dropdown */}

    <h6 style={{marginLeft:'10px',marginTop:'10px'}}>Filter Deals By </h6>

    <div style={{ position: 'relative', width: '80%' }}>
  <input type="text" placeholder="Search..." style={{ width: '100%',    marginLeft:'10px', borderRadius: '5px' }} />
  <span style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>🔍</span>
</div>



    <div style={{marginLeft:'10px'}}>
  <button
    className="btn btn-primary d-flex align-items-center"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#collapseCheckbox1"
    aria-expanded="false"
    aria-controls="collapseCheckbox1"
  >
    <FontAwesomeIcon icon={faChevronDown} className="me-2" />
    System Defined Filters
  </button>

  <div className="collapse mt-2" id="collapseCheckbox1">
    <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
      <li>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="option1-1" />
          <label className="form-check-label" htmlFor="option1-1">Touched Records</label>
        </div>
      </li>
      <li>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="option1-2" />
          <label className="form-check-label" htmlFor="option1-2">Untouched Records</label>
        </div>
      </li>
      <li>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="option1-3" />
          <label className="form-check-label" htmlFor="option1-3">Record Action</label>
        </div>
      </li>
      <li>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="option1-3" />
          <label className="form-check-label" htmlFor="option1-3">Related Records Action</label>
        </div>
      </li>
      <li>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="option1-3" />
          <label className="form-check-label" htmlFor="option1-3">Latest Email Status</label>
        </div>
      </li>
      <li>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="option1-3" />
          <label className="form-check-label" htmlFor="option1-3">Activities</label>
        </div>
      </li>
      <li>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="option1-3" />
          <label className="form-check-label" htmlFor="option1-3">Campaigns</label>
        </div>
      </li>
      
      
      
    </ul>
  </div>
</div>


    {/* Second Dropdown */}
    <div style={{marginLeft:'10px'}}>
  <button
    className="btn btn-primary d-flex align-items-center"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#collapseCheckbox2"
    aria-expanded="false"
    aria-controls="collapseCheckbox1"
  >
    <FontAwesomeIcon icon={faChevronDown} className="me-2" />
    Filter  By Fields
  </button>

  <div className="collapse mt-2" id="collapseCheckbox2">
    <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
      <li>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="option1-1" />
          <label className="form-check-label" htmlFor="option1-1">Account Name</label>
        </div>
      </li>
      <li>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="option1-2" />
          <label className="form-check-label" htmlFor="option1-2">Amount</label>
        </div>
      </li>
      <li>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="option1-3" />
          <label className="form-check-label" htmlFor="option1-3">Campaign Source</label>
        </div>
      </li>
      <li>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="option1-3" />
          <label className="form-check-label" htmlFor="option1-3">Closing Date</label>
        </div>
      </li>
      <li>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="option1-3" />
          <label className="form-check-label" htmlFor="option1-3">Contact Name</label>
        </div>
      </li>
      <li>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="option1-3" />
          <label className="form-check-label" htmlFor="option1-3">Created By</label>
        </div>
      </li>
      <li>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="option1-3" />
          <label className="form-check-label" htmlFor="option1-3">Created Time</label>
        </div>
      </li>
      <li>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="option1-3" />
          <label className="form-check-label" htmlFor="option1-3">Deal Name</label>
        </div>
      </li>
      <li>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="option1-3" />
          <label className="form-check-label" htmlFor="option1-3">Deal owner</label>
        </div>
      </li>
      <li>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="option1-3" />
          <label className="form-check-label" htmlFor="option1-3">Expected Revenue</label>
        </div>
      </li>
      <li>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="option1-3" />
          <label className="form-check-label" htmlFor="option1-3">Last Activities Time</label>
        </div>
      </li>
      <li>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="option1-3" />
          <label className="form-check-label" htmlFor="option1-3">Lead Convertion Time</label>
        </div>
      </li>
      <li>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="option1-3" />
          <label className="form-check-label" htmlFor="option1-3">Lead source</label>
        </div>
      </li>
      <li>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="option1-3" />
          <label className="form-check-label" htmlFor="option1-3">Modified By</label>
        </div>
      </li>
      <li>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="option1-3" />
          <label className="form-check-label" htmlFor="option1-3">Modified Time</label>
        </div>
      </li>
      <li>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="option1-3" />
          <label className="form-check-label" htmlFor="option1-3">Next Step</label>
        </div>
      </li>
      <li>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="option1-3" />
          <label className="form-check-label" htmlFor="option1-3">Overall Sales Duration</label>
        </div>
      </li>
      <li>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="option1-3" />
          <label className="form-check-label" htmlFor="option1-3">Probability(%)</label>
        </div>
      </li>
      <li>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="option1-3" />
          <label className="form-check-label" htmlFor="option1-3">Reason For Loss</label>
        </div>
      </li>
      <li>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="option1-3" />
          <label className="form-check-label" htmlFor="option1-3">Sales Cycle Duration</label>
        </div> </li>
      
     
      <li>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="option1-3" />
          <label className="form-check-label" htmlFor="option1-3">stage</label>
        </div>
      </li>
      <li>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="option1-3" />
          <label className="form-check-label" htmlFor="option1-3">Type</label>
        </div>
      </li>
      <li>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="option1-3" />
          <label className="form-check-label" htmlFor="option1-3">Modified Time</label>
        </div>
      </li>
      <li>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="option1-3" />
          <label className="form-check-label" htmlFor="option1-3">No of Employees</label>
        </div>
      </li>
      <li>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="option1-3" />
          <label className="form-check-label" htmlFor="option1-3">Phone </label>
        </div>
      </li>
      <li>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="option1-3" />
          <label className="form-check-label" htmlFor="option1-3">Rating</label>
        </div>
      </li>
      <li>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="option1-3" />
          <label className="form-check-label" htmlFor="option1-3">Solution</label>
        </div>
      </li>
      <li>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="option1-3" />
          <label className="form-check-label" htmlFor="option1-3">Secondary Email</label>
        </div>
      </li>
      <li>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="option1-3" />
          <label className="form-check-label" htmlFor="option1-3">Skype ID</label>
        </div>
      </li>
      <li>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="option1-3" />
          <label className="form-check-label" htmlFor="option1-3">State</label>
        </div>
      </li>
      <li>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="option1-3" />
          <label className="form-check-label" htmlFor="option1-3">Title</label>
        </div>
      </li>
      <li>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="option1-3" />
          <label className="form-check-label" htmlFor="option1-3">Unsubscribe Mode</label>
        </div>
      </li>
      <li>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="option1-3" />
          <label className="form-check-label" htmlFor="option1-3">Unsubscribe Time</label>
        </div>
      </li>
      <li>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="option1-3" />
          <label className="form-check-label" htmlFor="option1-3">Website</label>
        </div>
      </li>
      <li>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="option1-3" />
          <label className="form-check-label" htmlFor="option1-3">Zipcode</label>
        </div>
      </li>
      
    </ul>
  </div>
</div>



<div style={{marginLeft:'10px'}}>
  <button
    className="btn btn-primary d-flex align-items-center"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#collapseCheckbox3"
    aria-expanded="false"
    aria-controls="collapseCheckbox1"
  >
    <FontAwesomeIcon icon={faChevronDown} className="me-2" />
    Filter By Related Modules
  </button>

  <div className="collapse mt-2" id="collapseCheckbox3">
    <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
      <li>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="option1-1" />
          <label className="form-check-label" htmlFor="option1-1">Calls</label>
        </div>
      </li>
      <li>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="option1-2" />
          <label className="form-check-label" htmlFor="option1-2">Invitees (Invited Meetings)</label>
        </div>
      </li>
      <li>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="option1-3" />
          <label className="form-check-label" htmlFor="option1-3">Meetings</label>
        </div>
      </li>
      <li>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="option1-3" />
          <label className="form-check-label" htmlFor="option1-3">Notes</label>
        </div>
      </li>
      <li>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="option1-3" />
          <label className="form-check-label" htmlFor="option1-3">Tasks</label>
        </div>
      </li>
    </ul>
  </div>
</div>


  </div>

  {/* Right Section with scrollable table */}
  <div style={{ flex: 3, paddingLeft: '20px', maxHeight: '500px', overflowY: 'auto',display:'flex' }}>
  <div
      onClick={() => setIsExpanded(!isExpanded)}
      style={{
        width: isExpanded ? '400px' : '100px',
        height: '500px',
        backgroundColor: 'lightgrey',
        cursor: 'pointer',
        transition: 'width 0.3s ease',
        overflow: 'hidden',
        padding: '10px',
        display: 'flex',
        alignItems: 'flex-start',
        whiteSpace: 'nowrap',
      }}
    >
      <strong
        style={
          isExpanded
            ? {
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }
            : {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                lineHeight: '1.2',
                height: '100%',
              }
        }
      >
        {
          isExpanded
            ? 'Qualification 1 .10% $250,000.00'
            : 'Qualification 1 .10% $250,000.00'.split('').map((char, idx) => <span key={idx}>{char}</span>)
        }
      </strong>

      {isExpanded && (
        <div
          style={{
            marginLeft: '10px',
            whiteSpace: 'normal',
            flex: 1,
          }}
        >
          This is the expanded content for Div 1.
        </div>
      )}
    </div>


    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
    
  </div>
</div>



        </div>
    );
}

export default Alldeals ;
