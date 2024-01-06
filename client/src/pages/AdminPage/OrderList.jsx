import { useState } from "react";
import { TableHeader, Tab, TableColumn, Table, Tabs, TableBody, TableRow, TableCell, Tooltip } from "@nextui-org/react";
// import admin from '@/Api_Call/admin';
import { AcceptIcon } from "../../assets/AcceptIcon";
import { DeleteIcon } from "../../assets/DeleteIcon";
import { getOrder, updateOrderState } from "../../api/order";
import parseDate from "../../utils/parseDate";

export default function OrderList() {
    const [orderList, setOrderList] = useState([]);

    const handleState = (state, id) => {
        if (id) {
            updateOrderState(id, state)
                .then(() => {
                    getOrder("Pending")
                        .then((res) => {
                            setOrderList(res.data);
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    const handleStateOfOrder = (key) => {
        getOrder(key)
            .then((res) => {
                setOrderList(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <Tabs
                onSelectionChange={(key) => {
                    handleStateOfOrder(key);
                }}
                aria-label='Options'
                className='inline bg-section-pink'
                variant='light'
                size='lg'
                color='primary'
            >
                <Tab key='Pending' title='Đơn hàng đang chờ chấp thuận'>
                    <Table selectionMode='single'>
                        <TableHeader>
                            <TableColumn>STT</TableColumn>
                            <TableColumn>Mã đơn hàng</TableColumn>
                            <TableColumn>Người đặt</TableColumn>
                            <TableColumn>Thành tiền</TableColumn>
                            <TableColumn>Ngày đặt hàng</TableColumn>
                            <TableColumn>Thao tác</TableColumn>
                        </TableHeader>
                        <TableBody emptyContent={"Chưa có đơn hàng phù hợp."}>
                            {orderList?.map((current, index) => {
                                return (
                                    <TableRow key={index}>
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell>{current._id}</TableCell>
                                        <TableCell>{current.orderBy.name}</TableCell>

                                        <TableCell>{current.total} VND</TableCell>
                                        <TableCell>{parseDate(current.dateCreated)}</TableCell>
                                        <TableCell>
                                            <div className='relative flex items-center gap-2'>
                                                <Tooltip content='Chấp nhận' color='success'>
                                                    <span
                                                        className='text-lg text-default-400 cursor-pointer active:opacity-50'
                                                        onClick={() => {
                                                            handleState("Accepted", current._id);
                                                        }}
                                                    >
                                                        <AcceptIcon />
                                                    </span>
                                                </Tooltip>
                                                <Tooltip color='danger' content='Hủy đơn'>
                                                    <span
                                                        className='text-lg text-danger cursor-pointer active:opacity-50'
                                                        onClick={() => {
                                                            handleState("Rejected", current._id);
                                                        }}
                                                    >
                                                        <DeleteIcon />
                                                    </span>
                                                </Tooltip>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </Tab>

                <Tab key='Accepted' title='Đơn hàng đã được chấp thuận'>
                    <Table selectionMode='single'>
                        <TableHeader>
                            <TableColumn>STT</TableColumn>
                            <TableColumn>Mã đơn hàng</TableColumn>
                            <TableColumn>Người đặt</TableColumn>
                            <TableColumn>Thành tiền</TableColumn>
                            <TableColumn>Ngày đặt hàng</TableColumn>
                            <TableColumn>Ngày chấp thuận</TableColumn>
                        </TableHeader>
                        <TableBody emptyContent={"Chưa có đơn hàng phù hợp."}>
                            {orderList?.map((current, index) => {
                                return (
                                    <TableRow key={index}>
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell>{current._id}</TableCell>
                                        <TableCell>{current.orderBy.name}</TableCell>
                                        <TableCell>{current.total}VND</TableCell>
                                        <TableCell>{parseDate(current.dateCreated)}</TableCell>
                                        <TableCell>{parseDate(current.dateProceeded)}</TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </Tab>
                <Tab key='Rejected' title='Đơn hàng đã bị từ chối'>
                    <Table selectionMode='single'>
                        <TableHeader>
                            <TableColumn>STT</TableColumn>
                            <TableColumn>Mã đơn hàng</TableColumn>
                            <TableColumn>Người đặt</TableColumn>
                            <TableColumn>Thành tiền</TableColumn>
                            <TableColumn>Ngày đặt hàng</TableColumn>
                            <TableColumn>Ngày từ chối</TableColumn>
                        </TableHeader>
                        <TableBody emptyContent={"Chưa có đơn hàng phù hợp."}>
                            {orderList?.map((current, index) => {
                                return (
                                    <TableRow key={index}>
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell>{current._id}</TableCell>
                                        <TableCell>{current.orderBy.name}</TableCell>
                                        <TableCell>{current.total} VND</TableCell>
                                        <TableCell>{parseDate(current.dateCreated)}</TableCell>
                                        <TableCell>{parseDate(current.dateProceeded)}</TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </Tab>
            </Tabs>
        </>
    );
}
