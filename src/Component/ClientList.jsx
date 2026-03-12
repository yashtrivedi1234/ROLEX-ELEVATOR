import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../assets/Client/client1.jpeg'
import img2 from '../assets/Client/client2.jpeg'
import img3 from '../assets/Client/client3.jpeg'
import img4 from '../assets/Client/client4.jpeg'
import img5 from '../assets/Client/client5.jpeg'
import img6 from '../assets/Client/client6.jpeg'
import img7 from '../assets/Client/client7.jpeg'
import img8 from '../assets/Client/client8.jpeg'
import img9 from '../assets/Client/client9.jpeg'
import img10 from '../assets/Client/client11.jpeg'
import img11 from '../assets/Client/client12.jpeg'
import img12 from '../assets/Client/client13.jpeg'
import img13 from '../assets/Client/client19.jpeg'



const ClientLogoSlider = () => {
  const logos = [
     img1,
     img2,
     img3,
     img4,
     img5,
     img6,
     img7,
     img8,
     img9,
     img10,
     img11,
     img12,
     img13
  ];

  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="py-10  sm:py-12 md:py-14 lg:py-16 bg-[#222222]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold md:text-[45px] mb-8 text-center">
          Our Clients
        </h2>
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="px-4">
              <img
                src={logo}
                alt={`Client Logo ${index + 1}`}
                className="w-full h-auto mx-auto object-contain"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ClientLogoSlider;
