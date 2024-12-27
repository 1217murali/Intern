import React from 'react';
import Location from '../../assets/Location.png';
import Call from '../../assets/call.png';
import Mail from '../../assets/mail.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

const form = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white relative mb-10">
        <div className="pl-8 left-16 h-[70%] bg-pink-600 p-8  rounded-3xl w-1/3 absolute">
        <div className="pl-8 pt-8">
            <h2 className="text-3xl font-semibold mb-6 text-white">Contact Info</h2>
            <div className="flex gap-4 items-start text-white">
              <img src={Location} alt="Location" className="w-6 h-6 filter invert brightness-0" />
              <p>Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</p>
            </div>
            <div className="flex gap-4 items-center text-white mt-4">
              <img src={Mail} alt="Mail" className="w-6 h-6 filter invert brightness-0" />
              <a href="mailto:kkghosh009@gmail.com" className="hover:underline">
                kkghosh009@gmail.com
              </a>
            </div>
            <div className="flex gap-4 items-center text-white mt-4">
            <img src={Call} alt="Call" className="w-6 h-6 filter invert brightness-0" />
              <a href="tel:+919007062180" className="hover:underline">
                +91 9007062180
              </a>
            </div>
            <div className="flex gap-5 justify-start text-2xl mt-16 p-2 text-white">
              <a href="#" className="hover:scale-110">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="hover:scale-110">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:scale-110">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:scale-110">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-1 w-[70%] pr-6 h-[80%] py-12 ml-0 shadow-2xl rounded-2xl bg-white overflow-hidden">
        {/* Contact Info Section */}
        {/* <div className=" bg-white flex flex-col justify-between w-[40%]"></div> */}
        {/* Send Message Form Section */}
        <div className="pl-96 w-[100%]">
          <h2 className="text-2xl font-medium text-pink-600 mb-6">Send a Message</h2>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <input
              type="text"
              placeholder="First Name"
              className="border border-gray-300 rounded px-4 py-2"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border border-gray-300 rounded px-4 py-2"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 rounded px-4 py-2"
            />
            <input
              type="tel"
              placeholder="Mobile Number"
              className="border border-gray-300 rounded px-4 py-2"
            />
          </div>
          <textarea
            placeholder="Write your message here..."
            className="w-full border border-gray-300 rounded px-4 py-2 mb-6 h-28"
          ></textarea>
          <button className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-600">
            Send
          </button>
        </div>
        </div>
    </div>
  );
};

export default form;
