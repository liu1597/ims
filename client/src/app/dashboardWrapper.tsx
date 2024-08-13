import React from 'react';
import Navbar from '@/app/(components)/Navbar';
import Sidebar from '@/app/(components)/Sidebar';

const DashboarDWrapper = ({children}: {children: React.ReactNode}) => {
  return (
    <div className={'light flex bg-gray-50 text-gray-900 w-full min-h-screen'}>
        <Sidebar />
        <main 
          className={'flex flex-col w-full h-full px-9 py-7 bg-gray-50 md:pl-24'}>
            <Navbar />
            {children }
        </main>
    </div>
  );
};

export default DashboarDWrapper;