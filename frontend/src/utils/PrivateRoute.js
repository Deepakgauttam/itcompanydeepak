// src/components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { authTokens } = useAuth();

  return authTokens ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
