import React from 'react'
import bgIcon from '../assets/registerIcon.png'

const Register = () => {
  return (
    <div className='text-center space-y-2 py-10'>
        <h1 className='text-[60px] font-semibold'>Join Egun</h1>
        <p className='text-[20px] font-medium'>Registering as a user is 100% free for you.</p>
        <p className='text-[16px] font-medium'>(Information with * is necessary, all other information is voluntary.)</p>
        <p className='text-gray-400 '>Already have an account? <a className='text-black font-medium' href="/login">Login to your account</a></p>    
        <img src={bgIcon} alt="" width={500} className='mx-auto py-5' />
        <div className='flex flex-col items-center gap-5'>
        <input type="text" className='lg:w-[500px] px-2 border-2 border-gray-300 lg:h-[50px] rounded-md placeholder:text-gray-400' placeholder='Full Name' name="" id="" />
        <input type="email" className='lg:w-[500px] px-2 border-2 border-gray-300 lg:h-[50px] rounded-md placeholder:text-gray-400' placeholder='Email' name="" id="" />
        <input type="text" className='lg:w-[500px] px-2 border-2 border-gray-300 lg:h-[50px] rounded-md placeholder:text-gray-400' placeholder='User Status' name="" id="" />
        <input type="password" className='lg:w-[500px] px-2 border-2 border-gray-300 lg:h-[50px] rounded-md placeholder:text-gray-400' placeholder='Password' name="" id="" />
        <input type="password" className='lg:w-[500px] px-2 border-2 border-gray-300 lg:h-[50px] rounded-md placeholder:text-gray-400' placeholder='Repeat Your Password' name="" id="" />
        <input type="text" className='lg:w-[500px] px-2 border-2 border-gray-300 lg:h-[50px] rounded-md placeholder:text-gray-400' placeholder='Security Question' name="" id="" />
        <input type="text" className='lg:w-[500px] px-2 border-2 border-gray-300 lg:h-[50px] rounded-md placeholder:text-gray-400' placeholder='Enter Questions' name="" id="" />
        <input type="text" className='lg:w-[500px] px-2 border-2 border-gray-300 lg:h-[50px] rounded-md placeholder:text-gray-400' placeholder='Enter Answer' name="" id="" />
        <button className='bg-[#8FA666] py-[16px] px-[77px] w-[500px] text-white font-medium '>Next</button>
        </div>
    </div>
  )
}

export default Register