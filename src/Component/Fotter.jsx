import React from 'react';
import cclogo from '../assets/Logo/cclogo.png';
import { Link } from 'react-router-dom';
import { BsPhone } from 'react-icons/bs';
import { PiPhoneCall } from 'react-icons/pi';
import { FaChevronRight, FaMessage } from 'react-icons/fa6';
import { FaLocationArrow } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';

const Footer = () => {
  const supportLinks = [
    { path: "/privacy-policy", label: "Privacy & Policy" },
    { path: "/term-condition", label: "Terms & Condition" },
    { path: "/meet", label: "Book Meeting" },
    { path: "/career", label: "Career" },
  ];

  const popularScans = [
    { path: "passenger-lift", label: "Passenger Lift" },
    { path: "hospital-lift", label: "Hospital Lift" },
    { path: "home-lift", label: "Hydraulic Lift" },
    { path: "goods-lift", label: "Goods Lift" },


  ];

  const healthPackages = [
    { path: "/about", label: "About Us" },
    { path: "/client", label: "Client" },
    { path: "/profile", label: "Company Profile" },
    { path: "/contact", label: "Contact Us" },


  ];

  const contactInfo = [
    { icon: <MdMail size={18} />, text: "info@rolexelevator.in", link: "mailto:info@rolexelevator.in" },
    {
      icon: <BsPhone size={18} />,
      text: [
        { number: "+91 91510 29171", link: "tel:+919151029171" },
        { number: "99355 26529", link: "tel:+919935526529" },
        { number: "94150 06520", link: "tel:+919415006520" },
        { number: "99184 67058", link: "tel:+919918467058" }
      ]
    },
    {
      icon: <FaLocationArrow size={18} />,
      text: "D2/119, Rolex Tower, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh-226010",
      link: "https://www.google.co.in/maps/place/Rolex+Elevators+Pvt+Ltd/@26.850035,80.9484891,17z/data=!3m1!4b1!"
    }
  ];


  return (
    <div>
      <section className="py-6 bg-[#0c0202]">
        <div className="max-w-7xl px-4 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 py-8 border-b border-gray-700">
            <div className='w-full'>
              <h6 className="text-xl font-semibold text-white mb-4">Support</h6>
              <ul className="space-y-2">
                {supportLinks.map((item, index) => (
                  <li key={index} className="flex items-center gap-1">
                    <FaChevronRight size={14} className="text-gray-400" />
                    <Link to={item.path} className="text-base text-gray-400 hover:text-main">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full">
              <h6 className="text-xl font-semibold text-white mb-4">Our Products</h6>
              <ul className="space-y-2">
                {popularScans.map((scan, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <FaChevronRight size={14} className="text-gray-400" />
                    <Link to={`/product/${scan?.path}`} className="text-base text-gray-400 hover:text-main">{scan.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className='w-full'>
              <h6 className="text-xl font-semibold text-white mb-4">Quick Link</h6>
              <ul className="space-y-2">
                {healthPackages.map((pkg, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <FaChevronRight size={14} className="text-gray-400" />
                    <Link to={`${pkg.path}`} className="text-base text-gray-400 hover:text-main">{pkg?.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className='w-full'>
              <h6 className="text-xl font-semibold text-white mb-4">Get In Touch</h6>
              <ul className="space-y-3">
                {contactInfo.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-white">
                    {item.icon}
                    {Array.isArray(item.text) ? (
                      <span>
                        {item.text.map((phone, i) => (
                          <React.Fragment key={i}>
                            <a
                              href={phone.link}
                              className="text-base text-gray-400 hover:text-main"
                            >
                              {phone.number}
                            </a>
                            {i !== item.text.length - 1 && ", "}
                          </React.Fragment>
                        ))}
                      </span>
                    ) : (
                      <a
                        href={item.link}
                        target={item.link.startsWith("http") ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className="text-base text-gray-400 hover:text-main"
                      >
                        {item.text}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>


          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center">
            <p className="text-sm text-white text-center sm:text-left">Copyright © 2025 <span className="font-semibold">Rolex Elevators</span> || All Rights Reserved || </p>
            <a href="https://www.codecrafter.co.in/" target="_blank" rel="noopener noreferrer" className="flex items-center text-base text-gray-400 hover:text-main">
              <span className='ml-1 text-white'> Developed By:</span>
              <img src={cclogo} alt="Code Crafter Web Solutions" className="w-32 h-auto object-contain ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;