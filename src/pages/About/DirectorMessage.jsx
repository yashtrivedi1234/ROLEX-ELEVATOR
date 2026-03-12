import React from 'react';
import BreadCums from '../../Component/BreadCums';
import photo from '../../assets/About/chairman.png';
import img from '../../assets/background/pattern6.avif';
import icon from '../../assets/icon/arrow.png';

const DirectorMessage = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'About' },
    { label: "Chairman's Message" },
  ];

  return (
    <section className="relative text-black z-10  overflow-x-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 hidden lg:block bg-gray-100"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.6,
          zIndex: -10,
        }}
      ></div>

      {/* Breadcrumb */}
      <BreadCums headText={"Chairman's Message"} items={breadcrumbItems} />

      {/* Message Section */}
      <div className="max-w-7xl py-6 px-6  sm:py-12 md:py-14 lg:py-16 mx-auto  flex flex-col lg:flex-row items-center lg:items-start gap-6">
        {/* Director's Image */}
        <div className="w-full lg:w-[35%] flex justify-center lg:justify-start relative ">
          <img
            src={photo}
            alt="Director"
            className="w-full max-w-md h-auto object-cover rounded-xl border-4 border-gray-600  transition-transform duration-300 hover:scale-105 hover:rotate-1"
            style={{
              boxShadow: "0 8px 20px rgba(255, 255, 255, 0.2)",
            }}
          />
          <div className="w-[100px] h-[100px] bg-main bg-opacity-10 rounded-full absolute -top-10 -left-10"></div>
          <div className="w-[50px] h-[50px] bg-main bg-opacity-10 rounded-full absolute -bottom-10 -right-10"></div>
        </div>

        {/* Message Content */}
        <div className="w-full lg:w-7/12 text-center lg:text-left z-50">
          {/* <div className='flex items-center gap-2 justify-start'>
            <h2>___ Chairman Message</h2>
            <img src={icon} alt="icons" className='w-10 h-10 object-cover text-main' />
          </div> */}
          <p className="text-lg text-black mb-4 leading-relaxed text-justify ">
            Welcome to <strong className="text-main">Rolex Elevator</strong>, where innovation meets excellence in vertical transportation. As the owner and visionary behind this company, I take great pride in the journey we have undertaken to become a trusted name in the elevator industry. Our commitment to quality, safety, and customer satisfaction drives every aspect of our business, ensuring that we deliver cutting-edge elevator solutions tailored to modern infrastructure 
          </p>
          <p className="text-lg text-black mb-4 leading-relaxed text-justify ">
            Our company was founded on the belief that mobility should be seamless, safe, and efficient. Elevators are not just mechanical systems; they are an integral part of daily life, influencing comfort, convenience, and productivity. With this understanding, we have developed a range of high-performance elevators designed for residential, commercial, industrial, and high-rise applications.
          </p>
          <p className="text-lg text-black mb-4 leading-relaxed text-justify ">
            At Rolex Elevator Company, we adhere to a set of core values that define our work. I extend my heartfelt gratitude to our valued clients, partners, and dedicated team who continue to support our mission. Together, we are elevating possibilities and redefining excellence in the elevator industry.
          </p>

          {/* <p className="text-lg text-black mb-8 leading-relaxed text-justify ">
            I extend my heartfelt gratitude to our valued clients, partners, and dedicated team who continue to support our mission. Together, we are elevating possibilities and redefining excellence in the elevator industry.
          </p> */}
          <p className="text-lg text-black mb-2 leading-relaxed text-justify ">
            Thank you for choosing <strong className="text-main">Rolex Elevator</strong>. Let’s rise to new heights—together!
          </p>
        </div>

        
      </div>

      
    </section>
  );
};

export default DirectorMessage;