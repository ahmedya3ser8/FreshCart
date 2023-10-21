import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css/bundle';

function Hero() {
  return (
    <section className="pt-[70px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row max-h-[330px] overflow-hidden">
          <div className="left w-full lg:w-2/3">
            <Swiper
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
            >
              <SwiperSlide>
                <img src="/images/hero/slider-01.jpeg" alt="slider-img" className='block w-full h-full object-cover' />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/hero/slider-02.jpeg" alt="slider-img" className='block w-full h-full object-cover' />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/hero/slider-03.jpeg" alt="slider-img" className='block w-full h-full object-cover' />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="right flex flex-col w-full lg:w-2/6">
            <div className="top">
              <img src="/images/hero/grocery-banner-01.jpeg" alt="slider-img" className='h-[180px] object-cover' />
            </div>
            <div className="bottom">
              <img src="/images/hero/grocery-banner-02.jpeg" alt="slider-img" className='h-[180px] object-cover' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;