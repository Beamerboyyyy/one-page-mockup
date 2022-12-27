import React from "react";
import { useState } from "react";
import logo from "../static/logo.jpg";

export default function LoginNavbar() {
  return (
    <nav className="w-full bg-white-500">
      <div className="flex justify-center items-center ">
        {/* <div className=" h-0.5 w-full bg-cyan-600"></div> */}
        <div className="w-64 h-32  border-cyan-600 rounded-bl-full rounded-br-full bg-white justify-center flex items-center">
          <a href="javascript:void(0)">
            <img src={logo} className="h-10 w-25 bg-white mb-10 " />
          </a>
        </div>
      </div>
    </nav>
  );
}
