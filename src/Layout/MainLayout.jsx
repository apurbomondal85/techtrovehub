import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../Components/NavBar'
import ProductCart from '../Components/ProductCart'
import Footer from '../Components/Footer'

const MainLayout = () => {
    return (
        <div className='bg-[#f7fbfc] min-h-screen'>
            <NavBar />
            <ProductCart />
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayout