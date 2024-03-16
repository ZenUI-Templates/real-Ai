import React from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaBookReader } from "react-icons/fa";
import { GiOldMicrophone } from "react-icons/gi";

export const Third_section = () => {
  return (
    <div className="w-full bg-red-00 md:px-10 lg:px-5 mb-40 lg:mt-20 md:mt-0 flex flex-col mt-60">
      <div className="bg-red-00">
        <p className="text-2xl md:text-5xl font-bold text-gray- flex items-center justify-center">
          There's a voice for every need
        </p>
        <p className="hidden md:flex text-xs md:text-lg mt-1 text-gray- items-center justify-center">
          Creative, Corporate, or Entertainment, there is a Murf voice for every
          creator.
        </p>
        <p className="md:hidden flex text-xs md:text-lg mt-1 text-gray- items-center justify-center">
        Creative, Corporate, or Entertainment, there is 
        </p>
        <p className="md:hidden flex text-xs md:text-lg mt-1 text-gray- items-center justify-center">
        a Murf voice for every
          creator.
        </p>
      </div>

      <div className="w-full mt-10 md:mt-40 md:h-28 flex flex-col md:flex-row md:items-center justify-center bg-blue-00 gap-4 md:gap-1 lg:gap-5">
        <div className="flex items-center justify-center gap-4 md:ml-0 ">
          <div className="h-[22rem] w-60 lg:w-[373px] bg-white hover:shadow-xl transition duration-500 ease-in-out flex flex-col rounded-2xl p-2 items-center justify-center relative">
            <div className="w-full h-60 lg:h-80 flex items-end justify-end bg-orange-200 rounded-2xl">
              <div className="w-full flex flex-col bg-slate-40 items-center justify-center  overflow-hidden">
                <img
                  src="https://i.ibb.co/Cvnh6Fv/image-6.png"
                  alt="logo"
                  className="h-44 lg:h-72 cursor-pointer"
                />
              </div>
            </div>
            <div className="h-[5rem] flex items-center justify-center">
              <p className="font-semibold text-xl">Product Developer</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 ">
          <div className="h-[22rem] w-60 lg:w-[373px] bg-white hover:shadow-xl transition duration-500 ease-in-out flex flex-col rounded-2xl p-2 items-center justify-center relative">
            <div className="w-full h-60 lg:h-80 flex items-end justify-end bg-blue-200 rounded-2xl">
              <div className="w-full flex flex-col bg-slate-40 items-center justify-center  overflow-hidden">
                <img
                  src="https://i.ibb.co/B28MXf8/image-7.png"
                  alt="logo"
                  className="h-44 lg:h-72 cursor-pointer"
                />
              </div>
            </div>
            <div className="h-[5rem] flex items-center justify-center">
              <p className="font-semibold text-xl">Customer Support</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 -ml-4 md:ml-0">
          <div className="h-[22rem] w-60 lg:w-[373px] bg-white hover:shadow-xl transition duration-500 ease-in-out flex flex-col rounded-2xl p-2 items-center justify-center relative">
            <div className="w-full h-60 lg:h-80 flex items-end justify-end bg-yellow-200 rounded-2xl">
              <div className="w-full flex flex-col bg-slate-40 items-center justify-center  overflow-hidden">
                <img
                  src="https://i.ibb.co/b5MWx8M/image-8.png"
                  alt="logo"
                  className="h-44 lg:h-72 cursor-pointer"
                />
              </div>
            </div>
            <div className="h-[5rem] flex items-center justify-center">
              <p className="font-semibold text-xl">Product Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
