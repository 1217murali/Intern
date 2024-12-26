import React from 'react'
import Navbar from '../Navbar/Navbar';

function Home() {
  return (
    // <div>
    //   <div className="relative bg-[url('./assets/Home.webp')] bg-cover bg-center min-h-[120vh] w-full overflow-hidden">
    //       {/* Navbar */}
    //       <div className="sticky top-0">
    //         <Navbar />
    //       </div>
          
    //       {/* Hero Section */}
    //       <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
    //       <p className="text-2xl opacity-60 animate-fadeInDown">
    //         Simple - Unique - Friendly
    //       </p>
    //       <br />
    //       <p className="text-6xl font-semibold animate-fadeUpTop">
    //         Make Yourself At Home
    //       </p>
    //       <p className="text-6xl font-bold animate-fadeUpTop">
    //         In Our <span className="text-pink-600">Guest House</span>.
    //       </p>
    //     </div>
    //   </div>


    //   {/* BOOK NOW Button */}
    //   <div className="absolute  bottom-[] left-1/2 transform -translate-x-1/2 flex justify-center items-center bg-white w-4/5 rounded-lg shadow-lg py-4">
    //       <a
    //       href="https://www.apple.com"
    //       className="bg-pink-600 font-semibold text-white px-6 py-3 rounded-xl hover:bg-secondary transform transition duration-300 hover:-translate-y-2 hover:text-black"
    //       >
    //         BOOK NOW
    //       </a>
    //     </div>
    // </div>
    <div className="home">
      <div className="w-full min-h-[120vh] bg-cover bg-center  bg-[url('src/assets/home.webp')] relative" >
        <Navbar />
        {/* Middle text */}
        <div className="block text-center pt-52 sm:text-sm">
          <p className="text-xl text-slate-300 font-serif animate-fadeInDown">Simple - Unique - Friendly<br /><br /></p>
          <p className="text-6xl text-white font-semibold animate-fadeUpTop">Make Yourself At Home<br/>In Our <a href="/" className="text-pink-600">Guest House</a>.</p>
        </div>

        {/* Book Now Session  */}
        <div className="absolute  bottom-[-40px] left-1/2 transform -translate-x-1/2 flex justify-center items-center bg-white w-4/5 rounded-lg shadow-lg py-4 ">
          <a
          href="https://www.apple.com"
          className="bg-pink-600 font-semibold text-white px-6 py-3 rounded-xl hover:bg-pink-800"
          >
            BOOK NOW
          </a>
        </div>
      </div>    
    </div>
  )
}

export default Home
