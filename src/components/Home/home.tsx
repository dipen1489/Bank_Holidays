import React, { useEffect, useState } from 'react';
import Filter from '../Filter/filter';
import HolidayTable from '../HolidayTable/holidayTable';
import './home.css';

function Home() {
  return (
    <>
    <div className="home-style">
      <div className="heading-container">Bank Holidays</div>
      <Filter />
      <HolidayTable />
    </div>
    </>
  );
}

export default Home;
