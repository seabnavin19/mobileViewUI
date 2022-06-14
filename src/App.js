import { useRef } from "react";
import "./App.css";
import Snackbar from "./components/Snackbar";

const SnackbarType = {
  success: "success",
  fail: "fail",
};

function App() {
  const snackbarRef = useRef(null);

  return (
    <div className="App">
      <button
        className="showSnackbarBttn"
        onClick={() => {
          snackbarRef.current.show();
        }}
      >
        Message
      </button>
      <Snackbar
        ref={snackbarRef}
        message="Bluetooth"
        type={SnackbarType.success}
      />
    </div>
  );
}

export default App;