import React from 'react';
import { FaArrowLeftLong, FaCartShopping } from 'react-icons/fa6';

const Header = () => {
    return (
        <nav className='flex items-center justify-between mx-3 md:mx-32 my-3 text-gray-600'>
            <div className='flex items-center gap-3'>
                <FaArrowLeftLong className='md:hidden block' />
                <h6>UNI Resto Cafe</h6>
            </div>
            <div className='flex items-center gap-3'>
                <h6>My Orders</h6>
                <div className="relative">
                    <div className="absolute bg-red-600 -top-2 -right-2 text-white px-1.5 rounded-xl text-xs">23</div>
                    <FaCartShopping className='text-2xl' />
                </div>
            </div>
        </nav>
    )
}

export default Header;