import { AiFillEyeInvisible, AiFillEye, AiOutlineCheck } from "react-icons/ai";

import { Link, useNavigate } from "react-router-dom";

import bannerHero from "../../assets/bannerHero.jpg";

import { resetPassword } from "../../api/auth";
import { Logo } from "../../component";
import { useEffect, useState } from "react";

const ResetPassword = () => {
    const [validating, setValidating] = useState(false);

    const [validatingSuccessful, setValidatingSuccessful] = useState(false);
    const [validatingFailed, setValidatingFailed] = useState(false);
    const [newPassword, setNewPassword] = useState();
    const [showPassword, setShowPassword] = useState({
        newPassword: false,
        confirmPassword: false,
    });
    const [confirmPassword, setConfirmPassword] = useState("");
    const nav = useNavigate();
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);

        const finEmail = urlParams.get("email");
        const token = urlParams.get("resetToken");

        if (!finEmail || !token) {
            nav("/");
        }
    });
    const handleSubmit = async (e) => {
        const urlParams = new URLSearchParams(window.location.search);

        const finEmail = urlParams.get("email");
        const token = urlParams.get("resetToken");
        console.log(token);
        e.preventDefault();
        setValidating(true);

        const response = await resetPassword(confirmPassword, finEmail, token).then((data) => {
            if (data.status && data.status == 200) {
                console.log(data);
                setValidatingSuccessful(true);
                setInterval(() => {
                    nav("/login");
                }, 2500);
            } else {
                window.alert(data.response.data.msg);
                setValidatingSuccessful(false);
                setValidatingFailed(true);
                setInterval(() => {
                    setValidatingFailed(false);

                    setValidating(false);
                }, 2500);
            }
        });
    };
    return (
        <main className='grid  grid-rows-1 md:grid-cols-2 w-full  h-screen m-auto '>
            <section className=' hidden md:block max-h-screen  rounded-lg'>
                <img src={bannerHero} alt='' className='w-full h-full object-cover' />
            </section>
            <div className='flex items-center justify-center w-full px-5'>
                <section className='px-10 py-10 rounded-md shadow-md bg-white/[0.7] flex flex-col gap-6 w-full max-w-lg'>
                    <Logo />
                    <div className='flex flex-col gap-2 '>
                        <h1 className='text-4xl font-bold mb-3 text-center'>Khôi phục mật khẩu</h1>

                        <form action='' className='flex flex-col gap-4 py-5' onSubmit={handleSubmit}>
                            <label className='flex flex-col relative'>
                                <input
                                    required
                                    placeholder='Mật khẩu'
                                    type={showPassword.newPassword ? "text" : "password"}
                                    className='border rounded-md p-1.5 shadow-sm'
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                />
                                <span
                                    className='absolute right-2 top-3 cursor-pointer'
                                    onClick={() =>
                                        setShowPassword({
                                            ...showPassword,
                                            newPassword: !showPassword.newPassword,
                                        })
                                    }
                                >
                                    {showPassword.newPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                                </span>
                            </label>
                            <label className='flex flex-col relative'>
                                <input
                                    required
                                    placeholder='Xác nhận mật khẩu'
                                    type={showPassword.confirmPassword ? "text" : "password"}
                                    className='border rounded-md p-1.5 shadow-sm'
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                <span
                                    className='absolute right-2 top-3 cursor-pointer'
                                    onClick={() =>
                                        setShowPassword({
                                            ...showPassword,
                                            confirmPassword: !showPassword.confirmPassword,
                                        })
                                    }
                                >
                                    {showPassword.confirmPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                                </span>
                                <p className={`pt-1 ${newPassword != confirmPassword ? "visible text-red-600" : "invisible"}`}>Mật khẩu không trùng</p>
                            </label>
                            <div className='w-full py-2 flex flex-col gap-4 items-center'>
                                <button
                                    type='submit'
                                    className={
                                        !validatingSuccessful
                                            ? "btn-primary w-2/3 text-lg text-center bg-black"
                                            : "btn-primary w-[95%] text-lg bg-green-500 flex gap-2 justify-center"
                                    }
                                    disabled={!newPassword || !confirmPassword || validating || validatingSuccessful || newPassword != confirmPassword}
                                >
                                    {validatingSuccessful && <AiOutlineCheck className=' mt-1'></AiOutlineCheck>}
                                    {validating
                                        ? !validatingSuccessful
                                            ? !validatingFailed
                                                ? "Đang xử lý..."
                                                : "Lỗi!"
                                            : "Thành công! Bạn sẽ được chuyển sang trang đăng nhập trong 2 giây."
                                        : "Khôi phục mật khẩu"}
                                </button>

                                <Link
                                    to='/login'
                                    className='underline text-base
            '
                                >
                                    Quay về trang đăng nhập.
                                </Link>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default ResetPassword;
