import React from 'react';
import Navbar from './components/Navbar/Navbar';
import About from './components/Home/About';
import Home from './components/Home/Home';
import Living from './components/Home/living';
import Review from './components/Home/review';
import Form from './components/Home/form';
import Map from './components/Home/map';
import Footer from './components/Home/footer';
import Image from './components/Home/image';

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <div>
        <Home />
      </div>
      {/* About Section */}
      <div>
        <About />
      </div>
      <div>
        <Living />
      </div>
      <div>
        <Review />
      </div>
      {/* <div>
        <Image />
      </div> */}
      <div>
        <Form />
      </div>
      <div>
        <Map />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
