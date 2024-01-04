import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const PhoneStorageSelect = ({ phoneStorage, onChange }) => {
    const [selectStorage, setSelectStorage] = useState([]);
    useEffect(() => {
        const temp = [];
        phoneStorage.map((data, idx) => {
            if (idx == 0) {
                temp.push({
                    storage: data,
                    isSelect: true,
                });
            } else {
                temp.push({
                    storage: data,
                    isSelect: false,
                });
            }
        });
        setSelectStorage(temp);
    }, [phoneStorage]);

    const handleChangePhoneStorage = (idx) => {
        const arr = [...selectStorage];
        for (let i = 0; i < arr.length; i++) {
            arr[i].isSelect = false;
        }

        arr[idx].isSelect = true;

        setSelectStorage(arr);
        onChange(arr[idx].storage);
    };

    return (
        <div className='flex gap-3'>
            {selectStorage.map((data, idx) => {
                if (data.isSelect) {
                    return (
                        <div
                            className='px-3 py-2 border-[1px] border-gray-200 hover:bg-gray-200 rounded-xl cursor-pointer bg-amber-300 relative'
                            onChange={() => handleChangePhoneStorage(idx)}
                        >
                            {data.storage}
                            <FaCheckCircle className='absolute right-[-6px] bottom-[-6px] text-green-600'></FaCheckCircle>
                        </div>
                    );
                } else {
                    return (
                        <div
                            className='px-3 py-2 border-[1px] border-gray-200 hover:bg-gray-200 rounded-xl cursor-pointer'
                            onClick={() => handleChangePhoneStorage(idx)}
                        >
                            {data.storage}
                        </div>
                    );
                }
            })}
        </div>
    );
};

export default PhoneStorageSelect;
