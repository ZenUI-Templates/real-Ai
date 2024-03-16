import React from 'react'
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaBookReader } from "react-icons/fa";
import { GiOldMicrophone } from "react-icons/gi";

export const Data_Summary = () => {
  return (
    <div className='w-full bg-red-00 px-10 lg:px-40 mb-20 mt-20 md:mt-0'>
        <div className='w-full md:h-28 flex flex-col md:flex-row md:items-center justify-center md:justify-between bg-blue-00'>
            <div className='flex items-center justify-center gap-4 h-28 -ml-14 md:ml-0 '>
                <div className='w-20 h-20 lg:w-28 lg:h-28 bg-orange-200 rounded-full flex items-center justify-center md:text-4xl lg:text-5xl'>
                    <AiOutlineUserAdd/>
                </div>
                <div>
                    <p className='text-2xl font-semibold'>1.5K+</p>
                    <p className='text-xl'>User</p>
                </div>
            </div>
            <div className='flex items-center justify-center gap-4 h-28 '>
                <div className='w-20 h-20 lg:w-28 lg:h-28 bg-blue-200 rounded-full flex items-center justify-center md:text-4xl lg:text-5xl'>
                    <FaBookReader/>

                </div>
                <div>
                    <p className='text-2xl font-semibold'>2K+</p>
                    <p className='text-xl'>Music Library</p>
                </div>
            </div>
            <div className='flex items-center justify-center gap-4 h-28 -ml-4 md:ml-0'>
                <div className='w-20 h-20 lg:w-28 lg:h-28 bg-fuchsia-200 rounded-full flex items-center justify-center md:text-4xl lg:text-5xl'>
                    <GiOldMicrophone/>
                </div>
                <div>
                    <p className='text-2xl font-semibold'>700+</p>
                    <p className='text-xl'>Murf Studio</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}
