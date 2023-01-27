import React, { useEffect, useState } from "react";
import { useStateValue } from "../StateProvider";
// import { useStateValue } from "./StateProvider";

const SingleWeek = ({ data, cond, id }) => {
  const [date, setDate] = useState(new Date());
  const [state, dispatch] = useStateValue();
  const [singlerow, setSinglerow] = useState(data);
  const [conds, setConds] = useState(false);
  const handleClickOpen = (id, index) => {
    // console.log(e);
    var sendate = state.data.filter((i) => {
      if (i.id == id) {
        return true;
      } else {
        return false;
      }
    });
    console.log(sendate[0].rows[index].event);
    if (sendate.length > 0) {
      dispatch({
        type: "OPEN_MODAL",
        payload: sendate[0].rows[index].event,
      });
    }
    console.log("state:", state);
    // setOpen(true);
  };
  useEffect(() => {
    function getElementByXpath(path) {
      return document.evaluate(
        path,
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
      ).singleNodeValue;
    }
    var hour = date.getHours();
    console.log(state);
    var da = data.filter((i) => {
      if (typeof i != "object") {
        if (i.includes("-") && i.includes(":")) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    });
    console.log("da", da);
    if (da.length > 0) {
      var div = getElementByXpath(`//div[contains(text(),'${da[0]}')]`);

      if (
        parseInt(
          da[0].replace("AM", "").replace("PM", "").split("-")[0].trim()
        ) == hour
      ) {
        div.classList.remove("bg-gray-900");
        div.classList.add("bg-red-700");
        div.classList.remove("border-gray-900");
        div.classList.add("border-red-700");
      }
    }
  }, [date]);
  return (
    <>
      {singlerow.map((i, index) => {
        if (typeof i == "object") {
          return (
            <div
              key={index}
              className={
                i.job
                  ? "bg-purple-700  border-purple-700 w-full rounded-tr-3xl rounded-tl-3xl flex flex-col items-center justify-center text-white"
                  : "mr-[5px] border-l-2 hover:text-white font-bold border-r-2 border-green-700 w-full bg-green-700 rounded-tr-3xl rounded-tl-3xl flex flex-col items-center"
              }
              onClick={() => handleClickOpen(id, index)}
            >
              <span className=" xl:text-[15px] hover:font-bold cursor-pointer flex flex-col leading-none">
                {i.text}
              </span>
              {/* {i == "" ? (
            <ArrowBackIosIcon className="!flex !items-center !justify-center !h-full " />
          ) : i == "s" ? (
            <ArrowForwardIosIcon className="!flex !items-center !justify-center !h-full " />
          ) : (
            i
          )} */}
            </div>
          );
        } else {
          return (
            <div
              key={index}
              className={
                i != "" && !cond
                  ? index == 0
                    ? "bg-gray-900  border-gray-900 w-full rounded-tr-3xl rounded-tl-3xl flex flex-col items-center justify-center text-white"
                    : "mr-[5px] border-l-2 hover:text-white font-bold border-r-2 border-green-700 w-full bg-green-700 rounded-tr-3xl rounded-tl-3xl flex flex-col items-center justify-center"
                  : i == ""
                  ? "w-full flex flex-col items-center justify-center"
                  : "bg-gray-900  border-gray-900 w-full rounded-lg flex flex-col items-center justify-center"
              }
            >
              {i}
              {/* {i == "" ? (
            <ArrowBackIosIcon className="!flex !items-center !justify-center !h-full " />
          ) : i == "s" ? (
            <ArrowForwardIosIcon className="!flex !items-center !justify-center !h-full " />
          ) : (
            i
          )} */}
            </div>
          );
        }
      })}
    </>
  );
};

export default SingleWeek;
