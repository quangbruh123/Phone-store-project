import React from "react";
import Navbar from "../component/navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "../component";
const PublicLayout = () => {
    return (
        <div className='px-[4%] md:px-[10%] pb-2'>
            <Navbar></Navbar>
            <div className='pt-32 sm:pt-20 min-h-[80vh]'>
                <Outlet></Outlet>
            </div>
            <Footer />
        </div>
    );
};

export default PublicLayout;
