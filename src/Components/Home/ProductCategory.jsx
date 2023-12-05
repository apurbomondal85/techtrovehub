
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import getAllCategory from '../../utiliz/getAllCategory';
import { Link } from 'react-router-dom';

const ProductCategory = () => {
    const category = getAllCategory();

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
                        modules={[Autoplay]}
                        className="mySwiper h-full"
                    >
                        {
                            category?.map(item => <SwiperSlide key={item._id}>
                                <div className='w-20 h-20 p-4 border border-primary rounded-full mx-auto'>
                                    <Link><img src={item.image} className='w-full h-full' alt="category image" /></Link>
                                </div>
                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default ProductCategory