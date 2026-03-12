import React, { useEffect } from 'react'
import BreadCums from '../../Component/BreadCums'
import ClientLogo from './ClientSection';
import ClientLogo1 from './ClientSection1';
import ClientLogo2 from './ClientSection2';
import ClientLogo3 from './ClientSection3';
import ClientLogo4 from './ClientSection4';
import ClientLogo5 from './ClientSection5';
import ClientLogo6 from './ClientSection6';

const Client = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Client' },
];

 useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div>   
      <BreadCums headText={"Our Client"} items={breadcrumbItems} />
   <section className=''>
           <ClientLogo/>
           <ClientLogo2/>
           <ClientLogo6/>
           <ClientLogo5/>
           <ClientLogo3/>
           <ClientLogo4/>
         <ClientLogo1/>
      
        
     
      
      
     
   </section>
   </div>
  )
}

export default Client