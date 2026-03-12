import React, { useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import background from '../../../assets/background/pattern13.avif'
import icon from '../../../assets/icon/arrow.png'

const DescriptionProduct = ({ data }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false,    // Animation triggers on scroll and on mount
    });
  }, []);

  return (
    <section className="text-black bg-gray-100
     relative w-full py-8 sm:py-10 md:py-12 lg:py-6">

      <div className="max-w-7xl mx-auto bg-gray-100 ">
        <div className=" rounded-lg overflow-hidden px-4">
          {/* Main Content Section */}
          <div className="flex flex-col justify-center text-black rounded-lg">
            <h1
              className="text-2xl  sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-main"
              data-aos="fade-up"
            >
              {data?.productName}
            </h1>
            
    
            <p
              className="text-lg sm:text-base md:text-lg text-black opacity-90 mb-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {data?.description}
            </p>
           
            {/* Key Features Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 ">
              {data?.features.map((val,index)=>{
                 return(
                  <div className="flex items-center space-x-3 text-black" data-aos="fade-up" data-aos-delay="300">
                  <FaCheckCircle className="text-main text-2xl" />
                  <div>
                    <h3 className="font-semibold lg:text-xl text-base">{val}</h3>
              
                  </div>
                </div>
                 )
              })}

            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default DescriptionProduct;
