import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBuilding, FaUsers, FaTools, FaClock, FaPeopleCarry } from "react-icons/fa"; // Relevant icons
import image from '../assets/line-wave.svg';
import icon from '../assets/icon/arrow.png'
const features = [
  {
    title: "Products Installed",
    amount: "15,000+",
  },
  {
    title: "Service Centers",
    amount: "100+",
  },
  {
    title: "Satisfied Customers",
    amount: "12,500+",
  },
  {
    title: "Workforce",
    amount: "500+",
  },
  {
    title: "Years of Experience",
    amount: "25 Yrs+",
  },
  {
    title: "Inspection of Components",
    amount: "65+",
  },
];

const serviceFeatures = [
  {
    title: "High-Quality Elevators",
    icon: <FaBuilding className="text-blue-500 text-4xl" />,
    description: "We provide durable, reliable, and high-performance elevators for residential and commercial needs.",
  },
  {
    title: "Maintenance Services",
    icon: <FaTools className="text-green-500 text-4xl" />,
    description: "Comprehensive maintenance solutions to ensure smooth operations and minimize downtime.",
  },
  {
    title: "24x7 Support",
    icon: <FaClock className="text-yellow-500 text-4xl" />,
    description: "Round-the-clock support to address your queries and ensure hassle-free elevator services.",
  },
  {
    title: "Modern & Custom Designs",
    icon: <FaPeopleCarry className="text-purple-500 text-4xl" />,
    description: "Customizable designs that blend style and functionality for all types of buildings.",
  },
];

const FeaturedItem = ({ feature }) => {
  const { title, amount } = feature;
  return (
    <div
      className="bg-gray-800 shadow-lg rounded-xl px-4 py-2 flex flex-col items-center justify-center text-center h-full "
      data-aos="fade-up"
    >
      <h4 className="text-3xl sm:text-2xl text-blue-400 font-bold text-white">{amount}</h4>
      <h6 className="text-white font-medium mt-2">{title}</h6>
    </div>
  );
};


const ServiceCard = ({ service }) => {
  const { title, icon, description } = service;
  return (
    <div
      className="bg-white p-6 cursor-pointer border-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border hover:border-gray-300 flex flex-col items-center text-center"
      data-aos="zoom-in"
    >
      <div className="w-20 h-20 mb-4 flex items-center justify-center rounded-full bg-gray-100">
        {icon}
      </div>
      <h4 className="text-gray-800 text-lg font-semibold">{title}</h4>
      <p className="text-gray-600 mt-2 text-sm">{description}</p>
    </div>
  );
};

const WhyWeChoose = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <section className="py-8 sm:py-12 md:py-14 lg:py-16 bg-gray-50 text-black relative overflow-hidden z-10">
      {/* Background Shapes */}
      <div className="hidden lg:block absolute left-0 top-0 w-80 h-80 bg-main opacity-40 rounded-full -z-10"></div>
      <div className="hidden lg:block absolute right-0 bottom-0 w-80 h-80 bg-green-600 opacity-40 rounded-full -z-10" />

      <div className="max-w-7xl px-2 mx-auto">
        <div className="mb-10 ">
          <div className='flex items-center justify-center gap-2'>
            <h2>Why Rolex Elevators are the best?</h2>
            <img src={icon} alt="icons" className='w-10 h-10 object-cover text-main' />
          </div>
       
          <p className="sm:text-lg  lg:max-w-[50%] mx-auto font-normal text-gray-600 text-justify md:text-center">
            Experience innovation, reliability, and unparalleled customer service with our premium elevator solutions tailored for every need.
          </p>
        </div>


        {/* Service Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {serviceFeatures.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        {/* Stats Section */}
        {/* <div className="mt-12" data-aos="fade-up">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 justify-center">
            {features.map((feature, i) => (
              <div
                className="col-span-1"
                key={i}
                data-aos="zoom-in"
              >
                <FeaturedItem feature={feature} />
              </div>
            ))}
          </div>
        </div> */}



      </div>
    </section>
  );
};

export default WhyWeChoose;
