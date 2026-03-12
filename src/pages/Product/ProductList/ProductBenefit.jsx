import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import image from '../../../assets/productbenefit.png';
import Button from '../../../Component/Button';
import background from '../../../assets/background/pattern6.avif';

const ProductBenefit = ({data}) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true,     // Animation happens only once
    });
  }, []);

  return (
    <section className='relative bg-gray-100 '>
      {/* Background Image */}
      <div
        className="absolute inset-0 "
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'right',
          backgroundPosition: 'right',
          opacity: 0.6,
          width: '100%',
          right: '0',
        }}
      ></div>
      
      <div className="z-10  py-10 sm:py-12 md:py-14">
        {/* Main Content */}
        <div
          className={`flex md:flex-row-reverse flex-col-reverse border border-red-500'
            }  gap-4   container  px-4 relative`} // Ensure content is above background
        >
          {/* Left Content - Text */}
          <div className="items-end" data-aos="fade-up" data-aos-delay="100">
            <h1 className="lg:text-3xl text-xl md:text-2xl mb-2 font-semibold text-main">
              {` Our Features`}
            </h1>
            <ul className="list-disc list-inside mb-6" data-aos="fade-up" data-aos-delay="300">
              {data?.features.map((val) => <li className="font-semibold">{val}</li>)}
            </ul>
            <Button text={"View More Detail"} />
          </div>

          {/* Right Content - Image */}
          <div data-aos="fade-up" data-aos-delay="500" className='max-w-[30rem]'>
            <img
              src={data?.image}
              alt="Hospital Lift"
              className="shadow-lg  rounded-2xl"
            />
          </div>


        </div>
      </div>
    </section>
  );
};

export default ProductBenefit;
