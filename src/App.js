import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import { Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={AboutUs} />
      </Routes>
    </Router>
  );
}

export default App;
