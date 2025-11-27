import React from 'react';
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <button className="text-gray-500 focus:outline-none lg:hidden">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          
          <Link to="/admin" className="text-xl font-semibold text-gray-700 mx-2">
            Admin Panel
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
              </svg>
            </button>
          </div>
          
          <div className="relative">
            <div className="flex items-center space-x-2">
              <img 
                className="h-10 w-10 rounded-full object-cover" 
                src="https://ui-avatars.com/api/?name=Admin+User" 
                alt="Admin avatar" 
              />
              <span className="hidden md:block font-medium text-gray-700">Admin User</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;