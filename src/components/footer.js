import React from "react";
import logo from "../static/footer.jpg";

const Footer = () => {
  return (
    <div className="bg-gray-800 mt-10 text-white flex flex-col items-center justify-center">
     <img src={logo} className="h-10 w-25 bg-white mt-2" />
    <span className=" text-sm p-1 text-center h-fit">Copyright © 2022 CrossWing Inc.</span>
    </div>
  );
};

export default Footer;