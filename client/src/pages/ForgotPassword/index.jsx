import { AiOutlineCheck } from "react-icons/ai";
import { Link } from "react-router-dom";

import bannerHero from "../../assets/bannerHero.jpg";

import { forgotPassword } from "../../api/auth";
import { Logo } from "../../component";
import { useState } from "react";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");

    const [validating, setValidating] = useState(false);

    const [validatingSuccessful, setValidatingSuccessful] = useState(false);
    const [validatingFailed, setValidatingFailed] = useState(false);

    const handleSubmit = async (e) => {
        console.log(email);
        e.preventDefault();
        setValidating(true);
        if (email) {
            const response = await forgotPassword(email).then((data) => {
                if (data.status && data.status == 200) {
                    console.log(data);
                    setValidatingSuccessful(true);
                } else {
                    window.alert(data.response.data.msg);
                    setValidatingSuccessful(false);
                    setValidatingFailed(true);
                    setInterval(() => {
                        setValidatingFailed(false);
                        setEmail("");
                        setValidating(false);
                    }, 2500);
                }
            });
        }
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
                            <label className='flex flex-col'>
                                <input
                                    type='text'
                                    required
                                    placeholder='Địa chỉ email của bạn...'
                                    className='border rounded-md p-1.5 shadow-sm'
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                />
                            </label>

                            <div className='w-full py-2 flex flex-col gap-4 items-center'>
                                <button
                                    type='submit'
                                    className={
                                        !validatingSuccessful
                                            ? "btn-primary w-2/3 text-lg text-center bg-black"
                                            : "btn-primary w-[95%] text-lg bg-green-500 flex gap-2 justify-center"
                                    }
                                    disabled={!email || validating || validatingSuccessful}
                                >
                                    {validatingSuccessful && <AiOutlineCheck className=' mt-1'></AiOutlineCheck>}
                                    {validating
                                        ? !validatingSuccessful
                                            ? !validatingFailed
                                                ? "Đang xử lý..."
                                                : "Email của bạn không tồn tại trong hệ thống"
                                            : "Thành công! Hãy kiểm tra hộp thư của bạn"
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

export default ForgotPassword;
