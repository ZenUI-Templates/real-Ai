import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box_img_1 } from './Box_img_1';
import "../../App.css";


export const Blog_carousel = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 768, // Adjust breakpoint for tablets
            settings: {
              slidesToShow: 2, // Show 2 slides on tablets
              slidesToScroll: 1, // Scroll by 1 slide on tablets
            },
          },
          {
            breakpoint: 480, // Adjust breakpoint for mobile
            settings: {
              slidesToShow: 1, // Show 1 slide on mobile
              slidesToScroll: 1, // Scroll by 1 slide on mobile
            },
          },
        ],
      };
      return (
        <div className='w-full flex flex-col items-center justify-center'>
                      <p className=' text-4xl md:text-5xl font-bold mb-4 md:mb-4 lg:mb-5'>Our latest Blog</p>
            <div className="w-full">
            <Slider {...settings}>
          <div className='p-5'>
          <div className='border rounded-2xl'>
           <Box_img_1 img_src={`https://i.ibb.co/6wtcyXW/Rectangle-239.png`} text_data={"Very impressive video editing tool I have ever seen..."}/>
            </div>
          </div>
          <div className='p-5'>
           <div className='border rounded-2xl'>
           <Box_img_1 img_src={`https://i.ibb.co/xhbNRSC/Rectangle-239-1.png`} text_data={"Very impressive video editing tool I have ever seen..."}/>
            </div>
          </div>
          <div className='p-5'>
           <div className='border rounded-2xl'>
           <Box_img_1 img_src={`https://i.ibb.co/dG0TZP2/Rectangle-239-2.png`} text_data={"Very impressive video editing tool I have ever seen..."}/>
            </div>
          </div>
          <div className='p-5'>
           <div className='border rounded-2xl'>
           <Box_img_1 img_src={`https://i.ibb.co/6wtcyXW/Rectangle-239.png`} text_data={"Very impressive video editing tool I have ever seen..."}/>
            </div>
          </div>
          <div className='p-5'>
            <div className='border rounded-2xl'>
           <Box_img_1 img_src={`https://i.ibb.co/xhbNRSC/Rectangle-239-1.png`} text_data={"Very impressive video editing tool I have ever seen..."}/>
            </div>
          </div>
          <div className='p-5'>
          <div className='border rounded-2xl'>
           <Box_img_1 img_src={`https://i.ibb.co/dG0TZP2/Rectangle-239-2.png`} text_data={"Very impressive video editing tool I have ever seen..."}/>
            </div>
          </div>
          
        </Slider>
            </div>
        </div>
      );
}
