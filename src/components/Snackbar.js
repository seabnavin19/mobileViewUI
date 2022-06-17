import React, { useState, forwardRef, useImperativeHandle } from "react";
import "./SnackBar.css";

const Snackbar = forwardRef((props, ref) => {
  const [showSnackbar, setShowSnackbar] = useState(false);

  useImperativeHandle(ref, () => ({
    show() {
      setShowSnackbar(true);
      setTimeout(() => {
        setShowSnackbar(false);
      }, 4000);
    },
  }));
  return (
    <div
      className="snackbar"
      id={showSnackbar ? "show" : "hide"}
      style={{
        backgroundColor: props.type === "success" ? "#ffffff" : "#ffffff",
        color: props.type === "success" ? "black" : "white",
        boxShadow: "2px 3px 6px 0px rgba(0,0,0,0.3)",
      }}
    >
      <div className="message">{props.message}</div>
    </div>
  );
});

export default Snackbar;
