"use client";
import React from "react";
import Sidebar from "./components/Sidebar";
import Maincontent from "./components/Maincontent";

function App() {
  return (
    <div className="w-screen h-screen overflow-scroll overflow-x-hidden bg-black z-[2] flex ">
      <Sidebar />
      <Maincontent className="ml-10" />
    </div>
  );
}

export default App;
