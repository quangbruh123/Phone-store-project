import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
// import admin from '@/Api_Call/admin';
import { changeState } from "../../api/admin";
import useFetchDataForArray from "../../utils/useFetchDataForArray";
const user = [
    {
        isBlocked: false,
        _id: "6590568073e41d7a91d40140",
        name: "bruh",
        email: "20520716@gm.uit.edu.vn",
        phoneNumber: "0868331233",
        password: "$2a$10$KKMT9WCittqSlHTbfgXR8OqaKZBAjv.VSNlK3gUHhX3G8Cw1nBY7i",
        role: "user",
        wishlist: [],
        cart: [],
        __v: 0,
        refreshToken:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTkwNTY4MDczZTQxZDdhOTFkNDAxNDAiLCJyb2xlIjoidXNlciIsImlhdCI6MTcwNDI2Nzg1MCwiZXhwIjoxNzA0MzU0MjUwfQ.gDP6MskZjMeZ7o6Dj9wGA_0RHsDskcTTe8GVvGeKl_Q",
    },
    {
        isBlocked: false,
        _id: "659056af44ca7bd4fe5bb071",
        name: "Thái",
        email: "example@gmail.com",
        phoneNumber: "0703174618",
        password: "$2a$10$bC9LcSH3L.FC235vkDvw2eyEZkjjlrWuJvtqmACM5/8Bkc32aEZsq",
        role: "user",
        wishlist: [],
        cart: [],
        __v: 0,
    },
    {
        isBlocked: false,
        _id: "6591284afc2eeeb2c9fa9f92",
        name: "1",
        email: "1@gmail.com",
        phoneNumber: "0933114569",
        password: "$2a$10$IS.2Ak6T9uZf1ssNmL8Rcu5yXH.zd7xZqEaRIxipIP4C4K8Bevp1W",
        role: "user",
        wishlist: [],
        cart: [],
        __v: 0,
    },
    {
        isBlocked: false,
        _id: "659406442d6cacca83f79009",
        name: "Thái",
        email: "thaiduong7v@gmail.com",
        phoneNumber: "0868331233",
        password: "$2a$10$KKMT9WCittqSlHTbfgXR8OqaKZBAjv.VSNlK3gUHhX3G8Cw1nBY7i",
        role: "admin",
        wishlist: [],
        cart: [],
        __v: 0,
        refreshToken:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTk0MDY0NDJkNmNhY2NhODNmNzkwMDkiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MDQyNjc4NDIsImV4cCI6MTcwNDM1NDI0Mn0.LzRMrzAEeWZaxSKKXTQSN6AxZjw4o5-yhGVr2wQPFjc",
    },
];

export default function UserItem() {
    const { data, isLoading, error, reFetch } = useFetchDataForArray("/user", null);

    // useEffect(
    //     getAllUser().then((res) => {
    //         console.log(res.data);
    //     }),
    //     []
    // );
    // const [userList, setUserList] = useState([]);

    // useEffect(() => {
    //     setUserList(data);
    // }, [data]);
    // const getUserList = () => {
    //   admin
    //     .getUsers()
    //     .then((res) => {
    //       setUserList(res.data);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    // };

    const handleState = (state, id) => {
        changeState(id, state)
            .then(() => {
                reFetch();
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    // useEffect(() => {
    //   getUserList();
    // }, []);

    return (
        <>
            {data?.map((current, index) => {
                return (
                    <div key={index} className='justify-evenly flex bg-pink-300 m-5 py-4 '>
                        <div className='self-center w-[250px]'>
                            <div className='ml-5 '>Họ và tên: {current.name}</div>
                            <div className='ml-5 '>Số điện thoại: {current.phoneNumber}</div>
                            <div className='ml-5 '>Email: {current.email}</div>
                        </div>
                        {!current.isBlocked ? (
                            <Button
                                className='self-center w-[100px]'
                                onClick={() => {
                                    handleState(current.isBlocked, current._id);
                                }}
                                color='primary'
                                disableRipple='true'
                            >
                                Vô hiệu hóa
                            </Button>
                        ) : (
                            <Button
                                className='self-center w-[100px]'
                                onClick={() => {
                                    handleState(current.isBlocked, current._id);
                                }}
                                color='primary'
                                disableRipple='true'
                            >
                                Kích hoạt
                            </Button>
                        )}
                    </div>
                );
            })}
        </>
    );
}
