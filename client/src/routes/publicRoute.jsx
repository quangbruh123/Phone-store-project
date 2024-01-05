import ProductListing from "../pages/ProductListing/ProductListing";
import ProductDetails from "../pages/productDetails/ProductDetails";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import AdminPage from "../pages/AdminPage";
import ResetPassword from "../pages/ResetPassword";
import ForgotPassword from "../pages/ForgotPassword";
const authRoutes = [
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <Signup />,
    },
    {
        path: "/forgot-password",
        element: <ForgotPassword />,
    },
    {
        path: "/resetPassword",
        element: <ResetPassword />,
    },
    // /resetPassword?email=thaiduong7v@gmail.com&resetToken=983033
];

const contentRoutes = [
    {
        path: "/products",
        element: <ProductListing />,
    },

    {
        path: "/product/:productId/:slug",
        element: <ProductDetails />,
    },

    {
        path: "/mockman",
        //   element: <Mockman />,
    },
    {
        path: "/admin",
        element: <AdminPage />,
    },
];
export { authRoutes, contentRoutes };
