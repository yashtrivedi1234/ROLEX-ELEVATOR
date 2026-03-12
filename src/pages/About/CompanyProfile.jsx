import React, { useEffect } from 'react'
import BreadCums from '../../Component/BreadCums'
import TimeLine from './TimeLine';
import Achievement from './Acheivement';
import CallToAction from '../../Component/CTA';
import Profile from './Profile';

const CompanyProfile = () => {
    const breadcrumbItems = [
        { label: 'Overview', href: '/' },
        { label: 'About' },
        { label: "Company Profile" },
      ];
            useEffect(() => {
              window.scrollTo(0, 0);
            }, []);
  return (
  <section className='py-10 sm:py-12 md:py-14 lg:py-16 bg-[#fff]'  >
      {/* <BreadCums headText={"Our Strory"}  items={breadcrumbItems}/> */}
      {/* <TimeLine/> */}
      <Profile/>
      {/* <CallToAction/> */}
      {/* <Achievement/> */}
 
  </section>
  )
}

export default CompanyProfile