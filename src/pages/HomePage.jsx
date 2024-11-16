import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Table from '../components/Table';
import Tabs from '../components/Tabs';
import { selectUserAccess } from '../features/users/UsersSlice';
import useFetchPRIMapping from '../hooks/useFetchPRIMapping';

const HomePage = () => {
  // Fetch PRI mapping data
  const priMappingData = useFetchPRIMapping();
  
  // Get user access rights from Redux store
  const userAccess = useSelector(selectUserAccess);

  return (
    <>
      {/* Pass both priMappingData and userAccess to Tabs */}
      <Tabs modules={priMappingData} userAccess={userAccess} />

      <div className='mt-8'/>

      {/* Pass userAccess to Table */}
      <Table userAccess={userAccess} />
    </>
  );
};

export default HomePage;
