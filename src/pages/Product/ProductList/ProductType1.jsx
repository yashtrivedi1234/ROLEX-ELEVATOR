import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import p1 from '../../../assets/somelift/left1.png'
import p2 from '../../../assets/somelift/lift2.png'
import p3 from '../../../assets/somelift/lift3.png'



import background from '../../../assets/background/pattern5.jpg'
import { Link } from "react-router-dom";

const ProductType1 = ({ data }) => {
  const items = [
    {
      title: "SKY ELITE",
      subtitle: "LUXURIOUS PRODUCT",
      image: p1,
    },
    {
      title: "SKY METRO",
      subtitle: "LUXURIOUS PRODUCT",
      image: p2,
    },
    {
      title: "SKY CRESCENT",
      subtitle: "LUXURIOUS PRODUCT",
      image: p3,
    },
    // {
    //   title: "Goods Lift",
    //   subtitle: "LUXURIOUS PRODUCT",
    //   image: image4,
    // },
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1440,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };


  // const items1 = data.productType.map(val => ({
  //   name: val?.product?.name,
  //   image: val?.product?.image
  // }));




  return (
    <section className="relative">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'center',
          backgroundPosition: 'center',
          opacity: 0.4,
          width: '100%',
          right: '0',
        }}
      ></div>
      <div className="w-full py-10 sm:py-12 md:py-14 lg:py-10">
        <div className="flex flex-col max-w-xl justify-center items-center text-center mx-auto mb-4">
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-main" data-aos="fade-up">
            Product Type
          </h1>
        </div>

        <Slider {...settings}>
          {data?.product_types.map((item, index) => (
            <Link to={`/product/type/${encodeURIComponent(item?.name)}`}
              state={{ product: data }}>


              <div key={index} className="px-4">
                <div className="group relative text-white rounded-lg overflow-hidden shadow-lg cursor-pointer">
                  <img
                    src={item?.image}
                    alt={item?.name}
                    className="h-[500px] w-full object-cover transform group-hover:scale-110 transition duration-500"
                  />
                  <p className="py-2 items-center ml-6 text-2xl font-semibold text-main">{item?.name}</p>
                  

                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">

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

export default ProductType1;
