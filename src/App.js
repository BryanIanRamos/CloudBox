import { useState } from "react";
import "./App.css";
import SignIn from "./Pages/SignIn.js";
import SignUp from "./Pages/SignUp";
import Verify from "./Pages/Verify";
import BusReg from "./Pages/BusReg";
import BusID from "./Pages/BusID.js";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routers>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/status" element={<Verify />} />
        <Route path="/business" element={<BusReg />} />
        <Route path="/businessInfo" element={<BusID />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Routers>
  );
}

export default App;
