import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import image from '../assets/sectionservice.jpg';

const ElevatorsSection = ({ content, img, index }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true,     // Animation happens only once
    });
  }, []);

  return (
    <section
      className="bg-[#121212] text-white py-10 sm:py-12 md:py-14 lg:py-16 "
      data-aos={index % 2 !== 0 ? 'fade-left' : 'fade-right'} // Dynamic animation type
    >
      <div
        className={`mx-auto container lg:px-10 px-4 flex ${
          index % 2 !== 0 ? 'md:flex-row-reverse flex-col-reverse' : 'md:flex-row flex-col-reverse'
        } md:gap-20 gap-4 items-center`}
      >
        <div className="items-end">
          <h2 className="text-4xl  mb-4 font-bold contrast-200">Elevators Made in Sweden</h2>
          <p className="mb-6 text-lg leading-relaxed sm:text-justify">
           Rolex    was founded in Gothenburg, Sweden, in 1898. Today, we are part of
            a world-leading company group, but our elevators are still manufactured
            in Sweden and our brand is still growing.{' '}
            <span className="font-semibold">Watch the video to find out more!</span>
          </p>
          <ul className="list-disc list-inside mb-6">
            <li>Elevators made in Sweden</li>
            <li>Screw-driven technology</li>
            <li>Swedish quality & design</li>
          </ul>
          <a
            href="#"
            className="inline-block bg-white text-black font-semibold py-2 px-4 rounded hover:bg-gray-200"
          >
            FIND OUT MORE ABOUT Rolex    
          </a>
        </div>
        <div>
          <img
            src={img}
            alt="Gothenburg Sweden"
            className="shadow-lg lg:max-w-[40rem] rounded-2xl"
          />
        </div>
        
      </div>
      {/* <div className="h-1 w-1/2 mx-auto bg-gradient-to-r from-[#f05454] to-[#3a7bd5] mt-8"></div> */}
      
    </section>
  );
};

export default ElevatorsSection;
