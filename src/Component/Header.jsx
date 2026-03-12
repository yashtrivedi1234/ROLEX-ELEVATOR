import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Logo/logorolex.jpg";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";


import { FiChevronDown, FiChevronUp, FiX, FiMenu } from "react-icons/fi";
import { FaHome, FaBlogger, FaPhoneAlt, FaImages, FaUsers, FaBuilding, FaChevronDown } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState("");
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [galleryDropdown, setGalleryDropdown] = useState(false);

  const toggleMenu = (menuName) => {
    setIsMenuOpen(!isMenuOpen)
  };

  return (
    <header className={`absolute z-30 w-full text-black  bg-[#fff] font-poppins `}>
      <nav className="flex items-center  justify-between  md:px-16 px-4 py-2  font-poppins w-full ">
        {/* Logo */}
        <div className="flex ">
          <Link to="/">
            <img src={logo} className="h-auto object-cover w-[10rem]" alt="Logo" />
          </Link>
          {/* <h1>Rolex Elevators</h1> */}
        </div>


        {/* Mobile Menu */}
        <>
          {/* Hamburger Button */}
          {/* <button onClick={toggleMenu} className="fixed top-4 left-4 z-50 bg-gray-900 text-white p-3 rounded-lg shadow-lg">
            <FiMenu size={24} />
          </button> */}

          {/* Sidebar */}
          <div
            className={`fixed block lg:hidden left-0 top-0 h-full w-72 bg-gradient-to-r from-[#0d357a] via-[#35548f] to-[#0d357a] text-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
              }`}
          >
            {/* Sidebar Header */}


            {/* Menu Items */}
            <div className="p-6 space-y-4 text-lg font-medium">
              <NavLink to="/" className="flex items-center gap-3 hover:text-teal-400 transition" onClick={toggleMenu}>
                <FaHome /> Home
              </NavLink>
              {/* <NavLink to="/blog" className="flex items-center gap-3 hover:text-teal-400 transition" onClick={toggleMenu}>
                <FaBlogger /> Blogs
              </NavLink> */}


              {/* About Us Dropdown */}
              <div className="border-t border-gray-700 pt-3">
                <button
                  onClick={() => setAboutDropdown(!aboutDropdown)}
                  className="flex items-center justify-between w-full hover:text-teal-400 transition"
                >
                  <span className="flex items-center gap-3">
                    <FaBuilding /> About Us
                  </span>
                  {aboutDropdown ? <FiChevronUp /> : <FiChevronDown />}
                </button>
                {aboutDropdown && (
                  <div className="ml-6 mt-2 space-y-2 text-gray-300">
                    <NavLink to="/about" className="block hover:text-teal-400" onClick={toggleMenu}>
                      Overview
                    </NavLink>
                    <a
                      href="/company_profile.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:text-teal-400"
                      onClick={toggleMenu}
                    >
                      Company Profile
                    </a>
                    <NavLink to="/chairman/message" className="block hover:text-teal-400" onClick={toggleMenu}>
                      Chairman's Message
                    </NavLink>
                    <NavLink to="/director/message" className="block hover:text-teal-400" onClick={toggleMenu}>
                      Managing Director's Message
                    </NavLink>
                  </div>
                )}
              </div>

              {/* Products */}
              <NavLink to="/product/passenger-lift" className="block hover:text-teal-400 transition" onClick={toggleMenu}>
                🚀 Passenger Lift
              </NavLink>
              <NavLink to="/product/hospital-lift" className="block hover:text-teal-400 transition" onClick={toggleMenu}>
                🏥 Hospital Lift
              </NavLink>
              <NavLink to="/product/home-lift" className="block hover:text-teal-400 transition" onClick={toggleMenu}>
                💪 Hydraulic Lift
              </NavLink>
              <NavLink to="/product/goods-lift" className="block hover:text-teal-400 transition" onClick={toggleMenu}>
                📦 Goods Lift
              </NavLink>

              {/* Gallery Dropdown */}
              <div className="border-t border-gray-700 pt-3">
                <button
                  onClick={() => setGalleryDropdown(!galleryDropdown)}
                  className="flex items-center justify-between w-full hover:text-teal-400 transition"
                >
                  <span className="flex items-center gap-3">
                    <FaImages /> Gallery
                  </span>
                  {galleryDropdown ? <FiChevronUp /> : <FiChevronDown />}
                </button>
                {galleryDropdown && (
                  <div className="ml-6 mt-2 space-y-2 text-gray-300">
                    <NavLink to="/event" className="block hover:text-teal-400" onClick={toggleMenu}>
                      📅 Events
                    </NavLink>
                    <NavLink to="/videos" className="block hover:text-teal-400" onClick={toggleMenu}>
                      🎥 Videos
                    </NavLink>
                  </div>
                )}
              </div>

              <NavLink to="/client" className="flex items-center gap-3 hover:text-teal-400 transition" onClick={toggleMenu}>
                <FaUsers /> Clients
              </NavLink>
              <NavLink to="/contact" className="flex items-center gap-3 hover:text-teal-400 transition" onClick={toggleMenu}>
                <FaPhoneAlt /> Contact Us
              </NavLink>
            </div>
          </div>
        </>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6 text-black font-medium  w-fit">
          <li>
            <Link to="/" className="text-2xl font-medium hover:text-secondary">
              <FaHome />
            </Link>
          </li>
          <li className="group relative">
            <button className="text-lg  hover:text-secondary flex items-center" style={{ whiteSpace: 'nowrap' }}>
              About Us <FaChevronDown className="ml-2  text-[0.7rem]" />
            </button>
            <ul className="absolute hidden group-hover:flex flex-col bg-[#fff] text-black py-2 pl-0 w-[15rem] pr-2 space-y-2 shadow-xl rounded-lg mt-0 transition-all duration-300 ease-in-out transform hover:scale-105 ">
              <li className="flex items-center w-full border-b border-black pl-4 pr-2 py-2 transition-all duration-300 hover:bg-gray-400 rounded-lg">
                <Link to="/about" className="hover:text-secondary blackspace-nowrap transition-all duration-200 ease-in-out font-myfont">
                  Overview
                </Link>
              </li>
              <li className="flex items-center w-full border-b border-black pl-4 pr-2 py-2 transition-all duration-300 hover:bg-gray-400 rounded-lg">
                <a
                  href="/company_profile.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:bg-gray-400"
                  onClick={toggleMenu}
                >
                  Company Profile
                </a>
              </li>
              <li className="flex items-center w-full border-b border-black pl-4 pr-2 py-2 transition-all duration-300 hover:bg-gray-400 rounded-lg">
                <Link to="/chairman/message" className="hover:text-secondary blackspace-nowrap transition-all duration-200 ease-in-out font-myfont">

                  Chairman's  Message
                </Link>
              </li>
              <li className="flex items-center w-full border-b border-black pl-4 pr-2 py-2 transition-all duration-300 hover:bg-gray-400 rounded-lg">
                <Link to="/director/message" className="hover:text-secondary blackspace-nowrap transition-all duration-200 ease-in-out font-myfont">
                  Managing Director's Message
                </Link>
              </li>


            </ul>



          </li>

          <li>
            <Link
              to="/product/passenger-lift"
              className="text-lg font-medium "
              style={{ whiteSpace: 'nowrap' }}
            >
              Passenger Lift
            </Link>
          </li>
          <li>
            <Link
              to="/product/hospital-lift"
              className="text-lg font-medium hover:text-secondary "
              style={{ whiteSpace: 'nowrap' }}
            >
              Hospital Lift
            </Link>
          </li>
          <li>
            <Link
              to="/product/home-lift"
              className="text-lg font-medium hover:text-secondary "
              style={{ whiteSpace: 'nowrap' }}
            >
              Hydraulic Lift
            </Link>
          </li>
          <li>
            <Link
              to="/product/goods-lift"
              className="text-lg font-medium hover:text-secondary "
              style={{ whiteSpace: 'nowrap' }}
            >
              Goods Lift
            </Link>
          </li>
          <li className="group relative">
            <button className="text-lg font-medium hover:text-secondary xl:flex items-center hidden ">
              Gallery <FaChevronDown className="ml-2  text-[0.7rem]" />
            </button>
            <ul className="absolute hidden group-hover:flex flex-col bg-[#fff] text-black py-2 pl-0 w-[15rem] pr-2 space-y-2 shadow-xl rounded-lg mt-0 transition-all duration-300 ease-in-out transform hover:scale-105 ">
              <li className="flex items-center w-full border-b border-black pl-4 pr-2 py-2 transition-all duration-300 hover:bg-gray-400 rounded-lg">
                <Link to="/event" className="hover:text-secondary blackspace-nowrap font-myfont">
                  EVENTS
                </Link>
              </li>
              <li className="flex items-center w-full border-b border-black pl-4 pr-2 py-2 transition-all duration-300 hover:bg-gray-400 rounded-lg">
                <Link to="/videos" className="hover:text-secondary blackspace-nowrap font-myfont">
                  VIDEOS
                </Link>
              </li>

            </ul>


          </li>
          <li>
            <Link
              to="/client"
              className="text-lg font-medium hover:text-secondary xl:block hidden "
            >
              Clients
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-lg  hover:text-secondary hidden xl:block "
            >
              Contact Us
            </Link>
          </li>
        </ul>

        <div className="block lg:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? <RxCross1 className="text-2xl font-bold z-50" /> : <RxHamburgerMenu className="text-2xl font-bold z-999" />}
          </button>
        </div>

        {/* <div className="flex justify-between items-center p-5 border-b border-gray-700">
              <span className="text-xl font-bold tracking-wider">📌 Menu</span>
              <button onClick={toggleMenu} className="text-gray-400 hover:text-white">
                <FiX size={24} />
              </button>
            </div> */}


      </nav>
    </header>
  );
};

export default Header;
