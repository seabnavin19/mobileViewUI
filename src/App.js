import "./App.css";
import SwitchSample from "./Components/switchSelector";
import Navbar from "./Components/Navbar";
// import Card from "./Components/Card";
import { BrowserRouter } from "react-router-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from './page/home'
// import Search from './page/search'
// import History  from './page/history';

import Navigation from "./page/Navigation";

import React from "react";

import "./App.css";
// import Sidebar from './Components/Sidebar';
// import AboutUs from './pages/AboutUs';

// import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <SwitchSample />
      {/* <Router>
      <Sidebar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={AboutUs} />
      </Routes>
    </Router> */}

      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </div>
  );
}

export default App;
