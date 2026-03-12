import React from "react";

import image1 from '../../assets/Client/automobile/img1.jpg'
import image2 from '../../assets/Client/automobile/img2.jpg'
import image3 from '../../assets/Client/automobile/img3.jpg'
import image4 from '../../assets/Client/automobile/img4.jpg'
import image5 from '../../assets/Client/automobile/img5.jpg'
import image6 from '../../assets/Client/automobile/img6.jpg'
import image7 from '../../assets/Client/automobile/img7.jpg'
import image8 from '../../assets/Client/automobile/img8.jpg'
import image9 from '../../assets/Client/automobile/img9.jpg'
import image10 from '../../assets/Client/automobile/img10.jpg'
import image11 from '../../assets/Client/automobile/img11.jpg'
import image12 from '../../assets/Client/automobile/img12.jpg'


const clientLogos = [
	{
		logo: image1,
		alt: "",
	},
	{
        logo: image2,
		alt: "",
	},
	{
        logo: image3,
		alt: "",
	},
	{
        logo: image4,
		alt: "",
	},
	{
        logo: image5,
		alt: "",
	},
	{
        logo: image6,
		alt: "",
	},
	{
        logo: image7,
		alt: "",
	},
	{
        logo: image8,
		alt: "",
	},
	{
        logo: image9,
		alt: "",
	},
	{
        logo: image10,
		alt: "",
	},
	{
        logo: image11,
		alt: "",
	},
	{
        logo: image12,
		alt: "",
	},
];

const ClientLogo2 = () => {
    return (
        <section className="ezy__clients9 light py-12 bg-gray-100 text-black">
        <div className="container px-6 lg:px-10 mx-auto">
            <div className="text-center mb-12">
                <h2 className="font-bold text-3xl md:text-3xl leading-tight mb-4 text-gradient text-main">
                Our Valuable Automobile Client
                </h2>

            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
                {clientLogos.map((client, i) => (
                    <div
                        className="bg-white/10 hover:bg-white/20 transition-all duration-300 rounded-lg shadow-lg px-2flex justify-center items-center h-auto"
                        key={i}
                    >
                        <img
                            src={client.logo}
                            alt={client.alt}
                            className="max-h-full max-w-full object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    </section>
    );
};


export default ClientLogo2
