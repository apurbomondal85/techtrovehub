
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const BannerHero = () => {

  const slider = [
    {
      text: "Powerful Performance at Your Fingertips - Explore Our Latest Laptops",
      image: "https://img.freepik.com/free-photo/laptop-with-white-screen-isolated-white-wall_231208-8592.jpg?w=600&t=st=1701611525~exp=1701612125~hmac=7fbf7ce7d5e695781be2961d4fb66972549099e32a01d43a06fa8ceeb2264338"
    },
    {
      text: <span>Limited-Time Offer! Save <span className='text-primary' >25%</span> on Select Mobile</span>,
      image: "https://img.freepik.com/free-psd/premium-mobile-phone-screen-mockup-template_53876-65749.jpg?w=740&t=st=1701611706~exp=1701612306~hmac=84c7f531e7dc39e871463afe89bc4ed7b69e86bf63a37e64106b1e5f92860d70"
    },
    {
      text: "Immerse Yourself in Sound - Discover Our Premium Headphone Collection",
      image: "https://img.freepik.com/premium-psd/headphones-mockup-half-side-view_1119-1309.jpg?size=626&ext=jpg&uid=R69864598&ga=GA1.1.1311672048.1701107266&semt=sph"
    }
  ]

  return (
    <div className="h-[400px] lg:h-[500px]">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 3000
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper h-full"
      >
        {
          slider.map((item, index) => <SwiperSlide key={index} className='bg-white h-full pt-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
              <div className="flex flex-col justify-center items-start">
                <h3 className='text-primary font-bold text-sm md:text-base'>Best Product</h3>
                <h1 className='text-dark text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-4 tracking-wide'>{item.text}</h1>
                <button className='py-2 px-4 border border-secondary rounded-md font-bold text-secondary mt-8 transition-all duration-500 hover:text-white hover:bg-secondary'>Explore</button>
              </div>
              <div className="">
                <img src={item.image} className='w-full' alt="banner image" />
              </div>
            </div>
          </SwiperSlide>)
        }
      </Swiper>
    </div>
  )
}

export default BannerHero