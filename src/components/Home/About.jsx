import React from 'react';
import AboutImage from '../../assets/About.jpg';

function About() {
  return (
    <div className="flex justify-between items-center px-8 py-16 mt-32 relative">
      {/* Image Section */}
      <div className="w-1/2 flex justify-center">
        <img 
          src={AboutImage} 
          alt="About Us" 
          className="w-3/4 h-auto rounded-lg shadow-lg" 
        />
      </div>

      {/* Text Section */}
      <div className="w-1/2 pl-6 text-left">
        <h2 className="text-3xl mb-6">ABOUT US____</h2>
        <p className='text-5xl font-bold'>The Best Holidays Start Here!</p>
        <p className="text-lg text-gray-700 leading-relaxed">
        Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis. Your ideal retreat beckons, promising a harmonious blend of nature's beauty and heartfelt hospitality. Explore the hidden gems of Purulia, creating memories that linger long after your stay.
        </p>
        <a href=''>Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156
        Contact us: +91 9007062180</a>
      </div>
    </div>
  );
}

export default About;
