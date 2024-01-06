import { Tab, Tabs, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

import { useState } from "react";
import { userOrdersForUser } from "../../api/order";
import parseDate from "../../utils/parseDate";
export default function UserOrderList() {
    const [orderList, setOrderList] = useState([]);

    const handleStateOfOrder = (key) => {
        userOrdersForUser(key)
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

                            <TableColumn>Thành tiền</TableColumn>
                            <TableColumn>Ngày đặt hàng</TableColumn>
                        </TableHeader>
                        <TableBody emptyContent={"Chưa có đơn hàng phù hợp."}>
                            {orderList?.map((current, index) => {
                                return (
                                    <TableRow key={index}>
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell>{current._id}</TableCell>

                                        <TableCell>{current.total} VND</TableCell>
                                        <TableCell>{parseDate(current.dateCreated)}</TableCell>
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
