import logo from './logo.svg';
import './App.css';
import Dashboard from './Component/Dashboard';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Addproduct from './Component/Addproduct';
import Productlist from './Component/Productlist';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
         <Route path="/" element={<Dashboard/>}></Route>
         <Route path="/Dashboard" element={<Dashboard />}></Route>
         <Route path="/Addproduct" element={<Addproduct/>}></Route>
         <Route path="/Productlist" element={<Productlist/>}></Route>
         <Route path="/Home" element={<Dashboard />}></Route>
         
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
