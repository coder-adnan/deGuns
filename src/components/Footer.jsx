import React from 'react'
import egunIcon from '../assets/Egun Logo.png'
import facebookIcon from '../assets/facebookIcon.png'
import twitterIcon from '../assets/Twitter logo 1.png';
import linkednIcon from '../assets/linkedn.png'
import pinterestIcon from '../assets/pinterestIcon.png'

const Footer = () => {
    return (
        <>
        <div className='bg-[#586740] p-20 flex justify-between'>

            <div className='mt-10'>
                <img src={egunIcon} alt="" width={200} className='' />
                <div className='flex gap-2 m-6'>
                <img src={twitterIcon} alt="" width={25} />
                <img src={facebookIcon} alt="" width={25} />
                <img src={pinterestIcon} alt="" width={25} />
                <img src={linkednIcon} alt="" width={25}/>
                </div>


            </div>
            <div>
                <h1 className='text-white text-[20px] font-semibold mb-6'>HELP</h1>
                <div className='flex flex-col gap-2 '>
                    <a className='text-white text-[16px]' href='customer-support' >Customer Support</a>
                    <a className='text-white text-[16px]' href='faqs'>FAQs</a>
                    <a className='text-white text-[16px]'href='Terms-and-condition'>Terms & Conditions</a>
                    <a className='text-white text-[16px]'href='privacy-policy'>Privacy Policy</a>
                </div>
            </div>
            <div>
                <h1 className='text-white text-[20px] font-semibold mb-6'>Quick Links</h1>
                <div className='flex flex-col gap-2 '>
                    <a className='text-white text-[16px]' href='/buy'>Buy</a>
                    <a className='text-white text-[16px]' href='/sell'>Sell</a>
                    <a className='text-white text-[16px]' href='/contact-us'>Contact</a>
                    <a className='text-white text-[16px]' href='/forum'>Forum Support</a> 
                    <a className='text-white text-[16px]' href='/help'>Help</a> 
                </div>
            </div>
            <div className='text-start'>
                <h1 className='text-white mt-4 font-semibold text-[24px]'>Subscribe to our newsletter</h1>
                <div className='space-x-4 mt-4'>
                    <input type="text" placeholder='Your Email Address' name="" id="" className='border-2 border-[#DEDEDE] bg-[#586740] placeholder:text-[#FFFFFF] p-1 px-3 ' />
                    <button className='bg-white p-1 px-4 font-semibold '>Submit</button>
                </div>
            </div>

        </div>
        <div className='bg-[#8FA666] text-center py-4 '>
        <p className='text-white'>Copyright (c) 2002-2024 eGun GmbH Germany. All rights reserved</p>
        </div>
        </>
    )
}

export default Footer