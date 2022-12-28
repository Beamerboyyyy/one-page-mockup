import React from "react";
import PersonDropdown from "./personDropdown";
import person1 from "../static/person1.jpg";
// import SortBox from "./sortBox";

function getRandomItem(set) {
  let items = Array.from(set);
  return items[Math.floor(Math.random() * items.length)];
}

export default function Workflowoptimizer() {
  var tasks = [
    { name: "KIA", order: 15 },
    { name: "Toyota", order: 45 },
    { name: "Ford Motors", order: 15 },
    { name: "Honda", order: 33 },
    { name: "Volkswagen", order: 8 },
    { name: "Daimler", order: 5 },
    { name: "General Motors", order: 14 },
    { name: "BMW", order: 22 },
    { name: "FAW", order: 2 },
    { name: "SAIC", order: 19 },
    { name: "Lexus", order: 32 },
    { name: "Tesla", order: 11 },
    { name: "Hyundai", order: 5 },
    { name: "Mercedes", order: 44 },
    { name: "Derby", order: 23 },
    { name: "New Flyer", order: 15 },
    { name: "INKAS", order: 19 },
  ];
  var data = [
    { name: "Sam Curren", desc: "Machine Learning Engineer", image: person1 },
    { name: "Michael Jordan", desc: "Frontend Developer", image: person1 },
    { name: "George Bills", desc: "Backend Developer", image: person1 },
    { name: "Harry Callum", desc: "DevOps Engineer", image: person1 },
    { name: "Ivan Gilbert", desc: "iOS Developer", image: person1 },
    { name: "Felix Adams", desc: "Senior Developer", image: person1 },
    { name: "Roberto Arim", desc: "Nodejs Developer", image: person1 },
  ];
  var time = [
    { time: "8am" },
    { time: "10am" },
    { time: "12pm" },
    { time: "2pm" },
    { time: "4pm" },
    { time: "6pm" },
    { time: "8pm" },
  ];
  var task = [
    { task: "Roof installation" },
    { task: "Roof Welding" },
    { task: "Roof Allocation" },
    { task: "Inventory Check" },
    { task: "Roof Measurement Check" },
    { task: "Roof Drilling" },
    { task: "Roof Research" },
  ];
  var color = [
    { color: "red-700" },
    { color: "blue-700" },
    { color: "orange-700" },
    { color: "purple-700" },
    { color: "yellow-700" },
    { color: "green-700" },
    { color: "cyan-700" },
    { color: null },
  ];

  var schedule = [
    { car: "Toyota Avalon" },
    { car: "Chrysler 300" },
    { car: "Chevrolet Equinox" },
    { car: "Dodge Challenger" },
    { car: "Ford GT" },
    { car: "Honda CR-V" },
    { car: "Lexus RX" },
  ];

  return (
    <section id="workflowoptimizer" className="py-10 text-white mt-4 ">
      <div className="text-center mt-8 h-fit">
        <h3 className="text-4xl font-semibold border-t-2 border-white pt-2">
          Workflow Optimizer
        </h3>
        <div className="flex justify-center items-center w-full">
          <div className="w-full h-1/2 flex mb-10 mt-10  rounded-lg  m-20 ">
            <div className="w-1/4 h-full border-2 border-gray-900 rounded-lg bg-gray-800">
              <h3 className="m-4 pb-2 text-xl font-semibold border-b-2 hover:text-2xl duration-100 cursor-pointer">
                Expected Upcoming Tasks
              </h3>
              <div className="mb-2">
                <table className="mx-auto gap-3">
                  <tr className="">
                    <th className="text-lg text-gray-300 font-black p-2 border-b-2 border-r-2 border-white">
                      Car Company
                    </th>
                    <th className="text-lg text-gray-300 font-black p-2 border-b-2 border-white">
                      Quantity
                    </th>
                  </tr>
                  {tasks?.map((task, i) => (
                    <tr
                      key={i}
                      className="hover:text-xl hover:text-gray-600 hover:font-bold duration-100 cursor-pointer"
                    >
                      <td className="p-1 border-r-2 border-l-2 border-white">
                        {task?.name}
                      </td>
                      <td className="border-r-2">{task?.order}</td>
                    </tr>
                  ))}
                </table>
              </div>
            </div>
            <div className="w-3/4 h-full border-2 border-gray-900 rounded-lg bg-gray-800">
              <div className="w-full h-[10%] flex flex-row justify-end">
                <PersonDropdown args={data} />
              </div>
              <div className="w-full h-[90%]  border-t-2 border-gray-600 rounded-lg mt-4 flex-col flex items-center justify-start mb-2">
                <div className="w-[95%] mt-2 border-2 border-gray-400 h-[60px] rounded-md flex">
                  {/* <div className="bg-gray-900 border-r-2 border-gray-400 w-[20%] flex justify-center items-center">
                    <span className="text-xl font-bold uppercase ">
                      Employees
                    </span>
                  </div> */}
                  <div className="bg-gray-900 border-r-2 border-gray-400 w-[14.28%] flex flex-col leading-none items-center">
                    <span className="leading-none text-sm mt-1">
                      Mon
                      <br />
                    </span>
                    <div className="mt-0.5 items-center justify-center flex">
                      <span className="text-4xl font-black">28</span>
                      <span className=" h-full w-4 mt-1">th</span>
                    </div>
                  </div>
                  <div className="bg-gray-900 border-r-2 border-gray-400 w-[14.28%] flex flex-col leading-none items-center">
                    <span className="leading-none text-sm mt-1">
                      Tue
                      <br />
                    </span>
                    <div className="mt-0.5 items-center justify-center flex">
                      <span className="text-4xl font-black">29</span>
                      <span className=" h-full w-4 mt-1">th</span>
                    </div>
                  </div>

                  <div className="bg-gray-900 border-r-2 border-gray-400 w-[14.28%] flex flex-col leading-none items-center">
                    <span className="leading-none text-sm mt-1">
                      Wed
                      <br />
                    </span>
                    <div className="mt-0.5 items-center justify-center flex">
                      <span className="text-4xl font-black">30</span>
                      <span className=" h-full w-4 mt-1">th</span>
                    </div>
                  </div>

                  <div className="bg-gray-900 border-r-2 border-gray-400 w-[14.28%] flex flex-col leading-none items-center">
                    <span className="leading-none text-sm mt-1">
                      Thu
                      <br />
                    </span>
                    <div className="mt-0.5 items-center justify-center flex">
                      <span className="text-4xl font-black">31</span>
                      <span className=" h-full w-4 mt-1">st</span>
                    </div>
                  </div>

                  <div className="bg-gray-900 border-r-2 border-gray-400 w-[14.28%] flex flex-col leading-none items-center">
                    <span className="leading-none text-sm mt-1">
                      Fri
                      <br />
                    </span>
                    <div className="mt-0.5 items-center justify-center flex">
                      <span className="text-4xl font-black">1</span>
                      <span className=" h-full w-4 mt-1">st</span>
                    </div>
                  </div>

                  <div className="bg-gray-900 border-r-2 border-gray-400 w-[14.28%] flex flex-col leading-none items-center">
                    <span className="leading-none text-sm mt-1">
                      Sat
                      <br />
                    </span>
                    <div className="mt-0.5 items-center justify-center flex">
                      <span className="text-4xl font-black">2</span>
                      <span className=" h-full w-4 mt-1">nd</span>
                    </div>
                  </div>

                  <div className="bg-gray-900 border-r-2 border-gray-400 w-[14.5%] flex flex-col leading-none items-center">
                    <span className="leading-none text-sm mt-1">
                      Sun
                      <br />
                    </span>
                    <div className="mt-0.5 items-center justify-center flex">
                      <span className="text-4xl font-black">3</span>
                      <span className=" h-full w-4 mt-1">rd</span>
                    </div>
                  </div>

                  {/* <div className="bg-gray-900 border-r-2 border-gray-400 w-[10%] flex justify-center items-center"><span>Mon 16</span></div> */}
                </div>
                {data?.map((instance, i) => {
                  const rand_col_1 = getRandomItem(color).color;
                  const rand_col_2 = getRandomItem(color).color;
                  const rand_col_3 = getRandomItem(color).color;
                  const rand_col_4 = getRandomItem(color).color;
                  const rand_col_5 = getRandomItem(color).color;
                  const rand_col_6 = getRandomItem(color).color;
                  const rand_col_7 = getRandomItem(color).color;
                  return (
                    <div
                      key={i}
                      className="w-[95%]  mt-2 border-2  h-[63.6px] rounded-md flex"
                    >
                      {/* <div className="border-r-2 w-[20%]">
                      <div className="flex items-center justify-start h-full">
                        <img
                          src={instance?.image}
                          alt="."
                          className="h-full w-14 rounded-sm border-2 border-gray-400"
                        ></img>

                        <span className="text-start w-full ml-2 text-sm h-full flex items-center justify-center flex-col ">
                          <p className="text-gray-400 text-[8px] w-full h-fit break-words leading-none text-center">
                            {instance?.desc}
                            <br />
                            <span className=" text-sm break-words leading-none text-center text-white hover:text-base cursor-pointer ">
                              {instance?.name}
                            </span>
                          </p>
                        </span>
                      </div>
                    </div> */}

                      {rand_col_1 ? (
                        <>
                          <div
                            className={`mr-0.5 border-l-2 border-r-2 border-${rand_col_1} w-[14.28%] bg-${rand_col_1} rounded-tr-3xl rounded-tl-3xl flex flex-col items-center`}
                          >
                            <span className="mt-1 text-[10px]">
                              {time[i].time}
                            </span>
                            <span className="mt-1 text-[12px] hover:font-bold cursor-pointer flex flex-col leading-none items-center justify-center">
                              &#x2022; {getRandomItem(schedule).car}
                              <span className="text-[10px] text-center leading-none">
                                <br />
                                {getRandomItem(task).task}
                              </span>
                            </span>
                          </div>
                        </>
                      ) : (
                        <>
                          <div
                            className={`w-[14.28%]  rounded-tr-3xl flex flex-col items-center`}
                          >
                            <span className="mt-1 text-[10px]">
                              {time[i].time}
                            </span>
                          </div>
                        </>
                      )}

                      {rand_col_2 ? (
                        <>
                          <div
                            className={`mr-0.5 border-l-2 border-r-2 border-${rand_col_2} w-[14.28%] bg-${rand_col_2} rounded-tr-3xl rounded-tl-3xl flex flex-col items-center`}
                          >
                            <span className="mt-1 text-[10px]">
                              {time[i].time}
                            </span>
                            <span className="mt-1 text-[12px] hover:font-bold cursor-pointer flex flex-col leading-none items-center justify-center">
                              &#x2022; {getRandomItem(schedule).car}
                              <span className="text-[10px] text-center leading-none">
                                <br />
                                {getRandomItem(task).task}
                              </span>
                            </span>
                          </div>
                        </>
                      ) : (
                        <>
                          <div
                            className={`w-[14.28%]  rounded-tr-3xl flex flex-col items-center`}
                          >
                            <span className="mt-1 text-[10px]">
                              {time[i].time}
                            </span>
                          </div>
                        </>
                      )}
                      {rand_col_3 ? (
                        <>
                          <div
                            className={`mr-0.5 border-l-2 border-r-2 border-${rand_col_3} w-[14.28%] bg-${rand_col_3} rounded-tr-3xl rounded-tl-3xl flex flex-col items-center`}
                          >
                            <span className="mt-1 text-[10px]">
                              {time[i].time}
                            </span>
                            <span className="mt-1 text-[12px] hover:font-bold cursor-pointer flex flex-col leading-none items-center justify-center">
                              &#x2022; {getRandomItem(schedule).car}
                              <span className="text-[10px] text-center leading-none">
                                <br />
                                {getRandomItem(task).task}
                              </span>
                            </span>
                          </div>
                        </>
                      ) : (
                        <>
                          <div
                            className={`w-[14.28%]  rounded-tr-3xl flex flex-col items-center`}
                          >
                            <span className="mt-1 text-[10px]">
                              {time[i].time}
                            </span>
                          </div>
                        </>
                      )}
                      {rand_col_4 ? (
                        <>
                          <div
                            className={`mr-0.5 border-l-2 border-r-2 border-${rand_col_4} w-[14.28%] bg-${rand_col_4} rounded-tr-3xl rounded-tl-3xl flex flex-col items-center`}
                          >
                            <span className="mt-1 text-[10px]">
                              {time[i].time}
                            </span>
                            <span className="mt-1 text-[12px] hover:font-bold cursor-pointer flex flex-col leading-none items-center justify-center">
                              &#x2022; {getRandomItem(schedule).car}
                              <span className="text-[10px] text-center leading-none">
                                <br />
                                {getRandomItem(task).task}
                              </span>
                            </span>
                          </div>
                        </>
                      ) : (
                        <>
                          <div
                            className={`w-[14.28%]  rounded-tr-3xl flex flex-col items-center`}
                          >
                            <span className="mt-1 text-[10px]">
                              {time[i].time}
                            </span>
                          </div>
                        </>
                      )}
                      {rand_col_5 ? (
                        <>
                          <div
                            className={`mr-0.5 border-l-2 border-r-2 border-${rand_col_5} w-[14.28%] bg-${rand_col_5} rounded-tr-3xl rounded-tl-3xl flex flex-col items-center`}
                          >
                            <span className="mt-1 text-[10px]">
                              {time[i].time}
                            </span>
                            <span className="mt-1 text-[12px] hover:font-bold cursor-pointer flex flex-col leading-none items-center justify-center">
                              &#x2022; {getRandomItem(schedule).car}
                              <span className="text-[10px] text-center leading-none">
                                <br />
                                {getRandomItem(task).task}
                              </span>
                            </span>
                          </div>
                        </>
                      ) : (
                        <>
                          <div
                            className={`w-[14.28%]  rounded-tr-3xl flex flex-col items-center`}
                          >
                            <span className="mt-1 text-[10px]">
                              {time[i].time}
                            </span>
                          </div>
                        </>
                      )}
                      {rand_col_6 ? (
                        <>
                          <div
                            className={`mr-0.5 border-l-2 border-r-2 border-${rand_col_6} w-[14.28%] bg-${rand_col_6} rounded-tr-3xl rounded-tl-3xl flex flex-col items-center`}
                          >
                            <span className="mt-1 text-[10px]">
                              {time[i].time}
                            </span>
                            <span className="mt-1 text-[12px] hover:font-bold cursor-pointer flex flex-col leading-none items-center justify-center">
                              &#x2022; {getRandomItem(schedule).car}
                              <span className="text-[10px] text-center leading-none">
                                <br />
                                {getRandomItem(task).task}
                              </span>
                            </span>
                          </div>
                        </>
                      ) : (
                        <>
                          <div
                            className={`w-[14.28%]  rounded-tr-3xl flex flex-col items-center`}
                          >
                            <span className="mt-1 text-[10px]">
                              {time[i].time}
                            </span>
                          </div>
                        </>
                      )}
                      {rand_col_7 ? (
                        <>
                          <div
                            className={` border-l-2 border-r-2 border-${rand_col_7} w-[14.28%] bg-${rand_col_7} rounded-tr-3xl rounded-tl-3xl flex flex-col items-center`}
                          >
                            <span className="mt-1 text-[10px]">
                              {time[i].time}
                            </span>
                            <span className="mt-1 text-[12px] hover:font-bold cursor-pointer flex flex-col leading-none items-center justify-center">
                              &#x2022; {getRandomItem(schedule).car}
                              <span className="text-[10px] text-center leading-none">
                                <br />
                                {getRandomItem(task).task}
                              </span>
                            </span>
                          </div>
                        </>
                      ) : (
                        <>
                          <div
                            className={`w-[14.28%]  rounded-tr-3xl flex flex-col items-center`}
                          >
                            <span className="mt-1 text-[10px]">
                              {time[i].time}
                            </span>
                          </div>
                        </>
                      )}
                      {/* <div className=" w-[10%] border-pink-700 bg-pink-700 rounded-tr-3xl flex flex-col items-center">
                            <span className="mt-3 text-[8px]">7am to 4pm</span>    
                            <span className="text-[12px] bg-pink-500 w-fit p-[3px] rounded-xl hover:text-[14px] cursor-pointer">Cyc</span>
                        </div> */}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
