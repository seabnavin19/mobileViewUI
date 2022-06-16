import React from 'react';
import './Sidebar.css';


const Sidebar = ({sidebar}) => {
  return (
    
    <div className={sidebar? "sidebar sidebar--open" : "sidebar"}>
    
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    
    </div>
  )
}

export default Sidebar