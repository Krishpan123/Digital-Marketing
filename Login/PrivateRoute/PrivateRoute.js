import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const PrivateRoute = ({ element, ...props }) => {
  const auth = getAuth();

  const [isAuthenticated, setIsAuthenticated] = React.useState(null);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, [auth]);

  return isAuthenticated === null ? null : isAuthenticated ? (
    <Route {...props} element={element} />
  ) : (
    <Navigate to="/signin" replace />
  );
};

export default PrivateRoute;
