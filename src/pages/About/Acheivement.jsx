import React from 'react';
import image1 from '../../assets/About/achieve1.jpeg';
import image2 from '../../assets/About/achieve2.jpg';
import image3 from '../../assets/About/achieve3.jpeg';
import background from "../../assets/backgroundlift.jpg";

const Achievement = () => {
  return (
    <div className="bg-[#222222] py-10 sm:py-12 md:py-14 lg:py-16 text-white relative"  style={{
            backgroundImage: `url(${background})`,
          }}>

<div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 text-white z-10">
        Our Achievements
      </h1>
      
      {/* Cards Section */}
      <div className="flex flex-wrap items-center justify-center gap-6 px-4 sm:px-6 md:px-8">
        <div className="max-w-sm bg-[#333333] rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 cursor-pointer">
          <img src={image1} alt="Achievement 1" className="w-full h-64 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Achievement Title 1</h2>
            <p className="text-sm text-gray-400">
              Brief description of this achievement goes here. Highlight its importance and context.
            </p>
          </div>
        </div>
        <div className="max-w-sm bg-[#333333] rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300  cursor-pointer">
          <img src={image2} alt="Achievement 2" className="w-full h-64 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Achievement Title 2</h2>
            <p className="text-sm text-gray-400">
              Brief description of this achievement goes here. Highlight its importance and context.
            </p>
          </div>
        </div>
        <div className="max-w-sm bg-[#333333] rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300  cursor-pointer">
          <img src={image3} alt="Achievement 3" className="w-full h-64 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Achievement Title 3</h2>
            <p className="text-sm text-gray-400">
              Brief description of this achievement goes here. Highlight its importance and context.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
