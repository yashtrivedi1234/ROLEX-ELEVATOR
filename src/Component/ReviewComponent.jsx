import React, { useEffect } from 'react';
import icon from '../assets/icon/arrow.png'


const ReviewComponent = () => {
  useEffect(() => {
    // Dynamically load the Tagembed script
    const script = document.createElement('script');
    script.src = "https://widget.tagembed.com/embed.min.js";
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Clean up the script when the component unmounts
    };
  }, []);




  return (
    <section className=' bg-gray-100'>
    <div className='py-6 sm:py-8 md:py-10 lg:py-12  max-w-7xl mx-auto '>
      {/* <h2 className="text-3xl font-bold md:text-[45px] mb-8 text-center">
          What our customers say
        </h2> */}
      <div className='flex items-center justify-center gap-2'>
        <h2> What Our Customers say</h2>
        <img src={icon} alt="icons" className='w-10 h-10 object-cover text-main' />
      </div>
      <div
        className="tagembed-widget"
        style={{ width: '100%', height: '100%' }}
        data-widget-id="2145663"
        data-tags="false"
        view-url="https://widget.tagembed.com/2145663"
      ></div>

    </div>
    </section>

  );
};

export default ReviewComponent;
