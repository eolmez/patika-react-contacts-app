import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div className="App">
      <Contacts />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
