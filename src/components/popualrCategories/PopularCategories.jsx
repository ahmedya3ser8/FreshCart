import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css/bundle';

function PopularCategories() {
  return (
    <section className="py-10">
      <div className="container">
        <h2 className='text-[25px] font-medium text-[#9e9797] mb-3'>Shop Popular Categories</h2>
        <div className="h-[25vh]">
          <div className="popular-slider">
            <Swiper 
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              mousewheel={true}
              slidesPerView={1}
              spaceBetween={10}
              breakpoints={{
                '@0.00': {
                  slidesPerView: 1,
                },
                '@0.25': {
                  slidesPerView: 2,
                },
                '@0.75': {
                  slidesPerView: 3,
                },
                '@1.00': {
                  slidesPerView: 4,
                },
                '@1.25': {
                  slidesPerView: 5,
                },
                '@1.50': {
                  slidesPerView: 6,
                }
              }}
            >
              <SwiperSlide>
                  <img src="/public/images/popular-categories/music.jpeg" alt="music-img" className='h-[200px] w-full object-cover' />
                  <h5 className='text-center text-[#777]'>Music</h5>
              </SwiperSlide>
              <SwiperSlide>
                <img src="/public/images/popular-categories/men.jpeg" alt="men-img" className='h-[200px] w-full object-cover' />
                <h5 className='text-center text-[#777]'>Men&apos;s Fashion</h5>
              </SwiperSlide>
              <SwiperSlide>
                <img src="/public/images/popular-categories/women.jpeg" alt="women-img" className='h-[200px] w-full object-cover' />
                <h5 className='text-center text-[#777]'>Women&apos;s Fashion</h5>
              </SwiperSlide>
              <SwiperSlide>
                <img src="/public/images/popular-categories/supermarket.png" alt="supermarket-img" className='h-[200px] w-full object-cover' />
                <h5 className='text-center text-[#777]'>Supermarket</h5>
              </SwiperSlide>
              <SwiperSlide>
                <img src="/public/images/popular-categories/baby & toys.png" alt="babytoys-img" className='h-[200px] w-full object-cover' />
                <h5 className='text-center text-[#777]'>Baby & Toys</h5>
              </SwiperSlide>
              <SwiperSlide>
                <img src="/public/images/popular-categories/home.png" alt="home-img" className='h-[200px] w-full object-cover' />
                <h5 className='text-center text-[#777]'>Home</h5>
              </SwiperSlide>
              <SwiperSlide>
                <img src="/public/images/popular-categories/books.png" alt="books-img" className='h-[200px] w-full object-cover' />
                <h5 className='text-center text-[#777]'>Books</h5>
              </SwiperSlide>
              <SwiperSlide>
                <img src="/public/images/popular-categories/beuaty & health.png" alt="beuatyhealth-img" className='h-[200px] w-full object-cover' />
                <h5 className='text-center text-[#777]'>Beuaty & Health</h5>
              </SwiperSlide>
              <SwiperSlide>
                <img src="/public/images/popular-categories/mobiles.png" alt="mobiles-img" className='h-[200px] w-full object-cover' />
                <h5 className='text-center text-[#777]'>Mobiles</h5>
              </SwiperSlide>
              <SwiperSlide>
                <img src="/public/images/popular-categories/electronics.png" alt="electronics-img" className='h-[200px] w-full object-cover' />
                <h5 className='text-center text-[#777]'>Electronics</h5>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PopularCategories;