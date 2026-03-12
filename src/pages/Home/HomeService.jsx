import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import p1 from '../../assets/background3.avif'
import "aos/dist/aos.css"; // Import AOS styles
import Button from "../../Component/Button";
import icon from '../../assets/icon/arrow.png'
import pattern from '../../assets/pattern/pattern1.png'


function ShapeOne() {
  return (
    <svg
      className="absolute bottom-0 left-0 -z-[1]"
      width="404"
      height="572"
      viewBox="0 0 404 572"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="118"
        cy="286"
        r="265.5"
        stroke="#004658"
        strokeOpacity="0.2"
        strokeWidth="41"
      />
    </svg>
  );
}

function ShapeTwo() {
  return (
    <svg
      className="absolute top-0 right-0 -z-[1]"
      width="269"
      height="479"
      viewBox="0 0 269 479"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="239.5"
        cy="239.5"
        r="239.5"
        fill="#0d357a"
        fillOpacity="0.25"
      />
    </svg>
  );
}




const HomeAbout = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Trigger animations only once
    });

    // Refresh AOS to trigger animations on mount
    AOS.refresh();
  }, []);

  return (
    <section className="overflow-x-hidden py-6 sm:py-8 lg:py-10 bg-gray-100 text-white relative z-[1]">
<div className="hidden lg:block">
      <ShapeOne/>
      <ShapeTwo />
      </div>
      <div className="max-w-7xl px-4 mx-auto flex flex-col lg:items-center items-start lg:justify-center justify-start  ">
        {/* Header Section */}
        <div data-aos="fade-up" className="lg:text-center text-start lg:mb-4 mb-4">
  
          <div className='flex lg:items-center items-start gap-2 lg:justify-center justify-start'>
            <h2>About Rolex Elevators</h2>
            <img src={icon} alt="icons" className='w-10 h-10 object-cover text-main' />
          </div>



          <p className="mt-2 text-lg sm:text-xl md:text-2xl text-gray-700 font-bold ">
            "Delivering Excellence in Elevation Since 1998- Where <span className="text-main font-semibold">Innovation</span>{" "}
            Meets Reliability"
          </p>
        </div>

        {/* Content Section */}
        <div className="text-black space-y-6 md:text-lg text-base leading-relaxed mb-4">
          <p data-aos="fade-up" data-aos-delay="200" className="text-justify lg:text-start">
            Welcome to{" "}
            <span className="font-bold text-main">Rolex Elevators</span>, the
            leading{" "}
            <span className="font-bold text-main">
              elevator manufacturer and installer
            </span>{" "}
            in Lucknow since 1997. With decades of expertise, we are committed
            to offering innovative vertical transportation solutions for both
            domestic and global markets.
          </p>

          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-black font-medium text-justify lg:text-center"
          >
            Our journey began with a vision
          Mr. Sarwar Sheikh, our
            founder, foresaw the need for vertical transportation. A seasoned
            Mechanical Engineer with over 35 years of experience, he initiated
            elevator production in 1997 at Surat, Gujarat. Today, we are
            synonymous with reliability, quality, and timely delivery.
          </p>

          <p
            data-aos="fade-up"
            data-aos-delay="600"
            className="text-black  text-justify lg:text-center mb-10"
          >
            From residential and commercial to industrial projects, our tailored
            elevator solutions ensure unmatched safety, efficiency, and customer
            satisfaction at every step.
          </p>
        </div>


        <Button text={"More About Us"}></Button>
      </div>
    </section>
  );
};

export default HomeAbout;
