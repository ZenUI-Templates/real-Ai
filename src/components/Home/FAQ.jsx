import React from 'react'

export const FAQ = () => {
  return (
    <div className='w-full bg-red-00 md:px-10 lg:px-44 mb-32'>
        <div className='w-full bg-green-00 flex flex-col items-center justify-center h-auto'>
            <p className='hidden md:flex text-5xl font-bold'>Frequently asked questions</p>
            <p className='md:hidden flex text-5xl font-bold'>FAQ</p>
            <div className='w-full md:h-32 rounded-xl hover:shadow-lg transition duration-500 ease-in-out gap-3 md:gap-1 border bg-white mt-10 flex px-3 py-4'>
                <div className='w-[15%] md:w-[10%] h-full bg-blue-00 flex items-start'>
                    <div className='w-14 h-14 rounded-full bg-custom-orange flex flex-col items-center justify-center text-white text-xl font-bold'>01</div>
                </div>
                <div className='w-[90%] h-full bg-red-00'>
                    <p className='text-xl font-bold'>Can I try real for free?</p>
                    <p>Yes, we have a free plan. Just sign in to the Studio and create a project. You would get 10 mins of voice generation time free in your account to test voices and other features in the Studio.</p>
                </div>

            </div>
            <div className='w-full md:h-32 rounded-xl hover:shadow-lg transition duration-500 ease-in-out gap-3 md:gap-1 border bg-white mt-10 flex px-3 py-4'>
                <div className='w-[15%] md:w-[10%] h-full bg-blue-00 flex items-start'>
                    <div className='w-14 h-14 rounded-full bg-custom-orange flex flex-col items-center justify-center text-white text-xl font-bold'>02</div>
                </div>
                <div className='w-[90%] h-full bg-red-00'>
                    <p className='text-xl font-bold'>How is real different from other text to speech tools?</p>
                    <p>Murf offers high quality natural sounding AI voices for your projects. Check out the Studio for yourself. Also, Murf is not just a text to speech tool. It provides a complete toolkit for making voice over videos.</p>
                </div>

            </div>
            <div className='w-full md:h-32 rounded-xl hover:shadow-lg transition duration-500 ease-in-out gap-3 md:gap-1 border bg-white mt-10 flex px-3 py-4'>
                <div className='w-[15%] md:w-[10%] h-full bg-blue-00 flex items-start'>
                    <div className='w-14 h-14 rounded-full bg-custom-orange flex flex-col items-center justify-center text-white text-xl font-bold'>03</div>
                </div>
                <div className='w-[90%] h-full bg-red-00'>
                    <p className='text-xl font-bold'>Can I use real to record my voice over?</p>
                    <p>No, we do not have a voice recording feature at the moment. We help you create high quality voice overs using AI powered voices.</p>
                </div>

            </div>
            <div className='w-full md:h-32 rounded-xl hover:shadow-lg transition duration-500 ease-in-out gap-3 md:gap-1 border bg-white mt-10 flex px-3 py-4'>
                <div className='w-[15%] md:w-[10%] h-full bg-blue-00 flex items-start'>
                    <div className='w-14 h-14 rounded-full bg-custom-orange flex flex-col items-center justify-center text-white text-xl font-bold'>04</div>
                </div>
                <div className='w-[90%] h-full bg-red-00'>
                    <p className='text-xl font-bold'>Can I collaborate with my team on real?</p>
                    <p>We have plans that allow you to create a separate workspace for your team where you collaborate on projects.</p>
                </div>

            </div>

        </div>
    </div>
  )
}
