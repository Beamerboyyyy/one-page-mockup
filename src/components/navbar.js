import React, { useEffect, useState } from "react";
import logo from "../static/logo.jpg";

export default function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

  const menuLinks = [
    { name: "Home", link: "#home" },
    { name: "Workshop Floor", link: "#workshopfloor" },
    { name: "Worker Performance Metrics ", link: "#workerperformancemetrics" },
    { name: "Workflow Optimizer", link: "#workflowoptimizer" },
    { name: "Demand Forecasting", link: "#demandforecasting" },

  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  });
  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] ${
        sticky ? "bg-white/60  text-gray-900" : "text-white"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="mx-7">
          <div
            className={`text-4xl hidden 2xl:block  uppercase font-black ${
              sticky ? "text-black" : "text-white"
            }`}
          >
            <div className="w-64 h-32   border-cyan-600 rounded-bl-full rounded-br-full bg-white justify-center flex items-center">
             <img src={logo} className={`h-10 w-25 bg-white mb-10 `} />
             </div>
          </div>
        </div>
        <div
          className={` ${
            sticky ? "md:bg-white/0 bg-white" : "bg-white"
          } fixed top-0 right-0 text-gray-900 md:block hidden px-7 py-2 font-bold rounded-bl-full`}
        >
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li key={i} className="px-6 hover:text-cyan-600">
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999] ${
            open ? "text-gray-900" : "text-gray-100"
          } m-5 text-3xl md:hidden`}
        >
          <ion-icon name="menu"></ion-icon>
        </div>
        <div
          className={`md:hidden text-gray-900 absolute w-2/3 h-screen px-7 py-2 font-bold bg-white top-0 duration-300 ${
            open ? "right-0" : "right-[-100%]"
          }`}
        >
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li key={i} className="px-6 hover:text-cyan-600">
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
