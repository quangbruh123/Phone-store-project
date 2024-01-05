import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Image } from "@nextui-org/react";
import { Editor } from "@tinymce/tinymce-react";
import { editPhone } from "../../../api/item";
import { useEffect, useRef, useState } from "react";
import { EditIcon } from "../../../assets/EditIcon";
import useFetchDataForObject from "../../../utils/useFetchDataForObject";

export default function EditItemModal({ phoneID = 0 }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const editorRef = useRef(null);
    const { data } = useFetchDataForObject(`/phone/${phoneID}`);
    // const [currentPhone, setCurrentPhone] = useState();
    // const [imageLinksInput, setImageLinkInput] = useState([]);
    const [thumbSrc, setThumbSrc] = useState();
    const [payload, setPayload] = useState(null);

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
        if (data?.imageLinks[0] == payload?.imageLinks[0]) {
            delete payload?.imageLinks;
        }
        console.log(payload);

        for (const [key, value] of Object.entries(payload)) {
            if (key == "thumb") {
                formData.append(key, value);
            } else if (key == "imageLinks") {
                for (const element of value) {
                    formData.append("imageLinks[]", element);
                }
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
        for (const [key, value] of formData.entries()) {
            console.log(key, ":", value);
        }
        editPhone(phoneID, payload).then((response) => {
            if (response.status === 204) console.log("editPhone thành công");
        });
    };
    async function getBase64(file) {
        const res = await new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });

        return res;
    }
    useEffect(() => {
        if (payload) {
            if (typeof payload.thumb === "string") setThumbSrc(payload.thumb);
            else {
                (async function () {
                    const res = await getBase64(payload.thumb);
                    setThumbSrc(res);
                })();
            }
        }
    }, [payload?.thumb]);
    useEffect(() => {
        setPayload({ ...data });
    }, [data]);
    return (
        <>
            <div onClick={onOpen}>
                <EditIcon onClick={onOpen} color='success' />
            </div>
            <Modal size='3xl' isOpen={isOpen} onOpenChange={onOpenChange} placement='top-center' scrollBehavior={"outside"}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className='flex flex-col gap-1'>Chỉnh sửa sản phẩm</ModalHeader>
                            <ModalBody>
                                <Input
                                    autoFocus
                                    label='Tên sản phẩm'
                                    variant='bordered'
                                    value={payload?.phoneName}
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
                                    value={payload?.price}
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
                                    value={payload?.quantity}
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
                                    value={payload?.brand}
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
                                    value={payload.phoneStorage}
                                    onChange={(e) => {
                                        setPayload((prev) => {
                                            return {
                                                ...prev,
                                                phoneStorage: e.target.value,
                                            };
                                        });
                                    }}
                                />
                                <div>Mô tả:</div>
                                <Editor
                                    apiKey='08q9h49w88pkez1dqb6wq6jhq2vxg55tq31gewuubrv1epe6'
                                    onInit={(evt, editor) => (editorRef.current = editor)}
                                    initialValue={payload.description}
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
                                    value={payload.technicalSpecifications["Màn hình"]}
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
                                    value={payload.technicalSpecifications["Hệ điều hành"]}
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
                                    value={payload.technicalSpecifications["Camera sau"]}
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
                                    value={payload.technicalSpecifications["Camera trước"]}
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
                                    value={payload.technicalSpecifications["Chip"]}
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
                                    value={payload.technicalSpecifications["RAM"]}
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
                                    value={payload.technicalSpecifications["SIM"]}
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
                                    value={payload.technicalSpecifications["Pin"]}
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
                                {typeof payload?.imageLinks[0] !== "symbol" && (
                                    <div className='grid grid-rows-4 gap-4'>
                                        {payload?.imageLinks?.map((current, idx) => {
                                            if (typeof current === "string") return <Image key={idx} src={current}></Image>;
                                        })}
                                    </div>
                                )}

                                <input
                                    type='file'
                                    name='image'
                                    accept='image/png, image/jpeg'
                                    multiple
                                    onChange={(e) => {
                                        const temp = [];
                                        for (let i = 0; i < e.target.files.length; i++) {
                                            console.log(e.target.files[i]);
                                            temp.push(e.target.files[i]);
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
                                <Image src={thumbSrc}></Image>
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
                                    Cập nhật thông tin điện thoại
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
