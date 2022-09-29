import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import img from '../../images/my-image.png'

const SideCart = ({ faLocation }) => {
    return (
        <div>
            <div className='flex items-center space-x-1'>
                <img className='rounded-full w-1/4 h-10 bg-gray-500' src={img} alt="" />
                <div>
                    <h4 className='text-xl font-bold'>Kamrul Hasan</h4>
                    <FontAwesomeIcon icon={faLocation}></FontAwesomeIcon>
                    <small className='ml-2'>Khagrachori, Bangladesh</small>
                </div>
            </div>
            {/* Weight container */}

            <div className='flex justify-between mt-20 font-bold'>
                <div>
                    <h4>50<small className='text-muted'>kg</small></h4>
                    <h5>Weight</h5>
                </div>
                <div>
                    <h4>6.2<small>fit</small></h4>
                    <h5>Height</h5>
                </div>
                <div>
                    <h4>22<small>Years</small></h4>
                    <h5>Age</h5>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default SideCart;