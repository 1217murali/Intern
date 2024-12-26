import React from 'react';
import One from '../../assets/About.jpg';
import Two from '../../assets/Home.webp';
import Three from '../../assets/large.jpg';
import Four from '../../assets/palash.webp';
import Five from '../../assets/small.jpg';
import Six from '../../assets/baranti.webp';
import Seven from '../../assets/recep.jpg';
import Eight from '../../assets/flower.jpg';
import Nine from '../../assets/room1.jpg';
import Tenth from '../../assets/mithonDam.webp';

const Image = () => {
  return (
    <div className="grid grid-cols-5 grid-rows-4">
      {/* First row */}
      <img src={One} className="col-span-1 row-span-2" />
      <img src={Two} className="col-span-1" />

      {/* Second row */}
      <img src={Three} className="col-span-1" />
      <img src={Four} className="col-span-1" />
      <img src={Five} className="col-span-1" />
      <img src={Six} className="col-span-1" />

      {/* Third row */}
      <img src={Seven} className="col-span-1" />
      <img src={Eight} className="col-span-1" />
      <img src={Nine} className="col-span-1" />
      <img src={Tenth} className="col-span-1" />
    </div>
  );
};

export default Image;
