// Importing necessary dependencies
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";
import { faScrewdriverWrench, faSave, faToolbox, faCogs } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import lift from "../../assets/elevator2.jpg";

// Data for benefits
const benefits = [
  {
    icon: faScrewdriverWrench,
    title: "Ready-made",
    description:
      "Our all-inclusive, ready-made lift concept makes installation incredibly smooth and easy.",
  },
  {
    icon: faSave,
    title: "Space-saving",
    description:
      "Up to 70% of the total footprint of the lift is passenger space to optimize your use of the area.",
  },
  {
    icon: faToolbox,
    title: "Customizable",
    description:
      "Tailor the lift's appearance and functionality to suit your specific needs and preferences.",
  },
  {
    icon: faCogs,
    title: "Effortless Maintenance",
    description:
      "Designed for minimal upkeep, ensuring hassle-free maintenance and long-term reliability.",
  },
];

// BenefitCard Component
const BenefitCard = ({ benefit }) => (
  <div
    data-aos="fade-up"
    data-aos-duration="800"
    className="flex flex-col bg-[#444] text-white rounded-xl  shadow-2xl overflow-hidden transform hover:scale-105 transition-transform items-start py-4 hover:cursor-pointer border ease-in-out duration-500"
  >
    {/* Icon Section */}
    <div className="flex items-start justify-center py-2 bg-[#444] px-6 ">
      <FontAwesomeIcon icon={benefit.icon} className="text-4xl text-main" />
    </div>
    {/* Content Section */}
    <div className="px-6 py-2 flex flex-col items-start">
      <h4 className="text-2xl font-bold mb-3 text-[#fff]">{benefit.title}</h4>
      <p className="text-base opacity-90 leading-relaxed">{benefit.description}</p>
    </div>
  </div>
);

BenefitCard.propTypes = {
  benefit: PropTypes.object.isRequired,
};

// BenefitsSection Component
const BenefitsSection = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="bg-[#222222] lg:py-0 py-10 sm:py-12 md:py-14  text-white">
      <div className="flex flex-col lg:flex-row lg:gap-40 items-start mx-auto container lg:px-10 px-4 ">
        {/* Left Image */}
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="w-fit hidden md:block"
        >
          <img
            src={lift}
            alt="Lift"
            className="w-full h-[55rem] object-cover "
          />
        </div>

        {/* Right Content */}
        <div
          className="w-full lg:w-1/2 flex flex-col items-start lg:py-20 "
          data-aos="fade-left"
          data-aos-duration="1000"
        >
 
          <h2 className="text-3xl md:text-[70px] lg:text-[40px] font-bold mb-4">
          Benefits of Rolex Lift Elevators
							</h2>
          <p className="text-base md:text-lg opacity-80 leading-relaxed mb-10">
            Thanks to our smart and super compact lift concept, what you see is
            what you get. Our screw-driven machinery fits inside the lift shaft,
            making installation fast and easy.
          </p>

          {/* Card Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {benefits.map((benefit, index) => (
              <BenefitCard benefit={benefit} key={index} />
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default BenefitsSection;
