import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

function PrivateRoute({ children }) {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  return children;
}

export default PrivateRoute;
