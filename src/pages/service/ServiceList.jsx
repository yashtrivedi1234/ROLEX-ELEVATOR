import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import image from "../../assets/service.jpg";

const ServiceList = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div>
    <div className="bg-[#121212] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-8">
        {/* Content Section */}
        <div className="flex-1" data-aos="fade-right">
          <h2 className="text-4xl font-bold mb-6">Rolex Elevator Platform Lifts</h2>
          <ul className="space-y-3 mb-6">
            <li>Platform sizes from 600 x 830 mm – 1100 x 1597 mm (w x d)</li>
            <li>Rated load: 300 kg (max 3 persons) – 500 kg (max 5 persons)</li>
            <li>Indoor or outdoor installation</li>
            <li>Always comes with a ready-made lift shaft</li>
            <li>No separate machine room, no lift pit</li>
            <li>Min headroom: 2300 mm with standard single-hinged doors</li>
            <li>Platform controls: hold-to-run*</li>
            <li>Landing controls: automatic drive</li>
          </ul>
          <p className="text-sm text-gray-400 mb-6">
            *According to European Standards. For countries outside the EU,
            automatic drive may be allowed.
          </p>
          <button className="bg-[#f05454] text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-[#d84545] transition-all">
            PLATFORM LIFTS BY Rolex Elevator <FaArrowRight />
          </button>
        </div>

        {/* Image Section */}
        <div className="flex-1" data-aos="fade-left">
          <img
            src={image}
            alt="Platform Lift"
            className="rounded-xl shadow-lg w-full"
          />
        </div>
      </div>

      {/* Decorative Border */}
      <div className="h-1 w-1/2 mx-auto bg-gradient-to-r from-[#f05454] to-[#3a7bd5] mt-8"></div>
    </div>
    <div className="bg-[#121212] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-8">
        {/* Content Section */}
        <div className="flex-1" data-aos="fade-right">
          <h2 className="text-4xl font-bold mb-6">Rolex Elevator Platform Lifts</h2>
          <ul className="space-y-3 mb-6">
            <li>Platform sizes from 600 x 830 mm – 1100 x 1597 mm (w x d)</li>
            <li>Rated load: 300 kg (max 3 persons) – 500 kg (max 5 persons)</li>
            <li>Indoor or outdoor installation</li>
            <li>Always comes with a ready-made lift shaft</li>
            <li>No separate machine room, no lift pit</li>
            <li>Min headroom: 2300 mm with standard single-hinged doors</li>
            <li>Platform controls: hold-to-run*</li>
            <li>Landing controls: automatic drive</li>
          </ul>
          <p className="text-sm text-gray-400 mb-6">
            *According to European Standards. For countries outside the EU,
            automatic drive may be allowed.
          </p>
          <button className="bg-[#f05454] text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-[#d84545] transition-all">
            PLATFORM LIFTS BY Rolex Elevator <FaArrowRight />
          </button>
        </div>

        {/* Image Section */}
        <div className="flex-1" data-aos="fade-left">
          <img
            src={image}
            alt="Platform Lift"
            className="rounded-xl shadow-lg w-full"
          />
        </div>
      </div>

      {/* Decorative Border */}
      <div className="h-1 w-1/2 mx-auto bg-gradient-to-r from-[#f05454] to-[#3a7bd5] mt-8"></div>
    </div>
    <div className="bg-[#121212] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-8">
        {/* Content Section */}
        <div className="flex-1" data-aos="fade-right">
          <h2 className="text-4xl font-bold mb-6">Rolex Elevator Platform Lifts</h2>
          <ul className="space-y-3 mb-6">
            <li>Platform sizes from 600 x 830 mm – 1100 x 1597 mm (w x d)</li>
            <li>Rated load: 300 kg (max 3 persons) – 500 kg (max 5 persons)</li>
            <li>Indoor or outdoor installation</li>
            <li>Always comes with a ready-made lift shaft</li>
            <li>No separate machine room, no lift pit</li>
            <li>Min headroom: 2300 mm with standard single-hinged doors</li>
            <li>Platform controls: hold-to-run*</li>
            <li>Landing controls: automatic drive</li>
          </ul>
          <p className="text-sm text-gray-400 mb-6">
            *According to European Standards. For countries outside the EU,
            automatic drive may be allowed.
          </p>
          <button className="bg-[#f05454] text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-[#d84545] transition-all">
            PLATFORM LIFTS BY Rolex Elevator <FaArrowRight />
          </button>
        </div>

        {/* Image Section */}
        <div className="flex-1" data-aos="fade-left">
          <img
            src={image}
            alt="Platform Lift"
            className="rounded-xl shadow-lg w-full"
          />
        </div>
      </div>

      {/* Decorative Border */}
      <div className="h-1 w-1/2 mx-auto bg-gradient-to-r from-[#f05454] to-[#3a7bd5] mt-8"></div>
    </div>
    </div>
  );
};

export default ServiceList;
