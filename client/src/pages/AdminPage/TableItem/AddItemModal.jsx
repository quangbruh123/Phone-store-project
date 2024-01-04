import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";
import { Editor } from "@tinymce/tinymce-react";
import { PlusIcon } from "./PlusIcon.jsx";
import { useEffect, useRef, useState } from "react";
import { createPhone } from "../../../api/item.js";

export default function AddItemModal() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const editorRef = useRef(null);
    // const [imageLinksInput, setImageLinkInput] = useState([]);
    const [payload, setPayload] = useState({});
    const handleSubmit = () => {
        const formData = new FormData();
        // // for (let i = 0; i < imageLinksInput.length; i++) {
        // //     formData.append("imageLinks", imageLinksInput[i]);
        // // }

        const finStorage = payload.storageString?.split(",");

        setPayload((prev) => {
            return {
                ...prev,
                phoneStorage: finStorage,
            };
        });
        for (const [key, value] of Object.entries(payload)) {
            if (key == "thumb") {
                formData.append(key, value);
            } else {
                if (Array.isArray(value)) {
                    for (const element of value) {
                        formData.append(key, element);
                    }
                } else {
                    if (typeof value === "object") {
                        formData.append(key, JSON.stringify(value));
                    } else {
                        formData.append(key, value);
                    }
                }
            }
        }

        console.log(formData);
        createPhone(formData).then(() => {
            console.log("create thanfh cong");
        });
        // console.log(payload);
    };
    useEffect(() => {
        // console.log(payload);
    }, [payload]);
    return (
        <>
            <Button onPress={onOpen} color='primary' endContent={<PlusIcon />}>
                Thêm sản phẩm
            </Button>
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
                                                storageString: e.target.value,
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
                                                description: newValue,
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
                                                technicalSpecifications: { ...prev.technicalSpecifications, "Màn hình": e.target.value },
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
                                                technicalSpecifications: { ...prev.technicalSpecifications, "Hệ điều hành": e.target.value },
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
                                                technicalSpecifications: { ...prev.technicalSpecifications, "Camera sau": e.target.value },
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
                                                technicalSpecifications: { ...prev.technicalSpecifications, "Camera trước": e.target.value },
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
                                                technicalSpecifications: { ...prev.technicalSpecifications, Chip: e.target.value },
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
                                                technicalSpecifications: { ...prev.technicalSpecifications, RAM: e.target.value },
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
                                                technicalSpecifications: { ...prev.technicalSpecifications, SIM: e.target.value },
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
                                                technicalSpecifications: { ...prev.technicalSpecifications, Pin: e.target.value },
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
                                            temp.push(e.target.files[i]);
                                        }
                                        // console.log(temp);
                                        // setImageLinkInput(temp);
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
                                                thumb: e.target.files[0],
                                            };
                                        });
                                    }}
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button color='danger' variant='flat' onPress={onClose}>
                                    Đóng
                                </Button>
                                <Button color='primary' onPress={handleSubmit}>
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
