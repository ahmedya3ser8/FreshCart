import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Hero() {
  return (
    <section className="h-[350px] relative top-[65px] overflow-hidden">
      <div className="container">
        <div className="flex">
          <div className="left w-2/3">
            <Swiper autoplay={{delay: 2000}} loop={true}>
              <SwiperSlide>
                <img src="/images/slider-section/slider-01.jpeg" alt="" className='object-cover' />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/slider-section/slider-02.jpeg" alt="" className='object-cover' />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/slider-section/slider-03.jpeg" alt="" className='object-cover' />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="right flex flex-col">
            <div className="top">
              <img src="/images/grocery-banner-01.jpeg" alt="" className='h-[180px] object-cover' />
            </div>
            <div className="bottom">
              <img src="/images/grocery-banner-02.jpeg" alt="" className='h-[180px] object-cover' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;