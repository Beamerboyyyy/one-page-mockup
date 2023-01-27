import React, { useEffect, useState } from "react";
import MultipleRows from "./MultipleRows";
// import { useStateValue } from "./StateProvider";
// import data from "./data";
import { useStateValue } from "../StateProvider";

const Calendar = () => {
  const [state, dispatch] = useStateValue();
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    console.log(state);
    function getElementByXpath(path) {
      return document.evaluate(
        path,
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
      ).singleNodeValue;
    }
    var day = date.toDateString();
    var daydiv = getElementByXpath(
      `//div[contains(text(),'${day.split(" ")[0]}')]`
    );
    daydiv.classList.remove("bg-gray-900");
    daydiv.classList.add("bg-red-700");
    daydiv.classList.remove("border-gray-900");
    daydiv.classList.add("border-red-700");
  }, [date]);
  return <MultipleRows datas={state.data} />;
};

export default Calendar;
