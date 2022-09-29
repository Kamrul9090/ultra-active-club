import React from 'react';
import './Breaks.css'
const Breaks = () => {
    return (
        <div className='mt-10'>
            <h1 className='text-xl font-bold my-10'>Break Time</h1>
            <div className='space-x-5 font-bold time-container'>
                <small>10min</small>
                <small>15min</small>
                <small>20min</small>
                <small>25min</small>
                <small>30min</small>
            </div>
        </div>
    );
};

export default Breaks;