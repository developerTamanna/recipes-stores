import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TopHeader from '../components/TopHeader';
import PageLoader from '../components/PageLoader';

const MainLayout = () => {
    return (
        <div className=' mx-auto dark:bg-black bg-white'>
            <PageLoader/>
             <div className='fixed top-0 left-0 w-full z-50'>
                <div>
                <TopHeader></TopHeader>
            </div>

            <div ><Header></Header></div>
             </div>
            <div className='min-h-screen'>
            <Outlet></Outlet>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
