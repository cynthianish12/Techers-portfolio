import React from "react";
import Navbar from "../../Home/Navbar";
import { FaLongArrowAltRight } from "react-icons/fa";
import { SiAffinitydesigner } from "react-icons/si";
import { TfiWrite } from "react-icons/tfi";
import { FaCircleArrowRight } from "react-icons/fa6";
import Image from "next/image";
import bgImage from "../../../../public/e5b2bcbe75af96ecb8dd0c18691ad62f.jpg";
import Userfooter from "../footer";


const Services = () => {
  const items = [
    {
      title: " Web Design",
      desc: "We do web Designing and provide good and attractive designs to different webs",
      pDesc: "Read more",
      icon1: <FaLongArrowAltRight />,
      icon2: <SiAffinitydesigner />,
    },
    {
      title: "Frontend Development",
      desc: "We make stanning Frontend development for different app",
      pDesc: "Read more",
      icon1: <FaCircleArrowRight />,
      icon2: <TfiWrite />,
    },
    {
      title: " Backend Development",
      desc: "Backend developement of different projects and apps we do ",
      pDesc: "Read more",
      icon1: <FaLongArrowAltRight />,
      icon2: <TfiWrite />,
    },
    {
      title: "Digital Marketing",
      desc: "We are into digtal marketing where by we help to market different apps",
      pDesc: "Read more",
      icon1: <FaLongArrowAltRight />,
      icon2: <SiAffinitydesigner />,
    },
    {
      title: "Web development",
      desc: "Web divelopment in general is also our work that we do.",
      pDesc: "Read more",
      icon1: <FaCircleArrowRight />,
      icon2: <TfiWrite />,
    },
    {
      title: "Branding",
      desc: "We can also help every one who needs branding to get it done ",
      pDesc: "Read more",
      icon1: <FaLongArrowAltRight />,
      icon2: <TfiWrite />,
    },
  ];

  return (
    <>
      <Navbar />
      <div>
        <div className="mx-10 lg:mx-28 relative bg-gray-800 h-48 flex items-center">
          <Image
            src={bgImage}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover opacity-75"
          />
          <div className="relative z-10 px-6">
            <h1 className="text-white text-3xl font-bold">Services</h1>
          </div>
        </div>
        <div className="mx-10 grid md:grid-rows-3 md:grid-cols-2 lg:mx-28 lg:grid-cols-3 lg:grid-rows-2">
          {items.map((item, i) => (
            <div key={i} className="border border-gray-400 rounded-xl p-5 m-5">
              <div>
                <h1 className="text-2xl font-semibold mb-3">{item.title} </h1>
                <p className="text-gray-500">{item.desc} </p>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-3">
                  <button className="text-black bg-slate-100 shadow-lg  p-3 rounded-full hover:animate-bounce duration-500">
                    {item.icon1}{" "}
                  </button>
                  <p className="text-gray-500 text-[15px]">{item.pDesc} </p>
                </div>
                <div className="bg-slate-100 p-10 rounded-tl-full">
                  <div className="text-4xl text-blue-600 pl-5">
                    {item.icon2}{" "}
                  </div>
                </div>
              </div>
            </div>
          ))}
           <div>
       
        </div>
        </div>
        <Userfooter/>
      </div>
    </>
  );
};

export default Services;
