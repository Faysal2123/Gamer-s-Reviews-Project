import React, { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Pages/Loading';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation()
    if(loading){
        return <Loading></Loading>
    }
    if(user && user?.email){
        return children;
    }
    return (
        <div>
            <Navigate state={location.pathname} to='/login'></Navigate>
        </div>
    );
};

export default PrivateRoute;