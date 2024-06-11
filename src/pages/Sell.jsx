import React from 'react'
import cardSpecial from '../assets/CardSpecial.png'
import addVector from '../assets/addVector.png'
import iteeem from '../assets/iteeem.png'

const Sell = () => {
  return (
    <>
    <div className='px-20 py-10 bg-[#F7FFEA] flex justify-between'>
   <div>
    <img src='' className='rounded-full bg-[#8FA666]' width={50} alt="" />
    <p className='font-semibold text-[18px]'>Katzerun</p>
   </div>
   <a href="/add-Products" className='bg-[#8FA666] px-4 py-1 uppercase text-white flex gap-4 text-[18px]'><img src={addVector} className='w-4 h-4 mt-[6px]' alt="" /> add new products</a>
    </div>

    <div className='mt-10 px-20'>
    <h1 className='font-bold text-[36px] mb-10'>My Listed Items</h1>
    <div className='grid grid-cols-5 gap-4  mt-2'>
        <img src={cardSpecial} alt="" />
        <img src={cardSpecial} alt="" />
        <img src={cardSpecial} alt="" />
        <img src={cardSpecial} alt="" />
        {/* <img src={cardSpecial} alt="" /> */}
        <div className='px-4 py-3 border border-[#B9B9BA]'>
        <img src={iteeem} alt="" width={186} />
        <h1 className='font-medium text-[14px] text-[#222222] mt-5'>VANGUARD VEO HD IV 1042 10 x 42 binoculars</h1>
        <p className='text-[14px] font-extrabold text-[#586740]'>479.95 EUR</p>


        </div>
      </div>
    </div>


    <div className="container mx-auto mt-10 px-4 mb-10">
    <h1 className='font-bold text-[36px] mb-10'>Bids Received</h1>
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
  
          </tbody>
        </table>
      </div>
    <div className="container mx-auto mt-10 px-4 mb-10">
    <h1 className='font-bold text-[36px] mb-10'>Selling History</h1>
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
  
          </tbody>
        </table>
      </div>

    </>
  )
}

export default Sell