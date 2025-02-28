import React from 'react';
import Banner from '../components/Banner';
import GraduateList from '../components/GraduateList';
import SyllabusPlan from '../components/SyllabusData';
import Admission from '../components/Admission';

const Home = () => {
    return (
        <div className=''>
          <Banner></Banner>
          <Admission></Admission>
          <GraduateList></GraduateList>
          <SyllabusPlan></SyllabusPlan>
        </div>
    );
};

export default Home;