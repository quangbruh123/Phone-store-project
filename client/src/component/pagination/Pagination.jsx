import PropTypes from "prop-types";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Pagination = ({ currentPage, totalPage, setNextPage, setBackPage }) => {
    return (
        <div className='mb-5 mt-5 flex items-center justify-center gap-4'>
            <button
                className='flex items-center justify-center font-xl h-[34px] w-[34px] cursor-pointer rounded-[50%] border-[1px] border-blue-600 text-blue-600 outline-none hover:bg-blue-600 hover:text-white'
                onClick={setBackPage}
                disabled={currentPage === 1}
            >
                <FaChevronLeft></FaChevronLeft>
            </button>

            <span className='text-base font-medium text-[#A6ACB2]'>
                {currentPage} / {totalPage} trang
            </span>

            <button
                className='flex items-center justify-center font-xl h-[34px] w-[34px] cursor-pointer rounded-[50%] border-[1px] border-blue-600 text-blue-600 outline-none hover:bg-blue-600 hover:text-white'
                onClick={setNextPage}
                disabled={currentPage === totalPage}
            >
                <FaChevronRight></FaChevronRight>
            </button>
        </div>
    );
};

Pagination.propTypes = {
    currentPage: PropTypes.number,
    totalPage: PropTypes.number,
    setNextPage: PropTypes.func,
    setBackPage: PropTypes.func,
};

export default Pagination;
