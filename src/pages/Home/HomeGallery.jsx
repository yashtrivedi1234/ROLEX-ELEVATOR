import React, { useState } from "react";
import img1 from "../../assets/Gallery/gallery1.jpg";
import img2 from "../../assets/Gallery/gallery2.jpg";
import img3 from "../../assets/Gallery/gallery3.jpg";
import img4 from "../../assets/Gallery/gallery4.jpg";
import img5 from "../../assets/Gallery/gallery5.jpg";
import img6 from "../../assets/Gallery/gallery6.jpg";
import img7 from "../../assets/Gallery/gallery7.jpg";
import img8 from "../../assets/Gallery/gallery8.jpg";
import img9 from "../../assets/Gallery/gallery9.jpg";
import icon from "../../assets/icon/arrow.png";
import bgImage from '../../assets/pattern/pattern8.jpg'


// Image Data Array
const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const GalleryComponent = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="relative z-10">

      <div
        className="absolute inset-0 "
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.2,
          zIndex: -10,
        }}
      ></div>
      <div className="max-w-7xl px-2 mx-auto py-10 sm:py-12 md:py-14 lg:py-16 relative z-10">




        {/* ======= Header Section ======= */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <h2 className="text-3xl font-bold md:text-[45px] ">Our Gallery</h2>
          <img src={icon} alt="Gallery Icon" className="w-10 h-10 object-cover" />
        </div>

        {/* ======= Gallery Grid ======= */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group"
              onClick={() => setSelectedImage(src)}
            >
              {/* Gallery Image */}
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />

              {/* Overlay Effect */}
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-lg font-bold">
                View Image
              </div>
            </div>
          ))}
        </div>

        {/* ======= Lightbox Modal ======= */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            {/* Selected Image Preview */}
            <img src={selectedImage} alt="Selected" className="max-w-3xl max-h-[90vh] rounded-lg shadow-lg" />

            {/* Close Button */}
            <button
              className="absolute top-5 right-5 text-white text-3xl"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        )}


      </div>
    </section>
  );
};

export default GalleryComponent;
