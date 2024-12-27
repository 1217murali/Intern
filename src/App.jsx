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
      <Home />
      <About />
      <Living />
      <Review />
      <Image />
      <Form />
      <Map />
      <Footer />
    </div>
  );
};

export default App;
