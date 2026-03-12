import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from '../../../assets/background/pattern6.avif'; 
const ProductFaq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How does a platform lift work?",
      answer:
        "A platform lift works by moving the platform vertically or along a staircase, powered by electric motors or hydraulic systems.",
    },
    {
      question: "How long does it take to install a platform lift?",
      answer:
        "The installation time for a platform lift varies but typically takes 1-3 days, depending on the complexity of the project.",
    },
    {
      question: "What are the benefits of a platform lift?",
      answer:
        "Platform lifts provide improved accessibility, convenience, and safety for individuals with mobility challenges.",
    },
    {
      question:
        "What is the difference between a platform lift and an elevator?",
      answer:
        "The main difference is that platform lifts are designed for short distances and have simpler mechanisms, while elevators are for taller buildings and larger capacities.",
    },
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 text-black py-10 px-5 sm:px- relative">
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',    // Make sure the background covers the whole area
          backgroundPosition: 'center',
          opacity: 0.2,               // Lower opacity for subtle background
          width: '100%',
          height: '100%',
          zIndex: -1,                 // Ensure background stays behind the content
        }}
      ></div>
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Left Section: Heading */}
        <div className="lg:w-1/3">
          <h1
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 lg:mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Frequently Asked Questions
          </h1>
          <Link
            to={"/contact"}
            className="inline-block bg-white text-white font-semibold py-2 px-4 rounded hover:bg-gray-200 bg-gradient-to-r from-green-500 to-teal-500"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            CONTACT US
          </Link>
        </div>

        {/* Right Section: FAQ Items */}
        <div className="lg:w-2/3">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-600 pb-4 cursor-pointer"
                data-aos="fade-up"
                data-aos-delay={index * 100} // Stagger the delay for each FAQ item
              >
                <div
                  onClick={() => toggleFaq(index)}
                  className="flex justify-between items-center"
                >
                  <h2 className="text-lg sm:text-xl font-semibold">
                    {faq.question}
                  </h2>
                  <span className="text-xl sm:text-2xl">
                    {activeIndex === index ? "–" : "+"}
                  </span>
                </div>
                {activeIndex === index && (
                  <p className="mt-3 text-gray-400">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFaq;
