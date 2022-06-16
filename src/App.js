
import "./App.css";
import SwitchSample from "./switchSelector";
import Navbar from "./components/Navbar"
import Card from "./components/Card";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './page/home'
import Search from './page/search'
import History  from './page/history';

import Navigation from './page/Navigation'

function App() {
  return (
  
    <div className="App">
      <Navbar/>
      <SwitchSample/>
      <Card />

      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/history" element={<History/>} />
        </Routes>

      </BrowserRouter>
    </div>
  );

}

export default App;
