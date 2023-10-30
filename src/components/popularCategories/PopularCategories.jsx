import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css/bundle';

function PopularCategories() {
  const data = [
    {imgUrl: '/images/popular-categories/music.jpeg', text: 'Music', title: 'music-img'},
    {imgUrl: '/images/popular-categories/men.jpeg', text: 'Men\'s Fashion', title: 'men-img'},
    {imgUrl: '/images/popular-categories/women.jpeg', text: 'Women\'s Fashion', title: 'women-img'},
    {imgUrl: '/images/popular-categories/supermarket.png', text: 'Supermarket', title: 'supermarket-img'},
    {imgUrl: '/images/popular-categories/baby & toys.png', text: 'Baby & Toys', title: 'babyToys-img'},
    {imgUrl: '/images/popular-categories/home.png', text: 'Home', title: 'home-img'},
    {imgUrl: '/images/popular-categories/books.png', text: 'Books', title: 'books-img'},
    {imgUrl: '/images/popular-categories/beuaty & health.png', text: 'Beuaty & Health', title: 'beuatyHealth-img'},
    {imgUrl: '/images/popular-categories/mobiles.png', text: 'Mobiles', title: 'mobiles-img'},
    {imgUrl: '/images/popular-categories/electronics.png', text: 'Electronics', title: 'electronics-img'},
  ]
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
              {data.map((categorie, index) => (
                <SwiperSlide key={index}>
                  <img src={categorie.imgUrl} alt={categorie.title} className='h-[200px] w-full object-cover' />
                  <h5 className='text-center text-[#777]'>{categorie.text}</h5>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PopularCategories;