import Aos from "aos";
import React, { useEffect } from "react";
import video from "../../assets/video.mp4";
import { Link } from "react-router-dom";
import Button from "../../Component/Button";

const HeroSection = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: false,
    });
  }, []);

  return (
    <section className="relative md:h-[100vh]  h-[60vh] w-full overflow-hidden bg-gradient-to-b from-gray-600 to-primary ">
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Center Content */}
      
      {/* <div
        data-aos="fade-up"
        className="relative z-10 flex flex-col items-center justify-center h-full text-center"
      >
        <h1 className="text-3xl md:text-3xl font-bold text-white">
          Welcome to Rolex Elevator
        </h1>


        <h1 className="text-xl md:text-4xl font-bold text-white mt-4">
          <span className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-white animate-typing text-blue">
           Uttar Pradesh's 1st Lift Showroom
          </span>
        </h1>



        <div className="pt-4">
        <Button className="text-white"/>
        </div>
     
      </div>  */}

      {/* Typing Effect CSS */}
      <style>
        {`
          @keyframes typing {
            0% { width: 0 }
            50% { width: 100% }
            100% { width: 0 }
          }
          @keyframes blink {
            50% { border-color: transparent }
          }
          .animate-typing {
            display: inline-block;
            white-space: nowrap;
            overflow: hidden;
            animation: typing 10s steps(30, end) infinite, blink 0.6s step-end infinite;
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
