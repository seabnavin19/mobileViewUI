import React from 'react';
import './Navbar.css';
import qr from '../image/qr.png'
import * as FaIcons from 'react-icons/fa';

const Navbar = ({openSidebar, closeSidebar}) => {
  return (
    <div className='navbar'>
      <FaIcons.FaBars className='faBar' onClick={openSidebar} />
      <img src={qr} alt="" className="logo" />
    </div>
  )
}

export default Navbar