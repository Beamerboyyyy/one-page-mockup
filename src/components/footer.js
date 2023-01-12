import React from "react";
import logo from "../static/logo.jpg";

const Footer = () => {
  return (
    <div className="bg-black mt-10 text-white flex flex-col items-center justify-center">
     <img src={logo} className="h-10 w-25 bg-black mt-2" />
     <span className="font-Manrope customText">since 2006</span>
    <span className=" text-sm p-1 text-center h-fit">Copyright © 2023 Foxfire Labs.</span>
    </div>
  );
};

export default Footer;