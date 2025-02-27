import React from 'react';
import Banner from '../components/Banner';
import GraduateList from '../components/GraduateList';
import SyllabusPlan from '../components/SyllabusData';

const Home = () => {
    return (
        <div className=''>
          <Banner></Banner>
          <GraduateList></GraduateList>
          <SyllabusPlan></SyllabusPlan>
        </div>
    );
};

export default Home;