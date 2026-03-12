import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img from '../../assets/background/pattern5.jpg'

const TimeLine = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false, // Animation triggers every time on scroll
    });
  }, []);

  return (
    <div>
      <div className="bg-gray-100  py-10 lg:py-16 relative ">
        {/* <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8"
          data-aos="fade-up"
        >
          Our Story
        </h1> */}
               <div
                className="absolute inset-0 hidden lg:block"
                style={{
                  backgroundImage: `url(${img})`,
                  backgroundSize: 'center',
                  backgroundPosition: 'center',
                  opacity: 0.6,
                  width: '100%',
                  left: '0',
                }}
              ></div>
        <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid max-w-7xl">
          {/* Establishment Section */}
          <div className="flex md:contents flex-row-reverse">
            <div
              className="relative p-4 my-6 text-white bg-gray-800 rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto"
              data-aos="fade-left"
            >
              <h3 className="text-lg font-semibold lg:text-xl">Our Beginnings</h3>
              <p className="mt-2 leading-6">
                We at Rolex Elevators are proud to offer our services as one of the leading providers of elevators in India. Since our establishment in 1998, a company that created history was founded by Mr. Sarwar Sheikh. Our first lift was installed in Lekhraj Khajana, Lucknow, marking the beginning of a journey dedicated to quality and reliability.
              </p>
            </div>
            <div
              className="relative col-start-5 col-end-6 mr-7 md:mx-auto"
              data-aos="fade-in"
            >
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-blue-400 rounded-t-full bg-gradient-to-r from-main to-main"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-3 bg-main border-4 border-main rounded-full top-1/2"></div>
            </div>
          </div>

          {/* Achievements Section */}
          <div className="flex md:contents">
            <div
              className="relative col-start-5 col-end-6 mr-7 md:mx-auto"
              data-aos="fade-in"
            >
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-blue-400"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-3 bg-main  border-4 border-main rounded-full top-1/2"></div>
            </div>
            <div
              className="relative p-4 my-6 text-white bg-gray-800 rounded-xl col-start-6 col-end-10 mr-auto"
              data-aos="fade-right"
            >
              <h3 className="text-lg font-semibold lg:text-xl">Our Achievements</h3>
              <p className="mt-2 leading-6">
                Rolex is one of the most reliable companies, committed to delivering exceptional service. With extremely satisfied customers in India and abroad, we have successfully installed more than 15,000 elevators in Uttar Pradesh, established 25+ branches, conducted 65+ inspections of components, and served over 12,500 satisfied customers with a 500+ active workforce.
              </p>
            </div>
          </div>

          {/* Expertise Section */}
          <div className="flex md:contents flex-row-reverse">
            <div
              className="relative p-4 my-6 text-white bg-gray-800 rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto"
              data-aos="fade-left"
            >
              <h3 className="text-lg font-semibold lg:text-xl">Our Expertise</h3>
              <p className="mt-2 leading-6">
                With over 25 years of experience in the industry, our team of skilled professionals is capable of handling a wide range of clients. From passenger elevators to hospital elevators, capsule elevators, and goods elevators, we ensure top-quality services tailored to diverse needs.
              </p>
            </div>
            <div
              className="relative col-start-5 col-end-6 mr-7 md:mx-auto"
              data-aos="fade-in"
            >
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-blue-300 rounded-t-full bg-gradient-to-r from-main to-main"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-main bg-main rounded-full top-1/2"></div>
            </div>
          </div>

          {/* Core Values Section */}
          <div className="flex md:contents">
            <div
              className="relative col-start-5 col-end-6 mr-7 md:mx-auto"
              data-aos="fade-in"
            >
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-main"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-main rounded-full top-1/2"></div>
            </div>
            <div
              className="relative p-4 my-6 text-white bg-gray-800 rounded-xl col-start-6 col-end-10 mr-auto"
              data-aos="fade-right"
            >
              <h3 className="text-lg font-semibold lg:text-xl">Our Core Values</h3>
              <p className="mt-2 leading-6">
                At Rolex Elevators, we place great importance on safety, service, and affordability. We strive to deliver personalized solutions tailored to your specific needs, ensuring satisfaction and value for your investment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
