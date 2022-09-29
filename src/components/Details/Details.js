import React from 'react';

const Details = (props) => {
    const { times, breaks } = props;
    // console.log(breaks);
    let totalStudyTime = 0;
    for (const time of times) {
        totalStudyTime = totalStudyTime + time;
    }
    return (
        <div className='mt-10 font-bold'>
            <h2 className='mb-10'>Study Details</h2>

            <div className='space-y-10'>
                <div className='flex justify-between'>
                    <h3>Study time</h3>
                    <p><span>{totalStudyTime} Hour</span></p>
                </div>
                <div className='flex justify-between'>
                    <h3>Break time</h3>
                    <p><span>{breaks}min</span></p>
                </div>
            </div>

            <button className='bg-blue-500 py-3 px-3 w-full rounded mt-5 text-white'>Activity Completed</button>
        </div>
    );
};

export default Details;