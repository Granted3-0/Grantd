import "./App.css";
import { Buffer } from "buffer";
// import { BaseOptionChart } from "./components/dashboard/BaseOptionChart";
// import { BaseOptionChartStyle } from "./components/dashboard/BaseOptionChartStyle";
import Form from "./components/form/Form";
import Dashboard from "./components/dashboard/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Profile from "./pages/Homepage";

import Navbar from "./components/navbar/Navbar";
function App() {
  window.Buffer = Buffer;
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/grants" element={<Form />} />
          <Route path="/form" element={<Form />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
