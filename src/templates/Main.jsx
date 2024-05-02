import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Bio } from "../data/constants";
import mypic from "../data/mypic.jpg";
import { IoMdClose } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-scroll";

import MediaLinnks from "./MediaLinnks";
import Home from "./Home";
import Skills from "./Skills";

import WorkExp from "./WorkExp";
import Works from "./Works";
import MainContact from "./MainContact";

function Main() {
  const [menu, setMenu] = useState("Home");
  const [menuToggle, setMenuToggle] = useState(false);
  const [clicked, SetClicked] = useState("false");
  const ClickList = () => {
    SetClicked(!clicked);
  };
  const handleClick = () => setMenuToggle(!menuToggle);
  return (
    <div>
      <div className="hidden lg:fixed  top-0 left-0 z-[1] w-[300px] bg-white h-[100vh] lg:flex flex-col justify-between ">
        <div className="flex flex-col items-center gap-[10px] pt-[50px]">
          <img
            className="w-[100px] h-[100px] rounded-full"
            src={mypic}
            alt=""
          />
          <div className=" relative text-xl font-bold w-[250px] flex flex-col items-center text-blue-950">
            <div className=" absolute z-[-1]  text-3xl text-gray-200  font-thin  italic font-serif">
              {Bio.name}
            </div>

            <p className="">{Bio.fname}</p>

            <p>{Bio.lname}</p>
          </div>
        </div>
        <div>
          <nav className="flex flex-col gap-[10px] items-center">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => {
                setMenu("Home");
              }}
              className={`cursor-pointer ${menu === "Home" ? "text-blue-600 " : "text-blue-950"
                }`}
            >
              {" "}
              About
              {/* </a> */}
            </Link>

            <Link
              activeClass="active"
              to="skill"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => {
                setMenu("skill");
              }}
              className={`cursor-pointer ${menu === "skill" ? "text-blue-600 " : "text-blue-950"
                }`}
            >
              {" "}
              Skills
              {/* </a> */}
            </Link>

            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              // <a
              //         href="#about"
              onClick={() => {
                setMenu("About");
              }}
              className={`cursor-pointer ${menu === "About" ? "text-blue-600" : "text-blue-950"
                }`}
            >
              Experience
            </Link>

            <Link
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => {
                setMenu("Portfolio");
              }}
              className={`cursor-pointer ${menu === "Portfolio" ? "text-blue-600" : "text-blue-950"
                }`}
            >
              Works
              {/* </a> */}
            </Link>
            <Link
              activeClass="active"
              activeStyle={{ color:'#5754a8' }}
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              // <a
              //   href="#contact"
              onClick={() => {
                setMenu("Contact");
              }}
              className={`cursor-pointer ${menu === "Contact" ? "text-blue-600" : "text-blue-950"
                }`}
            >
              Contact
              {/* </a> */}
            </Link>
          </nav>
        </div>

        <div className="flex gap-[20px] flex-col justify-center items-center text-blue-950 ">
          <MediaLinnks />
          <div className=" pb-[20px] text-base font-medium">
            Copyright © 2024 <br /> {Bio.name}
            <br /> All rights reserved.
          </div>
        </div>
      </div>
      {/* ----------------MOBILE VIEW-------------------------------------------------------------------------------- */}

      <div className="lg:hidden  bg-white sticky top-0 py-[10px] z-[2] ">
        <div className="w-[88%] max-w-[1340px] mx-auto flex justify-between items-center text-blue-950">
          <p className="text-xl font-bold italic">{Bio.fname}</p>
          <div className="z-[12] " onClick={handleClick}>
            {(menuToggle) ? < IoMdClose /> : <FaBars />}
          </div>
        </div>
        <div
          className={`transition-all ease-in-out duration-300  ${menuToggle ? "bg-[#00000030] fixed top-0 w-full h-full z-[2]" : ""
            }`}
        >
          <div className={`z-[2] bg-white transition-all ease-in-out duration-300 fixed top-0 w-[200px] h-full ${menuToggle ? "right-0 shadow-xl shadow-blue-400" : "right-[-200px]"
            }`}>
            <ul className="flex flex-col gap-6 justify-center items-center pt-[60px]">
              <li>
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:hover:text-blue-700"
                  onClick={handleClick}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="skill"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className=" cursor-pointer hover:hover:text-blue-700"
                  onClick={handleClick}
                >
                  Skill
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:hover:text-blue-700"
                  onClick={handleClick}
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:hover:text-blue-700"
                  onClick={handleClick}
                >
                  Works
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer active:text-blue-700 hover:hover:text-blue-700"
                  onClick={handleClick}
                >
                  Contact
                </Link>
              </li>
              <MediaLinnks />
            </ul>
            
          </div>
        </div>
      </div>

      <Home />

      <Skills />
      <WorkExp />
      <Works />
      <MainContact />
      <p className="flex justify-center text-xs text-blue-950 lg:hidden "> Copyright © 2024  {Bio.name} All rights reserved.</p>
    </div>
  );
}

export default Main;
