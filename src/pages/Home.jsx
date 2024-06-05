import React from 'react'
import backgroundimage from '../assets/background.png'
import cardImage from '../assets/cardImage.png'
import cardImage2 from '../assets/cardImage2.png'
import cardImage3 from '../assets/cardImage3.png'
import cardImage4 from '../assets/cardImage4.png'
import cardSpecial from '../assets/CardSpecial.png'

const Home = () => {
  return (
    <>
      <div>
        {/* hero section */}
        <div className='relative'>
          <img src={backgroundimage} alt="" className='w-[100%]' />
        </div>
        <div className='absolute lg:top-[25%] top-[20%] lg:w-2/3 '>
          <h1 className='text-white xl:text-[120px] font-semibold ml-[8%] mb-1 '>eGun</h1>
          <h2 className='text-white xl:text-[48px] ml-[8%] leading-[60px] '>The marketplace for hunters, <br></br> shooters and anglers</h2>
          <button className='bg-[#8FA666] text-white mt-6 px-14 ml-[8%] p-2 text-[16px] font-semibold '>Explore</button>
        </div>
      </div>
      {/* banner Portion */}
      <div className='relative mt-[-50px] 2xl:mt-[-70px] mx-20 py-6 px-20 bg-[#F4F4F4] rounded-md '>
        <div className='flex 2xl:gap-20 xl:gap-10 gap-5 justify-center items-center'>
          <div className='flex flex-col'>
            <label className='font-semibold mb-2' htmlFor="type">Type</label>
            <input className='p-2 xl:w-[270.8px] w-[200px]' type="text" id="type" name="type" placeholder='start typing here' />
          </div>
          <div className='flex flex-col'>
            <label className='font-semibold mb-2' htmlFor="minprice">Min Price</label>
            <input className='p-2 xl:w-[270.8px] w-[200px]' type="number" id="minprice" name="minprice" placeholder='No minimum price' />
          </div>
          <div className='flex flex-col'>
            <label className='font-semibold mb-2' htmlFor="maxprice">Max Price</label>
            <input className='p-2 xl:w-[270.8px] w-[200px]' type="number" id="maxprice" name="maxprice" placeholder='No maximum price' />
          </div>
          <button type="button" className='mt-8 text-white font-semibold py-2 px-4 bg-[#8FA666]'>Search Guns</button>
        </div>
        <div>
          <button className='mt-4 font-semibold max-xl:ml-[10%] underline'>Clear Filter</button>
        </div>
      </div>
      {/* popular Category section */}
      <div className='mt-20 px-20 flex justify-between'>
        <h1 className='font-bold text-[36px]'>Popular Categories</h1>
        <button className='font-semibold text-[22px] underline'>View All</button>

      </div>
      {/* popular Categories */}
      <div className='grid grid-cols-5 gap-4 px-20 mt-2'>
        <img src={cardImage} alt="" />
        <img src={cardImage2} alt="" />
        <img src={cardImage3} alt="" />
        <img src={cardImage4} alt="" />
        <img src={cardImage} alt="" />
      </div>

      {/* special Categories */}
      <div className='mt-20 px-20 flex justify-between'>
        <h1 className='font-bold text-[36px]'>Special Offer</h1>
        <button className='font-semibold text-[22px] underline'>View All</button>
      </div>

      <div className='grid grid-cols-5 gap-4 px-20 mt-2'>
        <img src={cardSpecial} alt="" />
        <img src={cardSpecial} alt="" />
        <img src={cardSpecial} alt="" />
        <img src={cardSpecial} alt="" />
        <img src={cardSpecial} alt="" />
        <img src={cardSpecial} alt="" />
        <img src={cardSpecial} alt="" />
        <img src={cardSpecial} alt="" />
        <img src={cardSpecial} alt="" />
        <img src={cardSpecial} alt="" />
      </div>
      {/* new Auctions */}
      <div className='mt-20 px-20 flex justify-between '>
        <h1 className='font-bold text-[36px]'>New Top Auctions</h1>
        <button className='font-semibold text-[22px] underline'>View All</button>
      </div>
      <div className="container mx-auto mt-10 px-4 mb-10">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-2 text-left border-b-2">Item</th>
              <th className="px-6 py-2 text-left border-b-2">Price</th>
              <th className="px-6 py-2 text-left border-b-2">Date</th>
              <th className="px-6 py-2 text-left border-b-2">Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-4 border-b">Sample Item 1</td>
              <td className="px-6 py-4 border-b">$10.00</td>
              <td className="px-6 py-4 border-b">2024-06-04</td>
              <td className="px-6 py-4 border-b">12:00 PM</td>
            </tr>
            <tr>
              <td className="px-6 py-4 border-b">Sample Item 2</td>
              <td className="px-6 py-4 border-b">$15.00</td>
              <td className="px-6 py-4 border-b">2024-06-05</td>
              <td className="px-6 py-4 border-b">1:00 PM</td>
            </tr>
            <tr>
              <td className="px-6 py-4 border-b">Sample Item 3</td>
              <td className="px-6 py-4 border-b">$20.00</td>
              <td className="px-6 py-4 border-b">2024-06-06</td>
              <td className="px-6 py-4 border-b">2:00 PM</td>
            </tr>
            <tr>
              <td className="px-6 py-4 border-b">Sample Item 3</td>
              <td className="px-6 py-4 border-b">$20.00</td>
              <td className="px-6 py-4 border-b">2024-06-06</td>
              <td className="px-6 py-4 border-b">2:00 PM</td>
            </tr>
            <tr>
              <td className="px-6 py-4 border-b">Sample Item 3</td>
              <td className="px-6 py-4 border-b">$20.00</td>
              <td className="px-6 py-4 border-b">2024-06-06</td>
              <td className="px-6 py-4 border-b">2:00 PM</td>
            </tr>
            <tr>
              <td className="px-6 py-4 border-b">Sample Item 3</td>
              <td className="px-6 py-4 border-b">$20.00</td>
              <td className="px-6 py-4 border-b">2024-06-06</td>
              <td className="px-6 py-4 border-b">2:00 PM</td>
            </tr>
          </tbody>
        </table>
      </div>

    </>
  )
}

export default Home