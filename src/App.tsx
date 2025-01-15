import React from 'react';
import { Outlet } from 'react-router';
import { Footer } from './components';

export const App: React.FC = () => {
  return (
    <div className="w-full h-[100vh] px-8 flex flex-col justify-between items-center">
      <Outlet />
      <Footer title="Copyright © 2025 by Volodymyr Samoilenko" />
    </div>
  );
};
