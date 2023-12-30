// import { useProductsContext } from "../../contexts";
import TrendingCard from "./TrendingCard";

const TrendingList = () => {
    // const { trendingProducts } = useProductsContext();
    const product = {
        _id: 1,
        name: "Samsung Galaxy S10",
        price: "10.000.000",
        inCart: false,
        category: "Phone",
        image: "https://th.bing.com/th/id/R.0d6e2adc8e1e2b9cae04985af504bbd5?rik=T%2bYzKSYxWJ%2bb%2bQ&pid=ImgRaw&r=0",
    };
    return (
        <div>
            <div>
                <h1 className='text-3xl md:text-4xl lg:text-5xl  break-words flex items-center '>Sản phẩm nổi bật</h1>
            </div>
            <section className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 mt-10'>
                <TrendingCard product={product} />
                <TrendingCard product={product} />
                <TrendingCard product={product} />
                <TrendingCard product={product} />
                <TrendingCard product={product} />
                <TrendingCard product={product} />
                <TrendingCard product={product} />
                <TrendingCard product={product} />
            </section>
        </div>
    );
};

export default TrendingList;
