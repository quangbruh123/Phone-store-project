import React from 'react';
import { Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default PrivateRoutes;
