import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import AOS from 'aos'; // Import AOS as an asset
import 'aos/dist/aos.css'; // Import AOS styles
import Header from './Header';
import bgimg from '../assets/breadbg.png'
const BreadCums = ({ items, headText ,image}) => {


  
  
  // Initialize AOS
  useEffect(() => {
    AOS.init();
  }, []);

  return (
 

    <div
      className="relative flex flex-col  items-center justify-center pt-[6rem] pb-[3rem] lg:pt-[10rem] lg:pb-[5rem] bg-cover bg-center z-0"
      style={{ backgroundImage: `url(${image?image:bgimg})` }} // Background image
      data-aos="fade-in" // Add AOS effect here
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

      {/* Heading */}
      <h1 className="text-white text-center relative z-20 sora-600 px-4 mb-4 font-bold lg:text-4xl text-2xl sm:text-3xl" data-aos="fade-up">
        {headText}
      </h1>

      {/* Breadcrumb navigation */}
      <nav className="flex items-center relative z-20 space-x-1 px-4 text-gray-300 text-sm lg:text-base">
        {items?.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <span className="text-white">
                <MdKeyboardArrowRight className="text-lg lg:text-xl mt-[0.2rem]" />
              </span>
            )}
            {item.href ? (
              <Link
                to={item.href}
                className="hover:text-white transition-colors"
                data-aos="fade-left" // Add AOS effect here
                data-aos-delay={index * 100} // Stagger effects
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold text-white" data-aos="fade-right">
                {item.label}
              </span>
            )}
          </React.Fragment>
        ))}
      </nav>
    </div>
  
  );
};

export default BreadCums;
