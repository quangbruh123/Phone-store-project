import { Tabs, Tab } from "@nextui-org/react";

import UserItem from "./UserItem";
import OrderList from "./OrderList";
import ItemInList from "./ItemInList";
function FunctionTabs() {
    return (
        <div className='bg-section-blue m-4'>
            <Tabs aria-label='Options' className='inline my-6' variant='light' color='primary' size='lg'>
                <Tab key='1' title='Hàng hóa'>
                    <div className='mt-4 flex flex-col justify-around bg-section-pink '>
                        <ItemInList />
                    </div>
                </Tab>

                <Tab key='3' title='Người dùng'>
                    <div className='mt-4 flex flex-col justify-around bg-section-pink '>
                        <UserItem />
                    </div>
                </Tab>
                <Tab key='4' title='Đơn hàng'>
                    <div className='mt-4 flex flex-col justify-around bg-section-pink '>
                        <OrderList />
                    </div>
                </Tab>
            </Tabs>
        </div>
    );
}
export default FunctionTabs;
