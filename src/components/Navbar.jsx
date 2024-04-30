import React from 'react'
import logo from '/logo.png';
import search from '/search_icon.png';
import basket from '/basket_icon.png';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex justify-around items-center h-16 shadow-md fixed top-0 w-full bg-slate-100'>
      <img src={logo} alt="" className='h-5 sm:h-7' />
      <ul className='hidden sm:flex space-x-6 text-sm text-gray-700'>
        <li><NavLink to='/'>home</NavLink></li>
        <li><NavLink to='/menu'>menu</NavLink></li>
        <li><NavLink to='/mobileApp'>mobile app</NavLink></li>
        <li><NavLink to='/contactUs'>contact us</NavLink></li>
      </ul>
      <div className='flex space-x-3 sm:space-x-6 items-center'>
        <NavLink to='/search'><img src={search} alt="" className='h-4 sm:h-5' /></NavLink>
        <NavLink to='/basket'><img src={basket} alt="" className='h-4 sm:h-5' /></NavLink>
        <NavLink to='/signIn'><button className='border border-orange-500 rounded-3xl p-1 sm:p-2 w-16 sm:w-24 text-xs sm:text-sm text-gray-700'>sign in</button></NavLink>
      </div>
    </nav>
  )
}

export default Navbar
