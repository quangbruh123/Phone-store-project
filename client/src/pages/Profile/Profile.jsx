import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getUserInfo, setUser, signOut } from "../../store/authReducer";
import { updateUser, getCurrentUser } from "../../api/user";

// import { AddressCard, AddressForm } from "../components";
// import Address from "../components/address/Address";

const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userInfo = useSelector(getUserInfo);

    const [userInfoState, setUserInfoState] = useState({
        name: userInfo?.name,
        phoneNumber: userInfo?.phoneNumber,
        email: userInfo?.email,
    });
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

    const handleEditUserInfo = async (e) => {
        e.preventDefault();
        toast.loading("Đang xử lý thông tin...");
        const response = updateUser(userInfoState).then((data) => {
            if (data.status == 200) {
                console.log(data);
                toast.dismiss();
                toast.success("Sửa thông tin người dùng thành công.");
                setUserInfoState((prev) => ({
                    ...prev,
                    email: data?.data?.updateUser?.email,
                    name: data?.data?.updateUser?.name,
                    phoneNumber: data?.data?.updateUser?.phoneNumber,
                }));
                dispatch(setUser(data.data.updateUser));
            } else {
                console.log(data);
                toast.dismiss();
                toast.error("Đã có lỗi xảy ra.");
            }
        });

        console.log(response);
        setIsEdit(false);
    };

    const handleChangeUserInfo = (event) => {
        const value = event.target.value;
        setUserInfoState((prev) => ({
            ...prev,
            [event.target.name]: value,
        }));
    };

    useEffect(() => {
        const response = getCurrentUser().then((data) => {
            console.log(data);
            setUserInfoState((prev) => ({
                ...prev,
                email: data.data.email,
                name: data.data.name,
                phoneNumber: data.data.phoneNumber,
            }));
            dispatch(setUser(data.data));
        });
    }, []);

    return (
        <div className='min-h-[80vh] min-w-md max-w-lg m-auto mt-10'>
            <section className='h-full p-7 rounded-md shadow-sm bg-white/[0.7] flex flex-col gap-6 w-full'>
                <div className='flex font-semibold text-xl'>Hồ sơ người dùng</div>
                <div className='flex flex-col gap-4 w-full p-5'>
                    <p>
                        <span className='text-gray-600 me-1'>Username:</span>
                        <span className='break-all'>{userInfo?.name}</span>
                        {isEdit && (
                            <div>
                                <input
                                    className='border-[1px] border-gray-300 px-3 py-3 w-full rounded-lg mt-3'
                                    placeholder='Nhập tên người dùng...'
                                    name='name'
                                    value={userInfoState.name}
                                    onChange={handleChangeUserInfo}
                                ></input>
                            </div>
                        )}
                    </p>
                    <p>
                        <span className='text-gray-600 me-1'>Email:</span> <span className='break-all'>{userInfo?.email}</span>
                        {isEdit && (
                            <div>
                                <input
                                    className='border-[1px] border-gray-300 px-3 py-3 w-full rounded-lg mt-3'
                                    placeholder='Nhập email...'
                                    name='email'
                                    value={userInfoState.email}
                                    onChange={handleChangeUserInfo}
                                ></input>
                            </div>
                        )}
                    </p>
                    <p>
                        <span className='text-gray-600 me-1'>Số điện thoại:</span> <span className='break-all'>{userInfo?.phoneNumber}</span>
                        {isEdit && (
                            <div>
                                <input
                                    className='border-[1px] border-gray-300 px-3 py-3 w-full rounded-lg mt-3'
                                    placeholder='Nhập số điện thoại...'
                                    name='phoneNumber'
                                    value={userInfoState.phoneNumber}
                                    onChange={handleChangeUserInfo}
                                ></input>
                            </div>
                        )}
                    </p>
                    <hr />
                    <div className='flex w-full justify-between items-center'>
                        <button
                            disabled={loggingOut}
                            className='w-2/5 text-sm bg-blue-600 py-2 px-4 text-white rounded-md hover:bg-rose-700'
                            onClick={(e) => {
                                if (isEdit) {
                                    handleEditUserInfo(e);
                                } else {
                                    setIsEdit(true);
                                }
                            }}
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
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Profile;
