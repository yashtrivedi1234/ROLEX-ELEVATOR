import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import ElevatorsSection from '../../Component/ServiceCard';
import img1 from '../../assets/sectionservice.jpg';
import img2 from '../../assets/servicesection1.webp';
import img3 from '../../assets/servicesection3.jpg';

const ServiceSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      once: true,     // Whether animation should happen only once
    });
  }, []);

  return (
    <div>
      <ElevatorsSection img={img1} index={0} data-aos="fade-up" />
      <ElevatorsSection img={img2} index={1} data-aos="fade-left" />
      <ElevatorsSection img={img3} index={2} data-aos="fade-right" />
    </div>
  );
};

export default ServiceSection;
