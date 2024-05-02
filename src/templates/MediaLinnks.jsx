import React from 'react'
import {
    FaBars,
    FaGithub,
    FaLinkedinIn,
    FaMobile,
    FaPhone,
    FaPhoneVolume,
    FaTwitter,
  } from "react-icons/fa6";
  import { BiLogoGmail } from "react-icons/bi";
  import { Bio } from "../data/constants";

function MediaLinnks() {
  return (
    <div> 
        <div className=" flex justify-center gap-[15px]">
            <div className="cursor-pointer">
              <a href={Bio.github} target="blank">
                <FaGithub />
              </a>
            </div>
            <div className="cursor-pointer">
              <a href="mailto:{Bio.mail}">
                <BiLogoGmail />
              </a>
            </div>
            <div className="cursor-pointer">
              <a href={Bio.linkedin}>
                <FaLinkedinIn />
              </a>
            </div>
            <div className="cursor-pointer">
              <a href="tel:{Bio.Number}">
                <FaPhone />
              </a>
            </div>
          </div>
    </div>
  )
}

export default MediaLinnks