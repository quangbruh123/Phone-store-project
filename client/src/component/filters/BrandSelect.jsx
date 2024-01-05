import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const BrandSelect = ({ brands, onChange }) => {
    const [selectBrand, setSelectBrand] = useState([]);
    useEffect(() => {
        const temp = [];
        brands.map((data, idx) => {
            temp.push({
                brandName: data,
                isSelect: false,
            });
        });
        setSelectBrand(temp);
    }, []);

    const handleChangeBrand = (idx) => {
        const arr = [...selectBrand];
        if (arr[idx].isSelect == true) {
            for (let i = 0; i < arr.length; i++) {
                arr[i].isSelect = false;
            }
            setSelectBrand(arr);
            onChange("brand", "");
        } else {
            for (let i = 0; i < arr.length; i++) {
                arr[i].isSelect = false;
            }
            arr[idx].isSelect = true;

            setSelectBrand(arr);
            onChange("brand", arr[idx].brandName);
        }
    };

    return (
        <div className=''>
            {selectBrand.map((data, idx) => {
                if (data.isSelect) {
                    return (
                        <div
                            className='float-left w-fit px-3 py-2 border-[1px] border-gray-200 hover:bg-gray-200 rounded-xl cursor-pointer bg-amber-300 relative'
                            onClick={() => handleChangeBrand(idx)}
                        >
                            {data.brandName}
                            <FaCheckCircle className='absolute right-[-6px] bottom-[-6px] text-green-600'></FaCheckCircle>
                        </div>
                    );
                } else {
                    return (
                        <div
                            className='float-left w-fit px-3 py-2 border-[1px] border-gray-200 hover:bg-gray-200 rounded-xl cursor-pointer'
                            onClick={() => handleChangeBrand(idx)}
                        >
                            {data.brandName}
                        </div>
                    );
                }
            })}
        </div>
    );
};

export default BrandSelect;
