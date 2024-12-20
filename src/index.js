import React from "react";
import ReactDOM from "react-dom/client"; // For React 18+
import { BrowserRouter } from "react-router-dom"; // Only one BrowserRouter here
import App from "./App"; // Your main App component

const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the app inside the BrowserRouter
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
