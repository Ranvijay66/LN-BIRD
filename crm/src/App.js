import React from 'react';
import Header from "./components/Header";
import ImageWithText from './components/ImageWithText';
import Header2 from './components/Header2';
import Body from './components/Body';
import Body2 from './components/Body2';
import Body3 from './components/Body3';
import Footer from './components/Footer';
import Form1 from '../src/components/Form';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Contact from '../src/components/Contact';  // Adjust the path based on your project structure
import Account from './components/Account';
import Deal from './components/Deal';
import Solution from './components/Solution';
import TaskForm from './components/Task';
import Alllead from './components/Alllead';
import Allcontact from './components/Allcontact';
import Allaccount from './components/Allaccount';
import Alldeals from './components/Alldeals';


function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
      <Route path='/leads' element={<Form1/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path='/Account' element={<Account/>}></Route>
      <Route path='/Deal' element={<Deal/>}></Route>
      <Route path='/Solution' element={<Solution/>}></Route>
      <Route path='/Task' element={<TaskForm/>}></Route>
      <Route path='/Alllead' element={<Alllead/>}></Route>
      <Route path='/Allcontact' element={<Allcontact/>}></Route>
      <Route path='/Allaccount' element={<Allaccount/>}></Route>
      <Route path='/Alldeals' element={<Alldeals/>}></Route>


    </Routes>
    </BrowserRouter>
    </div>
    // <>
    //   <Header />
    //   <ImageWithText />
    //   <Header2/>
    //   <Body/>
    //   <Body2/>
    //   <Body3/>
    //   <Footer/>
    //   <Form1/>
      
    // </>
  );
}

export default App;
