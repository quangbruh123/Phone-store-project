import React, { useEffect, useState } from "react";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Button,
    DropdownTrigger,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Pagination,
} from "@nextui-org/react";
import useFetchDataForArray from "../../../utils/useFetchDataForArray";
import { VerticalDotsIcon } from "./VerticalDotsIcon";
import { deletePhone } from "../../../api/admin";
import { ChevronDownIcon } from "./ChevronDownIcon";
import { columns } from "./data";
import { capitalize } from "./utils";
import AddItemModal from "./AddItemModal";

const INITIAL_VISIBLE_COLUMNS = ["phoneName", "brand", "price", "quantity", "actions"];

export default function TableItem() {
    const { data: phones, isLoading, error, reFetch } = useFetchDataForArray("/phone", null);

    const [visibleColumns, setVisibleColumns] = React.useState(new Set(INITIAL_VISIBLE_COLUMNS));

    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [sortDescriptor, setSortDescriptor] = React.useState({
        column: "amount",
        direction: "ascending",
    });
    const [page, setPage] = React.useState(1);

    const headerColumns = React.useMemo(() => {
        if (visibleColumns === "all") return columns;

        return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
    }, [visibleColumns]);

    // const [pages, setPages] = useState();
    const pages = Math.ceil([...phones].length / rowsPerPage);
    const items = React.useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        return [...phones].slice(start, end);
    }, [page, rowsPerPage, phones]);

    const sortedItems = React.useMemo(() => {
        return [...items].sort((a, b) => {
            const first = a[sortDescriptor.column];
            const second = b[sortDescriptor.column];
            const cmp = first < second ? -1 : first > second ? 1 : 0;

            return sortDescriptor.direction === "descending" ? -cmp : cmp;
        });
    }, [sortDescriptor, items]);

    const handleDelete = (id) => {
        deletePhone(id)
            .then(() => {
                window.alert("Đã xóa thành công");
                reFetch();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const renderCell = React.useCallback((phone, columnKey) => {
        const cellValue = phone[columnKey];

        switch (columnKey) {
            case "actions":
                return (
                    <div className='relative flex justify-end items-center gap-2'>
                        <Dropdown>
                            <DropdownTrigger>
                                <Button isIconOnly size='sm' variant='light'>
                                    <VerticalDotsIcon className='text-default-300' />
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu>
                                {/* <DropdownItem onClick={onOpen}>Sửa</DropdownItem> */}

                                <DropdownItem
                                    onClick={() => {
                                        handleDelete(phone._id);
                                    }}
                                >
                                    Xóa
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                );
            default:
                return cellValue;
        }
    }, []);

    const onRowsPerPageChange = React.useCallback((e) => {
        setRowsPerPage(Number(e.target.value));
        setPage(1);
    }, []);

    const topContent = React.useMemo(() => {
        return (
            <div className='flex flex-col gap-4'>
                <div className='flex justify-between '>
                    <AddItemModal />
                    <Dropdown>
                        <DropdownTrigger className='hidden sm:flex'>
                            <Button endContent={<ChevronDownIcon className='text-small' />} variant='flat'>
                                Cột cần hiển thị
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                            disallowEmptySelection
                            aria-label='Table Columns'
                            closeOnSelect={false}
                            selectedKeys={visibleColumns}
                            selectionMode='multiple'
                            onSelectionChange={setVisibleColumns}
                        >
                            {columns.map((column) => (
                                <DropdownItem key={column.uid} className='capitalize'>
                                    {capitalize(column.name)}
                                </DropdownItem>
                            ))}
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div className='flex justify-between items-center'>
                    <span className='text-default-400 text-small'>Tổng {phones?.length} sản phẩm</span>
                    <label className='flex items-center text-default-400 text-small'>
                        Số hàng mỗi trang
                        <select className='bg-transparent outline-none text-default-400 text-small' onChange={onRowsPerPageChange}>
                            <option value='5'>5</option>
                            <option value='10'>10</option>
                            <option value='15'>15</option>
                        </select>
                    </label>
                </div>
            </div>
        );
        // }, [visibleColumns, onRowsPerPageChange, phones.length]);
    }, [visibleColumns, onRowsPerPageChange, isLoading]);

    const bottomContent = React.useMemo(() => {
        return (
            <div className='py-2 px-2 flex justify-center items-center'>
                <Pagination isCompact showControls showShadow page={page} total={pages} onChange={setPage} />
            </div>
        );
    }, [pages]);

    return (
        <Table
            aria-label='Example table with custom cells, pagination and sorting'
            isHeaderSticky
            bottomContent={bottomContent}
            bottomContentPlacement='outside'
            classNames={{
                wrapper: "max-h-[382px]",
            }}
            sortDescriptor={sortDescriptor}
            topContent={topContent}
            topContentPlacement='outside'
            onSortChange={setSortDescriptor}
        >
            <TableHeader columns={headerColumns}>
                {(column) => (
                    <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"} allowsSorting={column.sortable}>
                        {column.name}
                    </TableColumn>
                )}
            </TableHeader>
            <TableBody emptyContent={"Không có sản phẩm"} items={sortedItems}>
                {(item) => <TableRow key={item._id}>{(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}</TableRow>}
            </TableBody>
        </Table>
    );
}
