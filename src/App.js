import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import "./App.css";
import SwitchSample from "./switchSelector";
import Card from "./components/Card";
import Backdrop from './components/Backdrop';
import Search from './page/search'
import History  from './page/history';
import Navigation from './page/Navigation'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  const[sidebar, setSidebar] = useState(false);

  const toggleSiderbar = () => {
    setSidebar ((prevState) => !prevState)
  }
  return (
    <div className="App">
      <Navbar openSidebar = {toggleSiderbar}  />
      <Backdrop sidebar={sidebar} closeSidebar={toggleSiderbar}/>
      <Sidebar sidebar={sidebar}/>
      
      <SwitchSample/>
      <Card />

      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </div>
  );

}

export default App;
