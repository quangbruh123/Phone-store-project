import ProductListing from "../pages/ProductListing/ProductListing";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";

const authRoutes = [
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <Signup />,
    },
];

const contentRoutes = [
    {
        path: "/products",
        element: <ProductListing />,
    },

    {
        path: "/product/:productId",
        //   element: <ProductDetails />,
    },

    {
        path: "/mockman",
        //   element: <Mockman />,
    },
];
export { authRoutes, contentRoutes };
