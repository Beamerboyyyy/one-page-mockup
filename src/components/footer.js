import React from "react";
import logo from "../static/logo.jpg";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

const Footer = () => {
  return (
    <div className="bg-[#CCCCCC]  mt-10 text-white flex  items-center justify-evenly">
      <div className="flex flex-col">
        <div className="flex items-center ">
          <div>
            <PhoneIcon className="text-[#CE2026] !w-12 !h-12" />
          </div>
          <div className="text-[#CE2026] font-black">CALL US</div>
        </div>
        <div className="text-[#CE2026] font-semibold">
          Tel: 905-625-4567 | Fax: 905-624-2354
        </div>
      </div>
      <div class=" w-0.5 h-10 bg-gray-600"></div>
      <div className="flex flex-col">
        <div className="flex items-center">
          <div>
            {" "}
            <EmailIcon className="text-[#CE2026] !w-12 !h-12" />
          </div>
          <div className="text-[#CE2026] font-black">EMAIL US</div>
        </div>
        <div className="text-[#CE2026] font-semibold ">
          sales@ascsunroofs.com
        </div>
      </div>
      <div class=" w-0.5 h-10 bg-gray-600"></div>
      <div className="flex flex-col">
        <div className="flex items-center">
          <div>
            <WatchLaterIcon className="text-[#CE2026] !w-12 !h-12" />
          </div>
          <div className="text-[#CE2026] font-black">OPENING HOURS</div>
        </div>
        <div className="text-[#CE2026] font-semibold">
          Mon - Fri: 8:30am - 5:00pm EST
        </div>
      </div>
    </div>
  );
};

export default Footer;
