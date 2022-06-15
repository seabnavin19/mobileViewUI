import React,{useState} from "react";
import "./Navbar.css";
import qr from '../image/qr.png'
const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
    <div>
      <nav>
        <div className="bar" onClick={() => setShow(!show)}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
        <ul className={show ? 'menu show' : 'menu'}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
        <img src={qr} alt="" className="logo" />
      </nav>
      
    </div>
  );
};

export default Navbar;


