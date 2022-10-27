import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckoutRoute = () => {
    const coursenames = useLoaderData()
    console.log(coursenames)
    return (
        <div>
            <h2 className='text-center mt-5' >{coursenames.title}</h2>
            
        </div>
    );
};

export default CheckoutRoute;