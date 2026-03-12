import React from 'react';
import modelImage1 from '../../../assets/product/Model/model1.webp'
import modelImage2 from '../../../assets/product/Model/model2.webp'
import modelImage3 from '../../../assets/product/Model/model3.webp'
import background from '../../../assets/background/pattern6.avif'

const ProductModels = ({ data }) => {
  const products = [
    {
      id: 'ROL-4D01',
      rearWall: 'MS PO Green',
      sideWall: 'Oyster White',
      ceiling: 'MS Hairline With Spot Lights',
      skirting: 'Anti Skid Matte',
      model: 'Cauldron-165N',
      capacity: '884 Kg',
      staticLoad: '2000 Kg',
      image: modelImage1
    },
    {
      id: 'ROL-4D02',
      rearWall: 'MS PO Red',
      sideWall: 'Oyster White',
      ceiling: 'MS Hairline With Spot Lights',
      skirting: 'Anti Skid Matte',
      model: 'Cauldron-165N',
      capacity: '884 Kg',
      staticLoad: '2000 Kg',
      image: modelImage2
    },
    {
      id: 'ROL-4D03',
      rearWall: 'MS PO Blue',
      sideWall: 'Oyster White',
      ceiling: 'MS Hairline With Spot Lights',
      skirting: 'Anti Skid Matte',
      model: 'Cauldron-165N',
      capacity: '884 Kg',
      staticLoad: '2000 Kg',
      image: modelImage3
    },
  ];

  return (
    <section className='py-6 sm:py-8 md:py-10 lg:py-12 bg-white'>
      <div className="max-w-7xl mx-auto px-2">
        <h2 className="lg:text-4xl text-2xl sm:text-2xl md:text-3xl font-bold text-center mb-8 text-main">
          Our Different Model
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.models?.map((product) => (
            <div
              key={product.id}
              className="bg-white z-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative"
            >

              {/* Image Section */}
              <div className="h-auto w-full  overflow-hidden">
                <img
                  src={product?.image}
                  alt={product.id}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="p-6 relative">
                <div
                  className="absolute inset-0  lg:block"
                  style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: 'right',
                    backgroundPosition: 'right',
                    opacity: 0.8,
                    width: '100%',
                    right: '0',
                    zIndex: -10
                  }}
                ></div>
                <h3 className="text-2xl font-semibold text-[#201654] mb-4 z-50">
                  {product.id}
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>
                    <span className="font-medium">Rear Wall:</span> {product.rearWall}
                  </li>
                  <li>
                    <span className="font-medium">Side Wall:</span> {product.sideWall}
                  </li>
                  <li>
                    <span className="font-medium">Suspended Ceiling:</span> {product.ceiling}
                  </li>
                  <li>
                    <span className="font-medium">Skirting:</span> {product.skirting}
                  </li>
                  <li>
                    <span className="font-medium">Model:</span> {product.model}
                  </li>
                  <li>
                    <span className="font-medium">Capacity:</span> {product.capacity}
                  </li>
                  <li>
                    <span className="font-medium">Static Load:</span> {product.staticLoad}
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductModels;
