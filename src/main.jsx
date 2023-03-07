import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// project imports
import "/src/styles/css/fiverr.min.css";

// third party
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
