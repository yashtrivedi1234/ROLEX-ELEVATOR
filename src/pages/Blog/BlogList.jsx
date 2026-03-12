import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img from '../../assets/blog.png';
import icon from '../../assets/icon/arrow.png'

const BlogList = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function
      once: true, // Whether animation should happen only once
    });
  }, []);

  const blogs = [
    {
      date: "January 10, 2025",
      title: "Structural Design with Luxurious Interiors",
      image: img
    },
    {
      date: "January 10, 2025",
      title: "Structural Design with Luxurious Interiors",
      image: img
    },
    {
      date: "January 10, 2025",
      title: "Residential Space with Luxurious Interiors",
      image: img,
    },
  ];

  return (
    <section className="py-10 sm:py-12 md:py-14 lg:py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 lg:px-10">
    
        <div 
          className="flex flex-col max-w-2xl justify-center items-center text-center mx-auto mb-10"
          data-aos="fade-up"
        >
<div className="flex items-center justify-center my-2">
  <h2 className="text-3xl font-bold md:text-[45px] mb-4 text-main"></h2>
</div>

 <div className='flex items-center justify-center gap-2'>
            <h2>Our Latest Blogs</h2>
            <img src={icon} alt="icons" className='w-10 h-10 object-cover text-main' />
          </div>


          <p className="text-lg opacity-80">
            Stay updated with the latest insights, trends, and tips from our industry experts. Dive into our blogs for valuable knowledge and inspiration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 100} // Add staggered animation delay
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-[30rem] object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300 flex flex-col justify-end p-4">
                <span className="text-white text-sm md:text-base">
                  {blog.date}
                </span>
                <h4 className="text-white text-lg md:text-xl font-semibold">
                  {blog.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
