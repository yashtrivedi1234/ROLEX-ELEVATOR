import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faGlobe, faChartLine, faHandshake } from "@fortawesome/free-solid-svg-icons";

import {
	faCamera,
	faCannabis,
	faRandom,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { faAsymmetrik } from "@fortawesome/free-brands-svg-icons";
import BreadCrumbs from "../../Component/BreadCums";
import bgimage from '../../assets/BreadCum/mission.jpg';
import TimeLineSection from "../../Component/Test/TimeLine";

const serviceList = [
    {
        icon: faUsers,
        title: "Customer Focus",
        description:
            "We put our customers at the center of everything we do, striving to exceed their expectations and build long-lasting relationships.",
    },
    {
        icon: faGlobe,
        title: "Global Reach",
        description:
            "Our vision is to expand our impact globally, reaching diverse markets while respecting local cultures and contributing positively to society.",
    },
    {
        icon: faChartLine,
        title: "Innovation and Growth",
        description:
            "We aim to drive innovation by staying ahead of market trends and continuously improving our products and services to foster growth.",
    },
    {
        icon: faHandshake,
        title: "Integrity and Trust",
        description:
            "We are committed to ethical business practices and building trust through transparency, honesty, and integrity in all our interactions.",
    },
];


const ServiceItem = ({ service }) => (
    <div className="bg-[#004658] shadow h-full p-3 md:mt-4">
        <div className="p-4 lg:p-8">
            <div className="text-[40px] text-white mb-2">
                <FontAwesomeIcon icon={service.icon} />
            </div>
            <h5 className="text-xl font-medium my-6 text-white">{service.title}</h5>
            <p className="opacity-75 mt-4 text-white">{service.description}</p>
        </div>
    </div>
)

ServiceItem.propTypes = {
	service: PropTypes.object.isRequired,
};

function ShapeOne() {
	return (
		<svg
			className="absolute -bottom-[20%] left-0 -z-[1]"
			width="405"
			height="626"
			viewBox="0 0 405 626"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect
				x="-302.65"
				y="296.986"
				width="433.92"
				height="140"
				rx="73.8464"
				transform="rotate(-33.796 -302.65 296.986)"
				fill="#7434F8"
				fillOpacity="0.5"
			/>
			<rect
				x="-315"
				y="502.403"
				width="666.584"
				height="140"
				rx="73.8464"
				transform="rotate(-33.796 -315 502.403)"
				fill="#FAA515"
				fillOpacity="0.5"
			/>
		</svg>
	);
}

function ShapeTwo() {
	return (
		<svg
			className="absolute -top-[20%] right-0 -z-[1]"
			width="340"
			height="658"
			viewBox="0 0 495 778"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="389" cy="389" r="389" fill="#0d6efd" fillOpacity="0.19" />
		</svg>
	);
}

const OurMission= () => {
    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'About' },
        { label: 'Our Mission Vision &' },
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
	return (
        <div>
            <BreadCrumbs headText={"Our Mission and Vision"} items={breadcrumbItems} image={bgimage} />
       
        <section className="ezy__service20 light py-10 sm:py-12 md:py-14 lg:py-16 bg-gray-50  text-zinc-900  relative z-[1] overflow-hidden">
        <ShapeOne />
        <ShapeTwo />

        <div className="max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10 mx-auto">
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 md:col-span-4">
                <h2 className="text-3xl md:text-[40px] font-bold leading-normal mb-4">
                                Our Mission and Vision: Building a Better Future Together
                            </h2>
                            <p className="text-[17px] leading-normal opacity-80">
                                We believe in making a positive impact through our work by focusing on our core values and embracing continuous improvement for our customers, our team, and our world.
                            </p>
                </div>
                <div className="col-span-12 md:col-span-8">
                    <div className="grid grid-cols-2 gap-6 gap-x-5">
                        <div className="col-span-2 md:col-span-1">
                            {serviceList.slice(0, 2).map((service, i) => (
                                <div key={i}>
                                    <ServiceItem service={service} />
                                </div>
                            ))}
                        </div>

                        <div className="col-span-2 md:col-span-1 md:mt-12">
                            {serviceList.slice(2, 4).map((service, i) => (
                                <div key={i}>
                                    <ServiceItem service={service} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
     

    </section>
    <TimeLineSection/>
    </div>
	);
};


export default OurMission;
