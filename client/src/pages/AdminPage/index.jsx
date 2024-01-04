import FunctionTabs from "./FunctionTabs";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAccessToken } from "../../store/authReducer.js";
import handleRole from "../../utils/handleRole.js";

const AdminPage = () => {
    const nav = useNavigate();
    const token = useSelector(getAccessToken);
    useEffect(() => {
        const res = handleRole(token);
        if (!res) nav("/");
    });
    return (
        <div className='mx-20 my-5'>
            <div className='font-bold text-2xl mb-4 text-center uppercase'>Trang quản lý cho Phone Store DMT</div>
            <FunctionTabs />
        </div>
    );
};

export function Component() {
    return <AdminPage />;
}

export default AdminPage;
