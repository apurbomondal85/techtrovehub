import { useEffect, useState } from "react"
import useAxiosSecure from "../../utiliz/useAxiosSecure";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

const ClientReviews = () => {
    const axiosSecure = useAxiosSecure();
    const [reviews, setReviews] = useState();

    useEffect(() => {
        axiosSecure.get('/reviews').then(res => setReviews(res.data)).catch(err => console.log(err.message))
    }, [])

    const page = window.innerWidth;

    return (
        <div className="mt-12 lg:mt-16 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <h1 className="text-center text-dark font-bold text-2xl md:text-3xl lg:text-4xl">Client Reviews</h1>
            <Swiper
                slidesPerView={778 > page ? 1 : 2}
                spaceBetween={30}
                pagination={{
                    dynamicBullets: true,
                }}
                autoplay={{
                    delay: 3000
                }}
                modules={[Autoplay]}
                className="mySwiper h-full mt-12"
            >
                {
                    reviews?.map(item => <SwiperSlide key={item._id} className="bg-[rgba(222,194,255,0.7)] h-[300px] rounded-md shadow-md">
                        <div className="p-4 md:p-6 flex flex-col items-center justify-center">
                            <div className='w-20 h-20 border border-primary rounded-full mx-auto overflow-hidden'>
                                <img src={item.image} className="w-20 h-20 rounded-md" alt="client image" />
                            </div>
                            <h3 className="text-xl font-semibold text-dark mt-2">{item.clientName}</h3>
                            <p className="text-center text-sm md:text-base text-gray-700 my-2">{item.date}</p>
                            <p className="text-center text-sm md:text-base text-gray-700">{item.reviewText}</p>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    )
}

export default ClientReviews