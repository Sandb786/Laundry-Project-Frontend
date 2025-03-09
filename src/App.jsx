import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Registretion from './Forms/Registretion'
import Admin_Dashbord from './AdminDashbord/Admin_Dashbord'
import Home from "./Home_Page/Home";
import AboutUs from "./Home_Page/AboutUs";
import Login_page from "./AdminDashbord/Login_page";
import LaundryProfilePage from "./AdminDashbord/Laundry_Profile/LaundryProfilePage";

function App() 
{
   // USer Object for form
      const [UserObj, setUserObj] = useState({
          laundryName: "",
          landmark: "",
          pincode: "",
          city: "",
          state: "",
          ownerName: "",
          laundryMobile: "7879243194",
          ownerPhone: "",
          services: [],
          selectedPlan: "",
          password: ""
      });

  return (
    
    <Router>  {/* ✅ Wrap everything inside Router */}
      <div>
       
        {/* Routes for navigation */}
        <Routes>
          
        <> {/*Home Page and Registretion.....*/}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/register" element={ <Registretion UserObj={UserObj} setUserObj={setUserObj}/>} />
        </>
          
          <Route path="/login" element={<Login_page UserObj={UserObj} setUserObj={setUserObj}/>} />

        <>{/* Admin Dashboard */}
          <Route path="/admin-dashboard" element={<Admin_Dashbord />} />
          <Route path="/admin-profile" element={<LaundryProfilePage />} />
        </>


        </Routes>

      </div>
    </Router>
  );
}

export default App;
