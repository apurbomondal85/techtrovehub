
import React from 'react'
import { FaCartShopping } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const ProductCart = () => {
    return (
        <Link className='fixed bottom-24 right-2 bg-secondary p-4 text-xl text-primary rounded-md flex cursor-pointer z-50'><span><FaCartShopping /></span><sup>{0}</sup></Link>
    )
}

export default ProductCart