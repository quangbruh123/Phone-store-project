// import { useProductsContext } from "../../contexts";

const SortBy = () => {
    // const {
    //   applyFilters,
    //   filters: { sortBy },
    // } = useProductsContext();
    return (
        <label>
            <select
                name='sortBy'
                // value={sortBy}
                className='w-max py-1 px-2 rounded-md cursor-pointer shadow-md   hover:shadow-lg '
                // onChange={(e) => applyFilters("sortBy", e.target.value)}
            >
                <option value='' defaultValue='' disabled>
                    Mặc định
                </option>
                <option value='low_to_high' className=''>
                    Tăng dần
                </option>
                <option value='high_to_low' className=''>
                    Giảm dần
                </option>
            </select>
        </label>
    );
};

export default SortBy;
