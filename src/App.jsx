import React from 'react';
import Navbar from './components/Navbar/Navbar';
import About from './components/Home/About';

const App = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative bg-[url('./assets/Home.webp')] bg-cover bg-center min-h-[120vh] w-full overflow-hidden">
        <Navbar />
        {/* Centering Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <p className="text-2xl opacity-60 animate-fadeInDown">Simple - Unique - Friendly</p>
          <br />
          <p className="text-6xl font-semibold animate-fadeUpTop">Make Yourself At Home</p>
          <p className="text-6xl font-bold animate-fadeUpTop">
            In Our <span className="text-pink-600">Guest House</span>.
          </p>
        </div>
      </div>

      {/* BOOK NOW Button */}
      <div className="absolute inset-x-0 top-[calc(100vh--75px)] flex justify-center items-center bg-white w-[90%] h-28 mx-auto rounded-lg shadow-lg py-4 z-10">
        <a href="#" className="bg-pink-600 text-white px-7 py-3 rounded-xl hover:bg-pink-800">
          BOOK NOW
        </a>
      </div>

      {/* About Section */}
      <div className="relative z-0">
        <About />
      </div>
    </div>
  );
};

export default App;
