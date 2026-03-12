import React from "react";
import { FaMoneyBillAlt, FaShieldAlt, FaHeadset, FaClipboardList } from "react-icons/fa";

const FeatureSection = () => {
  return (
    <section className="bg-primary py-8 lg:py-12 md:py-10 ">
      <div data-aos="fade-up" className="mx-auto px-4 lg:px-20  container ">
        <div className="grid md:grid-cols-4 grid-cols-1 border rounded-2xl  border-white/10 bg-white/5">
          
          {/* Best Pricing Feature */}
          <div className="flex-1 text-start rounded-lg shadow-md p-6">
            <div className="flex justify-start items-start mx-auto text-white rounded-full mb-4">
              <FaMoneyBillAlt className="text-5xl text-main " />
            </div>
            <h2 className="text-white mb-1 text-[1.8rem]">Pricing</h2>
            <div className="opacity-50"><hr /></div>
            <p className="text-gray-400 mt-4 text-left">
              Get the best rates for elevator installation and maintenance with transparent and competitive pricing.
            </p>
          </div>
          

          {/* Fully Insured Feature */}
          <div className="flex-1 text-start rounded-3xl shadow-md p-6 second border border-gray-300 bg-white/10">
            <div className="flex justify-start items-start mx-auto text-white rounded-full mb-4">
              <FaShieldAlt className="text-5xl text-main" />
            </div>
            <h2 className="text-white mb-1 text-[1.8rem]">Fully Insured</h2>
            <div className="opacity-50"><hr /></div>
            <p className="text-gray-400 mt-4 text-left">
              Your safety is our priority. Our services come with full insurance coverage to ensure peace of mind.
            </p>
          </div>

          {/* 24/7 Support Feature */}
          <div className="flex-1 text-start rounded-lg shadow-md p-6 third">
            <div className="flex justify-start items-start w-14 h-14 mx-auto text-white rounded-full mb-4">
              <FaHeadset className="text-5xl text-main" />
            </div>
            <h2 className="text-white font-bold mb-1 text-[1.8rem]">24/7 Support</h2>
            <div className="opacity-50"><hr /></div>
            <p className="text-gray-400 mt-4 text-left">
              Our team is available around the clock to assist with any elevator issues or maintenance needs.
            </p>
          </div>

          {/* Easy Booking Feature */}
          {/* <div className="flex-1 text-start shadow-md p-6">
            <div className="flex justify-start items-start w-14 h-14 mx-auto text-white rounded-full mb-4">
              <FaClipboardList className="text-5xl text-main" />
            </div>
            <h2 className="text-white mb-1 text-[1.8rem]">Installation</h2>
            <div className="opacity-50"><hr /></div>
            <p className="text-gray-400 mt-4 text-left">
              Enjoy a hassle-free installation process for elevators, with quick scheduling and professional service.
            </p>
          </div> */}

          <div className="flex-1 text-start rounded-lg shadow-md p-6">
          <div className="flex justify-start items-start w-14 h-14 mx-auto text-white rounded-full mb-4">
              <FaClipboardList className="text-5xl text-main" />
            </div>
            <h2 className="text-white mb-1 text-[1.8rem]">Pricing</h2>
            <div className="opacity-50"><hr /></div>
            <p className="text-gray-400 mt-4 text-left">
            Enjoy a hassle-free installation process for elevators, with quick scheduling and professional service.
            </p>
          </div>


        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
