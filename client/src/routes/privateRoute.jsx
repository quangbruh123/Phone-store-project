import Cart from "../pages/Cart/Cart";
import Wishlist from "../pages/Wistlist/Wishlist";
import Profile from "../pages/Profile/Profile";
const privateRoutes = [
    {
        path: "/cart",
        element: <Cart />,
    },
    {
        path: "/wishlist",
        element: <Wishlist />,
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
        element: <Profile />,
    },
];
export { privateRoutes };
