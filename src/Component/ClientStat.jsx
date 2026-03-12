import React, { useEffect } from "react";
import { FaBuilding, FaCalendarAlt, FaTasks, FaArrowUp, FaHandshake } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import img from '../assets/line-wave.svg'


const stats = [
  {
    id: 1,
    title: "Showrooms Built",
    count: "25",
    icon: <FaBuilding className="text-main h-16 w-16" />,
    backgroundImage: "image",
  },
  {
    id: 2,
    title: "Years in Business",
    count: "10",
    icon: <FaCalendarAlt className="text-main h-16 w-16" />,
    backgroundImage: "image",
  },
  {
    id: 3,
    title: "Projects Completed",
    count: "500",
    icon: <FaTasks className="text-main h-16 w-16" />,
    backgroundImage: "image",
  },
  {
    id: 4,
    title: "Satisfied Clients",
    count: "1000",
    icon: <FaHandshake className="text-main h-16 w-16" />,
    backgroundImage: "image",
  },
];

const ClientStats = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // animations trigger only once
    });
  }, []);

  return (
    <section className="lg:py-4 bg-gradient-to-b from-gray-50 to-gray-200 relative">
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
      <div className="max-w-7xl  ">
        {/* Header */}
        <div className="flex flex-col items-start md:items-center" data-aos="fade-up">
          {/* <h2 className="text-center">Rolex Elevator Showroom</h2> */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-main mb-10">Our Achievements</h1>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 px-4">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="relative bg-white shadow-lg hover:shadow-xl p-6 rounded-bl-[4rem] rounded-tr-[4rem] overflow-hidden flex flex-col items-center transform hover:scale-105 transition-transform duration-300 ease-in-out"
              style={{
                backgroundImage: `url(${stat.backgroundImage})`,
                backgroundSize: 'auto 160px',
                backgroundPosition: 'top right',
                backgroundRepeat: 'no-repeat',
              }}
              data-aos="fade-up"
              data-aos-delay={index * 300} // delay for each card, one after another
            >
              {/* Icon */}
              <div className="mb-4 bg-blue-100 p-5 rounded-full relative z-10">
                {stat.icon}
              </div>

              {/* Count */}
              <h4 className="text-5xl font-bold text-main relative z-10">{`+${stat.count}`}</h4>

              {/* Title */}
              <p className="text-gray-600 mt-3 relative z-10 text-lg font-semibold">{stat.title}</p>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white to-transparent opacity-60 z-0 rounded-bl-[4rem]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientStats;
