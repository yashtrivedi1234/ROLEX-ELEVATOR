import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import pattern from '../../assets/pattern/pattern5.jpg'
import image from '../../assets/rolex/rolex.jpeg'
import image1 from '../../assets/rolex/rolex_about2.jpg'
import image2 from '../../assets/rolex/rolex_about3.jpg'
import { Link, useNavigate } from 'react-router-dom';
import icon from '../../assets/icon/arrow.png'


const RolexAbout = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });

        const handleScroll = () => {
            AOS.refresh();
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navigate = useNavigate()

    return (
        <section className="relative  z-10 py-10 sm:py-12 md:py-14 lg:py-16 bg-gray-100">
      
            <div>
                <div className="relative flex flex-col lg:flex-row justify-items-start gap-[2rem]  max-w-7xl px-4 mx-auto">
                <div
                className="absolute inset-0 "
                style={{
                    backgroundImage: `url(${pattern})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.6,
                    zIndex: -10,
                }}
            ></div>

                    <div className="flex-1 z-10 space-y-6 lg:space-y-6 lg:flex-grow" data-aos="fade-right">
                        <div className='flex flex-col gap-1'>
                            <div className='flex items-center gap-2'>
                                <h2>About Rolex Elevators</h2>
                                <img src={icon} alt="icons" className='w-10 h-10 object-cover text-main' />
                            </div>

                            <h1 className="font-bold text-gray-800">
                                Delivering Excellence in Elevation
                            </h1>
                        </div>
                        <div className=" space-y-8 md:text-lg text-base border border-red-500">
                            <p data-aos="fade-up" data-aos-delay="200">
                                Welcome to{" "}
                                <span className="font-bold text-main">Rolex Elevators</span>, the
                                leading{" "}
                                <span className="font-bold text-main">
                                    Elevator manufacturer and installer
                                </span>{" "}
                                in Lucknow since 1998. With decades of expertise, we are committed
                                to offering innovative vertical transportation solutions for both
                                domestic and global markets.
                            </p>

                            <p
                                data-aos="fade-up"
                                data-aos-delay="400"
                                className="font-medium text-justify lg:text-center"
                            >
                                Our journey began with a vision
                                      Mr. Sarwar Sheikh, our
                                founder, foresaw the need for vertical transportation. A seasoned
                                Mechanical Engineer with over 35 years of experience, he initiated
                                elevator production in 1998 at Surat, Gujarat. Today, we are
                                synonymous with reliability, quality, and timely delivery.
                            </p>

                            <p
                                data-aos="fade-up"
                                data-aos-delay="600"
                                className="text-justify lg:text-center"
                            >
                                From residential and commercial to industrial projects, our tailored
                                elevator solutions ensure unmatched safety, efficiency, and customer
                                satisfaction at every step.
                            </p>
                        </div>
                        {/* <Button text={"Know More"} url="/about/dr-priyanka" /> */}
                    </div>

                    <div className="w-full lg:w-1/2 ">
                        <div className="flex justify-center">
                            <div className='max-w-[30rem] w-full aspect-w-4 aspect-h-3 relative sm:mb-5 md:mb-0 sm:mr-16 md:mr-0 lg:mr-20 ' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="800">
                                <img src={image} className='w-full h-full drop-shadow-[-3px_4px_4px_#808080] relative z-[10]' alt="Main visual" />
                                <img src={image2} alt="Supplementary image" className='w-[60%] z-[20] h-auto hidden lg:block absolute drop-shadow-[0px_5px_6px_#808080] bottom-[-100px] right-[-100px]' />
                                {/* <img src={image2} alt="Supplementary image" className='w-[60%] z-[20] h-auto hidden lg:block absolute drop-shadow-[0px_5px_6px_#808080] bottom-[-100px] left-[0px]' /> */}
                                {/* <img src={"shape1"} alt="Decorative shape 1" className='w-[28%] h-auto hidden lg:block absolute top-[85px] right-[-80px]' /> */}
                                {/* <img src={"shape2"} alt="Decorative shape 2" className='w-[26%] h-auto hidden lg:block absolute bottom-[-92px] right-[140px]' /> */}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default RolexAbout;
