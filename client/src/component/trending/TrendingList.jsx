// import { useProductsContext } from "../../contexts";
import TrendingCard from "./TrendingCard";
import SingleProduct from "../products/SingleProduct";
const TrendingList = () => {
    // const { trendingProducts } = useProductsContext();
    const product = {
        avgRating: 0,
        totalRating: 0,
        quantity: 0,
        soldQuantity: 0,
        _id: "65729faf5b5e8003e94ad9f7",
        phoneName: "Điện thoại Masstel IZI",
        brand: "Masstel",
        price: 3700,
        slug: "dien-thoai-masstel-izi-69f2fa6c",
        phoneStorage: ["Xanh", "Dương", "Đen", "Đen", "-", "Đỏ"],
        imageLinks: [
            "https:////cdn.tgdd.vn/Products/Images/42/265311/masstel-izi-10-4g-xanh-1-1.jpg",
            "https:////cdn.tgdd.vn/Products/Images/42/265311/masstel-izi-10-4g-xanh-2-1.jpg",
            "https:////cdn.tgdd.vn/Products/Images/42/265311/masstel-izi-10-4g-xanh-3-1.jpg",
            "https:////cdn.tgdd.vn/Products/Images/42/265311/masstel-izi-10-4g-xanh-4-1.jpg",
            "https:////cdn.tgdd.vn/Products/Images/42/265311/masstel-izi-10-4g-xanh-5.jpg",
        ],
        description:
            "Masstel IZI 10 4G mang thiết kế của chiếc điện thoại phổ thông với màn hình 262.000 màu 1.77 inch, độ phân giải 128 x 160 Pixels cho hình ảnh rõ ràng, đẹp mắt, giao diện dễ nhìn, thân thiện dễ sử dụng.\nMặt lưng và khung viền bằng nhựa cấu trúc chắc chắn, góc cạnh bo cong tạo cảm giác vừa vặn tay cầm.\nCùng với hệ bàn phím có phím nhấn lớn, rõ ràng, nhấn nhạy và êm, thao tác soạn thảo nhanh chóng, tiện lợi, các chức năng cơ bản thiết thực, nhanh chóng giúp người dùng làm quen ngay lần đầu sử dụng.\n",
        technicalSpecifications: {
            "Màn hình:": 'TFT LCD1.77"262.000 màu',
            "SIM:": "2 Nano SIMHỗ trợ 4G VoLTE",
            "Danh bạ:": "2000 số",
            "Thẻ nhớ:": "MicroSD, hỗ trợ tối đa 32 GB",
            "Radio FM:": "FM không cần tai nghe",
            "Jack cắm tai nghe:": "3.5 mm",
            "Pin:": "1000 mAh",
            Hãng: "Masstel. Xem thông tin hãng",
        },
        createdAt: "2023-12-08T04:46:39.360Z",
        updatedAt: "2023-12-08T04:46:39.360Z",
        __v: 0,
        ratings: [],
    };
    return (
        <div>
            <div>
                <h1 className='text-3xl md:text-4xl lg:text-5xl  break-words flex items-center '>Sản phẩm nổi bật</h1>
            </div>
            <section className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 mt-10'>
                <SingleProduct product={product} />
                <SingleProduct product={product} />
                <SingleProduct product={product} />
                <SingleProduct product={product} />
                <SingleProduct product={product} />
                <SingleProduct product={product} />
                <SingleProduct product={product} />
                <SingleProduct product={product} />
                <SingleProduct product={product} />
            </section>
        </div>
    );
};

export default TrendingList;
