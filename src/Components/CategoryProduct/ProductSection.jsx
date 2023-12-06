
import React from 'react'
import SingleProduct from '../Home/SingleProduct'
import { FaSpinner } from 'react-icons/fa6'

const ProductSection = ({ products }) => {
    return (
        <div className="px-4 md:px-6 lg:px-8 md:ml-72">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    products ? products?.map(item => <SingleProduct key={item._id} product={item} />) : <div className='h-screen w-full flex items-center justify-center'>Loading...</div>
                }
            </div>
        </div>
    )
}

export default ProductSection