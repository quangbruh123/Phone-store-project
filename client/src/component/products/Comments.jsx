import React from "react";
import { BsStarFill } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";

const Comments = ({ info }) => {
    return (
        <div className='mb-6 flex items-start gap-4 border-b-[1px] border-slate-200 pb-6'>
            <div className='flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-gradient-to-b from-blue-700 to-blue-500 text-white'>
                <BiUserCircle></BiUserCircle>
            </div>
            <div className='w-[85%]'>
                <div className='text-sm'>{info?.postedBy?.name}</div>
                <div className='text-sm text-gray-500'>Ngày bình luận: 06/01/2024</div>
                <div className='mt-3'>{info?.comment}</div>
            </div>
            <div className='flex items-center gap-1 font-semibold'>
                <div>{info?.star}</div>
                <BsStarFill className='text-amber-400 mt-[2px]'></BsStarFill>
            </div>
        </div>
    );
};

export default Comments;
