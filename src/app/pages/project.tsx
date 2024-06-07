"use client";
import Image from "next/image";
import React from "react";
import "./services.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const projects = [
  {
    href: "https://aphezis.com",
    imgSrc: "/persond.png",
    title: "Pearsand",
    description: "this is a VPN app that is fast and cheap. It is great in providing internet and it is very cheap",
  },
  {
    href: "",
    imgSrc: "/785a1b9c359640da6bc9cfe3670b42ba.jpg",
    title: "Online e-commerce",
    description: "this is an online e-commerce that we made through different skills like react js and tailwind and node js",
  },
  {
    href: "",
    imgSrc: "/785a1b9c359640da6bc9cfe3670b42ba.jpg",
    title: "Online e-commerce",
    description: "this is an online e-commerce that we made through different skills like react js and tailwind and node js",
  },
  {
    href: "",
    imgSrc: "/785a1b9c359640da6bc9cfe3670b42ba.jpg",
    title: "Online e-commerce",
    description: "this is an online e-commerce that we made through different skills like react js and tailwind and node js",
  },
  {
    href: "",
    imgSrc: "/785a1b9c359640da6bc9cfe3670b42ba.jpg",
    title: "Online e-commerce",
    description: "this is an online e-commerce that we made through different skills like react js and tailwind and node js",
  },
  {
    href: "",
    imgSrc: "/785a1b9c359640da6bc9cfe3670b42ba.jpg",
    title: "Online e-commerce",
    description: "this is an online e-commerce that we made through different skills like react js and tailwind and node js",
  },
];

export default function ProjectPage() {
  return (
    <>
      <div className="-my-[65rem]">
        <div className="mx-[30rem] my-[60rem]">
          <h1 className="text-center text-skyBlue font-bold text-[30px]">
            Projects
          </h1>
          <ul className="flex text-center justify-center gap-[30px] my-10">
            <button className="bg-black text-white w-[80px] h-[40px] border-none text-[10px] rounded-md">
              All
            </button>
            <button className="bg-black text-white w-[120px] h-[40px] border-none text-[10px] rounded-md">
              Apps
            </button>
            <button className="bg-black text-white w-[120px] h-[40px] border-none text-[10px] rounded-md">
              Website
            </button>
          </ul>
        </div>
        <div className="flex space-x-[5rem] gap-8 mx-[10rem] -my-[55rem] list-none">
          {projects.slice(0, 3).map((project, index) => (
            <Link
              key={index}
              href={project.href}
              className="bg-white w-[20rem] h-[20rem] rounded-md shadow-2xl text-center relative overflow-hidden group"
            >
              <div className="transition-opacity px-[1rem] duration-500 group-hover:opacity-0">
                <Image
                  className="w-56 h-56 mx-auto"
                  src={project.imgSrc}
                  alt={`project-${index}`}
                  width={250}
                  height={250}
                />
                <p className="font-bold text-[18px]">{project.title}</p>
                <p className="text-[10px] justify-left my-1">{project.description}</p>
                <FontAwesomeIcon
                  icon={faLink}
                  className="w-4 h-4 text-skyBlue pl-[8px] -my-1"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-skyBlue transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                <p className="text-white text-md font-bold">Visit the website</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex space-x-[4rem] gap-8 mx-[10rem] my-[60rem] list-none">
          {projects.slice(3).map((project, index) => (
            <Link
              key={index + 3}
              href={project.href}
              className="bg-white w-[20rem] h-[20rem] rounded-md shadow-2xl text-center relative overflow-hidden group"
            >
              <div className="transition-opacity  px-[1rem] duration-500 group-hover:opacity-0">
                <Image
                  className="w-56 h-56 mx-auto"
                  src={project.imgSrc}
                  alt={`project-${index + 3}`}
                  width={250}
                  height={250}
                />
                <p className="font-bold text-[18px]">{project.title}</p>
                <p className="text-[10px] justify-left my-1">{project.description}</p>
                <FontAwesomeIcon
                  icon={faLink}
                  className="w-4 h-4 text-skyBlue pl-[8px] -my-1"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-skyBlue transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                <p className="text-white text-md font-bold">Visit the website</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center -my-[55rem]">
          <button className="border-[1px] border-skyBlue px-8 py-3 text-[12px] hover:bg-skyBlue hover:text-white my-24">
            All Projects
          </button>
        </div>
      </div>
    </>
  );
}
