"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import image1 from "../../../public/Group 7.png";
import Message from "./index";
import { Heading } from "@chakra-ui/react";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const [showMessageModal, setShowMessageModal] = useState(false);

  const navLinks = [
    { name: "HOME", linkto: "/" },
    { name: "ABOUT US", linkto: "/about" },
    { name: "PORTFOLIO", linkto: "/portfolio" },
    { name: "SERVICES", linkto: "" },
    { name: "BLOG", linkto: "/blog" },
    { name: "CONTACT US", onClick: () => setShowMessageModal(true) },
  ];

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  const closeModal = () => {
    setShowMessageModal(false);
  };

  return (
    <div className="md:flex md:items-center md:mx-10">
      <div className="flex justify-between m-3 text-skyBlue text-2xl">
        <Image src={image1} alt="Astronaut" width={150} height={100} />
        <div className="md:hidden cursor-pointer" onClick={handleClick}>
          {isVisible ? <IoMdClose /> : <TiThMenu />}
        </div>
      </div>

      <nav className="">
        <div
          className={`fixed top-12 ${
            isVisible ? "top-0" : "-top-full"
          } md:hidden bg-slate-100 flex flex-col items-center justify-center w-full h-[90vh] transition-all duration-700  ease-in-out`}
        >
          {navLinks.map((link, i) => (
            <div className="my-2" key={i}>
              <a
                onClick={() => {
                  handleClick();
                  link.onClick && link.onClick();
                }}
                className={clsx(
                  "text-[14px] hover:text-skyBlue duration-300",
                  {
                    "text-skyBlue": pathname === link.linkto,
                  }
                )}
              >
                {link.name}
              </a>
            </div>
          ))}
          <button
            className="text-[14px] text-white bg-skyBlue px-4 py-2 rounded hover:bg-skyBlue-darkened duration-500"
          >
            GET QUOTE
          </button>
        </div>
      </nav>

      <nav className="hidden md:flex items-center justify-center gap-5 my-6 font-semibold w-full">
        {navLinks.map((link, i) => (
          <div className="my-2" key={i}>
            <a
              onClick={() => {
                link.onClick && link.onClick();
              }}
              className={clsx(
                "text-[14px] hover:text-skyBlue duration-300",
                {
                  "text-skyBlue": pathname === link.linkto,
                }
              )}
            >
              {link.name}
            </a>
          </div>
        ))}
        <button className="text-[14px] text-white bg-skyBlue px-4 py-2 rounded-[20px] hover:bg-skyBlue-darkened duration-500">
          GET QUOTE
        </button>
      </nav>
      {showMessageModal && (
  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
    <div className="absolute inset-0 bg-black opacity-50">
    <IoClose
  className="absolute top-4 right-4 cursor-pointer text-white text-2xl"
  onClick={closeModal}
/>

    </div>
    <div className="bg-white p-24 rounded-lg shadow-lg z-10 relative">
      <svg
        style={{ position: "absolute", right: "10px", top: "10px" }}
        width="80"
        height="80"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="100" r="50" fill="none" stroke="skyblue" strokeWidth="10" />
        <circle cx="100" cy="100" r="25" fill="skyblue" strokeWidth="10" />
      </svg>
      <svg
        style={{ position: "absolute", right: "-10px", top: "10px" }}
        width="80"
        height="80"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="100" r="50" fill="none" stroke="skyblue" strokeWidth="10" />
        <circle cx="100" cy="100" r="25" fill="skyblue" strokeWidth="10" />
      </svg>

      <svg
        style={{ position: "absolute", left: "10px", top: "10px" }}
        width="80"
        height="80"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="100" r="50" fill="none" stroke="skyblue" strokeWidth="10" />
        <circle cx="100" cy="100" r="25" fill="skyblue" strokeWidth="10" />
      </svg>
      
      <svg
        style={{ position: "absolute", left: "30px", top: "10px" }}
        width="80"
        height="80"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="100" r="50" fill="none" stroke="skyblue" strokeWidth="10" />
        <circle cx="100" cy="100" r="25" fill="skyblue" strokeWidth="10" />
      </svg>
    
      <svg
        style={{ position: "absolute", left: "10px", bottom: "10px" }}
        width="80"
        height="80"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="100" r="50" fill="none" stroke="skyblue" strokeWidth="10" />
        <circle cx="100" cy="100" r="25" fill="skyblue" strokeWidth="10" />
      </svg>

      <svg
        style={{ position: "absolute", left: "30px", bottom: "10px" }}
        width="80"
        height="80"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="100" r="50" fill="none" stroke="skyblue" strokeWidth="10" />
        <circle cx="100" cy="100" r="25" fill="skyblue" strokeWidth="10" />
      </svg>

      <svg
        style={{ position: "absolute", right: "10px", bottom: "10px" }}
        width="80"
        height="80"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="100" r="50" fill="none" stroke="skyblue" strokeWidth="10" />
        <circle cx="100" cy="100" r="25" fill="skyblue" strokeWidth="10" />
      </svg>
      <svg
        style={{ position: "absolute", right: "-10px", bottom: "10px" }}
        width="80"
        height="80"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="100" r="50" fill="none" stroke="skyblue" strokeWidth="10" />
        <circle cx="100" cy="100" r="25" fill="skyblue" strokeWidth="10" />
      </svg>

      <div className="flex justify-center items-center mb-8">
      <Heading style={{ fontSize: "2.5rem", color: "skyblue", fontStyle: "italic" }}>Contact Us</Heading>
      </div>
      <Message onClose={closeModal} />
    </div>
  </div>
)}


    </div>
  );
}
