import React from "react";

const PriceCard = ({ product }) => {
    return (
        <div key={product._id} className=' flex  justify-between  '>
            <p className=' text-gray-600 flex-1'>
                {product.phoneName} ({product.count})
            </p>

            <p className='text-lg'>{(product.count * product.price * 1).toLocaleString("vi-VN")}</p>
        </div>
    );
};

export default PriceCard;
