import React, { useEffect } from "react";
import Button from "./Button";
// import video from '../assets/rolex.mp4'
import video from "../assets/video.mp4";
import Aos from "aos";

const CallToAction = () => {
      useEffect(() => {
        Aos.init({
          duration: 2000,
          once: false,
        });
      }, []);
  return (
    <section className="relative lg:py-[4rem]  py-[3rem] w-full overflow-hidden bg-gradient-to-b from-gray-600 to-primary">
      {/* Background Video */}
      <video
        data-aos="fade-up"
        className="absolute opacity-25 top-0 left-0 h-full w-full object-cover"
        src={video}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Decorative Shapes */}
      <div className="w-[400px] h-[200px] bg-[#e1dbdb5e] bg-opacity-5 rounded-full -m-[100px] absolute left-0 top-0"></div>
      <div className="w-[400px] h-[200px] bg-[#e1dbdb5e] bg-opacity-5 rounded-full -m-[90px] absolute right-0 bottom-0"></div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto relative px-4 ">
        <div className="grid grid-cols-12 justify-center text-center text-white">
          <div className="col-span-12 lg:col-span-6 lg:col-start-4 ">
            <div className="">
              <h2 className="text-2xl md:text-[45px] leading-none font-bold mb-6 text-white">
                Elevate Your Experience!
              </h2>
              <p className="text-md lg:text-lg leading-6 mb-4 lg:mb-10 text-white max-w-1/2">
                Discover our luxurious and reliable elevator solutions, tailored to redefine comfort, safety, and style for your spaces.
              </p>
              <Button text={"Contact Us Today"} />
            </div>
          </div>
        </div>
      </div>



    </section>
  );
};

export default CallToAction;
