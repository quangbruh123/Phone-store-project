import { AiFillEyeInvisible, AiFillEye, AiOutlineCheck } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import bannerHero from "../../assets/bannerHero.jpg";

import { signUp } from "../../api/auth";
import { Logo } from "../../component";
import { useEffect, useState } from "react";

const Signup = () => {
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState({
        username: "",
        email: "",
        password: "",
        phoneNumber: "",
        name: "",
    });
    const [showPassword, setShowPassword] = useState({
        password: false,
        confirmPassword: false,
    });
    const [confirmPassword, setConfirmPassword] = useState("");

    const [signingUp, setSigningUp] = useState(false);

    const [signUpSuccessful, setSignUpSuccessful] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (userDetails.password != confirmPassword) {
        } else {
            const response = await signUp(userDetails).then((data) => {
                console.log(data);
            });
        }
    };

    const isDisabled =
        signingUp || !userDetails.username || !userDetails.email || !userDetails.password || !confirmPassword || userDetails.name || userDetails.phoneNumber;
    return (
        <main className='grid  grid-rows-1 md:grid-cols-2 w-full  h-screen m-auto '>
            <section className=' hidden md:block max-h-screen  rounded-lg'>
                <img src={bannerHero} alt='' className='w-full h-full object-cover' />
            </section>
            <div className='flex items-center justify-center w-full px-5'>
                <section className='px-10 py-10 rounded-md shadow-md bg-white/[0.7] flex flex-col gap-6 w-full max-w-lg'>
                    <Logo />
                    <div className='flex flex-col gap-2 '>
                        <h1 className='text-4xl font-bold mb-3'>Đăng ký tài khoản</h1>

                        <form action='' className='flex flex-col gap-4 py-5' onSubmit={handleSubmit}>
                            <label className='flex flex-col'>
                                <input
                                    type='text'
                                    required
                                    placeholder='Họ tên người dùng...'
                                    className='border rounded-md p-1.5 shadow-sm'
                                    value={userDetails.name}
                                    onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
                                />
                            </label>
                            <label className='flex flex-col'>
                                <input
                                    type='text'
                                    required
                                    placeholder='Số điện thoại'
                                    className='border rounded-md p-1.5 shadow-sm'
                                    value={userDetails.phoneNumber}
                                    onChange={(e) => setUserDetails({ ...userDetails, phoneNumber: e.target.value })}
                                />
                            </label>
                            <label className='flex flex-col'>
                                <input
                                    type='text'
                                    required
                                    placeholder='Username'
                                    className='border rounded-md p-1.5 shadow-sm'
                                    value={userDetails.username}
                                    onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })}
                                />
                            </label>
                            <label className='flex flex-col'>
                                <input
                                    type='email'
                                    required
                                    placeholder='Email'
                                    className='border rounded-md p-1.5 shadow-sm'
                                    value={userDetails.email}
                                    onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                                />
                            </label>
                            <label className='flex flex-col relative'>
                                <input
                                    required
                                    placeholder='Mật khẩu'
                                    type={showPassword.password ? "text" : "password"}
                                    className='border rounded-md p-1.5 shadow-sm'
                                    value={userDetails.password}
                                    onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })}
                                />
                                <span
                                    className='absolute right-2 top-3 cursor-pointer'
                                    onClick={() =>
                                        setShowPassword({
                                            ...showPassword,
                                            password: !showPassword.password,
                                        })
                                    }
                                >
                                    {showPassword.password ? <AiFillEye /> : <AiFillEyeInvisible />}
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
                                <p
                                    className={`pt-1 ${
                                        userDetails.password && confirmPassword && userDetails.password !== confirmPassword
                                            ? "visible text-red-600"
                                            : "invisible"
                                    }`}
                                >
                                    Password Mismatch
                                </p>
                            </label>
                            <div className='w-full py-2 flex flex-col gap-4 items-center'>
                                <button type='submit' className='btn-primary w-2/3 text-lg text-center' disabled={isDisabled}>
                                    {signingUp ? (!signUpSuccessful ? "Đang xử lý..." : "Đăng ký thành công") : "Tạo tài khoản"}
                                </button>
                                <p className='text-gray-600 text-sm'>
                                    Already have an account?{" "}
                                    <Link
                                        to='/login'
                                        className='underline text-base
            '
                                    >
                                        Login
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Signup;
