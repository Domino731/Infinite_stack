
import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { auth } from '../../firebase';


export  const ProtectedRoute = () => {

    const [isAuthorized, setIsAuthorized] = useState<boolean | []>([]);

    useEffect(()=> {
        return auth.onAuthStateChanged(user => user ? setIsAuthorized(true) : setIsAuthorized(false));
    },[]);
    
    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    if(isAuthorized === []){
      return <h1>span...</h1>
    }
    else if (isAuthorized){
      return  <Outlet />
    }
    else {
      return  <Navigate to="/login" />
    }
}