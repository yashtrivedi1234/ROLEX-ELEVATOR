import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ data }) => {
    return (
        <Link
            to={data?.link}
            className="relative rounded-[1rem] shadow-lg overflow-hidden md:max-w-[30rem] w-full group hover:shadow-xl"
            data-aos="fade-up"
        >
            <img
                src={data?.img}
                alt="Service"
                className="w-full translate-transform duration-700 group-hover:scale-[1.15] h-auto"
                data-aos="zoom-in"
            />
            <div
                className="absolute inset-0 bg-gradient-to-t from-[#363737] via-transparent to-transparent flex items-end justify-center hover:from-[10%] hover:from-[#243b41] hover:to-transparent transition-all duration-300"
                data-aos="fade-in"
            >
                <div className="relative z-10 text-center text-white mb-7">
                    {/* <div className="mb-10 bg-[#004658] p-4 mx-auto w-fit rounded-lg" >
                        <img src={data?.icon} alt="Icon" className="w-8 h-auto mx-auto transition-colors duration-300 group-hover:text-[#004658]"
                            style={{ color: 'currentColor' }} />
                    </div> */}
                    <div tabIndex="0" className="text-[1.2rem] sora-600 leading-tight">
                        <p
                            className="text-white font-semibold"
                            dangerouslySetInnerHTML={{ __html: data?.title }}
                        />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ServiceCard;