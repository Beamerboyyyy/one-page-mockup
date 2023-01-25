import React from "react";
import "../static/home.css";

export default function DemandForecasting() {
  return (
    <section id="demandforecasting" className="py-10 text-white mt-8 ">
      <div className="text-center mt-8 h-fit">
        <div className="flex justify-center items-center">
          <h3 className="link link-underline link-underline-black text-4xl font-black border-t-2 border-white pt-2 text-[#CE2026] w-fit">
            Demand Forecasting
          </h3>
        </div>
        <div className="-mt-20 flex justify-center items-center h-[1450px] ">
          <div className=" bg-customBlue rounded-lg p-5 flex items-center w-[99%] justify-center h-5/6  border-2 border-customDarkBlue">
            <iframe
              className="w-[99%] h-[95%]  rounded-lg overflow-x-hidden scrollbar scrollbar-thumb-blue-700 scrollbar-track-blue-300 overflow-y-scroll hover:scrollbar-thumb-blue-500"
              src="http://owaisahmed142002.pythonanywhere.com/"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
