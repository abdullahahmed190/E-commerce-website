import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./icons.js";
import Untitled from "./screens/Untitled";
import "./style.css";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Untitled} />
      <Route path="/Untitled/" exact component={Untitled} />
    </Router>
  );
}

export default App;
