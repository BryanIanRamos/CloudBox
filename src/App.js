import { useState } from "react";
import "./App.css";
import SignIn from "./Pages/SignIn.js";
import SignUp from "./Pages/SignUp";
import Verify from "./Pages/Verify";
import BusReg from "./Pages/BusReg";

function App() {
  return (
    <div>
      <SignIn />
      <SignUp />
      <Verify />
      <BusReg />
    </div>
  );
}

export default App;
