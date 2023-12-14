import { BsArrowDownRightCircle } from "react-icons/bs";

import bannerImg from "../../assets/R.jpg";

import { useNavigate } from "react-router";

const Banner = ({ catRef }) => {
    const navigate = useNavigate();

    return (
        <main className=' flex justify-between items-center py-1 mb-5  relative'>
            <section className='max-w-xl mx-auto sm:mx-0  w-full py-2  lg:w-2/3'>
                <h1 className='text-6xl  sm:text-7xl lg:text-8xl font-semibold  py-3 w-full '>Điện thoại di dộng và phụ kiện</h1>
                <p className='py-3 text-md  text-gray-600'>
                    Đắm chìm vào thiên đường công nghệ cùng chúng tôi.
                    <br />
                    Với hơn 20 hãng điện thoại khác nhau.
                </p>
                <section className='flex items-center'>
                    <button className='btn-primary text-sm md:text-base' onClick={() => navigate("/products")}>
                        Khám phá ngay
                    </button>
                    <button
                        className='p-3 flex items-center'
                        onClick={() =>
                            catRef.current.scrollIntoView({
                                behavior: "smooth",
                            })
                        }
                    >
                        <span className='mx-2 text-sm md:text-base'>Tìm hiểu thêm</span> <BsArrowDownRightCircle className='text-lg' />
                    </button>
                </section>
            </section>
            <section className='hidden w-1/2 lg:flex justify-end'>
                <img src={bannerImg} alt='bannerImg' className='w-[100%] h-[100%] object-contain' />
            </section>
        </main>
    );
};

export default Banner;
