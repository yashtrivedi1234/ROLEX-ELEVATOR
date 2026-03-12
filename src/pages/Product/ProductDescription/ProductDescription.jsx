import React, { useEffect, useState } from 'react'
import BreadCums from '../../../Component/BreadCums'
import Describe from '../ProductList/Describe';
import ProductBenefit from '../ProductList/ProductBenefit';
import ProductType from '../ProductList/ProductType';
import ProductFaq from '../ProductList/ProductFaq';
import image from '../../../assets/hospitallift.webp'
import StandardCollection from './StandardCollection';
import Accessories from './Accesories';
import ProductModels from './ProductModels';
import CallToAction from '../../../Component/CTA';
import ProductGate from './ProductGate';
import productDescription from '../../../hook/productDetail';
import { useLocation } from 'react-router-dom';
import DescriptionProduct from './DescriptionProduct';


const ProductDescription = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Product' },
    { label: 'Hospital Lift' },
    { label: 'Sky Metro' },
  ];

  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);




  const [productName, setProductName] = useState("");

  useEffect(() => {
    const path = window.location.pathname;
    const segments = path.split("/");
    const lastSegment = segments[segments.length - 1];
    setProductName(decodeURIComponent(lastSegment));
  }, []);



  const filterProduct = productDescription.filter((val) => {
    return val.productName === productName; // Correct return statement
  });





  return (
    <section>
      <BreadCums headText={filterProduct[0]?.productName} items={breadcrumbItems} />
      <div className='w-full lg:px-20  bg-gray-100  mx-auto'>
        {/* <div className=' mb-6'>

          <img src={image} alt="" className=' mx-auto rounded-2xl' />
        </div> */}
        <DescriptionProduct data={filterProduct[0]} />
      </div>

      <ProductModels data={filterProduct[0]} />
      <ProductGate data={filterProduct[0]} />
      <CallToAction />
      <Accessories data={filterProduct[0]} />

      {/* <ProductFaq/> */}
    </section>
  )
}

export default ProductDescription