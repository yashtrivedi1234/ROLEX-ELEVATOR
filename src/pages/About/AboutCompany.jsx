import React from "react";

const AboutCompany = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl">
        {/* Left Side Image */}
        <div className="relative">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://via.placeholder.com/600x800" // Replace with actual image URL
              alt="Elevator"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Right Side Content */}
        <div>
          <h2 className="text-4xl font-bold text-red-600 mb-4">
            Welcome To Rolex Elevator in Lucknow
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4 text-justify lg:text-center">
            We adhere to ISO 9001 : 2015. We manufacture, install, and maintain
            all types of passenger elevators. We focus purely on safe passenger
            elevators. Our Elevator Installations have been safely running without
            any complaints or posing any hazards in various locations.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify lg:text-center">
            We specialize in the manufacture and installation of passenger elevators
            for any type of structure for any number of floors greater than 2.
          </p>
          <ul className="list-disc pl-5 text-gray-700 text-lg space-y-4">
            <li>
              <strong>Rolex Elevator Service Department</strong> offers preventive
              maintenance programs for different variants of elevators.
            </li>
            <li>
              Rolex Elevator provides scientific methods of maintaining elevators
              and strict quality checks for users of our elevator products.
            </li>
            <li>
              Rolex Elevator has realized through our experience and professional
              work that delays in civil and electric work for the vertical transport
              industry can be minimized in the elevator shaft.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
