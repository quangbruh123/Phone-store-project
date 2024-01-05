import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

import { SummaryCard } from "../../component";
import Modal from "../../component/checkout/Modal";

const Checkout = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [isOrderPlaced, setIsOrderPlaced] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location?.state !== "cart" || !cart.length) {
            navigate("/");
        }
    }, []);

    return (
        <>
            <div className='md:min-h-[80vh] flex justify-center items-center py-3'>
                <main className='grid md:grid-cols-2 gap-10 w-full'>
                    {/* <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            setIsOrderPlaced={setIsOrderPlaced}
          /> */}
                    <section className='p-7 rounded-md shadow-sm bg-white/[0.7] flex flex-col gap-6 w-full h-min'>
                        <Address />
                    </section>
                    <SummaryCard setShowModal={setShowModal} />
                </main>
            </div>
        </>
    );
};

export default Checkout;
