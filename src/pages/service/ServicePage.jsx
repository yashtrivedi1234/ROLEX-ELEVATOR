import React from 'react'
import BreadCums from '../../Component/BreadCums'
import ServiceList from './ServiceList';

const ServicePage = () => {
    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'Service' },
    ];
  return (
    <div>
         <BreadCums headText={"Our Service"} items={breadcrumbItems} />
         <ServiceList/>
    </div>
  )
}

export default ServicePage