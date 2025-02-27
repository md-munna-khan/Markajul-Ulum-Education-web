// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
// import Slide from './Slide'


import madraha1 from '../assets/madrasha1.jpg'
import madraha2 from '../assets/madraha2.jpg'



const Banner = () => {
  return (
    <div className='container px-6 py-10 mx-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
       
       <SwiperSlide>
        <div className="relative">
          <img src={madraha1} alt="University 1" className="w-full h-64 md:h-96 lg:h-[600px] object-cover" style={{ objectFit: 'cover' }} />
          <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-50 p-2">
           
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img src={madraha2} alt="University 2" className="w-full h-64 md:h-96 lg:h-[600px] object-cover" style={{ objectFit: 'cover' }} />
          <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-50 p-2">
           
          </div>
        </div>
      </SwiperSlide>
     
    </Swiper>


    </div>
  )
}

import React from 'react';


  

export default Banner;