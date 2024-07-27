import React, { createContext, useState, useEffect } from 'react';

// Create Context
export const AuthContext = createContext();

// AuthProvider Component
export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(() => {
    const tokens = localStorage.getItem('tokens');
    return tokens ? JSON.parse(tokens) : null;
  });

  const setTokens = (data) => {
    const tokens = JSON.stringify(data);
    localStorage.setItem('tokens', tokens);
    setAuthTokens(data);
  };

  const removeTokens = () => {
    localStorage.removeItem('tokens');
    setAuthTokens(null);
  };

  useEffect(() => {
    if (authTokens) {
      const { expiry } = authTokens;
      if (expiry && Date.now() > new Date(expiry).getTime()) {
        removeTokens();
      }
    }
  }, [authTokens]);

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens, removeAuthTokens: removeTokens }}>
      {children}
    </AuthContext.Provider>
  );
};
