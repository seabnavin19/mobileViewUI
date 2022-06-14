import React, { useState, forwardRef, useImperativeHandle } from "react";
import "./Snackbar.css";

const Snackbar = forwardRef((props, ref) => {
  const [showSnackbar, setShowSnackbar] = useState(false);

  useImperativeHandle(ref, () => ({
    show() {
      setShowSnackbar(true);
      setTimeout(() => {
        setShowSnackbar(false);
      }, 3000);
    },
  }));
  return (
    <div
      className="snackbar"
      id={showSnackbar ? "show" : "hide"}
      style={{
        backgroundColor: props.type === "success" ? "#ffffff" : "#ffffff",
        color: props.type === "success" ? "black" : "white",
        boxShadow: "1px 1px 1px 1px #000000"
      }}
    >
    <div className="message">{props.message}</div>
    </div>
  );
});

export default Snackbar;
