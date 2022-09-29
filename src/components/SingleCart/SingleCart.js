import React from 'react';
import './SingleCart.js.css'
const SingleCart = ({ cart, handleAddToCart }) => {
    const { name, picture, time, about } = cart;

    return (
        <div>
            <div className="card card-compact w-full h-full bg-base-100 shadow-xl">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{about.slice(0, 100)}</p>
                    <b><p>Study time: 0{time} :hour</p></b>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleAddToCart(time)} className="btn btn-primary">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCart;