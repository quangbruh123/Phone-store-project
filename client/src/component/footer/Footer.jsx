// import React from "react";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
    return (
        <div className='py-5 mt-3  bg-amber-50 flex flex-wrap justify-center items-center gap-2 md:gap-10  absolute right-0 left-0 '>
            <p>PhoneStoreDMT made with 💜 by Nhom 12 </p>
            <p className='flex gap-3'>
                <a href='https://github.com/quangbruh123/Phone-store-project' rel='noreferrer' target='_blank'>
                    <AiFillGithub className='text-2xl text-gray-800' />
                </a>
            </p>
        </div>
    );
};

export default Footer;
