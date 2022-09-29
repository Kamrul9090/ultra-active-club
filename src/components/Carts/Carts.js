import React, { useEffect, useState } from 'react';
import SingleCart from '../SingleCart/SingleCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSchool, faLocation } from '@fortawesome/free-solid-svg-icons';
import "./Carts.css"

import './Carts.css'
import SideCart from '../SideCart/SideCart';
import Breaks from '../Breaks/Breaks';
import Details from '../Details/Details';
const Carts = () => {
    const [carts, setCarts] = useState([]);
    const [times, setTimes] = useState([]);
    const [breaks, setBreakTimes] = useState(0);

    useEffect(() => {
        fetch(`data.json`)
            .then(res => res.json())
            .then(data => setCarts(data))
    }, [])
    const handleAddToCart = time => {
        if (times) {
            const newTime = [...times, time];
            setTimes(newTime);
        } else {
            setTimes([time])
        }
    }


    const handleAddToBreakTime = id => {
        const exists = carts.find(item => item.id === id);
        console.log(exists.breakTime);
        setBreakTimes(exists.breakTime);

    }

    return (
        <div>
            <div className='main-container w-11/12 mx-auto mt-20'>
                <div className="carts-container">
                    <div className='flex space-x-3 text-2xl font-bold items-center text-blue-700 mb-10'>
                        <FontAwesomeIcon icon={faSchool}></FontAwesomeIcon>
                        <h1>MY-DAILY-STUDY-ACTIVITIES</h1>
                    </div>
                    <h1 className='text-2xl mb-10 font-bold'>Daily Study Activities</h1>
                    <div className='grid grid-cols-3 gap-5 single-cart'>
                        {
                            carts.map(cart => <SingleCart handleAddToCart={handleAddToCart} key={cart.id} cart={cart}></SingleCart>)
                        }
                    </div>
                </div>
                <div className="my-info-container p-5 text-center">
                    <SideCart faLocation={faLocation}></SideCart>
                    <Breaks carts={carts} handleAddToBreakTime={handleAddToBreakTime}></Breaks>
                    <Details breaks={breaks} times={times}></Details>
                </div>
            </div>
        </div>
    );
};

export default Carts;