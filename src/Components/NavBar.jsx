import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/Logo.png'
import { FaBars, FaEnvelope, FaHouse, FaList, FaMagnifyingGlass, FaTag, } from 'react-icons/fa6'
import getProvider from '../utiliz/getProvider'
import { useState } from 'react'

const NavBar = () => {
  const { user, logOut } = getProvider();
  const [toggleBar, setToggleBar] = useState(false);

  const navLink = [
    {
      title: "Home",
      path: '/',
      icon: <FaHouse />
    },
    {
      title: "Offer Product",
      path: '/offer-product',
      icon: <FaTag />
    },
    {
      title: "Category",
      path: '/category',
      icon: <FaList />
    }
  ]


  return (
    <nav className="bg-[rgba(0,0,0,1)] border-b border-primary backdrop-blur-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <Link to='/' className="flex items-center space-x-3">
          <img src={logo} alt="TechHub Logo" />
        </Link>
        <button onClick={() => setToggleBar(!toggleBar)} type="button" className="text-xl text-primary md:hidden focus:outline-none">
          <FaBars />
        </button>
        <form className="hidden md:flex items-center bg-white w-[300px] pr-2 rounded-md">
          <input type="search" name="search" className='w-full py-2 focus:outline-none pl-2 rounded-md' />
          <button type='submit'><FaMagnifyingGlass /></button>
        </form>
        <div className={`w-full ${toggleBar ? "block" : "hidden"} md:block md:w-auto`}>
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row gap-4 lg:gap-6 md:mt-0 md:bg-transparent">
            {
              navLink.map(item =>
                <NavLink to={item.path} key={item.path} className={({ isActive }) => isActive ? "text-primary text-xl md:text-base py-2 px-4 md:px-0 md:py-0 bg-white md:bg-transparent rounded-md md:rounded-none flex md:block items-center gap-4" : "text-secondary md:text-gray-300 text-xl md:text-base transition-all duration-300 hover:text-primary py-2 px-4 md:px-0 md:py-0 bg-white md:bg-transparent rounded-md md:rounded-none flex md:block items-center gap-4"}>
                  <span className='md:hidden'>{item.icon}</span>
                  <span>{item.title}</span>
                </NavLink>
              )
            }
            {
              user ? <li onClick={() => logOut()} className='text-secondary md:text-gray-300 text-xl md:text-base cursor-pointer transition-all duration-300 hover:text-primary py-2 px-4 md:px-0 md:py-0 bg-white md:bg-transparent rounded-md md:rounded-none text-center'>LogOut</li> : <NavLink to="/login" className='text-secondary md:text-gray-300 text-xl md:text-base transition-all duration-300 hover:text-primary py-2 px-4 md:px-0 md:py-0 bg-white md:bg-transparent rounded-md md:rounded-none text-center'>Login</NavLink>
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar