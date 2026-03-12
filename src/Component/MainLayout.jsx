import React from 'react';
import { Outlet } from 'react-router-dom';
import TopHeader from './TopHeader';
import Header from './Header';
import Fotter from './Fotter';

const MainLayout = () => {
  return (
    <>
      <TopHeader />
      <Header />
      <main>
        <Outlet />
      </main>
      <Fotter />
    </>
  );
};

export default MainLayout;
