// import { useProductsContext } from "../../contexts";
import CategoryCard from "./CategoryCard";

const CategoryList = ({ catRef }) => {
    // const { categoryList } = useProductsContext();
    const categoryList = [
        {
            _id: 1,
            categoryName: "Phone",
            categoryImg: "https://www.trustedreviews.com/wp-content/uploads/sites/54/2019/04/SamsungGalaxyS10float-2-2-1920x1280-920x613.jpeg",
        },
        {
            _id: 2,
            categoryName: "Laptop",
            categoryImg: "https://cdn.mos.cms.futurecdn.net/MjGcFQXzKM2g72qzhgyP28-1200-80.jpg",
        },
        {
            _id: 3,
            categoryName: "Accesories",
            categoryImg: "https://th.bing.com/th/id/R.f66599ee3504083702ba82049ac3afb4?rik=KJCLh9E5KsiaOw&pid=ImgRaw&r=0",
        },
    ];
    return (
        <>
            <h1 className='text-3xl md:text-4xl break-words text-center mt-10'>Danh mục</h1>
            <section className='grid grid-cols-1 md:grid-cols-3 gap-4 py-4 mt-1' ref={catRef}>
                {categoryList.map((categoryItem) => (
                    <CategoryCard key={categoryItem._id} category={categoryItem} />
                ))}
            </section>
        </>
    );
};

export default CategoryList;
