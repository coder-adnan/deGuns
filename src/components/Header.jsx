import React from 'react'
import flagImage from '../assets/flag.png'
import egunICon from '../assets/egunIcon.png'
import heartIcon from '../assets/heartIcon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faBars, faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <>
      <div className='flex justify-between bg-[#586740] p-4 px-20'>
        <div className='flex gap-2'>
          <img src={flagImage} alt="" width={50} height={50} />
          <FontAwesomeIcon icon={faChevronDown} className="text-white mt-1 font-bold text-lg" />
        </div>
        <div className='flex gap-3'>
          <a className='text-white uppercase font-semibold'  href='/register'>Register</a>
          <a className='bg-white px-6 rounded-md uppercase font-semibold' href='/login' >Login</a>
        </div>
      </div>
      <div className='flex justify-between px-20 py-4 bg-[#F4F4F4]'>
        <div className='flex gap-10'>
          <img src={egunICon} alt="" width={150} height={150} className='bg-none' />
          <a href='/categories' className='flex items-center gap-4'>
            <FontAwesomeIcon icon={faBars} className='text-xl' />
            <p className='font-semibold text-[18px]'>Categories</p>
          </a>
        </div>
        <div className='flex items-center gap-4'>
          <a className='font-semibold text-[18px]' href='/home-page'>Home</a>
          <a className='font-semibold text-[18px]' href='/buy'>Buy</a>
          <a className='font-semibold text-[18px]' href='/sell'>Sell</a>
          <a className='font-semibold text-[18px]' href='/contact-us'>Contact</a>
          <a className='font-semibold text-[18px]' href='/help'>Help</a>
          <a className='font-semibold text-[18px]' href='/forum'>Forum</a>
        </div>
        <div className='flex items-center gap-4'>
          <div className='flex items-center' >
            <input
              type="text"
              placeholder="Search Guns"
              className="py-2 w-[300px] px-2 rounded-sm border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <FontAwesomeIcon icon={faSearch} className="absolute right-40 text-gray-400" />
          </div>
          <div>
            <img src={heartIcon} alt="" width={40} height={40} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header