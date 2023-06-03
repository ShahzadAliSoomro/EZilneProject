import React from "react";
import Link from "next/link";
import Card from "../../components/Card";

// https://demo.phlox.pro/agency-finance/wp-content/uploads/sites/245/2021/05/Group-333.svg
export default function page() {
  return (
    <div>
      <div className=" dark:bg-gray-900 relative pt-40 pb-14 lg:pt-44 ">
        <div className="relative container m-auto px-6 md:px-12 lg:px-6">
            <div className="flex items-center gap-5">
        <span className="block text-3xl font-semibold text-red-500 dark:text-red-500">
        FINANCE
              </span>
              <div className="flex justify-center border bg-red-500 px-10  border-red-500 h-1 
               dark:border-red-500"></div>
              </div>
          <h1 className="w-full lg:w-6/12 font-black text-blue-900 text-xl 
            md:text-xl lg:text-left xl:text-7xl dark:text-white pt-2">
            Our Finance Can Give More Possiblities{" "}
            {/* <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
              Hybrid teams
            </span> */}
            
          </h1>
          <div className="lg:flex">
            <div className="relative mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
              <p className="sm:text-lg text-gray-500 dark:text-gray-300 lg:w-6/12">
              A wonderful serenity has taken possession of my entire soul, like these 
              sweet mornings of spring which I enjoy with my whole heart.A wonderful serenity has taken.
              </p>
             
              <div className="flex ">
                <button className="bg-white hover:bg-red-500 hover:text-white
                 dark:bg-gray-800 rounded-lg px-10 py-5 text-sm font-medium text-red-500 dark:text-white">READ MORE</button>
              </div>
              
            </div>
            <div className="mt-12 md:mt-0 lg:absolute -top-44 -right-40 lg:w-7/12">
              <div className="relative w-full">
                <div
                  aria-hidden="true"
                  className="absolute scale-75 md:scale-110 inset-0 m-auto w-full h-full 
                  md:w-96 md:h-96 rounded-full rotate-45 bg-gradient-to-r from-sky-500
                   to-cyan-300 blur-3xl"
                ></div>
                <img
                  src="https://demo.phlox.pro/agency-finance/wp-content/uploads/sites/245/2021/05/Group-333.svg"
                  className="relative w-full"
                  alt="wath illustration"
                  loading="lazy"
                  width="320"
                  height="280"
                />
                <div className="absolute top-30 left-[20%] bottom-0 right-0 lg:w-[750px] h-[650px]">
                  <img
                    src="/44.jpg"
                    className="rounded-t-full rounded-r-xs w-full h-full object-cover"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
      <Card />
      </div> */}
    </div>
  );
}
