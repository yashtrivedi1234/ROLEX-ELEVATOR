import React from "react";

import image1 from '../../assets/Client/priv/img1.jpg';
import image2 from '../../assets/Client/priv/img2.jpg';
import image3 from '../../assets/Client/priv/img3.jpg';
import image4 from '../../assets/Client/priv/img4.jpg';
import image5 from '../../assets/Client/priv/img5.jpg';
import image6 from '../../assets/Client/priv/img6.jpg';
import image7 from '../../assets/Client/priv/img7.jpg';
import image8 from '../../assets/Client/priv/img8.jpg';
import image9 from '../../assets/Client/priv/img9.jpg';
import image10 from '../../assets/Client/priv/img10.jpg';
import image11 from '../../assets/Client/priv/img11.jpg';
import image12 from '../../assets/Client/priv/img12.jpg';

const clientLogos = [
    { logo: image1, alt: "Client 1" },
    { logo: image2, alt: "Client 2" },
    { logo: image3, alt: "Client 3" },
    { logo: image4, alt: "Client 4" },
    { logo: image5, alt: "Client 5" },
    { logo: image6, alt: "Client 6" },
    { logo: image7, alt: "Client 7" },
    { logo: image8, alt: "Client 8" },
    { logo: image9, alt: "Client 9" },
    { logo: image10, alt: "Client 10" },
    { logo: image11, alt: "Client 11" },
    { logo: image12, alt: "Client 12" },
];

const ClientLogo1 = () => {
    return (
        <section className="ezy__clients9 light py-10 bg-white text-white">
        <div className="container px-6 lg:px-10 mx-auto">
            <div className="text-center mb-12">
                <h2 className="font-bold text-3xl md:text-3xl leading-tight mb-4 text-gradient text-main">
                Our Valuable Private Clients
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

export default ClientLogo1;