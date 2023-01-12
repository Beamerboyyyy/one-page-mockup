import React from "react";
import image from "../static/image-second.jpg"
import img1 from "../static/img1.jpg"
import img2 from "../static/img2.jpg"
import img3 from "../static/img3.jpg"
import "../static/home.css";

export default function About() {
   const cv=null;
  const info = [
    { text: "Founded on", count: "2006" },
    { text: "Email", count: "hello@crosswing.com" },
    { text: "Phone", count: "+1 416-875-4747" },
  ];
  return (
    <section id="home" className="py-10 text-white mt-12">
      <div className="text-center mt-16">
      <div className="flex justify-center items-center">
        <h3 className="link link-underline link-underline-black    text-4xl font-black border-t-2 border-white pt-2 text-black mb-2">
          Home
        </h3>
        </div>
        <div className="bg-customBlue mx-auto max-w-7xl rounded-lg border-2 border-customDarkBlue">
        <div className="flex md:gap-6 gap-12  w-full ">
          <div className="w-1/2 md:mt-0 mt-6 flex justify-end items-center  ">
              <h3 className="font-black lg:text-3xl text-2xl text-gray-800 text-end w-11/12 ">A software engineering services company that redefines the state of the art</h3>
          </div>
          <div className="mr-2 mt-2 mb-2  w-1/2">
            <div className="text-customDarkBlue mt-10 border-l-2 border-black pl-2">
              <h1 className="text-justify text-md lg:text-lg text-md leading-7 font-bold w-11/12 mb-2 ">
              Transform your business with Foxfire Labs. Our software engineering experts can help you reimagine and modernize existing technology systems, as well as launch exciting new products.
              </h1>
              <p className="text-start lg:text-md text-sm w-11/12">
              With our focus on quality and customer care, you can trust us for a comprehensive solution that boosts efficiency and gives you a competitive edge.
              </p>

            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col md:gap-6 gap-12 px-2  mt-5  w-full pb-5 mx-2">
          <h2 className="text-4xl text-start font-black text-customDarkBlue">We've been solving challenges for businesses since 2006 through the use of cutting-edge solutions.</h2>
        </div>
        <div className="flex px-2 mt-5 gap-2 w-full pb-5 mx-2">
            <div className="w-1/3  mr-4">
              <img src={img1} className='rounded-lg hover:scale-105 cursor-pointer duration-100 mb-4 '>
              </img>
              <span className="link link-underline link-underline-black text-customDarkBlue text-xl font-black cursor-pointer ">Improving Chemical Manufacturing with AI and Robotic Automation</span>
            </div>
            <div className="w-1/3  mr-4">
              <img src={img2} className='rounded-lg hover:scale-105 cursor-pointer duration-100 mb-4'>
              </img>
              <span className="link link-underline link-underline-black text-customDarkBlue text-xl font-black cursor-pointer ">Optimizing Packaging Operations with Vision-Based Robotics</span>
            </div>
            <div className="w-1/3  mr-4">
              <img src={img3} className='rounded-lg hover:scale-105 cursor-pointer duration-100 mb-4'>
              </img>
              <span className="link link-underline link-underline-black text-customDarkBlue text-xl font-black cursor-pointer ">Enhancing Workplace Safety & Training with AI & Computer Vision</span>
            </div>
            
            
        </div>
        </div>
      </div>

    </section>
  );
}
