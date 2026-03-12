import React from 'react';

const ProductGate = ({ data }) => {
  return (
    <section className="relative bg-white mx-auto flex justify-center items-center">
      {/* Content Section */}
      <div className="py-4 sm:py-12 md:py-14 lg:py-16 relative z-10 w-full max-w-7xl ">
        <div className="container mx-auto flex flex-col items-center justify-center">
          <h1 className="lg:text-4xl text-2xl sm:text-2xl md:text-3xl font-bold text-center mb-6 text-main">
            Automatic Door Options
          </h1>

          {/* Centering Logic for Different Numbers of Items */}
          <div
            className={`w-full flex flex-wrap gap-6 justify-center items-center ${
              data?.automaticDoorOptions.length <= 2 ? "flex" : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            }`}
          >
            {data?.automaticDoorOptions.map((gate, index) => (
              <div
                key={index}
                className="max-w-[20rem] rounded-lg shadow-md bg-white hover:shadow-lg transition-all duration-300 flex flex-col items-center"
              >
                <img
                  src={gate?.image}
                  alt={gate?.name}
                  className="h-auto object-cover rounded-t-lg w-full"
                />
                <p className="text-lg font-semibold text-center py-2">{gate?.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGate;
