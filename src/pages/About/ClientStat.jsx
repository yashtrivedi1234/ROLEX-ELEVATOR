import React, { useEffect } from "react";
import { FaBuilding, FaUserFriends, FaTasks, FaPeopleCarry } from "react-icons/fa";
import { MdOutlineElevator } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import bgimg from '../../assets/lifts.webp';

const stats = [
  {
    id: 1,
    title: "Elevators Installed",
    count: "15000",
    icon: <MdOutlineElevator className="text-[#fff] h-12 w-12 sm:h-16 sm:w-16" />,
  },
  {
    id: 2,
    title: "Satisfied Customers",
    count: "12500",
    icon: <FaUserFriends className="text-[#fff] h-12 w-12 sm:h-16 sm:w-16" />,
  },
  {
    id: 3,
    title: "Active Workforce",
    count: "500",
    icon: <FaPeopleCarry className="text-[#fff] h-12 w-12 sm:h-16 sm:w-16" />,
  },
  {
    id: 4,
    title: "Years of Experience",
    count: "25",
    icon: <FaBuilding className="text-[#fff] h-12 w-12 sm:h-16 sm:w-16" />,
  },
];

const ClientStats = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section
      className="relative py-[4rem] flex flex-col items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      {/* Darker Overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 z-10">
        {/* Stat Icons and Numbers */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-16 lg:gap-[8rem] justify-items-center">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="flex flex-col items-center text-center w-1/2 sm:w-auto mb-8 sm:mb-0"
              data-aos="fade-up"
              data-aos-delay={index * 200} // staggered animation
            >
              {/* Icon */}
              <div className="mb-4 text-main">{stat.icon}</div>

              {/* Count */}
              <h4 className="text-4xl sm:text-5xl font-extrabold text-main mb-1">
                {stat.count}+
              </h4>

              {/* Title */}
              <p className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wide">
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientStats;
