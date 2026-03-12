import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import image from '../assets/whychoose.jpg'


const WhyChooseRolex = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const points = [
    "Advanced Safety Features",
    "Premium Quality Materials",
    "Smooth and Silent Operation",
    "Energy Efficient Technology",
    "Excellent Customer Support",
  ];

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col md:flex-row items-start bg-gray-100  ">
      {/* Left - Image Section */}
      <div className="md:w-1/2 w-full pb-[20rem]">
        <img
          src={image}
          alt="Elevator"
          className="w-full h-full pb-[20rem]"
        />
      </div>

      {/* Right - Content Section */}
      <div className="md:w-1/2 w-full mt-6 md:mt-0 md:pl-8 bg-main  pb-[20rem]">
        <h2 className="text-3xl font-bold text-gray-800">Why Choose Rolex Elevator?</h2>
        <p className="text-gray-600 mt-2">
          We provide high-quality, reliable, and innovative elevator solutions to meet your needs.
        </p>

        {/* Accordion List */}
        <div className="mt-4">
          {points.map((point, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md mb-3">
              <button
                className="flex justify-between items-center w-full text-lg font-semibold text-gray-700"
                onClick={() => toggleIndex(index)}
              >
                {point}
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {openIndex === index && (
                <p className="text-gray-600 mt-2">
                  Detailed description of {point}. Rolex Elevator ensures the best quality and service.
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseRolex;
