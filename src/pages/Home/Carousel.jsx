import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../../assets/Lift/passenger.jpg'
import image2 from '../../assets/Lift/Hospital.jpg'
import image3 from '../../assets/Lift/Home.jpg'
import image4 from '../../assets/Lift/Goods.jpg'
// import image1 from '../../assets/product/product1.jpg';
// import image2 from '../../assets/product/product2.jpg';
// import image3 from '../../assets/product/product3.jpg';
// import image4 from '../../assets/product/product4.jpg';
import background from '../../assets/backgroundlift.jpg'
import icon from '../../assets/icon/arrow.png'


import { Link } from "react-router-dom";

const Carousel = () => {
  const items = [
    {
      title: "Passenger Lift",
      subtitle: "LUXURIOUS PRODUCT",
      image: image1,
    },
    {
      title: "Hospital Lift",
      subtitle: "LUXURIOUS PRODUCT",
      image: image2,
    },
    {
      title: "Home (Hydraulic) Lift",
      subtitle: "LUXURIOUS PRODUCT",
      image: image3,
    },
    {
      title: "Goods Lift",
      subtitle: "LUXURIOUS PRODUCT",
      image: image4,
    },
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section>
      <div className="w-full bg-white py-10 sm:py-12 md:py-14 lg:py-16">
        <div className='flex items-center gap-2 justify-center mb-4'>
          <h2>About Rolex Elevators</h2>
          <img src={icon} alt="icons" className='w-10 h-10 object-cover text-main' />
        </div>

        <Slider {...settings}>
          {items.map((item, index) => (
            <Link to={"/product/list"}>
              <div key={index} className="px-4">
                <div className="group relative text-white rounded-lg overflow-hidden shadow-lg cursor-pointer">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[500px] w-full object-cover transform group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute bottom-0 left-0 w-full py-6 bg-gradient-to-t from-black via-black/70 to-transparent opacity-90 text-center">
                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                    {/* <p className="text-sm text-gray-300">{item.subtitle}</p> */}
                  </div>
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                    {/* <h3 className="text-xl font-bold">{item.title}</h3> */}
                    {/* <p className="text-sm mt-2">{item.subtitle}</p> */}
                    {/* <button className="mt-4 px-4 py-2 bg-main text-white rounded-md hover:bg-blue-600">
                    Explore More
                  </button> */}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Carousel;
