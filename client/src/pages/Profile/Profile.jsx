import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getUserInfo, setUser, signOut } from "../../store/authReducer";
import { updateUser } from "../../api/user";

// import { AddressCard, AddressForm } from "../components";
// import Address from "../components/address/Address";

const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userInfo = useSelector(getUserInfo);
    console.log(userInfo);

    const [userInfoState, setUserInfoState] = useState({});
    const [addNewAddress, setAddNewAddress] = useState(false);
    const [loggingOut, setLoggingOut] = useState(false);
    const [isEdit, setIsEdit] = useState(false);

    const handleLogOut = () => {
        setLoggingOut(true);
        setTimeout(() => {
            dispatch(signOut());
            navigate("/login");
            setLoggingOut(false);
        }, 1000);
    };

    useEffect(() => {
        setUserInfoState(userInfo);
    }, []);

    return (
        <div className='min-h-[80vh] min-w-md max-w-lg m-auto mt-10'>
            <section className='h-full p-7 rounded-md shadow-sm bg-white/[0.7] flex flex-col gap-6 w-full'>
                <div className='flex font-semibold text-xl'>Hồ sơ người dùng</div>
                <div className='flex flex-col gap-4 w-full p-5'>
                    <p>
                        <span className='text-gray-600 me-1'>Username:</span>
                        <span className='break-all'>{userInfo?.name}</span>
                    </p>
                    <p>
                        <span className='text-gray-600 me-1'>Email:</span> <span className='break-all'>{userInfo?.email}</span>
                    </p>
                    <p>
                        <span className='text-gray-600 me-1'>Số điện thoại:</span> <span className='break-all'>{userInfo?.phoneNumber}</span>
                    </p>
                    <hr />
                    <div className='flex w-full justify-between items-center'>
                        <button
                            disabled={loggingOut}
                            className='w-2/5 text-sm bg-blue-600 py-2 px-4 text-white rounded-md hover:bg-rose-700'
                            onClick={handleLogOut}
                        >
                            {isEdit ? "Hoàn thành" : "Chỉnh sửa thông tin"}
                        </button>
                        <button
                            disabled={loggingOut}
                            className='w-2/5 text-sm bg-rose-600 py-2 px-4 text-white rounded-md hover:bg-rose-700'
                            onClick={handleLogOut}
                        >
                            {loggingOut ? "Đang đăng xuất..." : "Đăng xuất"}
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Profile;
