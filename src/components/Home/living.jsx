import React from 'react';
import Large from "../../assets/large.jpg";
import Small from "../../assets/small.jpg";

function living() {
  return (
    <div className='mb-32 mt-20'>
      <div className='pl-8 md:pl-16 w-auto'>
        <p className='mb-4 font-serif text-lg'>OUR LIVING ROOM_____</p>
        <p className='mb-4 font-bold text-4xl'>The Most Memorable Rest</p>
        <p className='mb-2 font-bold text-4xl'>Time Starts Here.</p>
      </div>
      <div className="flex flex-row gap-6 pl-8 md:pl-16 mt-16 w-full">
        {/* First Card */}
        <div className="w-[80%] sm:w-[45%] md:w-[30%] bg-white rounded-lg shadow-lg overflow-hidden">
          <img src={Small} className="w-full h-56 object-cover"/>
          <div className="p-6">
            <p className="text-xl font-bold mb-2">Cozy Haven Room</p>
            <p className="text-gray-700 mb-4 md:text-lg">
              Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.
            </p>
            <p className="text-sm md:text-lg mb-4">
              Starting from <strong>Rs. 1000/night</strong>
            </p>
            <a
              href="https://wa.link/at5ion"
              className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-800 inline-block text-center"
              aria-label="Book now for Cozy Haven Room via WhatsApp"
            >
              BOOK NOW
            </a>
          </div>
        </div>

        {/* Second Card */}
        <div className="w-[80%] sm:w-[45%] md:w-[30%] bg-white rounded-lg shadow-lg overflow-hidden">
          <img src={Large} className="w-full h-56 object-cover"/>
          <div className="p-6">
            <p className="text-xl font-bold mb-2">Spacious Serenity Suite</p>
            <p className="text-gray-700 mb-4 text-base md:text-lg">
              Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.
            </p>
            <p className="text-sm md:text-lg mb-4">
              Starting from <strong>Rs. 1500/night</strong>
            </p>
            <a
              href="https://wa.link/at5ion"
              className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-800 inline-block text-center"
              aria-label="Book now for Spacious Serenity Suite via WhatsApp"
            >
              BOOK NOW
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default living
