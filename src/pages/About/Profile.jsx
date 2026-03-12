import React, { useEffect } from "react";
import background from "../../assets/backgroundlift.jpg";
import icon from "../../assets/icon/arrow.png";
import pattern from '../../assets/pattern/pattern8.jpg';
import AOS from "aos";
import "aos/dist/aos.css";
import img from '../../assets/background/pattern23.jpg'
import CProfile from "./CProfile";
import bgimg from '../../assets/breadbg.png'
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const items = [
  {
    title: "Our Beginnings",
    description:
      "We at Rolex Elevators are proud to offer our services as one of the leading providers of elevators in India. Since our establishment in 1998, a company that created history was founded by Mr. Sarwar Sheikh. Our first lift was installed in Lekhraj Khajana, Lucknow, marking the beginning of a journey dedicated to quality and reliability.",
  },
  {
    title: "Our Achievements",
    description:
      "Rolex is one of the most reliable companies, committed to delivering exceptional service. With extremely satisfied customers in India and abroad, we have successfully installed more than 15,000 elevators in Uttar Pradesh, established 25+ branches, conducted 65+ inspections of components, and served over 12,500 satisfied customers with a 500+ active workforce.",
  },
  {
    title: "Our Expertise",
    description:
      "With over 25 years of experience in the industry, our team of skilled professionals is capable of handling a wide range of clients. From passenger elevators to hospital elevators, capsule elevators, and goods elevators, we ensure top-quality services tailored to diverse needs.",
  },
  {
    title: "Our Core Values",
    description:
      "At Rolex Elevators, we place great importance on safety, service, and affordability. We strive to deliver personalized solutions tailored to your specific needs, ensuring satisfaction and value for your investment.",
  },
];

const Profile = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh(); // Ensures AOS detects the elements correctly
  }, []);

  const items = [
    { label: 'Home', href: '/' },
    { label: 'About' }     
];

  return (
    <section >
      <div
        className="relative flex flex-col items-center justify-center py-16 lg:pt-[5rem] lg:pb-[5rem] bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${bgimg})` }} // Background image
        data-aos="fade-in" // Add AOS effect here
      >
             {/* Heading */}
      <h1 className="text-white text-center relative z-20 sora-600 px-4 mb-4 font-bold text-4xl" data-aos="fade-up">
        {"About Rolex Elevators"}
      </h1>
        {/* Breadcrumb navigation */}
        <nav className="flex items-center relative z-20 space-x-1 px-4 text-gray-300 text-sm lg:text-base">
          {items?.map((item, index) => (
            <React.Fragment key={index}>
              {index > 0 && (
                <span className="text-white">
                  <MdKeyboardArrowRight className="text-lg lg:text-xl mt-[0.2rem]" />
                </span>
              )}
              {item.href ? (
                <Link
                  to={item.href}
                  className="hover:text-white transition-colors"
                  data-aos="fade-left" // Add AOS effect here
                  data-aos-delay={index * 100} // Stagger effects
                >
                  {item.label}
                </Link>
              ) : (
                <span className="font-semibold text-white" data-aos="fade-right">
                  {item.label}
                </span>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
      <CProfile />
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.6,
          zIndex: -10,
        }}
      ></div>
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div> */}

      {/* <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">

        <div className="flex items-center justify-center gap-2 mb-8">
          <h2 className="text-3xl font-bold text-white md:text-[40px] text-shadow-lg">
            Elevating Excellence Since 1998
          </h2>
          <img src={icon} alt="icon" className="w-10 h-10 object-cover transform scale-110" />
        </div>

 
        <div>
          {items.map((item, index) => (
            <div key={index} data-aos="fade-up" className="w-full flex justify-center">
              <div className={`flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden px-2 py-2 mb-8 max-w-2xl mx-auto transform transition-transform duration-300 ${index % 2 !== 0 ? "md:translate-x-[20rem]" : "md:-translate-x-[20rem]"}`}>
            
                <div className="md:w-1/2 w-full text-center md:text-left px-6 flex flex-col justify-center relative z-10">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url(${pattern})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      opacity: 2,
                      zIndex: -10,
                    }}
                  ></div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-lg text-gray-600 mb-4">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}


    </section>
  );
};

export default Profile;
