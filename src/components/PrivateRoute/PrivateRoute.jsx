import React, { use } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Loading';

const PrivateRoute = ({children}) => {
    // console.log(children)
    const {user, loading} = use(AuthContext)
     const location = useLocation();
    //  console.log(location)

    if(loading){
        return <Loading></Loading>
    }
    if(!user || !user.email){
        return <Navigate state={{from: location.pathname }} to="/login"></Navigate>
    }
    return (
        <div>
           
            {children}
        </div>
    );
};

export default PrivateRoute;