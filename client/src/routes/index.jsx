import { createBrowserRouter, Route, createRoutesFromElements, Outlet } from "react-router-dom";
import React from "react";

import PublicLayout from "./PublicLayout";
import { authRoutes, contentRoutes } from "./publicRoute";
import { privateRoutes } from "./privateRoute";
import PrivateRoutes from "./PrivateRoutes";
import Homepage from "../pages/Home/Home";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            {/* Login */}
            <Route element={<Outlet></Outlet>}>
                {authRoutes.map((route, idx) => (
                    <Route key={idx} path={route.path} element={route.element}></Route>
                ))}
            </Route>
            <Route element={<PublicLayout></PublicLayout>}>
                <Route path='/' element={<Homepage></Homepage>} index />
                {contentRoutes.map((route, idx) => (
                    <Route key={idx} path={route.path} element={route.element}></Route>
                ))}
                <Route element={<PrivateRoutes></PrivateRoutes>}>
                    {privateRoutes.map((route, idx) => (
                        <Route key={idx} path={route.path} element={route.element}></Route>
                    ))}
                </Route>
            </Route>
        </>
    )
);
