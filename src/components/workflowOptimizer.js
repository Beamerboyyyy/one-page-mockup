import React from "react";
import PersonDropdown from "./personDropdown";
import person1 from "../static/person1.jpg";

export default function Workflowoptimizer() {
  var tasks = [
    { name: "KIA", order: 15 },
    { name: "Toyota", order: 45 },
    { name: "Ford", order: 15 },
    { name: "Honda", order: 33 },
    { name: "Volkswagen", order: 8 },
    { name: "Daimler", order: 5 },
    { name: "General Motors", order: 14 },
    { name: "BMW", order: 22 },
    { name: "FAW", order: 2 },
    { name: "SAIC", order: 19 },
    { name:"Chevrolet",order:13}
  ];

  var data = [
    { name: "Sam Curren", desc: "Machine Learning Engineer", image: person1 },
    { name: "Michael Jordan", desc: "Frontend Developer", image: person1 },
    { name: "George Bills", desc: "Backend Developer", image: person1 },
    { name: "Harry Callum", desc: "DevOps Engineer", image: person1 },
    { name: "Ivan Gilbert", desc: "iOS Developer", image: person1 },
  ];

  return (
    <section id="workflowoptimizer" className="py-10 text-white mt-4 ">
      <div className="text-center mt-8 h-fit">
        <h3 className="text-4xl font-semibold border-t-2 border-white pt-2">
          Workflow Optimizer
        </h3>
        <div className="w-full h-1/2 flex mb-10 mt-10  rounded-lg  max-w-6xl mx-auto">
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
            <div className="w-full h-[10%] flex justify-end">
              <PersonDropdown args={data} />
            </div>
            <div className="w-full h-[90%]  border-t-2 border-gray-600 rounded-lg mt-4 flex-col flex items-center justify-start mb-2">
              <div className="w-[95%] mt-2 border-2 border-gray-400 h-[60px] rounded-md flex">
                <div className="bg-gray-900 border-r-2 border-gray-400 w-[20%] flex justify-center items-center"><span className="text-xl font-bold uppercase ">Employees</span></div>
                <div className="bg-gray-900 border-r-2 border-gray-400 w-[10%] flex justify-center items-center"><span>Mon 9</span></div>
                <div className="bg-gray-900 border-r-2 border-gray-400 w-[10%] flex justify-center items-center"><span>Tue 10</span></div>
                <div className="bg-gray-900 border-r-2 border-gray-400 w-[10%] flex justify-center items-center"><span>Wed 11</span></div>
                <div className="bg-gray-900 border-r-2 border-gray-400 w-[10%] flex justify-center items-center"><span>Thu 12</span></div>
                <div className="bg-gray-900 border-r-2 border-gray-400 w-[10%] flex justify-center items-center"><span>Fri 13</span></div>
                <div className="bg-gray-900 border-r-2 border-gray-400 w-[10%] flex justify-center items-center"><span>Sat 14</span></div>
                <div className="bg-gray-900 border-r-2 border-gray-400 w-[10%] flex justify-center items-center"><span>Sun 15</span></div>
                <div className="bg-gray-900 border-r-2 border-gray-400 w-[10%] flex justify-center items-center"><span>Mon 16</span></div>
              </div>
                {
                    data?.map((instance,i)=>(
                        <div key={i} className="w-[95%] mt-2 border-2  h-[60px] rounded-md flex">
                        <div className="border-r-2 w-[20%]">                    
                            <div className="flex items-center justify-start h-full">
                                <img src={instance?.image} alt="." className="h-full w-14 rounded-sm border-2 border-gray-400"></img>
        
                                <span className="text-start w-full ml-2 text-sm h-full flex items-center justify-center flex-col ">
                                    <p className="text-gray-400 text-[8px] w-full h-fit break-words leading-none text-center">{instance?.desc}
                                    <br/><span className=" text-sm break-words leading-none text-center text-white hover:text-base cursor-pointer ">{instance?.name}</span>
                                    </p>
                                    </span>
                              </div>
                        </div>
                        <div className="border-r-2 border-red-700 w-[10%] bg-red-700 rounded-tr-3xl flex flex-col items-center">
                            <span className="mt-3 text-[8px]">11am to 7pm</span>
                            <span className="text-[12px] bg-red-400 w-fit p-[3px] rounded-xl hover:text-[14px] cursor-pointer">Host</span>
                        </div>
                        <div className="border-r-2 border-blue-700 w-[10%] bg-blue-700 rounded-tr-3xl flex flex-col items-center">
                            <span className="mt-3 text-[8px]">10am to 2pm</span>    
                            <span className="text-[12px] bg-blue-400 w-fit p-[3px] rounded-xl hover:text-[14px] cursor-pointer">Master</span>
                        </div>
                        <div className="border-r-2 border-orange-700 w-[10%] bg-orange-700 rounded-tr-3xl flex flex-col items-center">
                            <span className="mt-3 text-[8px]">9am to 6pm</span>    
                            <span className="text-[12px] bg-orange-400 w-fit p-[3px] rounded-xl hover:text-[14px] cursor-pointer">Designer</span>
                        </div>
                        <div className="border-r-2 border-purple-700 w-[10%] bg-purple-700 rounded-tr-3xl flex flex-col items-center">
                            <span className="mt-3 text-[8px]">9am to 3pm</span>    
                            <span className="text-[12px] bg-purple-400 w-fit p-[3px] rounded-xl hover:text-[14px] cursor-pointer">Pres</span>
                        </div>
                        <div className="border-r-2 border-yellow-700 w-[10%] bg-yellow-700 rounded-tr-3xl flex flex-col items-center">
                            <span className="mt-3 text-[8px]">8am to 4pm</span>    
                            <span className="text-[12px] bg-yellow-500 w-fit p-[3px] rounded-xl hover:text-[14px] cursor-pointer">Supervisor</span>
                        </div>
                        <div className="border-r-2 border-green-700 w-[10%] bg-green-700 rounded-tr-3xl flex flex-col items-center">
                            <span className="mt-3 text-[8px]">10am to 4pm</span>    
                            <span className="text-[12px] bg-green-500 w-fit p-[3px] rounded-xl hover:text-[14px] cursor-pointer">Emp</span>
                        </div>
                        <div className="border-r-2 border-cyan-700 w-[10%] bg-cyan-700 rounded-tr-3xl flex flex-col items-center">
                            <span className="mt-3 text-[8px]">12pm to 1am</span>    
                            <span className="text-[12px] bg-cyan-500 w-fit p-[3px] rounded-xl hover:text-[14px] cursor-pointer">Git</span>
                        </div>
                        <div className=" w-[10%] border-pink-700 bg-pink-700 rounded-tr-3xl flex flex-col items-center">
                            <span className="mt-3 text-[8px]">7am to 4pm</span>    
                            <span className="text-[12px] bg-pink-500 w-fit p-[3px] rounded-xl hover:text-[14px] cursor-pointer">Cyc</span>
                        </div>
                      </div>
                    ))
                }

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
