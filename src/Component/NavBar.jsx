import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { IoMdArrowDropdown } from 'react-icons/io';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from "../assets/RolexNew.png";
import { HiChevronDown } from 'react-icons/hi2';
import { FaHome } from 'react-icons/fa';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const location = useLocation();
  const menuRef = useRef();
  const dropdownRef = useRef();

  const webServices = [
    { name: 'Web Design', path: '/service/webdesign' },
    { name: 'Web Development', path: '/service/webdevelopment' },
    { name: 'Web Maintenance', path: '/service/webmaintenance' },
    { name: 'Web Redesign', path: '/service/webredesign' },
    { name: 'Web/Vps Hosting', path: '/service/webvpshosting' },
  ];

  const aboutOptions = [
    { name: 'Code Crafter', path: '/about/code-crafters' },
    { name: 'Our Mission & Vision', path: '/about/mission-vision' },
    { name: 'Our Team', path: '/about/team' },
  ];

  const mobileServices = [
    { name: 'Android Development', path: '/service/androiddevelopment' },
    { name: 'iOS Development', path: '/service/iosdevelopment' },
    { name: 'Ecommerce', path: '/service/ecommerceapp' },
    { name: 'Business App', path: '/service/businessapp' },
  ];

  const customSoftware = [
    { name: 'Real Estate Application Management Software', path: '/service/realestatesoftware' },
    { name: 'College Management Software', path: '/service/collegemanagementsoftware' },
    { name: 'HR Management Software', path: '/service/hrmanagementsoftware' },
    { name: 'Hospital Management Software', path: '/service/hospitalmanagementsoftware' },
    { name: 'Clinic Management Software', path: '/service/clinicmanagementsoftware' },
    { name: 'Small Business Management Software', path: '/service/smallbusinessmanagementsoftware' },
    { name: 'CRM Software Management', path: '/service/crmsoftwaremanagement' }
  ];

  const digitalMarketing = [
    { name: 'SEO (Google Profile Management)', path: '/service/seogoogleprofileManagement' },
    { name: 'Social Media Marketing', path: '/service/socialmediamarketing' },
    { name: 'Graphic Design', path: '/service/graphicdesign' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleMobileDropdown = (dropdown) => {
    setMobileDropdown(mobileDropdown === dropdown ? null : dropdown);
  };

  const renderDropdown = (items) => (
    <div className="absolute left-0 bg-white shadow-lg text-[0.9rem] rounded-lg w-64 py-2 z-50 border border-gray-300">
      {items.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className="block px-4 py-2 hover:bg-gray-100 transition-colors"
          onClick={() => setActiveDropdown(null)}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-[#00072c] opacity-70 z-40" onClick={() => setIsOpen(false)}></div>}

      <header className="bg-white text-gray-900 px-4 sticky top-0 w-full font-[500] shadow-lg z-50 flex items-center justify-center font-special">
        <div className="relative w-full flex justify-between md:px-10 px-8 items-center py-2">
          <Link to="/">
            <img src={logo} alt="Logo" className='w-[15rem] lg:w-[17rem] h-auto object-cover' />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden relative lg:flex p-8 lg:text-[1rem] text-black text-[0.8rem]  xl:text-[1.2rem] items-center px-0 lg:justify-around lg:gap-4">
            <div className='flex items-center justify-center gap-2'>
              <Link to="/" className={`relative transition-all duration-300 hover:text-primary text-black ${location.pathname === '/' ? 'text-primary' : ''}`}>
                <FaHome className='text-[#004658] text-2xl' />
              </Link>
            </div>

            {/* Desktop Dropdowns */}
            <div className="relative" onMouseEnter={() => setActiveDropdown('about')} onMouseLeave={() => setActiveDropdown(null)}>
              <button className="flex items-center gap-1 transition-all duration-300 hover:text-primary">
                About <HiChevronDown />
              </button>
              {activeDropdown === 'about' && renderDropdown(aboutOptions)}
            </div>

            <div className="relative" onMouseEnter={() => setActiveDropdown('webServices')} onMouseLeave={() => setActiveDropdown(null)}>
              <button className="flex items-center gap-1 transition-all duration-300 hover:text-primary" style={{ whiteSpace: 'nowrap' }} >
                Web Services <HiChevronDown />
              </button>
              {activeDropdown === 'webServices' && renderDropdown(webServices)}
            </div>

            <div className="relative" onMouseEnter={() => setActiveDropdown('mobileServices')} onMouseLeave={() => setActiveDropdown(null)}>
              <button className="flex items-center gap-1 transition-all duration-300 hover:text-primary" style={{ whiteSpace: 'nowrap' }}>
                Mobile Services <HiChevronDown />
              </button>
              {activeDropdown === 'mobileServices' && renderDropdown(mobileServices)}
            </div>

            <div className="relative" onMouseEnter={() => setActiveDropdown('customSoftware')} onMouseLeave={() => setActiveDropdown(null)}>
              <button className="flex items-center gap-1 transition-all duration-300 hover:text-primary" style={{ whiteSpace: 'nowrap' }}>
                Custom Software <HiChevronDown />
              </button>
              {activeDropdown === 'customSoftware' && renderDropdown(customSoftware)}
            </div>

            <div className="relative" onMouseEnter={() => setActiveDropdown('digitalMarketing')} onMouseLeave={() => setActiveDropdown(null)}>
              <button className="flex items-center gap-1 transition-all duration-300 hover:text-primary" style={{ whiteSpace: 'nowrap' }}>
                Digital Marketing <HiChevronDown />
              </button>
              {activeDropdown === 'digitalMarketing' && renderDropdown(digitalMarketing)}
            </div>

            <Link to="/contact" className="relative transition-all duration-300 hover:text-primary text-black" style={{ whiteSpace: 'nowrap' }}>
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={toggleMenu}>
              <FiMenu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Sidebar Menu */}
        <div
          className={`${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } fixed left-0 top-0 h-full w-64 bg-white z-50 shadow-lg transition-transform duration-300 ease-in-out`}
        >
          <div className="flex justify-between items-center p-5 border-b">
            <span className="text-lg font-semibold">Menu</span>
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              <FiX className="w-8 h-8" />
            </button>
          </div>

          <div className="p-6 space-y-6 text-lg font-medium text-gray-700">
            <NavLink to="/" className="block hover:text-teal-600" onClick={toggleMenu}>
              Home
            </NavLink>


            {/* Mobile Dropdowns */}
            <div>
            <button className="flex items-center gap-1 transition-all duration-300 hover:text-primary" onClick={() => toggleMobileDropdown('about')} > 
                About <HiChevronDown />
              </button>
              {mobileDropdown === 'about' && (
                <div className="space-y-2 pl-4">
                  {aboutOptions.map((item) => (
                    <Link key={item.name} to={item.path} className="block hover:text-teal-600" onClick={toggleMenu}>
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button className="flex items-center gap-1 transition-all duration-300 hover:text-primary" onClick={() => toggleMobileDropdown('webServices')} >
                Web Services <HiChevronDown />
              </button>
              {mobileDropdown === 'webServices' && (
                <div className="space-y-2 pl-4">
                  {webServices.map((item) => (
                    <Link key={item.name} to={item.path} className="block hover:text-teal-600" onClick={toggleMenu}>
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button className="flex items-center gap-1 transition-all duration-300 hover:text-primary" onClick={() => toggleMobileDropdown('mobileServices')}>
                Mobile Services <HiChevronDown />
              </button>
              {mobileDropdown === 'mobileServices' && (
                <div className="space-y-2 pl-4">
                  {mobileServices.map((item) => (
                    <Link key={item.name} to={item.path} className="block hover:text-teal-600" onClick={toggleMenu}>
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button className="flex items-center gap-1 transition-all duration-300 hover:text-primary" onClick={() => toggleMobileDropdown('customSoftware')}>
                Custom Software <HiChevronDown />
              </button>
              {mobileDropdown === 'customSoftware' && (
                <div className="space-y-2 pl-4">
                  {customSoftware.map((item) => (
                    <Link key={item.name} to={item.path} className="block hover:text-teal-600" onClick={toggleMenu}>
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button className="flex items-center gap-1 transition-all duration-300 hover:text-primary" onClick={() => toggleMobileDropdown('digitalMarketing')}>
                Digital Marketing <HiChevronDown />
              </button>
              {mobileDropdown === 'digitalMarketing' && (
                <div className="space-y-2 pl-4">
                  {digitalMarketing.map((item) => (
                    <Link key={item.name} to={item.path} className="block hover:text-teal-600" onClick={toggleMenu}>
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/contact" className="block hover:text-teal-600" onClick={toggleMenu}>
              Contact Us
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
