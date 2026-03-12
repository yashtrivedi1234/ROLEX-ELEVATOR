import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import image1 from '../../../assets/product/product1.png';
import image2 from '../../../assets/product/product2.png';
import image3 from '../../../assets/product/product3.png';
import background from '../../../assets/background/pattern11.avif'
import { useNavigate } from 'react-router-dom';

const ProductType = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true,     // Animation happens only once
    });
  }, []);

  const navigate=useNavigate()

  return (
    <section className='relative '>
             <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `url(${background})`,
                        backgroundSize: 'center',
                        backgroundPosition: 'right',
                        opacity: 0.6,
                        width: '100%',
                        right: '0',
                      }}
                    ></div>
    <div className="bg-gradient-to-b from-gray-50 to-gray-200 py-10 sm:py-12 md:py-14 lg:py-16 text-black">
      {/* Heading */}
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-main" data-aos="fade-up">
        Product Type
      </h1>
      
      {/* Cards Section */}
      <div className="flex flex-wrap md:items-center items-start justify-center gap-8 px-4 sm:px-6 md:px-10">
        {/* Card 1 */}
        <div 
          className="max-w-sm bg-white rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition duration-300 cursor-pointer hover:shadow-2xl"
          data-aos="fade-up"
          data-aos-delay="100"
          onClick={()=>navigate("/product/list/description")}
        >
          <img src={image1} alt="SKY ELITE" className="w-full h-72 object-cover" />
          <div className="px-6 py-2">
            <h2 className="text-xl font-semibold text-main mb-1">SKY ELITE</h2>
            <p className="text-sm text-gray-600">
              Brief description of this achievement goes here. Highlight its importance and context.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div 
          className="max-w-sm bg-white rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition duration-300 cursor-pointer hover:shadow-2xl"
          data-aos="fade-up"
          data-aos-delay="200"
          onClick={()=>navigate("/product/list/description")}
        >
          <img src={image2} alt="SKY METRO" className="w-full h-72 object-cover" />
          <div className="px-6 py-2">
            <h2 className="text-2xl font-semibold text-main mb-1">SKY METRO</h2>
            <p className="text-sm text-gray-600">
              Brief description of this achievement goes here. Highlight its importance and context.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div 
          className="max-w-sm bg-white rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition duration-300 cursor-pointer hover:shadow-2xl"
          data-aos="fade-up"
          data-aos-delay="300"
          onClick={()=>navigate("/product/list/description")}
        >
          <img src={image3} alt="SKY CRESCENT" className="w-full h-72 object-cover" />
          <div className="px-6 py-2">
            <h2 className="text-2xl font-semibold text-main mb-1">SKY CRESCENT</h2>
            <p className="text-sm text-gray-600">
              Brief description of this achievement goes here. Highlight its importance and context.
            </p>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default ProductType;
