
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

const ProductCategory = () => {
    return (
        <div className='mt-12 lg:mt-16'>
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <h3 className='text-sm md:text-base text-primary font-bold text-center'>Category</h3>
                <h1 className='text-2xl md:text-3xl lg:text-4xl text-center font-bold text-dark'>Product Category</h1>
                <div className="py-12 lg:pt-16">
                    <Swiper
                        slidesPerView={6}
                        spaceBetween={30}
                        pagination={{
                            dynamicBullets: true,
                        }}
                        autoplay={{
                            delay: 3000
                        }}
                        modules={[ Autoplay]}
                        className="mySwiper h-full"
                    >
                        <SwiperSlide className='bg-dark p-12'></SwiperSlide>
                        <SwiperSlide className='bg-dark p-12'></SwiperSlide>
                        <SwiperSlide className='bg-dark p-12'></SwiperSlide>
                        <SwiperSlide className='bg-dark p-12'></SwiperSlide>
                        <SwiperSlide className='bg-dark p-12'></SwiperSlide>
                        <SwiperSlide className='bg-dark p-12'></SwiperSlide>
                        <SwiperSlide className='bg-dark p-12'></SwiperSlide>
                        <SwiperSlide className='bg-dark p-12'></SwiperSlide>
                        <SwiperSlide className='bg-dark p-12'></SwiperSlide>
                        <SwiperSlide className='bg-dark p-12'></SwiperSlide>
                        <SwiperSlide className='bg-dark p-12'></SwiperSlide>
                        <SwiperSlide className='bg-dark p-12'></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default ProductCategory