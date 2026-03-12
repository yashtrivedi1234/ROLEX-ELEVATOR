import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Header from './Component/Header'
import Fotter from './Component/Fotter'
import ServicePage from './pages/service/ServicePage'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import ContactPage from './pages/Contact/ContactPage'
import Client from './pages/Client/Client'
import GalleryPage from './pages/Gallery/GalleryPage'
import EventPage from './pages/Gallery/EventPage'
import AboutPage from './pages/About/AboutPage'
import SocialMediaIcons from './Component/SocialMedia'

import ProductDescription from './pages/Product/ProductDescription/ProductDescription'
import ProductList from './pages/Product/ProductList/ProductList'
import DirectorMessage from './pages/About/DirectorMessage'
import MdMessage from './pages/About/MdMessage'
import CompanyProfile from './pages/About/CompanyProfile'
import NavBar from './Component/NavBar'
import TopHeader from './Component/TopHeader'
import VideoPage from './pages/Gallery/VideoPage'
import PrivacyPolicy from './pages/utlis/PrivacyPolicy'
import TermCondition from './pages/utlis/TermCondition'
import CareerPage from './pages/utlis/CareerPage'
import AdminLogin from './pages/Admin/AdminLogin'
import AdminDashboard from './pages/Admin/AdminDashboard'
import MainLayout from './Component/MainLayout'
import { useEffect } from 'react'
const App = () => {

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=AW-11465851980";
    document.head.appendChild(script);
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'AW-11465851980');
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  return (
    <div >
      <Routes>
        {/* Public Routes with Main Layout */}
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/service' element={<ServicePage />} />
          <Route path='/director/message' element={<MdMessage />} />
          <Route path='/chairman/message' element={<DirectorMessage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/client' element={<Client />} />
          <Route path='/gallery' element={<GalleryPage />} />
          <Route path='/videos' element={<VideoPage />} />
          <Route path='/event' element={<EventPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/profile' element={<CompanyProfile />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/term-condition' element={<TermCondition />} />
          <Route path='/career' element={<CareerPage />} />
          <Route path='/meet' element={<ContactPage />} />
          <Route path='/product/:list' element={<ProductList />} />
          <Route path='/product/type/:category' element={<ProductDescription />} />
        </Route>

        {/* Admin Routes without Main Layout */}
        <Route path='/admin/login' element={<AdminLogin />} />
        <Route path='/admin/dashboard' element={<AdminDashboard />} />
      </Routes>
    </div>
  )
}

export default App