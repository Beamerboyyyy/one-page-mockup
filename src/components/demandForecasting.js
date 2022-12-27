import React from "react";

export default function DemandForecasting() {
  return (
    <section
      id="demandforecasting"
      className=" w-screen py-10 text-white mt-4 flex justify-center items-center flex-col"
    >
      <div className="text-center mt-8 w-full">
        <h3 className="text-4xl font-semibold border-t-2 border-white pt-2">Demand Forecasting</h3>
      </div>
      <div className="-mt-10 text-center h-[1450px] w-full flex items-center justify-center flex-col">
        <div className=" bg-gray-800 rounded-lg p-5 flex items-center justify-center h-5/6 w-[95%] ">
          <iframe
            className="w-[92%] h-[95%] rounded-lg overflow-x-hidden scrollbar scrollbar-thumb-blue-700 scrollbar-track-blue-300 overflow-y-scroll hover:scrollbar-thumb-blue-500"
            src="http://owaisahmed142002.pythonanywhere.com/"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
