import React from "react";
import image from "../static/image-second.jpg"

export default function About() {
   const cv=null;
  const info = [
    { text: "Founded on", count: "2006" },
    { text: "Email", count: "hello@crosswing.com" },
    { text: "Phone", count: "+1 416-875-4747" },
  ];
  return (
    <section id="home" className="py-10 text-white mt-2">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold border-t-2 border-white pt-2">
          Home
        </h3>
        <div className="flex md:flex-row flex-col md:gap-6 gap-12 px-2 max-w-6xl mx-auto ">
          <div className="m-2">
            <div className="text-gray-300 my-3 mt-20">
              <p className="text-justify leading-7 w-full">
              CrossWing® Inc. is a Toronto-area based privately held Canadian
          corporation. The company was founded in 2006 with the goal to produce
          an entirely autonomous robotic platform that can serve to benefit
          consumers, businesses, and national defence.
          <br/>
          <br/>
          Our mission is to revolutionize AI & data-driven decision making,
          immersive communication experiences, and human-robot interaction
          through delivering robust technology advisory and outstanding
          interactive robots which affordably enhance our clients’ insights,
          security, customer experience, and bottom line.
          <br/>
          <br/>
          CrossWing operates a dedicated R&D lab developing innovative
          intellectual property, enabling mass market Interactive Personal
          Robotics (IPR) systems in fields including telepresence, security and
          health monitoring. Breakthrough designs at every key subsystem are
          necessary for success and we actively leverage university talent pools
          in areas including man-machine interface design, mechatronics,
          computer vision, and autonomous systems encompassing artificial
          intelligence.
          <br/>
          <br/>
          CrossWing’s robotic’s division has several leading industry research
          partners across Canada including 8 Universities, Natural Science and
          Engineering Research Council of Canada (NSERC), Ontario Centres of
          Excellence, and many others
              </p>
              <div className="flex mt-10 justify-center items-center gap-12 w-full">
                {info.map((content) => (
                  <div key={content.text} className="">
                    <h3 className="md:text-xl text-xl font-semibold text-white ">
                      {content.count}
                      <span className="text-cyan-600"></span>
                    </h3>
                    <span className="md:text-base text-sm">{content.text}</span>
                  </div>
                ))}
              </div>
              {/* <a href={cv} download className="flex justify-center items-center">
                <button className="btn-primary mt-5">Download CV</button>
              </a> */}
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center ">
                <div className="lg:w-96 h-full mt-20 relative sm:w-10/12 w-11/12 max-w-sm">
                    <img src={image} alt="" className="mt-12 w-full object-cover bg-gray-800 rounded-xl "/>
                </div>
          </div>
        </div>
      </div>
    </section>
  );
}
