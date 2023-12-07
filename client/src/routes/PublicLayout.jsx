import React from 'react';
import Navbar from '../component/navbar/Navbar';
import { Outlet } from 'react-router-dom';

const PublicLayout = () => {
  return (
    <div className='px-[4%] md:px-[10%] pb-2'>
      <Navbar></Navbar>
      <div className='pt-32 sm:pt-20 min-h-[80vh]'>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default PublicLayout;
