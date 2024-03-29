import React, { useState, useRef } from "react";
import "./Navbar.css";
import qr from "../image/qr.png";
import Snackbar from "./Snackbar";

const SnackbarType = {
  success: "success",
  fail: "fail",
};

const Navbar = () => {
  const [show, setShow] = useState(false);
  const snackbarRef = useRef(null);
  return (
    <div>
      <nav className="topNav">
        <div className="bar" onClick={() => setShow(!show)}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <ul className={show ? "menu show" : "menu"}>
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
        <img
          src={qr}
          alt=""
          className="logo"
          onClick={() => {
            snackbarRef.current.show();
          }}
        />
      </nav>
      <Snackbar
        ref={snackbarRef}
        message="Bluetoothを有効にしてください"
        type={SnackbarType.success}
      />
    </div>
  );
};

export default Navbar;
