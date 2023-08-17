import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
);
