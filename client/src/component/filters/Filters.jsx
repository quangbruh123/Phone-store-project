import { AiOutlineClose } from "react-icons/ai";
import Checkbox from "./Checkbox";
import InputRange from "./InputRange";
import InputRadio from "./InputRadio";
import InputRadioType2 from "./InputRadioType2";
import BrandSelect from "./BrandSelect";

const Brand = ["Samsung", "Iphone", "Masstel", "Nokia", "Mobell", "Itel", "Xiaomi", "vivo", "OPPO"];
const Price = [
    { key: "Dưới 5 triệu", value: "price<5000000" },
    { key: "10-15 triệu", value: "price>5000000,price<10000000" },
    { key: "15-25 triệu", value: "price>15000000,price<25000000" },
    { key: "Trên 25 triệu", value: "price>25000000" },
];
const FilterHeading = ({ text }) => <h2 className='text-xl mb-4'>{text}</h2>;
const Filters = ({ isFilterOpen, setIsFilterOpen, onChangeQuery, clear }) => {
    return (
        <aside
            className={`filtersContainer fixed  top-0 h-screen z-10 flex flex-col p-3 gap-3 overflow-auto
    transition-all ease-in-out duration-300  ${isFilterOpen ? "left-0 " : "-left-96"}
    `}
        >
            <div className='flex items-center justify-between'>
                <h1 className='text-3xl font-bold'>Lọc sản phẩm</h1>
                <AiOutlineClose className='text-xl cursor-pointer' onClick={() => setIsFilterOpen(!isFilterOpen)} />
            </div>
            <button
                className='py-0.5 px-2 w-16 text-center bg-black/[0.2]  text-sm font-semibold shadow-sm rounded-md hover:bg-gray-800 hover:text-white transition-colors '
                onClick={clear}
            >
                Đặt lại
            </button>
            <section className='py-3'>
                <FilterHeading text='Tầm giá' />
                <InputRadio data={Price} onChange={onChangeQuery}></InputRadio>
            </section>
            <section className='py-3'>
                <FilterHeading text='Hãng điện thoại' />
                <div className=''>
                    <BrandSelect brands={Brand} onChange={onChangeQuery}></BrandSelect>
                </div>
            </section>
        </aside>
    );
};

export default Filters;
