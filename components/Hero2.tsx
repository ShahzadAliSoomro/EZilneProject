import React from "react";

export default function Hero2() {
  return (
    <div>
      <section className="dark:bg-gray-900">
        <div
          className="container flex flex-col py-10 w-full mx-auto space-y-6  
        lg:py-16 lg:flex-row lg:items-center"
        >
          <div className="w-full flex gap-14">
            <div className="w-full lg:4/12">
                <div className="relative">
              <img
                className="object-cover bg-cover w-full h-full mx-auto rounded-md lg:max-w-2xl"
                src="/hero2.jpg"
                alt="glasses photo"
              />
              <div className="absolute flex rounded-2xl w-96 mx-auto h-72 mt-6 space-y-5 flex-col justify-center items-center top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-transparent to-blue-900">
              <h1 className="text-7xl font-bold text-white">21</h1>
              <h3 className="text-white text-xl">Years of Experience</h3>
              </div>
              </div>
            </div>
            <div className="w-full lg:4/12 space-y-5">
              <div className="flex items-center gap-5 ">
                <span className="block text-lg font-bold text-red-500 dark:text-red-500">
                  YEARS OF STRUGGLE
                </span>
                <div
                  className="flex justify-center border bg-red-500 px-8 border-red-500 h-1 
               dark:border-red-500"
                ></div>
              </div>
              <div>
                <h2 className="text-5xl">
                  Better Strategy With Quality Business
                </h2>
              </div>
            </div>
            <div className="w-full lg:4/12 space-y-8">
              <p
                className="flex items-center  text-gray-500 text-justify
                 dark:text-gray-600"
              >
                wonderful serenity has taken possession of my entire soul, like
                these sweet mornings of spring which I enjoy with my whole
                heart.A wonderful serenity has taken possession of my entire
                soul, like these sweet mornings of spring which I enjoy with my
                whole heart.
              </p>
              <div className="flex ">
                <button
                  className="bg-white hover:bg-red-500 hover:text-white
                 dark:bg-gray-800 rounded-lg px-10 py-5 text-sm font-medium text-red-500 dark:text-white"
                >
                  READ MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
