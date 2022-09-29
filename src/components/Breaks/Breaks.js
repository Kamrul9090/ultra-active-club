import React from 'react';
import './Breaks.css'
const Breaks = (props) => {
    const { carts, handleAddToBreakTime } = props;
    return (
        <div className='mt-10'>
            <h1 className='text-xl font-bold my-10'>Break Time</h1>
            <div className='space-x-3 font-bold time-container'>
                {
                    carts.map(item => <small className='breakTime' onClick={() => handleAddToBreakTime(item.id)}><span>{item.breakTime}m</span></small>)
                }
            </div>
        </div>
    );
};

export default Breaks;