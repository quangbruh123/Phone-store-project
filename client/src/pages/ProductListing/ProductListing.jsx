import { BiFilter } from "react-icons/bi";
import { MdKeyboardArrowUp } from "react-icons/md";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

import Pagination from "../../component/pagination/Pagination";
import bannerImg from "../../assets/bannerHero.jpg";
import loadingGif from "../../assets/loading.gif";
import { Filters, SortBy, SingleProduct } from "../../component";

import useFetchDataForObject from "../../utils/useFetchDataForObject";

const ProductListing = () => {
    const location = useLocation();

    const [query, setQuery] = useState({
        phoneName: "",
        brand: "",
        sort: "",
        limit: 12,
    });

    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [showScrollArrow, setShowScrollArrow] = useState(false);
    const [productList, setProductList] = useState([]);
    const [totalPage, setTotalPage] = useState(0);

    const [page, setPage] = useState(1);
    const handleChangePage = (num) => {
        setPage((prev) => {
            return prev + num;
        });
    };

    const { data, isLoading, error } = useFetchDataForObject("/phone/filter", query);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    useEffect(() => {
        const toggleShowArrow = () => {
            if (window.scrollY > 300) {
                setShowScrollArrow(true);
            } else {
                setShowScrollArrow(false);
            }
        };
        window.addEventListener("scroll", toggleShowArrow);

        return () => {
            window.removeEventListener("scroll", toggleShowArrow);
        };
    }, []);

    useEffect(() => {
        console.log(data);
        setProductList(data?.products);
        setTotalPage(data?.totalPage);
    }, [data]);

    useEffect(() => {
        setQuery((prev) => {
            return {
                ...prev,
                page: page,
            };
        });
    }, [page]);

    const handleFilterChange = (name, value) => {
        setQuery((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleChangeSort = (e) => {
        if (e.target.value == "low_to_high") {
            setQuery((prev) => ({
                ...prev,
                sort: `price`,
            }));
        } else if (e.target.value == "high_to_low") {
            setQuery((prev) => ({
                ...prev,
                sort: `-price`,
            }));
        } else {
            setQuery((prev) => ({
                ...prev,
                sort: ``,
            }));
        }
    };

    const handleClearQuery = () => {
        setQuery({
            phoneName: "",
            brand: "",
            sort: "",
            limit: 12,
        });
    };

    return (
        <>
            {isLoading ? (
                <div className='h-[70vh] w-full flex items-center justify-center overflow-hidden '>
                    <span>
                        <img width={250} src={loadingGif} alt='loading...' />
                    </span>
                </div>
            ) : (
                <div>
                    <header className='mb-3 h-[20rem]'>
                        <img src={bannerImg} alt='bannerImg' className='rounded-md h-full w-full object-cover' />
                    </header>
                    <section className='py-3 flex flex-col md:flex-row gap-2 justify-between'>
                        <h1 className='text-2xl font-bold' onClick={() => console.log(productList)}>
                            Danh sách sản phẩm
                        </h1>
                        <div className='flex items-center gap-2'>
                            <Filters
                                isFilterOpen={isFilterOpen}
                                setIsFilterOpen={setIsFilterOpen}
                                onChangeQuery={handleFilterChange}
                                clear={handleClearQuery}
                            />
                            <SortBy onChangeSort={handleChangeSort} />
                            <button
                                className={`flex py-1 px-2 rounded-md shadow-md items-center  gap-1 hover:bg-[--primary-text-color] hover:text-white hover:shadow-lg ${
                                    isFilterOpen ? "bg-[--primary-text-color] text-white" : ""
                                }`}
                                onClick={() => setIsFilterOpen(!isFilterOpen)}
                            >
                                <BiFilter className='text-lg' />
                                <span className='text-sm'>Bộ lọc</span>
                            </button>
                        </div>
                    </section>

                    {productList?.length > 0 ? (
                        <main className='relative grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
                            {productList.map((phone, idx) => {
                                return <SingleProduct key={idx} product={phone} />;
                            })}
                        </main>
                    ) : (
                        <p className='font-sans text-4xl  font-bold uppercase  tracking-wide text-gray-300 text-center w-full py-32'>Không có sản phẩm!</p>
                    )}
                    <Pagination
                        currentPage={page}
                        totalPage={totalPage}
                        setBackPage={() => handleChangePage(-1)}
                        setNextPage={() => handleChangePage(1)}
                    ></Pagination>
                    <button
                        className={` fixed bottom-10 bg-gray-800 right-2 p-2 rounded-full text-xl shadow-2xl transition-all delay-100 ease-in-out ${
                            showScrollArrow ? "block" : "hidden"
                        }`}
                        onClick={scrollToTop}
                    >
                        <MdKeyboardArrowUp className=' text-white' />
                    </button>
                </div>
            )}
        </>
    );
};

export default ProductListing;
