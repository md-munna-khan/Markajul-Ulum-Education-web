import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div className='w-11/12 mx-auto my-10 '>
            <header>
                <Navbar></Navbar>
            </header>
          <main>
          <Outlet></Outlet>
          </main>
          <footer>
            <Footer></Footer>
          </footer>
        </div>
    );
};

export default MainLayout;