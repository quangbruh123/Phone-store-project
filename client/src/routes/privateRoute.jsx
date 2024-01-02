import Cart from "../pages/Cart/Cart";
const privateRoutes = [
    {
        path: "/cart",
        element: <Cart />,
    },
    {
        path: "/wishlist",
        //   element: <Wishlist />,
    },
    // {
    //     path: "/checkout",
    //     //   element: <Checkout />,
    // },
    {
        path: "/orders",
        //   element: <Orders />,
    },
    {
        path: "/profile",
        //   element: <Profile />,
    },
];
export { privateRoutes };
