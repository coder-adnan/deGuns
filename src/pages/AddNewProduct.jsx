import React from 'react'
import addPhotos from '../assets/addPhotos.png'

const AddNewProduct = () => {
    return (
        <>
            <div className='px-20 py-10 bg-[#F7FFEA]'>
                <h1 className='font-semibold text-[36px]'>Add New Product</h1>
            </div>
            <div className='mt-10 px-20'>
                <img width={150} src={addPhotos} alt="" />
                <div className='flex gap-40'>
                <div className='flex flex-col gap-5 mt-10'>
                    <label className='flex flex-col'>
                        <span>Enter current price</span>
                        <input type="text" className='lg:w-[400px] px-2 border-2 border-gray-300 lg:h-[40px] rounded-md placeholder:text-gray-400' placeholder='Enter current price' name="" id="" />
                    </label>
                    <label className='flex flex-col'>
                        <span>Enter buy now price</span>
                        <input type="text" className='lg:w-[400px] px-2 border-2 border-gray-300 lg:h-[40px] rounded-md placeholder:text-gray-400' placeholder='Enter buy now price' name="" id="" />
                    </label>
                    <label className='flex flex-col'>
                        <span>Select Auction</span>
                        <select className='lg:w-[400px] px-2 border-2 border-gray-300 lg:h-[40px] rounded-md text-gray-700'>
                            <option value="" disabled selected style={{ color: '#9CA3AF' }}>Select Auction</option>
                            <option value="auction1">Auction 1</option>
                            <option value="auction2">Auction 2</option>
                            <option value="auction3">Auction 3</option>
                        </select>
                    </label>
                    <label className='flex flex-col'>
                        <span>Select product category</span>
                        <select className='lg:w-[400px] px-2 border-2 border-gray-300 lg:h-[40px] rounded-md text-gray-700'>
                            <option value="" disabled selected style={{ color: '#9CA3AF' }}>Select product category</option>
                            <option value="category1">Category 1</option>
                            <option value="category2">Category 2</option>
                            <option value="category3">Category 3</option>
                        </select>
                    </label>
                    <label className='flex flex-col'>
                        <span>Select product sub category</span>
                        <select className='lg:w-[400px] px-2 border-2 border-gray-300 lg:h-[40px] rounded-md text-gray-700'>
                            <option value="" disabled selected style={{ color: '#9dc75b' }}>Select product sub category</option>
                            <option value="subcategory1">Sub Category 1</option>
                            <option value="subcategory2">Sub Category 2</option>
                            <option value="subcategory3">Sub Category 3</option>
                        </select>
                    </label>
                </div>
                <div>
                    <h1 className='text-[36px] font-medium '>Product Description</h1>
                   {/* <input type="text"  placeholder='Enter product description' name="" id="" /> */}
                   <textarea className='lg:w-[500px] px-2 border-2 border-gray-300 lg:h-[300px] rounded-md placeholder:text-gray-400 mt-4' placeholder="Enter product description"></textarea>
                  
                </div>
                </div>

                <div className='my-10'>
                <h1 className='font-semibold text-[36px]'>Shipment Information</h1>
                <div className='flex flex-col gap-5 mt-10'>
                <input type="text" className='lg:w-[400px] px-2 border-2 border-gray-300 lg:h-[40px] rounded-md placeholder:text-gray-400' placeholder='Condition Of Goods' name="" id="" />
                <input type="text" className='lg:w-[400px] px-2 border-2 border-gray-300 lg:h-[40px] rounded-md placeholder:text-gray-400' placeholder='Payment' name="" id="" />
                <input type="text" className='lg:w-[400px] px-2 border-2 border-gray-300 lg:h-[40px] rounded-md placeholder:text-gray-400' placeholder='Shipping' name="" id="" />
                <input type="text" className='lg:w-[400px] px-2 border-2 border-gray-300 lg:h-[40px] rounded-md placeholder:text-gray-400' placeholder='Shipping costs' name="" id="" />
                </div>
                </div>
            </div>
        </>
    )
}

export default AddNewProduct