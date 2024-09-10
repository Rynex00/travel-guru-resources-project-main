import React, { useContext } from 'react'
import { AuthContext } from '../Providers/AuthProvider'
import { Navigate } from 'react-router-dom';

const PrivatRouter = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div className=" mt-20 flex justify-center mx-auto w-[50px]   loading loading-infinity "></div>
    }

    if (user) {
        return children;
    }

    return (
        <Navigate state={location.pathname} to='/logIn' ></Navigate>
    )
}

export default PrivatRouter