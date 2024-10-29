import React from "react";
import { Routes, Route } from "react-router-dom"; // Only import Routes and Route
import Nav from "./Nav";
import About from "./About";
import Resume from "./Resume";
import Skills from "./Skills";
import Contact from "./Contact";

const Maincontent = () => {
  return (
    <div className="maindiv bg-customGray w-[900px] min-h-fit ml-10 mt-[5rem] rounded-2xl border-2 border-gray">
      <Nav />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Maincontent;
