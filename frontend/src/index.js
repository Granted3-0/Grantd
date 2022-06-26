import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import Homepage from "./pages/Homepage";
import Form from "./pages/Homepage";
import Profile from "./pages/Homepage";
import Notification from "./components/notification/Notification";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/grants" element={<Form />} />
          <Route path="/form" element={<Form />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/messagingportal" element={<Notification />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
