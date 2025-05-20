import React from "react";
import Header from "./components/Header";
import ImageWithText from "./components/ImageWithText";
import Header2 from "./components/Header2";
import Body from "./components/Body";
import Body2 from "./components/Body2";
import Body3 from "./components/Body3";
import Footer from "./components/Footer";
import Form1 from "../src/components/Form";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Contact from "../src/components/Contact"; // Adjust the path based on your project structure
import Account from "./components/Account";
import Deal from "./components/Deal";
import Solution from "./components/Solution";
import TaskForm from "./components/Task";
import Alllead from "./components/Alllead";
import Allcontact from "./components/Allcontact";
import Allaccount from "./components/Allaccount";
import Alldeals from "./components/Alldeals";
import Alltask from "./components/Alltask";
import Allmeeting from "./components/Allmeeting";
import AllServices from "./components/Allservices";
import Project from "./components/Project";
import Call from "./components/Call";
import Report from "./components/Report";
import Allreport from "./components/Allreport";
import Myreport from "./components/Myreport";
import Favorites from "./components/Favorites";
import Recent from "./components/Recent";
import Delete from "./components/Recentlydelete";
import Accountandcontact from "./components/Accountandcontact";
import Dealreports from "./components/Dealreports";
import Read from "./components/Readreports";
import Campaign from "./components/Campaign";
import Caseandsolution from "./components/Caseandsolution";
import Productreport from "./components/Productreport";
import Vendor from "./components/Vendor";
import Quotereport from "./components/Quotereport";
import Salesorderreport from "./components/Salesorderreport";
import Purchaseorder from "./components/Purchaseorder";
import Invoicereport from "./components/Invoicereport";
import Salesmetrics from "./components/Salesmetrics";
import Emailreport from "./components/Emailreport";
import Meetingreport from "./components/Meetingreport";
import Mycampaign from "./components/Mycampaign";
import Documents from "./components/Documents";
import Visit from "./components/Visit";
import Followup from "./components/Followup";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/leads" element={<Form1 />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Account" element={<Account />}></Route>
          <Route path="/Deal" element={<Deal />}></Route>
          <Route path="/Solution" element={<Solution />}></Route>
          <Route path="/Task" element={<TaskForm />}></Route>
          <Route path="/Alllead" element={<Alllead />}></Route>
          <Route path="/Allcontact" element={<Allcontact />}></Route>
          <Route path="/Allaccount" element={<Allaccount />}></Route>
          <Route path="/Alldeals" element={<Alldeals />}></Route>
          <Route path="/Alltask" element={<Alltask />}></Route>
          <Route path="/Allmeeting" element={<Allmeeting />}></Route>
          <Route path="/Allservices" element={<AllServices />}></Route>
          <Route path="/Project" element={<Project />}></Route>
          <Route path="/Call" element={<Call />}></Route>
          <Route path="/Report" element={<Report />}></Route>
          <Route path="/Favorites" element={<Favorites />}></Route>
          <Route path="/Allreport" element={<Allreport />}></Route>
          <Route path="/Myreport" element={<Myreport />}></Route>
          <Route path="/Recent" element={<Recent />}></Route>
          <Route path="/Recentlydelete" element={<Delete />}></Route>
          <Route
            path="/Accountandcontact"
            element={<Accountandcontact />}
          ></Route>
          <Route path="/Dealreports" element={<Dealreports />}></Route>
          <Route path="/Readreports" element={<Read />}></Route>
          <Route path="/Campaignreports" element={<Campaign />}></Route>
          <Route path="/Caseandsolution" element={<Caseandsolution />}></Route>
          <Route path="/Productreport" element={<Productreport />}></Route>
          <Route path="/Vendor" element={<Vendor />}></Route>
          <Route path="/Quotereport" element={<Quotereport />}></Route>
          <Route
            path="/Salesorderreport"
            element={<Salesorderreport />}
          ></Route>
          <Route path="/Purchaseorder" element={<Purchaseorder />}></Route>
          <Route path="/Invoicereport" element={<Invoicereport />}></Route>
          <Route path="/Salesmetrics" element={<Salesmetrics />}></Route>
          <Route path="/Emailreport" element={<Emailreport />}></Route>
          <Route path="/Meetingreport" element={<Meetingreport />}></Route>
          <Route path="/Mycampaign" element={<Mycampaign />}></Route>
          <Route path="/Documents" element={<Documents />}></Route>
          <Route path="/Visit" element={<Visit />}></Route>
          <Route path="/Followup" element={<Followup />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
