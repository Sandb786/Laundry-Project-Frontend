import React from 'react';
import Navbar from './Navbar';
import DashboardCards from './DashboardCards';
import PendingOrdersTable from './PendingOrdersTable';
import NewOrder from './NewOrder';
import AnalyticsSection from './AnalyticsSection';
import LaundryProfilePage from './Laundry_Profile/LaundryProfilePage';

export default function Admin_Dashboard( ) 
{
  return (
    <div className="bg-gray-100 min-h-screen">

      <Navbar />

      <DashboardCards />

      {/* Responsive Layout */}
      <div className="grid grid-cols-1 md:grid-cols-10 gap-4 p-4 sm:p-4">
        
        {/* Pending Orders Table - Larger on Desktop */}
        <div className="md:col-span-7 bg-gray-200  shadow-md rounded-lg">
          <PendingOrdersTable />
        </div>

        {/* New Orders Section - Stays Visible on Right Side on Larger Screens */}
        <div className="md:col-span-3 bg-gray-200 p-2 shadow-md rounded-lg">
          <NewOrder />
        </div>

      </div>

      <AnalyticsSection/> 

      {/* <LaundryProfilePage/> */}

    </div>
  );
}
