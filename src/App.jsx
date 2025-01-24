import React from "react";
import Sidebar from "./components/Sidebar";
import Maincontent from "./components/Maincontent";
import Nav from "./components/Nav"; // Assuming Nav component is where the links are
import { Routes, Route } from "react-router-dom"; // Only import Routes and Route

function App() {
  return (
    <div className="w-screen h-screen overflow-scroll overflow-x-hidden bg-black z-[2] flex ">
      <Sidebar />
      <Maincontent className="ml-10" />
      <Nav />
      <Routes>
        <Route path="/" element={<div>About Me</div>} />{" "}
        <Route path="/resume" element={<div>Resume</div>} />
        <Route path="/skills" element={<div>Skills</div>} />
        <Route path="/contact" element={<div>Contact Me</div>} />
      </Routes>
    </div>
  );
}

export default App;
