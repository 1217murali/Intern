import React from 'react'
import Palash from '../../assets/palash.webp'

export default function review() {
  return (
    <div className=''>
        <img src={Palash} className='w-full h-[84vh] relative mb-28' alt="Palash"/>
        {/* <div className='absolute bg-white w-[40%]'>
            <p>Services_____</p>
            <p>Strive Only For The</p>
            <p>Best.</p>
        </div> */}
        <div className=' inset-x-0 top-[calc(100vh-75px)] flex justify-around items-center bg-white w-[93%] h-32 mx-auto rounded-lg shadow-2xl py-4 z-10 mt-20'>
            <div>
                <h2 className='font-semibold text-3xl text-center'>100+</h2>
                <h5 className='text-xl'>Bookings Completed</h5>
            </div>
            <div>
                <h2 className='font-semibold text-3xl text-center'>150+</h2>
                <h5 className='text-xl'>Happy Customers</h5>
            </div>
        </div>
    </div>
  )
}
