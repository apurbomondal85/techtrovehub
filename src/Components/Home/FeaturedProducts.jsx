
import React from 'react'
import getAllProduct from '../../utiliz/getAllProduct'
import SingleProduct from './SingleProduct';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
    const products = getAllProduct();
    return (
        <div className='mt-12 lg:mt-16'>
            <h3 className='text-sm md:text-base text-primary font-bold text-center'>Featured</h3>
            <h1 className='text-2xl md:text-3xl lg:text-4xl text-center font-bold text-dark'>Featured Products</h1>
            <div className="py-12 lg:pt-16 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {
                        products?.slice(0, 8).map(item => <SingleProduct key={item._id} product={item} />)
                    }
                </div>
                <div className="text-center mt-8 lg:mt-12"><button className='font-semibold text-white py-2 px-4 rounded-md bg-secondary'><Link to="/category">Explore More</Link></button></div>
            </div>
        </div>
    )
}

export default FeaturedProducts