
import React from 'react'
import { NavLink } from 'react-router-dom'

const UserSidebar = () => {

    const navList = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: <div className='relative'>Carts<span className="absolute inline-flex items-center justify-center w-4 h-4 text-[8px] text-white bg-red-500 border-2 border-white rounded-full -top-2">2</span></div>,
            path: "/dashboard/carts"
        },
        {
            title: "Payment History",
            path: "/dashboard/payment-history"
        },
    ]

    return (
        <div className='flex flex-col justify-center gap-4'>
            {
                navList.map(item => <NavLink key={item.path} to={item.path} className={({ isActive }) => isActive ? "px-6 py-2 font-bold text-dark bg-white" : "px-6 py-2 text-gray-200 font-bold transition-all duration-300 hover:bg-white hover:text-dark"}>{item.title}</NavLink>)
            }
        </div>
    )
}

export default UserSidebar