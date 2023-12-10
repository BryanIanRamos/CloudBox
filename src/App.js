import { useState } from "react";
import "./App.css";
import SignIn from "./Pages/SignIn.js";
import SignUp from "./Pages/SignUp";
import Verify from "./Pages/Verify";
import BusReg from "./Pages/BusReg";
import BusID from "./Pages/BusID.js";
import Dashboard from "./Pages/Dashboard/Dashboard";
// ---
import Calendar from "./Pages/Calendar/Calendar.js";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import Mail from "./Pages/Mail/Mail.js";
import Report from "./Pages/Reports/Report.js";
// import Statistics from "./Pages/Reports/Report.js";
import FileManager from "./Pages/File Maneger/FileManager.js";
import Notes from "./Pages/Notes/Notes.js";
import Permission from "./Pages/Permission/Permission.js";
import { Protector } from "./Components/Account-cards/extensionAuth/helper.js";

function App() {
  return (
    <Routers>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/status" element={<Verify />} />
        <Route path="/business" element={<BusReg />} />
        <Route path="/businessInfo" element={<BusID />} />
        <Route
          path="/dashboard"
          // element={<Protector Component={Dashboard} />}
          element={<Dashboard />}
        />
        <Route
          path="/calendar"
          // element={<Protector Component={Dashboard} />}
          element={<Calendar />}
        />
        <Route
          path="/report"
          // element={<Protector Component={Dashboard} />}
          element={<Report />}
        />

        {/* Pages  */}
        {/* <Route
          path="/dashboard"
          element={<Protector Component={Dashboard} />}
        />
        <Route path="/calendar" element={<Protector Component={Calendar} />} />
        <Route path="/mail" element={<Protector Component={Mail} />} />
        <Route path="/report" element={<Protector Component={Report} />} /> */}

        {/* <Route path="/statistics" element={<Statistics />} /> */}

        {/* <Route
          path="/file_manager"
          element={<Protector Component={FileManager} />}
        />
        <Route path="/notes" element={<Protector Component={Notes} />} />
        <Route
          path="/Permission"
          element={<Protector Component={Permission} />}
        /> */}
      </Routes>
    </Routers>
  );
}

export default App;
