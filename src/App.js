import React from "react";
import "./App.css";
import SwitchSample from "./components/switchSelector";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./page/Navigation";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from './page/home'
// import Search from './page/search'
// import History  from './page/history';
// import Sidebar from './Components/Sidebar';
// import AboutUs from './pages/AboutUs';

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
