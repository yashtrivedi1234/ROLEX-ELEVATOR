import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import bgimg from "../../assets/background/breadbg1.jpg";
import stat1 from "../../assets/stat/stat1.png";
import stat2 from "../../assets/stat/stat2.png";
import stat3 from "../../assets/stat/stat3.png";
import stat4 from "../../assets/stat/stat4.png";
import stat5 from "../../assets/stat/stat5.png";
import stat6 from "../../assets/stat/stat6.png";

const features = [
  {
    title: "Products Installed",
    amount: "15,000+",
    image: stat1,
  },
  {
    title: "Service Centers",
    amount: "100+",
    image: stat2,
  },
  {
    title: "Satisfied Customers",
    amount: "12,500+",
    image: stat3,
  },
  {
    title: "Workforce",
    amount: "500+",
    image: stat4,
  },
  {
    title: "Years of Experience",
    amount: "25 Yrs+",
    image: stat5,
  },
  {
    title: "Inspection of Components",
    amount: "65+",
    image: stat6,
  },
];

const StatsComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section
      className="relative py-10 "
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      {/* Darker Overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      <div className="relative  mx-auto z-10 max-w-7xl ">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6 text-center mx-auto max-w-7xl ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-3 w-40"
              data-aos="fade-up"
              data-aos-delay={index * 200} // staggered animation
            >
              {/* Image */}
              <div>
                <img src={feature.image} alt={feature.title} className="h-16 w-16 sm:h-20 sm:w-20 object-contain" />
              </div>

              {/* Amount */}
              <h4 className="text-xl sm:text-2xl font-extrabold text-white">
                {feature.amount}
              </h4>

              {/* Title */}
              <p className="text-sm sm:text-base font-semibold text-white uppercase tracking-wide">
                {feature.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsComponent;
