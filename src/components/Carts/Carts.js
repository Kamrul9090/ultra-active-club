import React, { useEffect, useState } from 'react';
import SingleCart from '../SingleCart/SingleCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSchool, faLocation } from '@fortawesome/free-solid-svg-icons'

import './Carts.css'
import SideCart from '../SideCart/SideCart';
const Carts = () => {
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        fetch(`data.json`)
            .then(res => res.json())
            .then(data => setCarts(data))
    }, [])

    return (
        <div>
            <div className='main-container w-11/12 mx-auto mt-20'>
                <div className="carts-container">
                    <div className='flex space-x-3 text-2xl font-bold items-center text-blue-700 mb-10'>
                        <FontAwesomeIcon icon={faSchool}></FontAwesomeIcon>
                        <h1>MY-DAILY-STUDY-ACTIVITIES</h1>
                    </div>
                    <h1 className='text-2xl mb-10 font-bold'>Daily Study Activities</h1>
                    <div className='grid grid-cols-3 gap-5'>
                        {
                            carts.map(cart => <SingleCart key={cart.id} cart={cart}></SingleCart>)
                        }
                    </div>
                </div>
                <div className="my-info-container p-5 text-center">
                    <SideCart faLocation={faLocation}></SideCart>
                </div>
            </div>
        </div>
    );
};

export default Carts;