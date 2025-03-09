import React, { useState } from "react";
import Laundry_Info from "./Laundry_Info";
import Laundry_Services from "./Laundry_Services";
import Owner_Info from "./Owner_Info";
import Navbar from "../Navbar";

export default function LaundryProfilePage() {

  return (
    <>
        <Navbar />

      <div className="p-4 md:p-6 min-h-screen bg-gray-100">


        {/* Page Title */}
        {/* <Typography variant="h4" color="blue-gray" className="font-bold text-center mb-5">
        Laundry Profile Page
      </Typography> */}

        {/* Responsive Grid for Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 ">

          {/* Laundry Information Card */}
          <Laundry_Info />

          {/* Laundry Services Card */}
          <Laundry_Services />


          {/* Owner Information Card */}
          {/* <Owner_Info/>  */}

        </div>


      </div>
    </>
  );
}
