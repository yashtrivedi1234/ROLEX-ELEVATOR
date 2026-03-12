import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import { FaCogs, FaSave, FaToolbox } from "react-icons/fa";
import { FaScrewdriverWrench } from "react-icons/fa6";

// Updated benefits array
const benefits = [
  {
    icon: FaScrewdriverWrench,
    title: "Ready-made",
    description:
      "Our all-inclusive, ready-made lift concept makes installation incredibly smooth and easy.",
  },
  {
    icon: FaSave,
    title: "Space-saving",
    description:
      "Up to 70% of the total footprint of the lift is passenger space to optimize your use of the area.",
  },
  {
    icon: FaToolbox,
    title: "Customizable",
    description:
      "Tailor the lift's appearance and functionality to suit your specific needs and preferences.",
  },
  {
    icon: FaCogs,
    title: "Effortless Maintenance",
    description:
      "Designed for minimal upkeep, ensuring hassle-free maintenance and long-term reliability.",
  },
];

// ContentItem component updated to show icons instead of index
const ContentItem = ({ item }) => (
  <div
    data-aos="fade-up"
    className="bg-[#202020] shadow-xl rounded-xl flex flex-col justify-center items-center text-center px-6 py-4 h-full border border-gray-600"
  >
    <div className="w-20 h-20 rounded-full bg-main bg-opacity-90 flex items-center justify-center -translate-y-10">
      <item.icon className="text-4xl text-white" />
    </div>
    <h2 className="text-2xl font-medium text-white mt-0">{item.title}</h2>
    <p className="text-sm text-white opacity-75">{item.description}</p>
  </div>
);

const WorkProcess = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: true, // Trigger the animation only once
    });
  }, []);

  return (
    <section className="py-14 md:py-24 bg-[#222222] text-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col max-w-xl justify-center items-center text-center mx-auto mb-16">
          <h2 className="text-3xl font-bold md:text-[45px] mb-8">Benefits of Rolex Elevators</h2>
          <p className="text-lg opacity-80">
            Discover why Rolex Elevators is a trusted name in the elevator industry. Our commitment to safety, customer satisfaction, and timely service sets us apart.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-16 mt-16 lg:gap-y-0 lg:mt-12">
          {benefits.map((item, i) => (
            <div className="col-span-1" key={i}>
              <ContentItem item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
