import React from "react";
import video1 from "../static/video1.mp4";
import video2 from "../static/video2.mp4";
import DropdownComponent from "./dropdown";
import InformationBoxv2 from "./informationBoxv2";
import { useEffect } from "react";
import "../static/workshopFloor.css";

export default function WorkshopFloor() {
  useEffect(() => {
    const text = "Car Model: Likely Ford F-150";
    async function beginPage() {
      var elements = document.getElementsByClassName("custom");
      for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        element.getElementsByTagName("div")[0].innerHTML =
          '<div class="lds-ring hideMeAfter5Seconds ml-1 -mt-0.5"><div></div><div></div><div></div><div></div></div><span class="ml-1 showMe text-xl font-black">&#10003;</span>';
        element
          .getElementsByTagName("span")[0]
          .classList.add("text-2xl", "font-black");
        await new Promise((r) => setTimeout(r, 12000));
        if (index == 0) {
          document.getElementsByClassName("custom-text")[0].textContent = text;
        }
        element
          .getElementsByTagName("span")[0]
          .classList.remove("text-2xl", "font-black");
      }
    }
    beginPage();
  });
  return (
    <section id="workshopfloor" className="py-10 text-white mt-4 ">
      <div className="text-center mt-8">
        <h3 className="text-4xl border-t-2 border-white pt-2 font-semibold">
          Workshop Floor
        </h3>
        <div className=" flex flex-col mt-10 bg-gray-800 rounded-lg  max-w-6xl mx-auto h-fit justify-center items-center">
          <div className="flex m-4 font-display text-start justify-center space-x-2 h-fit w-full">
            <label className="m-2 text-xl font-semibold text-white leading-none">
              Select Workshop
            </label>
            <DropdownComponent
              args={[
                "Workhop Area 1",
                "Workhop Area 2",
                "Workhop Area 3",
                "Workhop Area 4",
              ]}
            />
          </div>
          <div className="w-full flex h-screen">
            <div className="h-full w-2/3 pt-3 ml-2 flex flex-col ">
              <div className="h-2/3 w-full ">
                <video
                  src={video1}
                  type="video/mp4"
                  loop
                  autoPlay
                  muted
                  controls={false}
                  className="border-4 w-full bg-black border-gray-900 rounded-lg h-full"
                ></video>
                <div className=" mb-4 h-1/4">
                  <h1 className="custom-text text-2xl mt-2 flex p-2 font-semibold underline text-white">
                    Car Model:
                  </h1>
                  <div className="pt-2 w-full">
                    <ul className="list-disc ml-8">
                      <li className="custom p-2 h-fit text-xl text-start text-white flex">
                        <span className="">Detecting Car Model</span>
                        <div className="flex">
                          {/* <div class="lds-ring hideMeAfter5Seconds ml-1 -mt-0.5">
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                        <span className="ml-1 showMe text-xl font-black">
                          &#10003;
                        </span> */}
                        </div>
                      </li>
                      <li className="custom p-2 h-fit text-xl text-start text-white flex">
                        <span className="">Calculating template placement</span>
                        <div className="flex"></div>
                      </li>
                      <li className="custom p-2 h-fit  text-xl text-start text-white flex">
                        <span className="">Overlaying template placement</span>
                        <div className="flex"></div>
                      </li>
                      <li className="custom p-2 h-fit  text-xl text-start text-white flex">
                        <span className="">Fetching placement measurement</span>
                        <div className="flex"></div>
                      </li>
                      <li className="custom p-2 h-fit  text-xl text-start text-white flex">
                        <span className="">
                          Overlaying template placement measurement
                        </span>
                        <div className="flex"></div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/3 m-3 pt-6 bg-white justify-center items-center border-white-200 rounded-lg h-11/12">
              <InformationBoxv2 />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
