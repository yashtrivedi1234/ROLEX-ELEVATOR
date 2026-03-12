import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import icon from '../../assets/icon/arrow.png'
import { FaCheckCircle } from 'react-icons/fa'; // Imported icons
import Button from '../../Component/Button';

import img1 from '../../assets/About/feature/img1.png'
import img2 from '../../assets/About/feature/img2.png'
import img3 from '../../assets/About/feature/img3.png'
import img4 from '../../assets/About/feature/img4.png'

import background from '../../assets/background/pattern6.avif';


const RolexAbout = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: true,
        });

        const handleScroll = () => {
            AOS.refresh();
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='w-full '>
            <div className="relative overflow-hidden  bg-gray-100 z-10">
                <div
                    className="absolute inset-0 hidden lg:block"
                    style={{
                        backgroundImage: `url(${background})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: 0.8,
                        zIndex: -10,
                    }}
                ></div>
                {/* Main Content */}
                <div className="relative flex flex-col py-6 lg:py-10 lg:flex-row justify-center max-w-7xl items-start gap-12 lg:gap-20  mx-auto z-10 px-4">
                    {/* Left Side: Text Content */}
                    <div className="flex-1 z-10 md:px-2 rounded-lg transition-transform transform hover:scale-105" data-aos="fade-right">
                        <div className='flex flex-col gap-2'>
                            <div className="relative overflow-hidden">
                                {/* <h2 className="bg-transparent md:text-[1.5rem] text-[1rem]  text-main font-bold">About Rolex  Elevator </h2> */}
                            </div>

                            <div className='flex items-center gap-1'>
                                <h2 className='text-xl md:text-3xl lg:text-4xl'> Best  Elevator Company in Lucknow</h2>
                                <img src={icon} alt="icons" className='w-8 h-8 object-cover text-main' />
                            </div>
                        </div>
                        <p className="text-base text-black leading-relaxed text-justify mt-4">
                            Rolex is one of the most reliable companies, committed to delivering exceptional service. With extremely satisfied customers in India and Abroad, we pride ourselves on being the best in the elevator sector. We successfully deliver products on time. We are the trusted lift and elevator company in Lucknow, ensuring safety, quality, and superior service.
                        </p>
                        <p className="text-base text-black leading-relaxed text-justify mt-2">
                            It all began with a dream. Mr. Sarwar Sheikh, the promoter of Rolex, saw the need for vertical transportation much ahead of his time. Mr. Sheikh, a Mechanical Engineer with 35 years of experience, started commercial production of elevator manufacturing and installation in 1997 at Surat, Gujarat.
                        </p>
                        <p className="text-base text-black leading-relaxed text-justify mt-2">
                            Over the years, Rolex has established itself as a brand synonymous with quality and trust. Our commitment to innovation, coupled with our relentless focus on customer satisfaction, has helped us achieve numerous milestones in the elevator industry. Whether it’s residential buildings, commercial complexes, or industrial facilities, Rolex elevators are designed to deliver unmatched performance and reliability.
                        </p>




                        {/* Features Section */}
                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                            <div className="flex flex-col items-center text-center w-fit">

                                <img src={img1} alt="quality_support" className='w-20 h-20 object-cover' />
                                <p className="text-black">Best Quality Support</p>
                            </div>
                            <div className="flex flex-col items-center text-center w-fit">
                                <img src={img2} alt="quality_support" className='w-20 h-20 object-cover' />
                                <p className="text-black">100% Quality Design</p>
                            </div>
                            <div className="flex flex-col items-center text-center w-fit">
                                <img src={img3} alt="quality_support" className='w-20 h-20 object-cover' />
                                <p className="text-black">Professional Expertise</p>
                            </div>
                            <div className="flex flex-col items-center text-center w-fit">
                                <img src={img4} alt="quality_support" className='w-20 h-20 object-cover' />
                                <p className="text-black">Timely Deliveries</p>
                            </div>
                        </div>



                        <div className='mt-10'>
                            <Button text={"Contact Us"} />
                        </div>




                    </div>
                </div>
            </div>
        </div>
    );
};

export default RolexAbout;
