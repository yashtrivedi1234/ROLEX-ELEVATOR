import React from 'react';
import BreadCums from '../../Component/BreadCums';
import photo from '../../assets/About/director.jpg';
import img from '../../assets/background/pattern6.avif';
import Button from '../../Component/Button'
import icon from '../../assets/icon/arrow.png'

const DirectorMessage = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'About' },
    { label: "Managing Director's Message" },
  ];

  return (
    <section className="relative bg-gray-100 text-black z-10  overflow-x-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.6,
          zIndex: -10,
        }}
      ></div>

      {/* Breadcrumb */}
      <BreadCums headText={"Managing Director's Message"} items={breadcrumbItems} />

      {/* Message Section */}
      <div className="max-w-7xl py-6 px-6  sm:py-12 md:py-14 lg:py-16 mx-auto  flex flex-col lg:flex-row items-center lg:items-start gap-6">
        {/* Director's Image */}
        <div className="w-full lg:w-[35%] flex justify-center lg:justify-start relative ">
          <img
            src={photo}
            alt="Director"
            className="w-full max-w-md h-auto object-cover rounded-xl border-4 border-gray-600 transition-transform duration-300 hover:scale-105 hover:rotate-1"
            style={{
              boxShadow: "0 8px 20px rgba(255, 255, 255, 0.2)",
            }}
          />
          <div className="w-[100px] h-[100px] bg-main bg-opacity-10 rounded-full absolute -top-10 -left-10"></div>
          <div className="w-[50px] h-[50px] bg-main bg-opacity-10 rounded-full absolute -bottom-10 -right-10"></div>
        </div>

        {/* Message Content */}
        <div className="w-full lg:w-7/12 text-center lg:text-left z-50">
     
          <p className="text-[1.1rem] text-black mb-2 leading-relaxed text-justify">
            At <strong className="text-main">Rolex Elevator</strong>, we are committed to setting the highest standards in the elevator industry, delivering innovative, reliable, and safe solutions for vertical transportation. Our mission is to continually enhance the efficiency and comfort of every building, ensuring the seamless movement of people and goods across all environments.
          </p>
          <p className="text-[1.1rem] text-black mb-2 leading-relaxed text-justify">
            With a strong focus on quality, precision, and safety, we consistently invest in state-of-the-art technologies and employ the most skilled professionals to design, manufacture, install, and maintain our elevators. Our dedication to exceeding industry expectations is reflected in our comprehensive range of products and services, tailored to meet the unique requirements of our clients.
          </p>
          <p className="text-[1.1rem] text-black mb-2 leading-relaxed text-justify">
            We recognize that trust and reliability are paramount in our industry. As such, we are committed to providing exceptional customer service and ensuring that every project, from the initial consultation to post-installation support, is executed with the utmost professionalism and care.
          </p>
          <p className="text-[1.1rem] text-black mb-2 leading-relaxed text-justify">
            <strong className="text-main">Rolex Elevator</strong> remains steadfast in its pursuit of excellence, and we look forward to continuing to serve our clients with the highest level of expertise and integrity.
          </p>
          <p className="text-[1rem] text-black mb-2 leading-relaxed text-justify">
            Thank you for your continued trust and partnership.
          </p>
        </div>




      </div>







    </section>
  );
};

export default DirectorMessage;
