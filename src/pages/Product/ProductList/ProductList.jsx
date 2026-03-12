import React, { useEffect } from 'react'
import BreadCums from '../../../Component/BreadCums'
import image from '../../../assets/hospitallift.webp'
import Describe from './Describe';
import ProductBenefit from './ProductBenefit';
import ProductType from './ProductType';
import ProductFaq from './ProductFaq';
import StandardCollection from '../ProductDescription/StandardCollection';
import CallToAction from '../../../Component/CTA';
import ProductType1 from './ProductType1';
import Accessories from '../ProductDescription/Accesories';
import { useLocation, useParams } from 'react-router-dom';
import productData from '../../../hook/Product';
import HowWeWork from './HowWeWork';
import allProduct from '../../../hook/productype';

const ProductList = () => {
  const location = useLocation()
  const afterProduct = location.pathname.split("/product/")[1];
  const fetchProduct = productData.filter((req) => req.url === afterProduct)

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Product' },
    { label: `${fetchProduct[0]?.name}` },
  ];

  const {list}=useParams()

  
  const filterProduct=allProduct.filter((val)=>val.url===list)

        useEffect(() => {
              window.scrollTo(0, 0);
            }, []);
  


  return (
    <section className="overflow-x-hidden" >
      <BreadCums headText={filterProduct[0]?.name} items={breadcrumbItems} />
        <Describe data={filterProduct[0]} />
      <ProductBenefit data={filterProduct[0]} />
      {/* <HowWeWork/> */}
      <CallToAction />
      {/* <StandardCollection /> */}
      <ProductType1 data={filterProduct[0]} />
      {/* <Accessories data={fetchProduct[0]} /> */}
    </section>
  )
}

export default ProductList