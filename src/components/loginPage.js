import React from "react";
import LoginBox from "./loginBox";

import { useState } from "react";
import LoginNavbar from "./loginNavbar";


export default function LoginPage() {
  const [openTab, setOpenTab] = useState(1);
  return (
    <div className="bg-[#242323]">
        <LoginNavbar/>
      <div>
      <title>Login | Portal</title>
        <div className="mx-auto mt-16 bg-[#242323]">
          <div className="flex flex-col items-center justify-center max-w-screen">
            <div className="p-3 mt-12 bg-black border-b-2 w-1/2 items-center justify-center flex flex-col border-2 border-[#ce2026] rounded-xl">
              <ul className="flex space-x-2 mt-5">
                <li>
                  <a
                    href="#"
                    onClick={() => setOpenTab(1)}
                    className={` ${
                      openTab === 1 ? "bg-[#ce2026] text-white" : "bg-gray-800"
                    } inline-block  px-4 py-2 text-white-600 rounded leading-2 `}
                  >
                    Workshop
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => setOpenTab(2)}
                    className={` ${
                      openTab === 2 ? "bg-[#ce2026] text-white" : "bg-gray-800"
                    } inline-block px-4 py-2  text-white-600  rounded leading-2`}
                  >
                    OEM
                  </a>
                </li>
              </ul>
              <div className={openTab === 1 ? "block w-full" : "hidden"}>
                <LoginBox />
              </div>
              <div className={openTab === 2 ? "block w-full" : "hidden"}>
                <LoginBox />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
