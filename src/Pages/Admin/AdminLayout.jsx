import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import AdminSidebar from './AdminSidebar';

const AdminLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <AdminSidebar/>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <AdminNavbar />
        
        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 bg-gray-100 mt-20">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;