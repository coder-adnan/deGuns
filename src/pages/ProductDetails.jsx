import React from 'react'
import arrowIcon from '../assets/Arrow.png'
import PrdctImage from '../assets/ItemImage.png'
import heartImage from '../assets/heart.png'
import prdctImage2 from '../assets/itemImage2.png'
const ProductDetails = () => {
    return (
        <>
            <div className='bg-[#F7FFEA] p-20'>
                <div className='flex gap-20'>
                    <div>
                        <img src={PrdctImage} alt="" width={500} />
                        <div className='mt-4 gap-2 flex'>
                            <img src={prdctImage2} alt="" width={100} />
                            <img src={prdctImage2} alt="" width={100} />
                        </div>
                    </div>
                    <div>
                        <h1 className='text-[40px] font-semibold'>Blaser R8 Selous big game rifle</h1>
                        <p>Article ID: 19597340</p>
                        <h1 className='border-b-2 border-[#B9B9BA] '></h1>
                        <div className='flex gap-16 mt-4'>
                            <p>Current Price:</p>
                            <p className='font-semibold'>18,500.00 EUR</p>
                        </div>
                        <div className='flex gap-14'>
                            <p>Buy Now Price:</p>
                            <p className='font-semibold'>16,500.00 EUR</p>
                        </div>
                        <div className='flex gap-12'>
                            <p>Remaining time:</p>
                            <p className='font-semibold'>25 days, 08:01:54</p>
                        </div>
                        <div className='flex gap-10'>
                            <p>Auction duration:</p>
                            <p className='font-semibold'>30 days</p>
                        </div>
                        <div className='flex gap-14'>
                            <p>Estimated end:</p>
                            <p className='font-semibold'>Tue, 18.06.2024 20:54:56</p>
                        </div>
                        <div className='flex gap-10'>
                            <p>Commandments:</p>
                            <p className='font-semibold'>19</p>
                        </div>
                        <div className='flex gap-[55px]'>
                            <p>Highest bidder:</p>
                            <p className='font-semibold'>Katzerun</p>
                        </div>
                        <div className='flex gap-[75px]'>
                            <p>Salesperson:</p>
                            <p className='font-semibold'>TaunusWaffen</p>
                        </div>
                        <div className='flex gap-16'>
                            <p>Item Location:</p>
                            <p className='font-semibold'>61250 Usingen (Germany)</p>
                        </div>
                        <div className='mt-10 flex gap-10 '>
                            <button className='uppercase bg-[#8FA666] text-white p-1 px-8 text-[14px] font-bold '>Bid Now</button>
                            <button className='uppercase flex gap-4 border-2 border-[#586740] p-1 px-4'>
                                <img src={heartImage} alt="" />
                                <span className='text-[#586740] font-medium'>Add to Wishlist </span>
                            </button>
                        </div>
                        <div className='mt-6 space-y-2'>
                            <div className='flex gap-4'>
                                <img src={arrowIcon} alt="" width={15} />
                                <p className='underline'>Question to TaunusWaffen</p>
                            </div>
                            <div className='flex gap-4'>
                                <img src={arrowIcon} alt="" width={15} />
                                <p className='underline'>Watch this article</p>
                            </div>
                            <div className='flex gap-4'>
                                <img src={arrowIcon} alt="" width={15} />
                                <p className='underline'>All 28 auctions of TaunusWaffen</p>
                            </div>
                            <div className='flex gap-4'>
                                <img src={arrowIcon} alt="" width={15} />
                                <p className='underline'>Send Product Recommendation</p>
                            </div>
                            <div className='flex gap-4'>
                                <img src={arrowIcon} alt="" width={15} />
                                <p className='underline'>Report a violation</p>
                            </div>
                            <div className='flex gap-4'>
                                <img src={arrowIcon} alt="" width={15} />
                                <p className='underline'>Login to edit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-20 space-x-9 px-20 '>
                <button className='text-[20px] text-[#6B7280]'>Shipment</button>
                <button className='text-[20px] text-[#6B7280]'>Production Description</button>
                <button className='text-[20px] text-[#6B7280]'>Seller Information</button>
            </div>
            <h1 className='border-b-2 border-[#B9B9BA] w-2/5 mx-20 mt-2'></h1>
            <div className='px-20 my-10'>
                <div className='flex gap-9'>
                    <p className='font-bold'>Condition of the goods:</p>
                    <p className=''>light signs of wear </p>
                </div>
                <div className='flex gap-36'>
                    <p className='font-bold'>Payment:</p>
                    <p>18,500.00 EUR</p>
                </div>

                <div className='flex gap-[102px]'>
                    <p className='font-bold'>shipping Time:</p>
                    <h1>25 days, 08:01:54</h1>
                </div>
                <div className='flex gap-[99px]'>
                    <p className='font-bold'>Shipping costs:</p>
                    <p>30 days</p>
                </div>
            </div>
        </>
    )
}

export default ProductDetails