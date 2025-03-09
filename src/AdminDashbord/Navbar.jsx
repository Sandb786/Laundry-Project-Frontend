import { useState } from "react";
import { Menu, X, User, Home, Settings, LogOut } from "lucide-react";
import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false); // State for Profile Dropdown

  return (
    <nav className="bg-gray-900 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex gap-5">
          {/* Mobile Menu Button */}
          <button className="block text-white" onClick={() => setIsOpen(!isOpen)}>
            <Menu size={24} />
          </button>

          {/* Logo */}
          <div className="text-xl font-bold">Admin Dashboard</div>
        </div>

        {/* Nav Links - Mobile Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-60 bg-gray-900 shadow-lg transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:static md:flex md:items-center md:w-auto md:translate-x-0 transition-transform duration-300 ease-in-out`}
        >
          {/* Close Button */}
          <button className="absolute top-4 right-4 text-white md:hidden" onClick={() => setIsOpen(false)}>
            <X size={24} className="hover:border-2" />
          </button>

          {/* Sidebar Header for Mobile */}
          <div className="p-3 text-center mr-5 border-b-2 md:hidden">
            <Typography variant="h5">Admin Dashboard</Typography>
          </div>

          {/* Navigation Links */}
          <Link to="/admin-dashboard" className=" px-6 py-4 hover:text-gray-400 flex items-center">
            <Home className="mr-2" size={18} /> Dashboard
          </Link>
          <a href="#" className=" px-6 py-4 hover:text-gray-400 flex items-center">
            <Settings className="mr-2" size={18} /> Settings
          </a>
        </div>

        {/* Profile Dropdown */}
        <div className="relative">
          <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="flex items-center space-x-2">
            <User size={24} />
          </button>

          {/* Dropdown Menu */}
          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-gray-900 rounded-md shadow-lg">

              <Link to="/admin-profile" className=" px-4 py-2 hover:bg-gray-100 flex items-center">
                <User className="mr-2" size={18} /> Profile
              </Link>

              <Link to="/" className=" px-4 py-2 hover:bg-gray-100 flex items-center">
                <LogOut className="mr-2" size={18} /> Logout
              </Link>

            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
