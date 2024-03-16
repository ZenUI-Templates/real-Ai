import React from "react";
import { FaPlay } from "react-icons/fa";

export const Second_section = () => {
  return (
    <div className="w-full flex flex-col md:flex-row  px-10 md:px-20 h-auto md:mb-56 lg:mb-40 mt-10 bg-red-00">
      <div className="md:w-1/2 flex flex-col bg-red-00 px-16 -ml-20">
        <div className="h-60 lg:h-80 aspect-video bg-white shadow-md w-72 lg:w-full rounded-md">
          <div className="h-[90%] w-full flex items-center justify-center ">
            <img
              src="https://i.ibb.co/zNpb30y/Rectangle-9.png"
              className="object-cover w-full -mt-8 md:-mt-8 lg:-mt-10 xl:-mt-14"
              alt=""
            />
            <div className="w-10 h-10 rounded-full bg-white  absolute md:-mt-8 lg:-mt-10 xl:-mt-14 flex items-center justify-center text-gray-400">
              <FaPlay />
            </div>
          </div>
          <div className="h-[10%] px-10 -mt-3">
            <div className="w-full h-[4px] bg-gray-400"></div>
            <div className="w-16 md:w-20 lg:w-34 h-[4px] bg-custom-orange -mt-[4px]"></div>
            <div className="w-16 md:w-20 lg:w-34 -mt-[4px] flex items-end justify-end">
              <div className="w-3 h-3 rounded-full bg-custom-orange -mt-[4px]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 flex flex-col md:ml-28 mt-20 md:mt-0">
        <div>
          <p className="text-4xl md:text-4xl lg:text-5xl font-bold ">
            Simple, powerful pure magic
          </p>
          <p className="mt-8  text-base lg:text-2xl text-text-color3">
            Take a peek at our feature-packed studio, Start creating Voiceovers
            in minutes.
          </p>
        </div>

        <div className="w-40 md:w-80 lg:w-96 bg-white shadow-md flex flex-col p-3 rounded-md absolute -mt-24 md:mt-48 lg:mt-60 ml-36 md:-ml-32 lg:-ml-60">
            <div>
                <img src="https://i.ibb.co/KW1zWGH/Group-16.png" alt="" />
            </div>
            <div className="mt-3">
                <img src="https://i.ibb.co/bJtND8q/Group-14.png" alt="" />
            </div>
            <div></div>

        </div>

        <div className="w-16 md:w-32 lg:w-44 h-10 -mt-[16.5rem] md:mt-0 ml-[19rem] md:ml-[12rem] lg:ml-[9rem]">
        <img src="https://i.ibb.co/fHYHCrY/Group-10.png" alt="" />
        </div>
        <div className="w-16 md:w-32 lg:w-44 h-10 ml-20 md:-ml-[16rem] lg:-ml-[26rem] mt-4 md:mt-16 lg:mt-24">
        <img src="https://i.ibb.co/7W7cFpp/Group-40.png" alt="" />
        </div>
      </div>
    </div>
  );
};
