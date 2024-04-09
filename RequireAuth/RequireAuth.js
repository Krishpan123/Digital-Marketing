import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../Firebase/Firebase.init';
import { Navigate, useLocation } from 'react-router';

const auth = getAuth(app);

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if (loading) {

        return <div>Loading...</div>;
    }

    if (!user) {
        return <Navigate to='/signin' state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAuth;
