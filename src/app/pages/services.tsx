"use client";
import Image from "next/image";
import React from "react";
import "./services.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function OurServices() {
  return (
    <main className="">
      <div className="">
        <div className="sm:mx-[50rem] flex flex-col items-center ">
          <h1 className="text-skyBlue font-bold text-[20px] sm:text-[2rem] whitespace-nowrap ml-0 sm:ml-5">
            OUR SERVICES
          </h1>

          <div className="flex justify-center">
            <h3 className="pt-[1rem] text-[1.5rem] font-bold sm:text-black-300 whitespace-nowrap">
              We Are Specialized In The Following Services
            </h3>
          </div>
        </div>

        <div>
          <ul className="flex gap-[3rem] mx-[10rem] pt-[5rem] mt-3rem">
            <li className="bg-skyBlue h-[13rem] w-[13rem] px-[3rem] py-[4rem] justify-center font-medium text-white text-center h-[10rem] w-[11rem] hover:bg-skyBlue hover:text-white shadow-md">
              Frontend Development
            </li>
            <li className="px-[3rem] h-[13rem] w-[13rem] py-[3rem] justify-center font-medium text-black text-center w-[11rem] h-[10rem] hover:bg-skyBlue  hover:text-white shadow-md hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              Web Design
            </li>
            <li className="px-[3rem] h-[13rem] w-[13rem] py-[3rem] justify-center font-medium text-black text-center w-[11rem] h-[10rem] hover:bg-skyBlue hover:text-white shadow-md hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              Backend Development
            </li>
            <li className="px-[3rem] h-[13rem] w-[13rem] py-[3rem] justify-center font-medium text-black text-center w-[11rem] h-[10rem] hover:bg-skyBlue  hover:text-white shadow-md hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              Digital Marketing
            </li>
            <li className="px-[3rem] h-[13rem] w-[13rem] py-[3rem] justify-center font-medium text-black text-center w-[11rem] h-[10rem] hover:bg-skyBlue hover:text-white shadow-md hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              Branding
            </li>
          </ul>
        </div>

        <div>
          <h6 className="mx-[10rem] pt-[1.5rem] text-[16px] font-semibold text-skyBlue ">
            Business Website
          </h6>
          <div className="mx-[10rem] pt-[2rem]">
            <h2 className="font-bold text-[36px] pt-[2rem]">
              Business Website
            </h2>
            <p className="text-[15px] pt-[1rem]">
              If your business does not yet have a website, then this is time to
              have an online <br />
              presence that communicates the brand of your company, as well as
              that
              <br />
              displays information about services or products
            </p>
            <div>
              <Image
                className="mx-[30rem] my-[-12rem] w-[45rem] h-[32rem] pl-[6rem]"
                src="/team-writes-programming-code-for-app-or-website-6765188-5607773.webp"
                width={300}
                height={300}
                alt="our group image description"
              />
            </div>
            <div>
              <ul>
                <li className="p-4 font-semibold text-[18px]">
                  Interactive Features
                </li>
                <li className="p-4 font-semibold text-[18px]">
                  {" "}
                  UI & UX Implementation
                </li>
                <li className="p-4 font-semibold text-[18px]">
                  Mobile Optimized
                </li>
              </ul>
              <ul className="mx-[16rem] my-[-11rem]">
                <li className="p-4 font-semibold text-[18px]">User friendly</li>
                <li className="p-4 font-semibold text-[18px]">
                  {" "}
                  100% SEO optimized
                </li>
                <li className="p-4 font-semibold text-[18px]">
                  Speed performance
                </li>
              </ul>
            </div>
            <button className="my-[13rem] bg-skyBlue  text-white p-[1rem] rounded-sm">
              {" "}
              Get Proposal
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
