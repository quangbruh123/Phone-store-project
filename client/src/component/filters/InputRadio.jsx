import React, { useEffect, useState } from "react";

const InputRadio = ({ data, onChange }) => {
    const [selectPrice, setSelectPrice] = useState([]);
    useEffect(() => {
        const temp = [];
        console.log(data);
        data.map((data, idx) => {
            temp.push({
                key: data.key,
                value: data.value,
                isSelect: false,
            });
        });
        setSelectPrice(temp);
    }, []);

    const handleChangePrice = (idx) => {
        const arr = [...selectPrice];
        if (arr[idx].isSelect == true) {
            for (let i = 0; i < arr.length; i++) {
                arr[i].isSelect = false;
            }
            setSelectPrice(arr);
            onChange("numberingFilter", "");
        } else {
            for (let i = 0; i < arr.length; i++) {
                arr[i].isSelect = false;
            }
            arr[idx].isSelect = true;

            setSelectPrice(arr);
            onChange("numberingFilter", arr[idx].value);
        }
    };

    return (
        <div className='flex flex-col gap-3'>
            {selectPrice.map((data, idx) => {
                return (
                    <label className='flex cursor-pointer gap-3'>
                        <input
                            type='radio'
                            className='accent-current cursor-pointer'
                            name={data.key}
                            value={data.value}
                            onChange={() => handleChangePrice(idx)}
                            checked={data.isSelect}
                        />
                        {data.key}
                    </label>
                );
            })}
        </div>
    );
};

export default InputRadio;
