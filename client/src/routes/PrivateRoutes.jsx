import React from "react";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAccessToken } from "../store/authReducer";

const PrivateRoutes = () => {
    const token = useSelector(getAccessToken);
    return token ? (
        <div>
            <Outlet></Outlet>
        </div>
    ) : (
        <Navigate to='/login'></Navigate>
    );
};

export default PrivateRoutes;
