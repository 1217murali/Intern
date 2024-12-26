import React, { useState, useEffect } from "react";
import AboutImage from "../../assets/About.jpg";

function About() {
  const FadeInSection = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.5 } // Trigger when 50% of the item is visible
      );

      const element = document.getElementById("fade-in-element");
      if (element) observer.observe(element);

      return () => {
        if (element) observer.unobserve(element);
      };
    }, []);

    return (
      <div
        id="fade-in-element"
        className={`w-4/5 md:w-1/2 flex justify-center mb-8 relative transition-all duration-1000 ${
          isVisible ? "animate-fadeLeft" : "opacity-0"
        }`}
      >
        {children}
      </div>
    );
  };

  return (
    <div className="flex flex-col relative md:flex-row justify-between items-center px-8 py-16 mt-32 gap-y-8 md:gap-x-12 max-w-screen-lg mx-auto">
      {/* Image Section */}
      <FadeInSection>
        <img
          src={AboutImage}
          alt="About Kingsukh Guest House"
          className="w-[110%] h-auto rounded-lg shadow-lg"
        />
      </FadeInSection>

      {/* Text Section */}
      <div className="md:w-1/2 md:pl-6">
        <h2 className="text-2xl font-semibold mb-3 animate-fadeUpTop">ABOUT US______</h2>
        <p className="text-4xl font-bold mb-5 animate-fadeUpTop">The Best Holidays Start Here!</p>
        <p className="text-base text-gray-700 mb-5 animate-fadeUpTop">
          Embark on a tranquil journey at our Kingsukh Guest House, enveloped by
          the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill,
          Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the
          captivating Panchat Dam. Revel in the embrace of comfort, relish
          delightful meals, and unwind in our verdant garden oasis. Your ideal
          retreat beckons, promising a harmonious blend of nature's beauty and
          heartfelt hospitality. Explore the hidden gems of Purulia, creating
          memories that linger long after your stay.
        </p>
        <p className="text-lg font-medium cursor-pointer text-purple_text">
          <strong>Address:</strong>{" "}
          <a
            href="https://maps.app.goo.gl/7wYUEB4tvR7NMHbcA"
            className="hover:underline"
          >
            Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156
          </a>
        </p>
        <p className="text-lg font-medium text-blue_text mb-5">
          <strong>Contact us:</strong>{" "}
          <a
            href="tel:+919007062180"
            className="text-blue-600 hover:underline"
            aria-label="Call us at +91 9007062180"
          >
            +91 9007062180
          </a>
        </p>
        <div className="animate-fadeUpTop">
          <a
            href="https://wa.link/at5ion"
            className="bg-pink-600 text-white px-8 py-2 rounded-xl hover:bg-pink-800 inline-block"
          >
            BOOK NOW
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
