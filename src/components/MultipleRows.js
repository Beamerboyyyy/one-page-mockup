import React, { useEffect, useState } from "react";
import SingleWeek from "./SingleWeek";

const MultipleRows = ({ datas }) => {
  const [date, setDate] = useState(new Date());
  console.log(datas);
  const [rows, setRows] = useState(datas.rows);
  console.log(rows);
  useEffect(() => {
    var dat = date.toDateString();
    var lst = [];
    Array.from(document.querySelectorAll("div#main>div.rounded-lg")).forEach(
      (i) => {
        lst.push(i.textContent.slice(0, 3));
      }
    );
    var index = lst.indexOf(date.toDateString().split(" ")[0]);
    if (index !== -1) {
      var datediv = Array.from(
        document.querySelectorAll("div#date > div.rounded-lg")
      );
      var dd = new Date();
      if (index == 0) {
        datediv.forEach((f, inde) => {
          f.innerText = dd.toDateString().slice(4, 10);
          if (inde == 0) {
            f.classList.remove("bg-gray-900");
            f.classList.add("bg-red-700");
            f.classList.remove("border-gray-900");
            f.classList.add("border-red-700");
          }
          dd.setDate(date.getDate() + inde + 1);
        });
      } else {
        datediv.forEach((f, inde) => {
          dd.setDate(date.getDate() - index + inde);
          if (index - inde == 0) {
            f.classList.remove("bg-gray-900");
            f.classList.add("bg-red-700");
            f.classList.remove("border-gray-900");
            f.classList.add("border-red-700");
          }
          f.innerText = dd.toDateString().slice(4, 10);
        });
      }
    }
  }, [date]);
  return (
    <div className={" grid-rows-24 container border-2 grid "}>
      <div
        className={`  h-[60px] rounded-md row-span-3 grid grid-cols-9  text-white mb-[2px]`}
        id="date"
      >
        <div className=" w-[150px]  flex flex-col items-center justify-center"></div>
        <div className="bg-gray-900  border-gray-900 w-full rounded-lg flex flex-col items-center justify-center"></div>
        <div className="bg-gray-900  border-gray-900 w-full rounded-lg flex flex-col items-center justify-center"></div>
        <div className="bg-gray-900  border-gray-900 w-full rounded-lg flex flex-col items-center justify-center"></div>
        <div className="bg-gray-900  border-gray-900 w-full rounded-lg flex flex-col items-center justify-center"></div>
        <div className="bg-gray-900  border-gray-900 w-full rounded-lg flex flex-col items-center justify-center"></div>
        <div className="bg-gray-900  border-gray-900 w-full rounded-lg flex flex-col items-center justify-center"></div>
        <div className="bg-gray-900  border-gray-900 w-full rounded-lg flex flex-col items-center justify-center"></div>
      </div>
      {datas?.map((row) => (
        <div
          key={row.id}
          className={
            row.cond
              ? `  h-[60px] rounded-md grid grid-cols-9  text-white`
              : `grid grid-cols-9  row-span-3 h-[80px] mt-[1px] `
          }
          id={row.cond ? "main" : ""}
        >
          <SingleWeek
            data={row.rows}
            cond={row.cond ? true : false}
            id={row.id}
          />
        </div>
      ))}
    </div>
  );
};

export default MultipleRows;
