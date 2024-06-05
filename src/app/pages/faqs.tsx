"use client"; 
import React from "react";
import "./services.css";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
const Userfaqs = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
      setIsExpanded(!isExpanded);
    };
  return (
    <div className="mt-[1rem]">
          
          <div className="">
                <h1 className="text-center text-skyBlue  ">Frequently asked questions</h1>
                <h2 className="text-black text-center font-bold text-[30px]" > FAQ</h2>
              <div
            className={`mx-[10rem] shadow-md my-[5rem] ${
              isExpanded ? "h-[100px]" : "h-[50px]"
            }`}
          >
            <div className="flex justify-between items-center">
              <h4 className="text-[16px] font-bold text-skyBlue  pl-20">
                What is our background
              </h4>
              <button
                onClick={toggleExpand}
                className="text-[16px] font-bold text-skyBlue  pr-20"
              >
                {isExpanded ? "x" : "+"}
              </button>
            </div>
            {isExpanded && (
              <p className="text-center text-[14px] pt-5">
               we are students from Rwanda Coding academy who work 
               on software programming.
              </p>
            )}
          </div>
          <div
            className={`mx-[10rem] shadow-md my-[5rem] ${
              isExpanded ? "h-[100px]" : "h-[50px]"
            }`}
          >
            <div className="flex justify-between items-center">
              <h4 className="text-[16px] font-bold text-skyBlue  pl-20">
                What to expect from us
              </h4>
              <button
                onClick={toggleExpand}
                className="text-[16px] font-bold text-skyBlue  pr-20"
              >
                {isExpanded ? "x" : "+"}
              </button>
            </div>
            {isExpanded && (
              <p className="text-center text-[14px] pt-5">
                we provide different services such as design, web development, branding and digital markenting.
              </p>
            )}
          </div>
          <div
            className={`mx-[10rem] shadow-md my-[5rem] ${
              isExpanded ? "h-[100px]" : "h-[50px]"
            }`}
          >
            <div className="flex justify-between items-center">
              <h4 className="text-[16px] font-bold text-skyBlue  pl-20">
                Where to find us.
              </h4>
              <button
                onClick={toggleExpand}
                className="text-[16px] font-bold text-skyBlue  pr-20"
              >
                {isExpanded ? "x" : "+"}
              </button>
            </div>
            {isExpanded && (
              <p className="text-center text-[14px] pt-5">
               You can reach out to us through our social media account like X(Twitter) which is Techers Inc or even call us on 
               our mobile phone which is +250793626143.
              </p>
            )}
          </div>
          <div
            className={`mx-[10rem] shadow-md my-[5rem] ${
              isExpanded ? "h-[100px]" : "h-[50px]"
            }`}
          >
            <div className="flex justify-between items-center">
              <h4 className="text-[16px] font-bold text-skyBlue  pl-20">
              Wha is our main Goal
              </h4>
              <button
                onClick={toggleExpand}
                className="text-[16px] font-bold text-skyBlue  pr-20"
              >
                {isExpanded ? "x" : "+"}
              </button>
            </div>
            {isExpanded && (
              <p className="text-center text-[14px] pt-5">
                Our main goal is to use the knowlegde that we gain from our education in 
                solving problems faced by our communities.
              </p>
            )}
          </div>
          </div>


    </div>
  )
}

export default Userfaqs