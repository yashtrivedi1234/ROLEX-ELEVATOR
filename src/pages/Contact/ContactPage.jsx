import React, { useEffect } from 'react'
import BreadCums from '../../Component/BreadCums';
import ContactSection from './ContactSection';

const ContactPage = () => {
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Contact" },
      ];
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      
  return (
    <div className='bg-gray-100'>
              <BreadCums headText={"Contact Us"} items={breadcrumbItems} />
              <ContactSection/>
              {/* map section */}
              <div className="">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.683091894675!2d80.951064!3d26.8500302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd0f0cd5c219%3A0xd97dd10e7496fd6b!2sRolex%20Elevators%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1737096631324!5m2!1sen!2sin"
                    width="100%" height="450" className="border-0 rounded-lg shadow-lg"
                    allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Clinic Location">
                </iframe>
            </div>
    </div>
  )
}

export default ContactPage