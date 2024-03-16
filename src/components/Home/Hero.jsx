import React from "react";

export const Hero = () => {
  return (
    <div className="w-full lg::h-screen md:mt-16 lg:mt-0 md:mb-20 lg:mb-0 flex flex-col md:flex-row font-poppins ">
      <div className="md:w-1/2 lg:h-screen bg-red-00 flex flex-col justify-center mt-16 md:mt-0 ">
        <p className="text-8xl md:text-5xl lg:text-7xl font-bold drop-shadow-[-1px_3px_2px_var(--tw-shadow-color)] shadow-gray-500">
          <span className="text-custom-orange">AI enabled,</span> real people's
          voices
        </p>
        <p className="mt-8 drop-shadow-[-1px_2px_2px_var(--tw-shadow-color)] shadow-gray-400 text-3xl md:text-2xl text-text-color3">
          Make studio-quality voice overs in minutes. Use Murf’s lifelike AI
          voices for podcasts, videos, and all your professional presentations
        </p>

        <div className="mt-10 mb-20 md:mb-0 md:mt-10 lg:mt-20 border border-text-color2 rounded-[2rem] px-8 py-4 text-text-color2 w-fit flex justify-center items-center shadow-md">
          <p className="text-xl font-semibold uppercase">Open Studio</p>
        </div>
      </div>
      <div className="md:w-1/2 lg:h-screen bg-green-00 flex flex-col items-center justify-center relative">
        <div className="w-[70%] h-60 lg:h-96 flex items-end justify-end bg-custom-orange rounded-2xl">
          <div className="w-full flex flex-col bg-slate-40 items-center justify-center  overflow-hidden">
            <img
              src="https://i.ibb.co/TWwknQr/chin-man-glasses-emotion-beard-man-78c76915a2a0f04ee1c7c040a32e743d-1.png"
              alt="logo"
              className="h-44 lg:h-72 cursor-pointer"
            />
          </div>
        </div>
        <div className="w-[45%] lg:w-[40%] h-20 lg:h-24 rounded-2xl shadow-md bg-white absolute mt-60 lg:mt-96 -ml-52 lg:-ml-80 flex items-center justify-center text-gray-600 px-5 text-xs lg:text-base xl:text-lg">
          <div className="relative">
            <p>Go from text to speech with a versatile AI voice generator</p>
            <img
              src="https://i.ibb.co/7VLB1NX/Vector-3.png"
              className="absolute ml-[3.1rem] h-[6px] lg:h-[9px] lg:ml-[4.5rem] -mt-[10px] lg:-mt-4 "
            />
          </div>
        </div>
        <div className="w-[25%] lg:w-[18%] h-20 lg:h-24 rounded-2xl shadow-md bg-white absolute -mt-28 lg:-mt-60 ml-[16rem] lg:ml-[25.5rem] flex flex-col items-center justify-center text-gray-600 text-xs lg:text-base xl:text-lg">
          <p className="font-bold text-2xl lg:text-3xl">1500+</p>
          <p className="font-bold text-2xl lg:text-3xl -mt-2">user</p>
        </div>
      </div>
    </div>
  );
};
