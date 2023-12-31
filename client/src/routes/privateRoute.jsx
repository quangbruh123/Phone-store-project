import Cart from "../pages/Cart/Cart";
import Wishlist from "../pages/Wistlist/Wishlist";
import Profile from "../pages/Profile/Profile";
import AdminPage from "../pages/AdminPage";
import Orders from "../pages/Order/Orders";
import UserOrderList from "../pages/UserOrderList";
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
        element: <Orders />,
    },
    {
        path: "/profile",
        element: <Profile />,
    },
    {
        path: "/user-order-list",
        element: <UserOrderList />,
    },
    {
        path: "/admin",
        element: <AdminPage />,
    },
];
export { privateRoutes };
