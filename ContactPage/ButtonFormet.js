import React from 'react';

const ButtonFormet = (props) => {
    const { children } = props;
    return (
        <div>
            <button className='bg-blue-500   text-white hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300   p-2  rounded ps-3 pe-3'>{children}</button>
        </div>
    );
};

export default ButtonFormet;