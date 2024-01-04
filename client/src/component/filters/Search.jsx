import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import useFetchDataForObject from "../../utils/useFetchDataForObject";
import CartItemCard from "../cart/CartItemCard";
import spinningLoaders from "../../assets/loaderBlack.svg";

const Search = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [query, setQuery] = useState({
        phoneName: "",
    });

    const { data, isLoading, error } = useFetchDataForObject("/phone/filter", query);

    const [search, setSearch] = useState("");

    const [showList, setShowList] = useState(true);
    const [searching, setSearching] = useState(false);

    const [productFilter, setProductFilter] = useState([]);

    useEffect(() => {
        if (location?.pathname !== "/products") {
            setSearch("");
        }
    }, [location]);
    useEffect(() => {
        setSearching(true);
        let id;
        id = setTimeout(() => {
            console.log(data);
            setProductFilter(data.products);
            setSearching(false);
        }, 500);

        return () => {
            clearTimeout(id);
        };
    }, [query]);

    const changeHandler = (e) => {
        var temp = e.target.value;
        setQuery((prev) => ({
            ...prev,
            phoneName: temp,
        }));
        if (!showList) setShowList(true);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        // applyFilters("searchText", search);
        setShowList(false);
        navigate("/products");
    };

    return (
        <>
            <form
                onSubmit={submitHandler}
                className={`flex items-center bg-black/[0.075] px-3 ${search && showList ? "rounded-t-md" : "rounded-full"} text-sm transition`}
            >
                <input
                    className='w-full py-2 px-3 bg-transparent focus:outline-none'
                    type='search'
                    value={query.phoneName}
                    placeholder='Tìm kiếm sản phẩm'
                    onChange={changeHandler}
                />
                <CiSearch />
            </form>
            {query.phoneName && showList && (
                <ul className='absolute bg-amber-50 w-full max-h-72 overflow-auto rounded-b-md z-10'>
                    {searching ? (
                        <li className='h-10 flex items-center justify-center'>
                            <img src={spinningLoaders} alt='Searching...' />
                        </li>
                    ) : productFilter?.length > 0 ? (
                        productFilter.map((product) => (
                            <li
                                key={product._id}
                                className='cursor-pointer hover:bg-gray-200'
                                onClick={() => {
                                    navigate(`/product/${product?._id}/${product?.slug}`);
                                    navigate(0);
                                    setQuery((prev) => ({
                                        ...prev,
                                        phoneName: "",
                                    }));
                                }}
                            >
                                <div className='flex h-[120px] mb-3'>
                                    <div className='h-full w-[30%] p-4'>
                                        <img src={product.imageLinks[2]} className='w-full h-full object-cover'></img>
                                    </div>
                                    <div className='py-4'>
                                        <div>{product.phoneName}</div>
                                        <div>{(product.price * 1).toLocaleString("vi-VN")} đồng</div>
                                    </div>
                                </div>
                            </li>
                        ))
                    ) : (
                        <li className='h-10 flex items-center justify-center'>No Item to show</li>
                    )}
                </ul>
            )}
        </>
    );
};

export default Search;
