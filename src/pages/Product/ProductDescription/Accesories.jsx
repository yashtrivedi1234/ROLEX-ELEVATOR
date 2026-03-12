import React from 'react'
import img1 from '../../../assets/product/accessories/acc1.png'
import img2 from '../../../assets/product/accessories/acc2.png'
import img3 from '../../../assets/product/accessories/acc3.png'
import img4 from '../../../assets/product/accessories/acc4.png'
import img5 from '../../../assets/product/accessories/acc5.png'

const Accessories = ({data}) => {
  const accessoriesList = [
    { id: 1, name: 'Intercom', image: img1 },
    { id: 2, name: 'Key Switch', image: img2 },
    { id: 3, name: 'Camera Only', image: img3 },
    // { id: 4, name: 'RFID', image: img4 },
    { id: 5, name: 'Fire', image: img5 },
  ];

  return (
    <section className="bg-gray-100 py-10 sm:py-12 md:py-14 lg:py-10">
      <div className="max-w-7xl  px-4 lg:px-4 mx-auto ">
        <h2 className=" text-2xl md:text-3xl lg:text-5xl  font-bold text-center mb-6 text-main">Our Accessories</h2>

        {/* Accessories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto justify-center  w-fit">
          {accessoriesList.map((accessory) => (
            // <div key={accessory.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 border cursor-pointer">
              <img src={accessory?.image} alt={accessory?.name} className="w-full  object-cover max-w-[15rem] " />

            // </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Accessories;
