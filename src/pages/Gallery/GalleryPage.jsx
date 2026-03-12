import React, { useEffect } from 'react';
import BreadCums from '../../Component/BreadCums';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';

import img1 from '../../assets/Gallery/gallery1.jpg';
import img2 from '../../assets/Gallery/gallery2.jpg';
import img3 from '../../assets/Gallery/gallery3.jpg';
import img4 from '../../assets/Gallery/gallery4.jpg';
import img5 from '../../assets/Gallery/gallery5.jpg';
import img6 from '../../assets/Gallery/gallery6.jpg';
import img7 from '../../assets/Gallery/gallery7.jpg';
import img8 from '../../assets/Gallery/gallery8.jpg';
import img9 from '../../assets/Gallery/gallery9.jpg';
import img10 from '../../assets/Gallery/gallery10.jpg';
import img11 from '../../assets/Gallery/gallery11.jpg';


const GalleryPage = () => {
    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'Gallery' },
        { label: 'Photo' },
    ];

    const images = [
        img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11,
    ];

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
    }, []);

    return (
        <div>
            {/* Breadcrumb */}
            <BreadCums headText={"Gallery"} items={breadcrumbItems} />
            
            {/* Gallery Section */}
            <div className="py-10 sm:py-12 md:py-14 lg:py-16 container px-10 bg-[#222222]"> 
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-lg shadow-md"
                            data-aos="fade-up"
                        >
                            <img
                                src={image}
                                alt={`Gallery ${index + 1}`}
                                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GalleryPage;
