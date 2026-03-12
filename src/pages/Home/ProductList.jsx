import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import product1 from '../../assets/product1.webp';
import product2 from '../../assets/product2.webp';
import { MdArrowForwardIos } from "react-icons/md";

const ProductList = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true,     // Trigger animation only once
    });
  }, []);

  return (
    <section className='bg-[#222222] py-10 sm:py-12 md:py-14 lg:py-16 flex items-start gap-10 justify-between '>
      <div className='container mx-auto flex flex-col md:flex-row items-center lg:gap-10 gap-4 lg:px-10 px-4'>
        {/* First Product */}
        <div className='flex flex-col gap-4 items-start' data-aos="fade-up">
          <img src={product1} alt="" />
          <div>
            <h1 className='text-[2rem] font-bold contrast-200'>Rolex  platform lifts</h1>
            <p className='opacity-80'>
              Our platform lifts are ready-made and space-saving accessibility solutions that are much faster and easier to install than conventional elevators. All our platform elevators even include a prefabricated lift shaft so that you do not need to build one.
            </p>
          </div>
          <div className="flex items-center rounded-md">
            <button className="flex items-center text-lg font-bold">
              Learn More
            </button>
            <MdArrowForwardIos className="ml-2 text-sm" />
          </div>
        </div>

        {/* Second Product */}
        <div className='flex flex-col gap-4 items-start' data-aos="fade-up" data-aos-delay="200">
          <img src={product2} alt="" />
          <div>
            <h1 className='text-[2rem] font-bold '>Rolex  platform lifts</h1>
            <p className='leading-relaxed opacity-80'>
              Our platform lifts are ready-made and space-saving accessibility solutions that are much faster and easier to install than conventional elevators. All our platform elevators even include a prefabricated lift shaft so that you do not need to build one.
            </p>
          </div>
          <div className="flex items-center rounded-md">
            <button className="flex items-center text-lg font-bold">
              Learn More
            </button>
            <MdArrowForwardIos className="ml-2 text-sm" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
