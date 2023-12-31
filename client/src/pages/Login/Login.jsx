import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getAccessToken, setAccessToken, setUser } from "../../store/authReducer";
import { login, apiLogin } from "../../api/auth";
import bannerHero from "../../assets/bannerHero.jpg";
import { Logo } from "../../component";
import { AiOutlineCheck } from "react-icons/ai";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [loginCredentials, setLoginCredentials] = useState({
        email: "",
        password: "",
    });

    const token = useSelector(getAccessToken);

    const [loggingIn, setLoggingIn] = useState(false);

    const [loginSuccessful, setLoginSuccesful] = useState(false);

    const [isBlocked, setIsBlocked] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoggingIn(true);
        const response = await login(loginCredentials);

        if (response.status === 200) {
            console.log(response.data.userData.isBlocked);
            if (response.data.userData.isBlocked) {
                setIsBlocked(true);
                setTimeout(() => navigate("/"), 3000);
            } else {
                dispatch(setAccessToken(response.data.accessToken));
                dispatch(setUser(response.data.userData));
                setLoginSuccesful(true);
                setTimeout(() => navigate("/"), 1000);
            }
        } else {
            window.alert(response.response?.data?.msg || response.response?.data.message);

            setLoggingIn(false);
        }
    };

    useEffect(() => {
        if (token) {
            navigate("/");
        }
    }, []);

    return (
        <main className='grid  grid-rows-1 lg:grid-cols-2 w-full  h-screen m-auto'>
            <section className=' hidden lg:block max-h-screen  rounded-lg'>
                <img src={bannerHero} alt='' className='w-full h-full object-cover' />
            </section>
            <div className='flex items-center justify-center w-full px-5'>
                <section className='px-7 py-10 rounded-md shadow-md bg-white/[0.7] flex flex-col gap-6 w-full max-w-lg'>
                    <Logo />
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-3xl font-bold mb-3 '>Đăng nhập</h1>

                        <form action='' className='flex flex-col gap-3' onSubmit={handleSubmit}>
                            <label className='flex flex-col'>
                                Email
                                <input
                                    type='email'
                                    className='border rounded-md p-1.5 shadow-sm'
                                    value={loginCredentials.email}
                                    onChange={(e) =>
                                        setLoginCredentials({
                                            ...loginCredentials,
                                            email: e.target.value,
                                        })
                                    }
                                />
                            </label>
                            <label className='flex flex-col'>
                                Mật khẩu
                                <input
                                    type='password'
                                    className='border rounded-md p-1.5 shadow-sm'
                                    value={loginCredentials.password}
                                    onChange={(e) =>
                                        setLoginCredentials({
                                            ...loginCredentials,
                                            password: e.target.value,
                                        })
                                    }
                                />
                            </label>
                            <div className='w-full py-2 flex flex-col gap-4 items-center '>
                                <button
                                    className={
                                        !loginSuccessful
                                            ? "btn-primary w-2/3 text-lg text-center"
                                            : "btn-primary w-2/3 text-lg bg-green-500 flex gap-2 justify-center"
                                    }
                                    disabled={loggingIn || !loginCredentials.email || !loginCredentials.password}
                                >
                                    {loginSuccessful && <AiOutlineCheck className='mt-1'></AiOutlineCheck>}
                                    <div className='flex items-center justify-center'>
                                        {loggingIn
                                            ? !loginSuccessful
                                                ? isBlocked
                                                    ? "Bạn đã bị mất quyền truy cập. Vui lòng liên hệ quản lý cửa hàng."
                                                    : "Đang đăng nhập..."
                                                : "Đăng nhập thành công"
                                            : "Đăng nhập"}
                                    </div>
                                </button>

                                <Link to='/signup' className='underline text-gray-600'>
                                    Tạo tài khoản mới
                                </Link>
                                <Link to='/forgot-password' className='underline text-gray-600'>
                                    Quên mật khẩu?
                                </Link>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Login;
