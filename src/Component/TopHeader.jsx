import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaPhoneAlt, FaMapMarkerAlt, FaCar, FaRegUser, FaChevronDown } from 'react-icons/fa';
import { IoIosLogOut } from 'react-icons/io';
import { MdMarkEmailRead } from "react-icons/md";

const TopHeader = () => {
    const [profileActive, setProfileActive] = useState(false);
    const profileRef = useRef(null);
    const isLoggedIn = false; // Update based on your authentication state
    const navigate = useNavigate();

    const handleLogout = async () => {
        if (res?.payload?.success) {
            navigate('/');
        }
        setProfileActive(false);
    };

    const handleClickOutside = (event) => {
        if (profileRef.current && !profileRef.current.contains(event.target)) {
            setProfileActive(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleProfileClick = () => {
        setProfileActive(false);
    };

    return (
        <header className="w-full mx-auto py-2 bg-gradient-to-r from-[#0d357a] via-[#35548f] to-[#0d357a] shadow-lg text-white relative z-50 rounded-b-3xl flex items-center justify-center">
            <div className="flex flex-wrap items-center justify-between sm:justify-center lg:justify-between font-special w-full px-4 md:w-[90%] mx-auto space-y-2 md:space-y-0  ">

                {/* Contact Us (Phone) */}
                <div className="flex items-center  group hover:cursor-pointer w-full sm:w-auto justify-center md:justify-start">
                    <div className="text-[#fff] px-2 sm:px-4 py-1 flex items-center gap-2 transform transition-transform duration-300 hover:scale-105">
                        <FaPhoneAlt className="w-5 h-5" />
                        <Link to="tel:9918467058" className="text-[1rem]  font-normal text-white hover:text-[#e8dcdc]" style={{ whiteSpace: 'nowrap' }}>
                            +91 99184 67058
                        </Link>
                    </div>
                    <div className="text-[#fff] px-2 sm:px-4 py-1 flex items-center gap-2 transform transition-transform duration-300 hover:scale-105">
                        <MdMarkEmailRead className="w-5 h-5" />
                        <Link to="mailto:info@codecrafter.co.in" className="text-[1rem]  font-normal text-white hover:text-[#e8dcdc]">
                            info@rolexelevator.in

                        </Link>
                    </div>
                </div>


                {/* Navigation Links */}
                <div className="flex lg:hidden items-center space-x-4 sm:space-x-6 w-full sm:w-auto justify-center md:justify-end ">
                    <Link
                        to="/client"
                        className="text-sm font-medium hover:text-secondary  lg:block xl:hidden "
                    >
                        Clients
                    </Link>


                    <Link
                        to="/contact"
                        className="text-sm  hover:text-secondary xl:hidden lg:block "
                    >
                        Contact Us
                    </Link>

                    <Link
                        to="/meet"
                        className="text-sm  hover:text-secondary xl:hidden lg:block "
                    >
                     Book Meeting
                    </Link>



                </div>

              <Link to={"/contact"} className='hidden lg:block'>
              <button className='px-2 py-1 border rounded-full'>Book Meeting</button>
              </Link>

            </div>
        </header>
    );
};

export default TopHeader;
