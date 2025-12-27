import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const AdminProtectedRoute = ({ children }) => {
  const [isValidating, setIsValidating] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);
  
  useEffect(() => {
    const validateAdmin = async () => {
      const token = localStorage.getItem('adminToken');
      const user = localStorage.getItem('adminUser');
      
      if (!token || !user) {
        setIsValidating(false);
        return;
      }
      
      try {
        const parsedUser = JSON.parse(user);
        
        // Verify token with backend
        const response = await fetch('https://backend-waghera.onrender.com/api/admin/verify', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        
        if (response.ok && parsedUser.role === 'admin') {
          setIsAuthorized(true);
        }
      } catch (error) {
        console.error('Admin validation failed:', error);
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminUser');
      }
      
      setIsValidating(false);
    };
    
    validateAdmin();
  }, []);
  
  if (isValidating) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#a8815e]"></div>
      </div>
    );
  }
  
  if (!isAuthorized) {
    return <Navigate to="/admin/login" replace />;
  }
  
  return children;
};

export default AdminProtectedRoute;