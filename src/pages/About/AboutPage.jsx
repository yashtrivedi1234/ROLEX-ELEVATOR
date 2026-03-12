import React, { useEffect } from 'react'
import BreadCums from '../../Component/BreadCums'
import RolexAbout from './RolexAbout';
import GalleryComponent from '../Home/HomeGallery';
import ClientStats from '../../Component/ClientStat';
import HowWeWork from './HowWeWork';
import AboutCompany from './AboutCompany';
import MissionAndVision from './OurMissionVision';
import WhyWeChoose from '../../Component/WhyWeChoose';
import StatsComponent from './AboutStatic';
import CallToAction from '../../Component/CTA';
import CProfile from './CProfile';


const AboutPage = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'About' }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section>
      <BreadCums headText={"About Rolex Elevator"} items={breadcrumbItems} />

      <RolexAbout />
      {/* <GalleryComponent/> */}
      {/* <ClientStats/> */}


      <WhyWeChoose />
      <StatsComponent />

      <GalleryComponent />
      {/* <CallToAction/> */}

      {/* <MissionAndVision/> */}
      {/* <HowWeWork/> */}

    </section>
  )
}

export default AboutPage