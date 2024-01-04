import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";
import { Editor } from "@tinymce/tinymce-react";

import { useEffect, useRef, useState } from "react";
import { EditIcon } from "../../../assets/EditIcon";

export default function EditItemModal() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const editorRef = useRef(null);

    const [payload, setPayload] = useState({});

    useEffect(() => {
        console.log(payload);
    }, [payload]);
    return (
        <>
            <div onClick={onOpen}>
                <EditIcon onClick={onOpen} color='success' />
            </div>
            <Modal size='3xl' isOpen={isOpen} onOpenChange={onOpenChange} placement='top-center' scrollBehavior={"outside"}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className='flex flex-col gap-1'>Thêm sản phẩm</ModalHeader>
                            <ModalBody>
                                <Input
                                    autoFocus
                                    label='Tên sản phẩm'
                                    variant='bordered'
                                    onChange={(e) => {
                                        setPayload((prev) => {
                                            return {
                                                ...prev,
                                                phoneName: e.target.value,
                                            };
                                        });
                                    }}
                                />
                                <Input
                                    label='Giá'
                                    variant='bordered'
                                    onChange={(e) => {
                                        setPayload((prev) => {
                                            return {
                                                ...prev,
                                                price: e.target.value,
                                            };
                                        });
                                    }}
                                />
                                <Input
                                    label='Số lượng'
                                    type='number'
                                    variant='bordered'
                                    onChange={(e) => {
                                        setPayload((prev) => {
                                            return {
                                                ...prev,
                                                quantity: e.target.value,
                                            };
                                        });
                                    }}
                                />
                                <Input
                                    label='Hãng'
                                    variant='bordered'
                                    onChange={(e) => {
                                        setPayload((prev) => {
                                            return {
                                                ...prev,
                                                brand: e.target.value,
                                            };
                                        });
                                    }}
                                />
                                <Input
                                    label='Dung lượng'
                                    placeholder='Tách các loại dung lượng bằng dấu phẩy...'
                                    variant='bordered'
                                    onChange={(e) => {
                                        setPayload((prev) => {
                                            return {
                                                ...prev,
                                                storage: e.target.value,
                                            };
                                        });
                                    }}
                                />
                                <div>Mô tả:</div>
                                <Editor
                                    apiKey='08q9h49w88pkez1dqb6wq6jhq2vxg55tq31gewuubrv1epe6'
                                    onInit={(evt, editor) => (editorRef.current = editor)}
                                    initialValue='<p>Nhập mô tả...</p>'
                                    init={{
                                        height: 500,
                                        menubar: false,
                                        plugins: [
                                            "advlist",
                                            "autolink",
                                            "lists",
                                            "link",
                                            "image",
                                            "charmap",
                                            "preview",
                                            "anchor",
                                            "searchreplace",
                                            "visualblocks",
                                            "code",
                                            "fullscreen",
                                            "insertdatetime",
                                            "media",
                                            "table",
                                            "code",
                                            "help",
                                            "wordcount",
                                        ],
                                        toolbar:
                                            "undo redo | blocks | " +
                                            "bold italic forecolor | alignleft aligncenter " +
                                            "alignright alignjustify | bullist numlist outdent indent | " +
                                            "removeformat | help",
                                        content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                                    }}
                                    onEditorChange={(newValue) => {
                                        setPayload((prev) => {
                                            return {
                                                ...prev,
                                                editor: newValue,
                                            };
                                        });
                                    }}
                                />
                                <div>Các thông số kỹ thuật:</div>

                                <Input
                                    label='Màn hình:'
                                    variant='bordered'
                                    onChange={(e) => {
                                        setPayload((prev) => {
                                            return {
                                                ...prev,
                                                specs: { ...prev.specs, "Màn hình": e.target.value },
                                            };
                                        });
                                    }}
                                />
                                <Input
                                    label='Hệ điều hành:'
                                    variant='bordered'
                                    onChange={(e) => {
                                        setPayload((prev) => {
                                            return {
                                                ...prev,
                                                specs: { ...prev.specs, "Hệ điều hành": e.target.value },
                                            };
                                        });
                                    }}
                                />
                                <Input
                                    label='Camera sau:'
                                    variant='bordered'
                                    onChange={(e) => {
                                        setPayload((prev) => {
                                            return {
                                                ...prev,
                                                specs: { ...prev.specs, "Camera sau": e.target.value },
                                            };
                                        });
                                    }}
                                />
                                <Input
                                    label='Camera trước:'
                                    variant='bordered'
                                    onChange={(e) => {
                                        setPayload((prev) => {
                                            return {
                                                ...prev,
                                                specs: { ...prev.specs, "Camera trước": e.target.value },
                                            };
                                        });
                                    }}
                                />
                                <Input
                                    label='Chip:'
                                    variant='bordered'
                                    onChange={(e) => {
                                        setPayload((prev) => {
                                            return {
                                                ...prev,
                                                specs: { ...prev.specs, Chip: e.target.value },
                                            };
                                        });
                                    }}
                                />
                                <Input
                                    label='RAM:'
                                    variant='bordered'
                                    onChange={(e) => {
                                        setPayload((prev) => {
                                            return {
                                                ...prev,
                                                specs: { ...prev.specs, RAM: e.target.value },
                                            };
                                        });
                                    }}
                                />

                                <Input
                                    label='SIM:'
                                    variant='bordered'
                                    onChange={(e) => {
                                        setPayload((prev) => {
                                            return {
                                                ...prev,
                                                specs: { ...prev.specs, SIM: e.target.value },
                                            };
                                        });
                                    }}
                                />
                                <Input
                                    label='Pin:'
                                    variant='bordered'
                                    onChange={(e) => {
                                        setPayload((prev) => {
                                            return {
                                                ...prev,
                                                specs: { ...prev.specs, Pin: e.target.value },
                                            };
                                        });
                                    }}
                                />
                                <label htmlFor='image'>Các ảnh của sản phẩm</label>
                                <input
                                    type='file'
                                    name='image'
                                    accept='image/png, image/jpeg'
                                    multiple
                                    onChange={(e) => {
                                        const temp = [];
                                        for (let i = 0; i < e.target.files.length; i++) {
                                            temp.push(e.target.files[i].name);
                                        }
                                        setPayload((prev) => {
                                            return {
                                                ...prev,
                                                imageLinks: temp,
                                            };
                                        });
                                    }}
                                />
                                <label htmlFor='thumb'>Ảnh đại diện:</label>
                                <input
                                    type='file'
                                    name='thumb'
                                    accept='image/png, image/jpeg'
                                    onChange={(e) => {
                                        setPayload((prev) => {
                                            return {
                                                ...prev,
                                                thumb: e.target.files[0].name,
                                            };
                                        });
                                    }}
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button color='danger' variant='flat' onPress={onClose}>
                                    Đóng
                                </Button>
                                <Button color='primary' onPress={onClose}>
                                    Thêm
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
