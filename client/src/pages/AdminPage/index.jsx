import FunctionTabs from "./FunctionTabs";
import { useSelector } from "react-redux";
import { getAccessToken } from "../../store/authReducer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AdminPage() {
    const token = useSelector(getAccessToken);

    const nav = useNavigate();

    const handleRole = () => {
        if (!token) {
            nav("/");
        } else {
            const tokenParts = token?.split(".");
            const decoded = JSON.parse(atob(tokenParts[1]));

            if (decoded.role != "admin") {
                nav("/");
            }
        }
    };
    useEffect(() => {
        handleRole();
    });
    return (
        <div className='mx-20 my-5'>
            <div className='font-bold text-2xl mb-4 text-center uppercase'>Trang quản lý cho Phone Store DMT</div>
            <FunctionTabs />
        </div>
    );
}

export function Component() {
    return <AdminPage />;
}

export default AdminPage;
