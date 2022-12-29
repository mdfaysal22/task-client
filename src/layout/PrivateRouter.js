import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { userAuth } from './../contexts/AuthContext';

const PrivateRouter = ({children}) => {
  const {user, loader} = useContext(userAuth);
  if (loader) {
    return ( 
        <h1>Loading...</h1>
    );
  }
  if (user && user.email) {
    return children;
  }
  return <Navigate to={"/login" }></Navigate>;
};

export default PrivateRouter;