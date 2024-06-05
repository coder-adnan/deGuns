import React from 'react'

const Login = () => {
  return (
    <div className='text-center space-y-5 py-10'>
    <h1 className='text-[60px] font-semibold'>Login</h1>
    <p className='text-[20px] font-medium'>The marketplace for hunters, shooters and anglers</p>
    <div className='flex flex-col items-center gap-5'>
    <input type="email" className='lg:w-[620px] px-2 border-2 border-gray-300 lg:h-[50px] rounded-md placeholder:text-gray-400' placeholder='Email' name="" id="" />
    <input type="password" className='lg:w-[620px] px-2 border-2 border-gray-300 lg:h-[50px] rounded-md placeholder:text-gray-400' placeholder='Password' name="" id="" />
    <button className='bg-[#8FA666] py-[12px] px-[77px] text-white font-medium '>Login</button>
    <p className='text-gray-400 '>Don't have an account? Register <a className='text-black font-medium' href="/login">Register</a></p>    
    </div>
</div>
  )
}

export default Login