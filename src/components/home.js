import React from "react";
import image from "../static/image-second.jpg";
import img1 from "../static/img1.jpg";
import img2 from "../static/img2.jpg";
import img3 from "../static/img3.jpg";
// import map-pin from "@heroicons"
import {
  MapPinIcon,
  CurrencyDollarIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import "../static/home.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function About() {
  const cv = null;
  const info = [
    { text: "Founded on", count: "2006" },
    { text: "Email", count: "hello@crosswing.com" },
    { text: "Phone", count: "+1 416-875-4747" },
  ];
  return (
    <section id="home" className="py-10 text-white mt-12">
      <div className="text-center mt-16">
        <div className="flex justify-center items-center">
          <h3 className="link link-underline link-underline-black    text-4xl font-black border-t-2 border-white pt-2 text-[#CE2026] mb-2">
            Home
          </h3>
        </div>
        <div className="bg-customBlue mx-auto max-w-7xl rounded-lg border-2 border-customDarkBlue">
          {/* <div className="flex md:gap-6 gap-12 space-y-6 tracking-wider mt-2 w-full justify-center font-bold text-customDarkBlue text-4xl ">
            Our Mission
          </div> */}
          <div className="flex md:flex-row flex-col md:gap-6 gap-12 px-2 justify-center mt-5 ext-2xl text-start font-black text-[#CE2026]  w-full pb-5 mx-2">
            WE WANT TO BE THE AUTO ACCESSORY AND INSTALLATION FACILITY YOU TURN
            TO FOR ALL YOUR AUTOMOTIVE NEEDS
          </div>
          <div className="flex px-2 mt-5 gap-2 w-full pb-5 mx-2">
            <div className="text-customDarkBlue flex justify-center w-full text-md">
              For the over 40 years we’ve been in business, we have been
              striving to provide our clients the best quality service possible
              to gain their full satisfaction. And they’ve shown their
              appreciation by coming back to us repeatedly.
            </div>
          </div>
          <div className="flex md:flex-row flex-col md:gap-6 gap-12 px-2 justify-center mt-5 ext-2xl text-start font-black text-[#CE2026]  w-full pb-5 mx-2">
            WE WANT NOTHING MORE THAN TO KEEP YOU AND YOUR VEHICLE SAFE AND
            ACCESSORIZED
          </div>
          <div className="flex px-2 mt-5 gap-2 w-full pb-5 mx-2">
            <div className="text-customDarkBlue flex justify-center w-full text-md">
              Whether you own an import, a domestic, or a high performance
              exotic car, we’re the place to take your car for all your
              accessory needs. We pride ourselves on being able to provide the
              best quality products and services. We have been leaders and
              experts in our industry for over 40 years in Canada.
            </div>
          </div>
          <div className="flex px-2 mt-5 gap-2 w-full justify-evenly pb-5 mx-2 text-customDarkBlue">
            <div className="flex flex-col justify-center align-bottom">
              <div className="flex justify-center ">
                <LocationOnIcon className="text-[#CE2026] !w-12 !h-12" />
              </div>
              <div className="text-[#CE2026] font-black">
                ALWAYS OPEN FOR YOU
              </div>
              <div className="text-customDarkBlue flex justify-center w-full text-md">
                Get to know our experienced sales and installation staff.
                They’ve got tools, skills, and a desire to help. Come see why no
                shop is as quick, qualified, or convenient as we are.
              </div>
            </div>
            <div className="flex flex-col justify-center align-bottom">
              <div className="flex justify-center ">
                <AttachMoneyIcon className="text-[#CE2026] !w-12 !h-12" />
              </div>
              <div className="text-[#CE2026] font-black">
                UNBEATABLE PRICE & SERVICE
              </div>
              <div className="text-customDarkBlue flex justify-center w-full text-md">
                At ASC, we will strive to give you give you the best service at
                the best possible price. Get a quote today!
              </div>
            </div>
            <div className="flex flex-col justify-center align-center">
              <div className="flex justify-center ">
                <StarBorderIcon className="text-[#CE2026] !w-12 !h-12" />
              </div>
              <div className="text-[#CE2026] font-black">
                PROFESSIONALLY QUALIFIED & FACTORY CERTIFIED
              </div>
              <div className="text-customDarkBlue flex justify-center w-full text-md">
                We’re a SEMA certified installation company with well trained
                and experienced professionals. Trust us as your experts in
                leather, sunroofs and all your vehicle accessory needs.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
