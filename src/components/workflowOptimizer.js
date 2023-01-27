import React from "react";
import PersonDropdown from "./personDropdown";
import person1 from "../static/person1.jpg";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import { useStateValue } from "../StateProvider";
import Calendar from "./Calendar";
// import SortBox from "./sortBox";

function getRandomItem(set) {
  let items = Array.from(set);
  return items[Math.floor(Math.random() * items.length)];
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function Workflowoptimizer() {
  const [state, dispatch] = useStateValue();
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
    // { task: "Roof Welding" },
    // { task: "Roof Allocation" },
    // { task: "Inventory Check" },
    // { task: "Roof Measurement Check" },
    // { task: "Roof Drilling" },
    // { task: "Roof Inspection" },
  ];
  var color = [
    { color: "red-700" },
    { color: "blue-500" },
    { color: "pink-700" },
    { color: "purple-700" },
    { color: "yellow-700" },
    { color: "green-700" },
    { color: "green-500" },
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
        <div className="flex justify-center items-center">
          <h3 className="link link-underline link-underline-black text-4xl font-black border-t-2 border-white pt-2 text-[#CE2026]">
            Workflow Optimizer
          </h3>
        </div>
        <div className="bg-customBlue mt-10 mx-auto max-w-7xl rounded-lg border-2 border-customDarkBlue">
          <div className="w-full h-1/2 flex mb-10 mt-10  rounded-lg border-2 ">
            <div className="w-1/4 h-full rounded-l-lg text-customDarkBlue bg-customBlue  border-customDarkBlue">
              <h3 className="m-4 pb-2 text-xl font-black border-b-2 hover:text-2xl duration-100 cursor-pointer">
                Expected Upcoming Tasks
              </h3>
              <div className="mb-2">
                <table className="mx-auto gap-3">
                  <tr className="">
                    <th className="text-lg text-customDarkBlue font-black p-2 border-b-2 border-r-2 border-customDarkBlue">
                      Car Company
                    </th>
                    <th className="text-lg text-customDarkBlue font-black p-2 border-b-2 border-customDarkBlue">
                      Quantity
                    </th>
                  </tr>
                  {tasks?.map((task, i) => (
                    <tr
                      key={i}
                      className="hover:text-xl hover:text-gray-600 hover:font-bold duration-100 cursor-pointer"
                    >
                      <td className="p-1 border-r-2 border-l-2 border-customDarkBlue">
                        {task?.name}
                      </td>
                      <td className="border-r-2 border-l-2 border-customDarkBlue">
                        {task?.order}
                      </td>
                    </tr>
                  ))}
                </table>
              </div>
            </div>
            <div className="w-3/4 h-full border-2  rounded-lg bg-customBlue">
              <div className="w-full h-[10%] flex flex-row justify-end">
                <PersonDropdown args={data} />
              </div>
              <div className="w-full h-[90%]  border-t-2 border-gray-600 rounded-lg mt-4 flex-col flex items-center justify-start mb-2">
                {state.data.length == 0? "" : <Calendar />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
