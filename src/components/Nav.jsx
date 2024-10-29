import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navdiv w-[650px] bg-gray rounded-bl-3xl rounded-tr-2xl ml-[15.4rem] pb-4 pt-2 text-center border-b-2 border-b-zinc-700">
      <Link
        to="/"
        className="text-white text-[20px] pl-6 pr-10 hover:text-yellow-400 font-semibold"
      >
        About Me
      </Link>
      <Link
        to="/resume"
        className="text-white text-[20px] pl-6 pr-10 hover:text-yellow-400 font-semibold"
      >
        Resume
      </Link>
      <Link
        to="/skills"
        className="text-white text-[20px] pl-6 pr-10 hover:text-yellow-400 font-semibold"
      >
        Skills
      </Link>
      <Link
        to="/contact"
        className="text-white text-[20px] pl-6 pr-10 hover:text-yellow-400 font-semibold"
      >
        Contact Me
      </Link>
    </div>
  );
};

export default Nav;
