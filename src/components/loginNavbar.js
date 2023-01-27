import React from "react";
import { useState } from "react";
import logo from "../static/logo.jpg";

export default function LoginNavbar() {
  return (
    <nav className="w-full bg-[#242323]">
      <div className="flex justify-center items-center bg-[#242323]">
        {/* <div className=" h-0.5 w-full bg-cyan-600"></div> */}
        <div className="w-80 h-40  border-black-600 rounded-bl-full rounded-br-full bg-black justify-center flex items-center">
          <a href="javascript:void(0)">
            <img src="https://static.wixstatic.com/media/175b23_ccac822d8cc54f5f9470b313aee4c4f9~mv2.png/v1/fill/w_208,h_73,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/asc_logo_2018_white.png 1x, https://static.wixstatic.com/media/175b23_ccac822d8cc54f5f9470b313aee4c4f9~mv2.png/v1/fill/w_416,h_146,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/asc_logo_2018_white.png 2x" className={`h-20 w-25  2xl:w-25  mb-10`}  />
          </a>
        </div>
      </div>
    </nav>
  );
}
