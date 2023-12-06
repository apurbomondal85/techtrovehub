import { Link } from "react-router-dom"

const OfferBanner = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mt-12 lg:mt-16">
            <div style={{ background: "url(https://www.computersmobile.com.au/wp-content/uploads/2016/11/slider1-1200x480.jpg)" }} className="py-12 md:py-16 lg:py-20 bg-no-repeat bg-cover bg-center relative z-[1]">
                <div className="px-20 sm:px-24 md:px-32 lg:px-42">
                    <h3 className="text-base md:text-xl text-primary font-bold">Exclusive Deals Just for You!</h3>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl tracking-wide mt-4 text-white font-bold">Discover unbeatable offers on our latest tech products. Limited-time promotions you don't want to miss!</h1>
                    <button className='font-semibold text-white py-2 px-4 rounded-md bg-primary mt-4 md:mt-6'><Link to="/offer-product">Shop Now</Link></button>
                </div>
                <div className="bg-white text-primary font-bold text-xl md:text-2xl absolute py-1 px-3 rounded-md right-6 top-6">25% OFF</div>
                <div className="absolute top-0 left-0 right-0 h-full w-full bg-[rgba(0,0,0,0.6)] -z-[1]"></div>
            </div>
        </div >
    )
}

export default OfferBanner