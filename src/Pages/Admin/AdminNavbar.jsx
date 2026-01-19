import React from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminNavbar = ({ onMenuClick }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    navigate('/admin-login');
  };
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-[#a8815e] shadow-md">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Left: brand + mobile toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button 
            className="text-white focus:outline-none lg:hidden p-1"
            onClick={onMenuClick}
          >
            <svg
              className="h-5 w-5 sm:h-6 sm:w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <Link to="/admin/dashboard" className="text-white font-bold text-lg sm:text-xl">
            Admin Panel
          </Link>
        </div>

        {/* Right: notifications + user */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <button className="text-white hover:text-gray-200 focus:outline-none p-1">
            <svg
              className="h-5 w-5 sm:h-6 sm:w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>

          <div className="flex items-center space-x-1 sm:space-x-2">
            <img
              className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover"
              src="https://ui-avatars.com/api/?name=Admin+User"
              alt="Admin avatar"
            />
            <span className="hidden md:block font-medium text-white text-sm sm:text-base">
              Admin User
            </span>
            <button
              onClick={handleLogout}
              className="ml-1 sm:ml-3 bg-yellow-700 hover:bg-yellow-700 text-white px-2 py-1 sm:px-3 sm:py-1 rounded text-xs sm:text-sm transition"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
