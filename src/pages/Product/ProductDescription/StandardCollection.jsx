import React, { useState } from "react";
import color from '../../../assets/product/product2.webp';
import color1 from '../../../assets/color4.webp';
import background from '../../../assets/background/pattern10.avif'

const StandardCollection = () => {
  // Colors and corresponding images
  const colorOptions = [
    { name: "Ocean Blue", color: "#004e66", image: color },
    { name: "Deep Red", color: "#9e1111", image: color1 },
    { name: "Charcoal Grey", color: "#4a4a4a", image: color },
    { name: "Ivory", color: "#f8f0e3", image: color1 },
    { name: "Olive Green", color: "#a6a77a", image: color },
    { name: "Pearl White", color: "#ffffff", image: color1 },
  ];

  const [selectedColor, setSelectedColor] = useState(colorOptions[0]);

  return (
    <section className="bg-gray-100 lg:py-16 py-0 sm:py-12 md:py-14 relative">
          <div
                              className="absolute inset-0 "
                              style={{
                                backgroundImage: `url(${background})`,
                                backgroundSize: 'right',
                                backgroundPosition: 'right',
                                opacity: 0.4,
                                width: '100%',
                                right: '0',
                              }}
          ></div>
      <div className="flex flex-col items-center lg:flex-row justify-between gap-10 text-black container rounded-xl mx-auto py-12 transition-all border duration-500 ease-in-out transform max-w-7xl shadow-2xl px-4 ">
        
        {/* Left Section: Heading and Description */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 md:text-center text-start lg:text-left">
          <h2 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl  font-bold mb-4 text-main tracking-tight">Standard Collection</h2>
          <p className="text-lg lg:
         text-justify text-gray-700 leading-relaxed mb-8 opacity-80 hover:opacity-100 transition-all duration-300 ease-in-out">
            The Rolex is available in 7 standard colours that have been carefully selected by our designers. Our colour collection ranges from subtle, neutral shades to rich and vibrant tones to blend in with a wide variety of interior designs. However, if you cannot find your perfect shade in our standard collection, that is absolutely no problem! You always have the option of composing your own bespoke design with the 250+ colours available in our global collection. Please contact your Rolex dealer for more information.
          </p>
          
          {/* Color Selection Buttons */}
          <h3 className="text-xl font-semibold mb-4">Choose Your Colour</h3>
          <div className="flex gap-6 justify-center lg:justify-start mb-4">
            {colorOptions.map((color, index) => (
              <button
                key={index}
                onClick={() => setSelectedColor(color)}
                className={`w-16 h-16 rounded-full transition-all duration-300 ease-in-out border-4 ${selectedColor.name === color.name
                  ? "border-blue-600 scale-110 transform"
                  : "border-gray-300 hover:border-gray-500 hover:scale-110"}`}
                style={{ backgroundColor: color.color }}
              />
            ))}
          </div>
          <p className="text-md text-gray-600 opacity-75">
            {selectedColor.name} - A description of the selected color goes here.
          </p>
        </div>
        
        {/* Right Section: Image */}
        <div className="w-full lg:w-1/2 flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-105">
          <img
            src={selectedColor.image}
            alt={selectedColor.name}
            className="w-full lg:max-w-lg rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default StandardCollection;
