import React from 'react'

export const Box_img_1 = ({img_src,text_data}) => {
  return (
    <div className="flex items-center justify-center gap-4 md:ml-0 ">
          <div className="lg:h-[24rem] lg:w-[373px] bg-white hover:shadow-lg transition duration-500 ease-in-out flex flex-col rounded-2xl items-center justify-center relative">
            <div className="w-full  lg:h-[19rem] flex items-end justify-end bg-orange-00 rounded-t-2xl">
              <div className="w-full flex flex-col bg-slate-40 items-center justify-center  overflow-hidden">
                <img
                //   src="https://i.ibb.co/Cvnh6Fv/image-6.png"
                  src={img_src}
                  alt="logo"
                  className=" lg:h-72 cursor-pointer"
                />
              </div>
            </div>
            <div className="h-[8rem] flex items-center justify-center p-5">
              <p className="text-">{text_data}</p>
            </div>
          </div>
    </div>
  )
}
