import React from 'react';
import BreadCums from '../../Component/BreadCums';

const MissionAndVision = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'About' },
    { label: 'Our Mission and Vision' },
  ];

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-gray-100 z-10">
      {/* Breadcrumb */}
      <BreadCums headText={"Our Mission and Vision"} items={breadcrumbItems} />

      {/* Content Section */}
      <div className="container py-10 sm:py-12 md:py-14 lg:py-16 px-6 lg:px-10 mx-auto flex flex-col gap-16">
        {/* Mission Section */}
        <div className="flex flex-col items-center gap-8">
          <div className="w-full text-center">
            <h2 className="text-2xl font-bold mb-4 text-main">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At <strong className="text-main">Rolex Elevators</strong>, our mission is to redefine vertical transportation by
              delivering cutting-edge elevator solutions. We are dedicated to providing safe, reliable, and energy-efficient
              systems that enhance user experience while meeting the highest industry standards.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              We strive to innovate continuously and ensure customer satisfaction by offering tailored solutions that
              cater to residential, commercial, and industrial needs with a focus on quality, safety, and sustainability.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="flex flex-col items-center gap-8">
          <div className="w-full text-center">
            <h2 className="text-2xl font-bold mb-4 text-main">Our Vision</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We envision a world where vertical mobility is seamless, accessible, and sustainable. As a leader in
              elevator manufacturing and installation, our goal is to set benchmarks in innovation, safety, and
              environmental responsibility, making every journey smooth and secure.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              By staying ahead of technological advancements and fostering long-term partnerships, we aim to
              revolutionize the elevator industry and become a globally recognized name synonymous with excellence.
            </p>
          </div>
        </div>

        {/* Safety Features Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6 text-main">Safety First</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            At <strong className="text-main">Rolex Elevators</strong>, safety is not an option; it’s a commitment. Our elevators are equipped
            with state-of-the-art safety features to ensure the well-being of every passenger.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-blue-600">Emergency Brake System</h3>
              <p className="text-gray-700">Ensures instant halting during malfunctions, preventing accidents.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-blue-600">Backup Power Supply</h3>
              <p className="text-gray-700">Automatic power backup for smooth operation during outages.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-blue-600">Overload Protection</h3>
              <p className="text-gray-700">Advanced sensors to prevent operation in case of overloading.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-blue-600">Fire Safety Integration</h3>
              <p className="text-gray-700">Equipped with fire-rated materials and emergency escape routes.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-blue-600">Anti-trap Technology</h3>
              <p className="text-gray-700">Ensures doors remain operable to prevent passengers from getting trapped.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-blue-600">Periodic Maintenance Alerts</h3>
              <p className="text-gray-700">Integrated system to monitor and notify maintenance schedules.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionAndVision;
