import React from "react";
import Link from "next/link";
import { BiTime } from "react-icons/bi";
import { BsHeadphones } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { ImFacebook } from "react-icons/im";


export default function Navbar() {
  return (
    <div>
      <nav className="bg-[#061757] text-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center  mx-auto w-full p-5 px-0 md:px-44">
            <div className="flex gap-5 h-20 -mt-8 ">
          <a href="https://flowbite.com" className="flex items-center gap-1">
            <BiTime className="w-4 h-4" />
            <span className="self-center text-sm font-semibold whitespace-nowrap dark:text-white">
              Mon - Fri 10:00-18:00
            </span>
          </a>
          <a href="https://flowbite.com" className="flex items-center gap-1">
          <BsHeadphones className="w-4 h-4"/>
            <span className="self-center text-sm font-semibold whitespace-nowrap dark:text-white">
            888-454-567-55
            </span>
          </a>
          <a href="https://flowbite.com" className="flex items-center gap-1">
          <BsEnvelope className="w-4 h-4"/>
            <span className="self-center text-sm font-semibold whitespace-nowrap dark:text-white">
            Phlox@averta.net
            </span>
          </a>
          </div>
          <div className="flex items-center -mt-8">
            <a
              href="tel:5541251234"
              className="mr-6 text-sm  text-white dark:text-white hover:underline"
            >
              <ImFacebook className="w-4 h-4"/>
            </a>
            <a
              href="#"
              className="mr-6 text-sm  text-white dark:text-blue-500 hover:underline"
            >
              <AiOutlineTwitter className="w-4 h-4"/>
            </a>
            <a
              href="#"
              className="mr-6 text-sm  text-white dark:text-blue-500 hover:underline"
            >
              <FaPinterestP className="w-4 h-4" />
            </a>
          </div>
        </div>
      </nav>
      {/* // second navbar */}
      <nav className="bg-red-500 relative -mt-5 max-w-screen-2xl mx-auto text-white
       border-gray-200 ">
        <div className="flex flex-wrap justify-between items-center mx-auto p-5 px-10">
            <div className="flex gap-5">
          <a href="https://flowbite.com" className="flex items-center gap-1">
            {/* <BiTime className="w-4 h-4" /> */}
            <span className="self-center text-sm font-semibold whitespace-nowrap dark:text-white">
              Home
            </span>
          </a>
          <a href="https://flowbite.com" className="flex items-center gap-1">
          {/* <BsHeadphones className="w-4 h-4"/> */}
            <span className="self-center text-sm font-semibold whitespace-nowrap dark:text-white">
            About
            </span>
          </a>
          <a href="https://flowbite.com" className="flex items-center gap-1">
          {/* <BsEnvelope className="w-4 h-4"/> */}
            <span className="self-center text-sm font-semibold whitespace-nowrap dark:text-white">
            Services
            </span>
          </a>
          <a href="https://flowbite.com" className="flex items-center gap-1">
          {/* <BsEnvelope className="w-4 h-4"/> */}
            <span className="self-center text-sm font-semibold whitespace-nowrap dark:text-white">
            Our Cases
            </span>
          </a>
          <a href="https://flowbite.com" className="flex items-center gap-1">
          {/* <BsEnvelope className="w-4 h-4"/> */}
            <span className="self-center text-sm font-semibold whitespace-nowrap dark:text-white">
            Blog
            </span>
          </a>
          <Link  href="/#" className="flex items-center gap-1">
          {/* <BsEnvelope className="w-4 h-4"/> */}
            <span className="self-center text-sm font-semibold whitespace-nowrap dark:text-white">
            Contact Us
            </span>
          </Link>
          </div>
          <div className="flex items-center">
            <button
              
              className="bg-black px-5 py-3 rounded-lg text-lg  text-white dark:text-white hover:underline"
            >
              GET A QUOTE
            </button>
            
          </div>
        </div>
      </nav>
    </div>
  );
}
