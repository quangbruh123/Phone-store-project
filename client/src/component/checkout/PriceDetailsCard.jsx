const PriceDetailsCard = ({ totalItems, actualPriceOfCart, totalPriceOfCartProducts, coupon }) => {
    const summaryData = [
        { label: "Tổng số sản phẩm", value: totalItems },
        {
            label: "Thành tiền",
            value: `${actualPriceOfCart}₫`,
        },
        {
            label: "Mã giảm giá",
            value: coupon || "Không có",
        },
        {
            label: "Phí vận chuyển",
            value: "Miễn phí",
        },
    ];

    return summaryData.map(({ label, value }) => (
        <div key={label} className=' flex justify-between items-center p-0 '>
            <p className=' text-gray-600'>{label}</p>
            <p className='text-lg'>{value}</p>
        </div>
    ));
};
export default PriceDetailsCard;
