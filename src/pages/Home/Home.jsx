import React from 'react'
import HeroHeader from './Hero'
import HomeServices from './HomeService'
import Feature from './Benefit'
import ServiceSection from './ServiceSection'
import ProductList from './ProductList'
import HeroSection from './HeroSection'
import FeatureSection from './FeatureSection'
import WorkProcess from './WorkProcess'
import Carousel from './Carousel'
import BlogList from '../Blog/BlogList'
import ClientLogoSlider from '../../Component/ClientList'
import Testimonials from '../../Component/Testinomial'
import ReviewComponent from '../../Component/ReviewComponent'
import HomeProduct from './HomeProduct'
import WhyChooseUs from '../../Component/WhyWeChoose'
import ClientStats from '../../Component/ClientStat'
import CallToAction from '../../Component/CTA'
import GalleryComponent from './HomeGallery'
import Carousel1 from './Carousel1'
import StatsComponent from '../About/AboutStatic'
import RolexAbout from './HomeAbout'
import VideoSection from '../../Component/VideoCta'
import WhyChooseRolex from '../../Component/WhyChooseRolex'
import StandardModel from './StandardModel'
import HeroComponent from './HomeService'




const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      {/* <FeatureSection/> */}
      <HeroComponent/>
      <Carousel1 />
      <WhyChooseUs />
      {/* <RolexAbout /> */}
      {/* <VideoSection /> */}
      <CallToAction />
      {/* <HomeServices/> */}
      {/* <HomeProduct/> */}
 

      {/* <Feature/> */}
      {/* <WorkProcess/> */}
      {/* <WhyChooseRolex/> */}
       
       {/* <StandardModel/> */}

      <GalleryComponent />
      {/* <StatsComponent />
      <ReviewComponent />
   */}

      {/* <BlogList /> */}

    </div>
  )
}

export default Home