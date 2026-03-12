import React, { useEffect, useState } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom'
import { IoIosLink, IoMdArrowBack } from "react-icons/io";
import backendCertificate from '../../assets/About/achieve1.jpeg'
import fullStackCertificate from '../../assets/About/achieve1.jpeg'
import hostingerMail from '../../assets/About/achieve1.jpeg'
import { FaReact, FaNodeJs, FaGithub, FaBuilding, FaHandHoldingHeart } from "react-icons/fa";
import { SiTailwindcss, SiMui, SiExpress, SiDaisyui, SiRedux, SiMongodb, SiReact } from "react-icons/si";
import { GoDotFill } from "react-icons/go";

const Profile = () => {

    const [backActive, setBackActive] = useState(false)
    const [fullActive, setFullActive] = useState(false)
    const [hostingerActive, setHostingerActive] = useState(false)

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div >
            <div className={`flex flex-col ${backActive ? "block" : "hidden"} items-center justify-center p-1 fixed h-[100vh] top-0 z-[500] bg-[#fff] w-[100%]`}>
                <div className='md:w-[70vw] lg:w-[55%] w-full bg-[#fff]'>
                    <div onClick={() => setBackActive(false)} className='flex pl-4 p-1 cursor-pointer items-center gap-2 font-semibold justify-start text-main '><IoMdArrowBack />Back</div>
                </div>
                <img src={"backendCertificate"} alt="" className=' md:w-[70vw] lg:w-[55%]' />
            </div >
            <div className={`flex flex-col ${fullActive ? "block" : "hidden"} items-center justify-center p-1 fixed h-[100vh] top-0 z-[500] bg-[#fff] w-[100%]`}>
                <div className='md:w-[70vw] lg:w-[55%] w-full bg-[#282828]'>
                    <div onClick={() => setFullActive(false)} className='flex pl-4 p-1 cursor-pointer items-center gap-2 font-semibold justify-start text-main '><IoMdArrowBack />Back</div>
                </div>
                <img src={fullStackCertificate} alt="" className=' md:w-[70vw] lg:w-[55%]' />
            </div >
            <div className={`flex flex-col ${hostingerActive ? "block" : "hidden"} items-center justify-center p-1 fixed h-[100vh] top-0 z-[500] bg-[#fff] w-[100%]`}>
                <div className='md:w-[70vw] lg:w-[55%] w-full bg-[#282828]'>
                    <div onClick={() => setHostingerActive(false)} className='flex pl-4 p-1 cursor-pointer items-center gap-2 font-semibold justify-start text-main '><IoMdArrowBack />Back</div>
                </div>
                <img src={hostingerMail} alt="" className=' rounded-md overflow-hidden md:w-[70vw] lg:w-[55%]' />
            </div >
            <div className='flex flex-col  items-center justify-center w-full gap-3 p-2 py-10 bg-[#fff] backdrop-blur-md lg:gap-20 lg:flex-row lg:items-start '>

                <div className='lg:max-w-[30rem] max-w-[40rem]'>
                    <div data-aos="fade-up" className='flex items-center justify-start gap-2'>
                        <p className='font-semibold btn-shine tracking-widest text-[#1f1f1f]'>ABOUT ROLEX ELEVATOR </p>
                        <div className='w-20 h-[0.85px] bg-[#286de5]'></div>
                    </div>
                    <p data-aos="fade-up" className='text-black text-[1.8rem] tracking-wide font-poppins font-semibold uppercase'>CHECK OUR STORY</p>

                    <div>
                        <div data-aos="fade-up" className='text-black'>
                            <p className='font-semibold btn-shine text-black text-[1.6rem] tracking-wide mb-2 mt-6' data-aos="fade-up">Summary</p>
                            <div className='relative flex flex-col gap-3 pb-3 pl-6 ml-2 border-l-[1.6px] border-[#808080c1] rounded-t-lg'>
                                <div className='w-4 absolute left-[-8.5px] top-[0.5px] h-4 rounded-full bg-[#286de5]'></div>
                                <h3 className='text-[1.2rem] font-semibold text-main ' data-aos="fade-up">ROLEX ELEVATORS</h3>
                                <p className='text-[0.98rem] leading-[22px] italic tracking-wide font-200' data-aos="fade-up">
                                    Rolex Elevators is a premier provider of advanced elevator solutions, specializing in high-performance and energy-efficient lift systems. We are committed to delivering top-notch quality, innovation, and safety in every installation and service we offer.</p>
                                <ul data-aos="fade-up" className='text-[0.92rem] tracking-wide list-disc pl-8 flex flex-col gap-2 mt-1'>
                                    <li data-aos="fade-up" className='font-[300]'>
                                        +91 9876543210
                                    </li>
                                    <li data-aos="fade-up" className='font-300'>
                                        contact@rolexelevators.com
                                    </li>
                                    <li data-aos="fade-up" className='font-300'>Rolex Tower, D4-119 Rolex Elevators, Lift Showroom- Vibhuti Khand
                                    Lucknow, Uttar Pradesh Pincode - 221610</li>
                                </ul>
                            </div>
                        </div>
                        <div data-aos="fade-up" className='text-black'>
                            <p className='font-semibold btn-shine text-black text-[1.6rem] tracking-wide mb-2 mt-6' data-aos="fade-up">Services</p>
                            <div className='relative flex flex-col gap-3 pb-8 pl-6 ml-2 border-l-[1.6px] border-[#808080c1] rounded-t-lg'>
                                <div className='w-4 absolute left-[-8.5px] top-[0.5px] h-4 rounded-full bg-[#286de5]'></div>
                                <h3 className='text-[1.2rem] font-semibold text-main' data-aos="fade-up">Elevator Installation</h3>
                                <p data-aos="fade-up" className='text-[0.98rem] leading-[22px] italic tracking-wide font-200'>
                                    We specialize in the installation of cutting-edge elevator systems for residential, commercial, and industrial buildings, ensuring smooth and reliable performance.</p>
                            </div>
                        </div>
                        <div data-aos="fade-up" className='text-black relative flex flex-col gap-3 pb-3 pl-6 ml-2 border-l-[1.6px] border-[#808080c1] rounded-t-lg'>
                            <div className='w-4 absolute left-[-8.5px] top-[0.5px] h-4 rounded-full bg-[#286de5]'></div>
                            <h3 data-aos="fade-up" className='text-[1.2rem] font-semibold text-main'>Maintenance & Repair</h3>
                            <p data-aos="fade-up" className='text-[0.98rem] leading-[22px] italic tracking-wide font-200'>
                                Our expert technicians provide regular maintenance and emergency repair services to keep your elevators running safely and efficiently.</p>
                        </div>
                        {/* <div data-aos="fade-up" className='text-black'>
                            <p className='font-semibold btn-shine text-black text-[1.6rem] tracking-wide mb-2 mt-6' data-aos="fade-up">Our Locations</p>
                            <div className='relative flex flex-col gap-3 pb-3 pl-6 ml-2 border-l-[1.6px] border-[#808080c1] rounded-t-lg'>
                                <div className='w-4 absolute left-[-8.5px] top-[0.5px] h-4 rounded-full bg-[#19d26f]'></div>
                                <ul data-aos="fade-up" className='text-[0.92rem] w-fit tracking-wide pt-8 flex flex-col gap-2 mt-1'>
                                    <li className='font-[300]' data-aos="fade-up">Mumbai, Maharashtra</li>
                                    <li className='font-[300]' data-aos="fade-up">Delhi, NCR</li>
                                    <li className='font-[300]' data-aos="fade-up">Bangalore, Karnataka</li>
                                </ul>
                            </div>
                        </div> */}
                        <div data-aos="fade-up" className='text-black'>
                            <p className='font-semibold btn-shine text-black text-[1.6rem] tracking-wide mb-2 mt-6'>Certifications</p>
                            <div className='relative flex flex-col gap-3 pb-8 pl-6 ml-2 border-l-[1.6px] border-[#808080c1] rounded-t-lg'>
                                <div className='w-4 absolute left-[-8.5px] top-[0.5px] h-4 rounded-full bg-[#286de5]'></div>
                                <h3 className='text-[1.2rem] font-semibold text-main'>ISO 9001:2015 Certified</h3>
                                <p className='text-[0.98rem] leading-[22px] italic tracking-wide font-200'>
                                    Rolex Elevators is an ISO 9001:2015 certified company, ensuring world-class quality in our products and services.</p>
                            </div>
                        </div>
                        <div data-aos="fade-up" className='text-black'>
                            <p className='font-semibold btn-shine text-black text-[1.6rem] tracking-wide mb-2 mt-6'>Awards</p>
                            <div className='relative flex flex-col gap-3 pb-8 pl-6 ml-2 border-l-[1.6px] border-[#808080c1] rounded-t-lg'>
                                <div className='w-4 absolute left-[-8.5px] top-[0.5px] h-4 rounded-full bg-[#286de5]'></div>
                                <h3 className='text-[1.2rem] font-semibold text-main'> Award1</h3>
                                <div className='bg-[#3a3a3abe] w-fit px-3 py-1 rounded-sm'>
                                    <p className='text-[0.85rem] font-cor flex items-center tracking-wide text-white'>04/202<span className='text-[1rem] pr-1'>4</span></p>
                                </div>
                                <p className='text-[0.98rem] leading-[22px] italic tracking-wide font-200'>
                                    Award</p>
                                <Link onClick={() => setHostingerActive(true)} className='flex text-white w-fit items-center justify-start gap-2 bg-[#3a3a3abe] p-1 px-4 rounded-[3px] font-[400] text-[0.95rem] tracking-wide'><IoIosLink className='text-[#fff]' />Certificate</Link>

                            </div>
                        </div>
                    </div>

                </div>
                <div className='lg:max-w-[30rem] max-w-[40rem] lg:mt-[4.3rem] b'>
                    <div data-aos="fade-up" className='text-black'>
                        <p className='font-semibold btn-shine text-black text-[1.6rem] tracking-wide mb-2 mt-6'>About Rolex Elevators</p>
                        <div className='relative flex flex-col gap-3 pb-10 pl-6 ml-2 border-l-[1.6px] border-[#808080c1] rounded-t-lg'>
                            <div className='w-4 absolute left-[-8.5px] top-[0.5px] h-4 rounded-full bg-[#286de5]'></div>
                            <h3 className='text-[1.2rem] font-semibold text-main'>Rolex Elevators</h3>
                            <div className='flex flex-wrap items-center justify-start gap-2'>
                                <div className='text-[#fff] bg-[#2F2F2F] p-[10px] rounded-full text-[1.1rem]'> <FaBuilding /> </div>
                                <div className='text-[#fff] bg-[#2F2F2F] p-[10px] rounded-full text-[1.1rem]'> <SiReact /> </div>
                                <div className='text-[#fff] bg-[#2F2F2F] p-[10px] rounded-full text-[1.1rem]'> <SiTailwindcss /> </div>
                                <div className='text-[#fff] bg-[#2F2F2F] p-[10px] rounded-full text-[1.1rem]'> <FaNodeJs /> </div>
                            </div>
                            <p className='text-[0.98rem] leading-[22px] italic tracking-wide font-200'>
                                Rolex Elevators is one of India's leading elevator service providers, established in 1997.
                                Founded by Mr. Sarwar Sheikh, we successfully installed our first lift at Lekhraj Khajana in Lucknow. Since then, we have been committed to delivering high-quality elevator products and services to our clients across India and beyond.
                            </p>
                            <ul className='text-[0.92rem] tracking-wide list-disc pl-8 flex flex-col gap-1 mt-1'>
                                <li className='font-300'>
                                    Over 15,000 elevators installed across Uttar Pradesh.
                                </li>
                                <li className='font-300'>
                                    25+ branches in UP, 65+ component inspections conducted.
                                </li>
                                <li className='font-300'>
                                    12,500+ satisfied customers and a workforce of 500+ active professionals.
                                </li>
                                <li className='font-300'>
                                    Over 25 years of experience in the elevator industry.
                                </li>
                            </ul>
                            <div className='flex gap-3 pl-3'>
                                <Link to="https://rolexelevators.com" target='_blank' className='flex w-fit items-center text-white justify-center gap-2 bg-[#3a3a3abe] p-2 px-3 rounded-[3px] font-[400] text-[0.95rem] tracking-wide'>
                                    <GoDotFill className='text-main animate-ping text-[1rem]' />Preview
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='relative flex flex-col gap-3 pb-10 pl-6 ml-2 border-l-[1.6px] text-black border-[#808080c1] rounded-t-lg'>
                        <div className='w-4 absolute left-[-8.5px] top-[0.5px] h-4 rounded-full bg-[#286de5]'></div>
                        <h3 className='text-[1.2rem] font-semibold text-main'>Our Commitment</h3>
                        <div className='flex flex-wrap items-center justify-start gap-2'>
                            <div className='text-[#fff] bg-[#2F2F2F] p-[10px] rounded-full text-[1.1rem]'> <FaHandHoldingHeart /> </div>
                            <div className='text-[#fff] bg-[#2F2F2F] p-[10px] rounded-full text-[1.1rem]'> <SiReact /> </div>
                            <div className='text-[#fff] bg-[#2F2F2F] p-[10px] rounded-full text-[1.1rem]'> <SiTailwindcss /> </div>
                        </div>
                        <p className='text-[0.98rem] leading-[22px] italic tracking-wide font-200'>
                            At Rolex Elevators, our team of skilled professionals specializes in providing elevators for a wide range of industries, including passenger elevators, hospital elevators, goods elevators, and more. We place high importance on delivering timely and efficient services to our customers.
                        </p>
                        <ul className='text-[0.92rem] tracking-wide list-disc pl-8 flex flex-col gap-1 mt-1'>
                            <li className='font-300'>
                                Commitment to quality, safety, and customer satisfaction.
                            </li>
                            <li className='font-300'>
                                Advanced technology integration for improved elevator performance.
                            </li>
                            <li className='font-300'>
                                Professional team with years of industry experience.
                            </li>
                        </ul>
                        <div className='flex gap-3 pl-3'>
                            <Link to="https://rolexelevators.com" target='_blank' className='flex w-fit items-center justify-center gap-2 bg-[#3a3a3abe] p-2 px-3 rounded-[3px] font-[400] text-[0.95rem] tracking-wide text-white'>
                                <GoDotFill className='text-[#fff] animate-ping text-[1rem]' />Preview
                            </Link>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Profile
