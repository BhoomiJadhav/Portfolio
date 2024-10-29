"use client";
import React from "react";
import myAvtar from "../assets/avatar.png";
import { MdOutlineMail } from "react-icons/md";
import { FaMobileRetro } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="relative   max-w-[300px] h-[750px] bg-customGray mt-[5rem] ml-[10rem] rounded-2xl  border-2 border-gray sticky">
      <div className="relative w-[150px] h-[150px] bg-zinc-600 mt-[3rem] rounded-xl ml-[4.5rem] flex justify-center items-center">
        <img
          src={myAvtar}
          alt="Avatar"
          className="w-[300px] h-[200px] rounded-full "
        />
      </div>
      <div>
        <h1 className="text-[30px] font-semibold text-white text-center mt-[2rem]">
          Bhoomi Jadhav
        </h1>
        <h2 className="text-[15px] font-normal text-slate-300 bg-buttoncol p-1 ml-[4rem] mr-[4rem] text-center rounded-lg">
          Web Developer
        </h2>
      </div>
      <hr className="m-6 text-gray" />
      <div className="contacts">
        <div className="email flex">
          <div className="icon-box p-3 mr-3 ml-5 bg-customgray rounded-xl border-black border-2">
            <MdOutlineMail className="text-yellow-400 text-center text-[20px]" />
          </div>
          <div className="info flex flex-col ">
            <h4 className="text-lightGray text-[15px]">EMAIL</h4>
            <h4 className="text-white text-[15px]">
              bhoomijadhav706@gmail.com
            </h4>
          </div>
        </div>
        <div className="phone flex mt-5">
          <div className="icon-box p-3 mr-3 ml-5 bg-customgray rounded-xl border-black border-2">
            <FaMobileRetro className="text-yellow-400 text-center text-[20px]" />
          </div>
          <div className="info flex flex-col ">
            <h4 className="text-lightGray text-[15px]">PHONE NO.</h4>
            <h4 className="text-white text-[15px]">+91 8459120609</h4>
          </div>
        </div>
        <div className="Birthdate flex mt-5">
          <div className="icon-box p-3 mr-3 ml-5   bg-customgray rounded-xl border-black border-2">
            <SlCalender className="text-yellow-400 text-center text-[20px]" />
          </div>
          <div className="info flex flex-col ">
            <h4 className="text-lightGray text-[15px]">BIRTHDAY</h4>
            <h4 className="text-white text-[15px]">May 16,2005</h4>
          </div>
        </div>
        <div className="location flex mt-5">
          <div className="icon-box p-3 mr-3 ml-5 bg-customgray rounded-xl border-black border-2">
            <FaLocationDot className="text-yellow-400 text-center text-[20px]" />
          </div>
          <div className="info flex flex-col ">
            <h4 className="text-lightGray text-[15px]">LOCATION</h4>
            <h4 className="text-white text-[15px]">Mumbai, Maharashtra</h4>
          </div>
        </div>
        <hr className="m-6 text-gray" />
        <div className="socialicon flex justify-center">
          <a href="https://www.linkedin.com/in/bhoomi-jadhav">
            <FaLinkedin className="text-[2.5rem] text-yellow-400 ml-4" />
          </a>
          <a href="https://github.com/BhoomiJadhav">
            <FaGithub className="text-[2.5rem] text-yellow-400 ml-4" />
          </a>
          <a href="https://www.instagram.com/bhoomi.2.6">
            <FaInstagram className="text-[2.5rem] text-yellow-400 ml-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
