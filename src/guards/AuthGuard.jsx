import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function AuthGuard() {
  const { authenticated } = useAuth();
  
  // Check if the user is authenticated, if not, redirect to the login page
  if (!authenticated) {
    return <Navigate to="/login" />;
  }
  
  // If the user is authenticated, render the child routes (Outlet)
  return <Outlet />;
}

export default AuthGuard;
