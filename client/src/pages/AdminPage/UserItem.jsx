import { Button } from "@nextui-org/react";
import { changeState } from "../../api/admin";
import useFetchDataForArray from "../../utils/useFetchDataForArray";

export default function UserItem() {
    const { data, reFetch } = useFetchDataForArray("/user", null);

    const handleState = (state, id) => {
        changeState(id, state)
            .then(() => {
                reFetch();
            })
            .catch(function (error) {
                console.log(error);
            });
    };

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
