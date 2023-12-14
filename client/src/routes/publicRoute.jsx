import ProductListing from "../pages/ProductListing/ProductListing";

const authRoutes = [
    {
        path: "/login",
        //   element: <Login />,
    },
    {
        path: "/signup",
        //   element: <Signup />,
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
