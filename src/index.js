import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
);
