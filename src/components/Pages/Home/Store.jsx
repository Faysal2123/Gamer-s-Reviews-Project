import React from 'react';
import img1 from '../../../assets/store/h.png';
import img2 from '../../../assets/store/c.png';
import img3 from '../../../assets/store/b.png';
import img4 from '../../../assets/store/vr.png';

const Store = () => {
    return (
        <div className='w-11/12 mx-auto py-10'>
            <div className='text-center mb-8'>
                <h2 className='text-4xl lg:text-3xl font-bold text-gray-800 mb-3'>Our Store</h2>
                <p className='text-gray-600 text-lg'>Discover the best gaming accessories and gadgets to elevate your experience.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                <div className='bg-white shadow-lg rounded-lg p-5 text-center hover:scale-105 transition-transform duration-300'>
                    <img src={img1} alt='Headphone' className='w-32 h-32 mx-auto mb-4' />
                    <h3 className='text-lg font-semibold text-gray-800'>Headphone</h3>
                    <p className='text-gray-600 text-sm'>High-quality wireless headphone with noise cancellation.</p>
                    <p className='text-xl font-bold text-blue-600 mt-2'>$49.99</p>
                    <button className='mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300'>Buy Now</button>
                </div>
                <div className='bg-white shadow-lg rounded-lg p-5 text-center hover:scale-105 transition-transform duration-300'>
                    <img src={img2} alt='Joystick' className='w-32 h-32 mx-auto mb-4' />
                    <h3 className='text-lg font-semibold text-gray-800'>Joystick</h3>
                    <p className='text-gray-600 text-sm'>Ergonomic joystick for the ultimate gaming experience.</p>
                    <p className='text-xl font-bold text-blue-600 mt-2'>$29.99</p>
                    <button className='mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300'>Buy Now</button>
                </div>
                <div className='bg-white shadow-lg rounded-lg p-5 text-center hover:scale-105 transition-transform duration-300'>
                    <img src={img3} alt='Car Joystick' className='w-32 h-32 mx-auto mb-4' />
                    <h3 className='text-lg font-semibold text-gray-800'>Car Joystick</h3>
                    <p className='text-gray-600 text-sm'>Advanced car joystick for precise control and smooth handling.</p>
                    <p className='text-xl font-bold text-blue-600 mt-2'>$39.99</p>
                    <button className='mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300'>Buy Now</button>
                </div>
                <div className='bg-white shadow-lg rounded-lg p-5 text-center hover:scale-105 transition-transform duration-300'>
                    <img src={img4} alt='VR Headset' className='w-32 h-32 mx-auto mb-4' />
                    <h3 className='text-lg font-semibold text-gray-800'>VR Headset</h3>
                    <p className='text-gray-600 text-sm'>Immersive VR headset for next-level gaming and experiences.</p>
                    <p className='text-xl font-bold text-blue-600 mt-2'>$89.99</p>
                    <button className='mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300'>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Store;
