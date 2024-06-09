import React from 'react'
import cardSpecial from '../assets/CardSpecial.png'


const Buy = () => {
  return (
    <>
    <div className='px-20 py-10 bg-[#F7FFEA]'>
    <img src='' className='rounded-full bg-[#8FA666]' width={50} alt="" />
    <p className='font-semibold text-[18px]'>Katzerun</p>
    </div>

    <div className='mt-10 px-20'>
    <h1 className='font-bold text-[36px] mb-10'>Items Listed by Katzerun</h1>
    <div className='grid grid-cols-5 gap-4  mt-2'>
        <img src={cardSpecial} alt="" />
        <img src={cardSpecial} alt="" />
        <img src={cardSpecial} alt="" />
        <img src={cardSpecial} alt="" />
        <img src={cardSpecial} alt="" />
      </div>
    </div>


    <div className="container mx-auto mt-10 px-4 mb-10">
    <h1 className='font-bold text-[36px] mb-10'>Bids by Katzerun</h1>
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
    <h1 className='font-bold text-[36px] mb-10'>Buying History</h1>
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

export default Buy