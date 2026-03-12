import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../assets/product/productlist1.jpg";
import image2 from "../../assets/product/productlist2.jpg";
import image3 from "../../assets/product/productlist3.jpg";
import image4 from "../../assets/product/productlist2.jpg";
import background from "../../assets/backgroundlift.jpg";
import icon from "../../assets/icon/arrow.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const items = [
  {
    title: "Passenger Lift",
    description:
      "Designed for smooth and silent rides with advanced technology and premium interiors, ensuring a luxurious experience.",
    image: image1,
    url: "/product/passenger-lift"
  },
  {
    title: "Hospital Lift",
    description:
      "Designed for hospitals with advanced safety features, ensuring smooth and secure transport for patients and staff.",
    image: image2,
    url: "/product/hospital-lift"
  },
  {
    title: "Hydraulic Lift",
    description:
      "Designed for homes with eco-friendly hydraulic ensuring smooth, silent operation with low power consumption.",
    image: image3,
    url: "/product/home-lift"
  },

  {
    title: "Goods Lift",
    description:
      "Designed for commercial and industrial use, ensuring efficient and safe transport of heavy loads with high durability.",
    image: image4,
    url: "/product/goods-lift"
  },
];


const Carousel1 = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      className="relative bg-cover bg-center bg-no-repea py-6 sm:py-8 lg:py-10 px-2"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 container mx-auto max-w-7xl px-4 ">
        {/* Heading */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <h2 className="text-xl font-extrabold text-white md:text-[48px] uppercase tracking-wider drop-shadow-lg">
            Our Premium Products
          </h2>
          <img
            src={icon}
            alt="icon"
            className="w-12 h-12 object-cover transform scale-125 animate-bounce"
          />
        </div>

        {/* Carousel */}
        <div className="px-4">
          <Slider {...settings} className="space-x-6">
            {items.map((item, index) => (
              <div key={index} data-aos="fade-up" className="py-4">
                <div
                  className="relative flex flex-col items-center gap-2 bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden transform hover:shadow-2xl hover:border border-white/50 border border-red-500 px-6"
                  style={{ boxShadow: "0 10px 30px rgba(255, 255, 255, 0.3)" }}
                >
                  <div className="absolute inset-0 bg-main opacity-60 transition-all duration-500"></div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[300px] w-full object-cover rounded-t-2xl scale-110 transition-transform duration-500"
                  />
                  <div className="lg:px-4 px-2 py-6 relative flex flex-col items-start gap-1">
                    <h3 className="text-2xl font-bold text-white uppercase tracking-wide drop-shadow-md">
                      {item.title}
                    </h3>
                    <p className="text-lg text-gray-300 leading-relaxed text-justify hyphens-auto">
                      {item.description}
                    </p>
                    <Link
                      className="px-4 py-2 bg-white text-black rounded-full text-lg shadow-lg hover:shadow-xl transition-all transform scale-110"
                      to={item.url}
                    >
                      Discover More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

      </div>
    </section>
  );
};

export default Carousel1;
