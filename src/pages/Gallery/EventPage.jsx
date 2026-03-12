import React, { useState, useEffect } from 'react';
import BreadCums from '../../Component/BreadCums';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';

import img1 from '../../assets/event/event1.jpeg';
import img2 from '../../assets/event/event2.jpeg';
import img3 from '../../assets/event/event3.jpeg';
import img4 from '../../assets/event/event4.jpeg';
import img5 from '../../assets/event/event5.jpeg';
import img6 from '../../assets/event/event6.jpeg';
import img7 from '../../assets/event/event7.jpeg';
import img8 from '../../assets/event/event8.jpeg';
import img9 from '../../assets/event/event9.jpeg';
import img10 from '../../assets/event/event10.jpeg';
import img11 from '../../assets/event/event11.jpeg';
import img12 from '../../assets/event/event12.jpeg';
import img13 from '../../assets/event/event13.jpeg';
import img14 from '../../assets/event/event14.jpeg';
import img15 from '../../assets/event/event15.jpeg';
import img16 from '../../assets/event/event16.jpeg';
import img17 from '../../assets/event/event17.jpeg';
import img18 from '../../assets/event/event18.jpeg';
import img19 from '../../assets/event/event19.jpeg';
import img20 from '../../assets/event/event20.jpeg';
import img21 from '../../assets/event/event25.jpeg';
import img22 from '../../assets/event/event22.jpeg';
import img23 from '../../assets/event/event23.jpeg';
import img24 from '../../assets/event/event24.jpeg';

const EventPage = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Gallery' },
    { label: 'Event' },
  ];

  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12,
    img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24,
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      {/* Breadcrumb */}
      <BreadCums headText="Our Happy Moment" items={breadcrumbItems} />

      {/* Event Section */}
      <div className="py-10 sm:py-12 md:py-14 lg:py-16 container px-10 bg-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md"
              data-aos="fade-up"
            >
              <img
                src={image}
                alt={`event ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110 cursor-pointer"
                onClick={() => openModal(index)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Full-Screen Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={closeModal}
        >
          <div
            className="relative max-w-5xl mx-auto"
            onClick={(e) => e.stopPropagation()} // Prevent closing on content click
          >
            <button
              className="absolute top-4 right-4 text-white text-3xl bg-main  rounded-full w-10 h-10 flex items-center justify-center"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={images[currentIndex]}
              alt={`event ${currentIndex + 1}`}
              className="w-full max-h-[80vh] object-contain"
            />
            <button
              className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl bg-main  rounded-full w-10 h-10 flex items-center justify-center"
              onClick={prevImage}
            >
              &#8592;
            </button>
            <button
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl bg-main  rounded-full w-10 h-10 flex items-center justify-center"
              onClick={nextImage}
            >
              &#8594;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventPage;
